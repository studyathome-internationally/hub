const { logger, chalk } = require("@vuepress/shared-utils");
const base = require("./config/base.js");

logger.info(`Building site with base ${chalk.magenta(base)} ...`);

module.exports = ctx => ({
  dest: "build",
  base,
  head: require("./config/head.js"),
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  plugins: require("./config/plugins.js"),
  extraWatchFiles: [".vuepress/config/**/*.js"],
  themeConfig: {
    // repo: "studyathome-internationally/hub",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    logo: "/assets/img/logos/studyathome-noir.svg",
    nav: require("./config/nav/en"),
    displayAllHeaders: true,
    sidebar: require("./config/sidebar.js")
  }
});
