const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const klaw = require("klaw");

const argv = yargs(hideBin(process.argv)).command(
  "report <output-file>",
  "Generate a report from markdown files",
  (yargs) => {
    yargs.positional("output-file", {
      describe: "Path to the output report file",
      type: "string",
    });
  }
).argv;

function getTitleFromMarkdown(data) {
  const contentWithoutFrontmatter = data.replace(/---[\s\S]+?---/, "");
  const titleMatch = contentWithoutFrontmatter.match(/^# (.+)$/m);
  return titleMatch ? titleMatch[1] : null;
}

function analyzeFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    const parsedData = matter(data);
    const { state, enrollment, university, lecturers, semester, layout } = parsedData.data;

    const courseName = getTitleFromMarkdown(data);
    if (courseName === "Template") {
      return;
    }

    // Check if 'state' property is defined to proceed
    if (state !== undefined) {
      const courseStatus = state === true ? "Active" : "Not Active";

      const universityFolderPath = path.join("./docs", university.page);
      const universityFolderNameArray = universityFolderPath.split("/");
      universityFolderNameArray.pop(); // Remove the empty string at the end
      const universityFolderName = universityFolderNameArray.pop().toUpperCase(); // Get the folder name and convert to uppercase

      const correctedLecturerPaths = lecturers.map((lecturerPath) => lecturerPath.replace(/\.html$/, ".md"));
      const lecturerNames = correctedLecturerPaths.map((lecturerPath) => {
        const lecturerData = fs.readFileSync(path.join("./docs", lecturerPath), "utf8");
        return getTitleFromMarkdown(lecturerData);
      });

      const analysisResult = {
        courseStatus,
        university: universityFolderName,
        courseName,
        lecturers: lecturerNames.join(", "),
        semester,
        enrollment, // Include enrollment data in the analysis result
        layout, // Include layout data in the analysis result
      };

      callback(analysisResult);
    }
  });
}

function generateReport(analysisResults, outputFile) {
  const activeCourses = analysisResults.filter((result) => result.courseStatus === "Active");
  const notActiveCourses = analysisResults.filter((result) => result.courseStatus === "Not Active");

  const formatCourse = (course) => {
    const enrollmentStatus = course.enrollment ? "(enrollment: enabled)" : "(enrollment: disabled)";
    const layoutStatus = course.layout ? `(layout: ${course.layout})` : "";
    return `- ${course.university}; ${course.courseName}; ${course.lecturers}${
      course.courseStatus === "Active" ? ` ${enrollmentStatus}` : ` ${layoutStatus}`
    }\n`;
  };

  const generateSemesterSection = (title, courses) =>
    `### ${title}\n\n${courses
      .filter((course) => course.semester === title)
      .map(formatCourse)
      .join("")}`;

  const notActiveExplanation = `Courses listed under this heading have the following frontmatter property values: \`state: false\`.\nEach course should have the frontmatter property \`layout: NotFound\` set to exclude it from the search results.\n`;
  const activeExplanation = `Courses listed under this heading have the frontmatter property \`state: true\`.\nThe enrollment status is also provided for each course, indicating whether enrollment is currently enabled or disabled.\n`;

  const reportContent = `# Report\n\n## Not Active\n\n${notActiveExplanation}\n${["Summer", "Winter"]
    .map((semester) => generateSemesterSection(semester, notActiveCourses))
    .join("\n")}\n\n## Active\n\n${activeExplanation}\n${["Summer", "Winter"]
    .map((semester) => generateSemesterSection(semester, activeCourses))
    .join("\n")}`;

  fs.writeFile(outputFile, reportContent, (err) => {
    if (err) throw err;
    console.log("Report generated!");
  });
}

if (argv._[0] === "report" && argv["output-file"]) {
  let analysisResults = [];

  klaw("./docs/courses")
    .on("data", (item) => {
      const filePath = item.path;
      if (filePath.endsWith(".md")) {
        analyzeFile(filePath, (result) => {
          if (result) {
            analysisResults.push(result);
          }
        });
      }
    })
    .on("end", () => {
      generateReport(analysisResults, argv["output-file"]);
    });
} else {
  console.error('Invalid command or arguments. Use "node tools.js report <output-file>"');
}
