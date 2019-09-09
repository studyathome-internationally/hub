const { logger, chalk } = require("@vuepress/shared-utils");
const twemoji = require("twemoji");

const base = baseConfiguration();

module.exports = {
  dest: "build",
  base,
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  extendMarkdown: md => markdownConfiguration(md),
  themeConfig: {
    // logo: "./assets/img/logos/studyathome-noir.svg",
    nav: navConfiguration(),
    displayAllHeaders: true,
    sidebar: sidebarConfiguration()
  }
};

function baseConfiguration() {
  const base = process.env.BASE || "/";
  logger.info(`Building site with base ${chalk.magenta(base)} ...`);
  return base;
}
function markdownConfiguration(md) {
  md.set({ breaks: true, typographer: true, linkify: true });
  md.use(require("markdown-it-sub"));
  md.use(require("markdown-it-sup"));
  md.use(require("markdown-it-footnote"));
  md.use(require("markdown-it-deflist"));
  md.use(require("markdown-it-abbr"));
  // md.use(require("markdown-it-emoji"));
  md.use(require("markdown-it-checkbox"));
  // md.use(require("markdown-it-imsize"), { autofill: true });
  md.use(require("markdown-it-kbd"));

  md.renderer.rules.emoji = function(token, idx) {
    return twemoji.parse(token[idx].content, {
      base: "https://twemoji.maxcdn.com/2/",
      ext: ".svg",
      folder: "svg"
    });
  };
}
function navConfiguration() {
  return [
    { text: "Home", link: "/" },
    { text: "Project Teams", link: "/projectteams/" },
    {
      text: "More",
      items: [
        {
          text: "eLearning Sharing",
          items: [
            { text: "Concepts", link: "/more/e-learning-sharing/concepts/" },
            { text: "Guides", link: "/more/e-learning-sharing/guides/" },
            { text: "Join!", link: "/more/e-learning-sharing/join" }
          ]
        },
        {
          text: "Virtual Project Teams",
          items: [
            { text: "Concepts", link: "/more/virtual-project-teams/concepts/" },
            { text: "Guides", link: "/more/virtual-project-teams/guides/" },
            { text: "Join!", link: "/more/virtual-project-teams/join" }
          ]
        },
        {
          text: "Hub",
          items: [
            // { text: "Concepts", link: "/more/hub/concepts/" },
            { text: "Guides", link: "/more/hub/guides/" },
            { text: "Markdown", link: "/more/hub/markdown" }
          ]
        },
        {
          text: "StudyATHome Internationally",
          items: [
            { text: "Contact", link: "/more/studyathome/contact" },
            { text: "Partner", link: "/more/studyathome/partner" }
          ]
        },
        {
          text: "General",
          items: [
            { text: "Terms", link: "/more/general/terms" },
            { text: "Privacy", link: "/more/general/privacy" },
            { text: "Help", link: "/more/general/help" },
            { text: "Sitemap", link: "/more/general/sitemap" },
            { text: "About", link: "/more/general/about" }
          ]
        }
      ]
    }
  ];
}
function sidebarConfiguration() {
  return {
    "/courses/": false,
    "/more/e-learning-sharing/concepts/": [
      ["concept1.md", "Concept 1"],
      ["concept2.md", "Concept 2"],
      ["concept3.md", "Concept 3"]
    ],
    "/more/e-learning-sharing/guides/": [
      ["guide1.md", "Guide 1"],
      ["guide2.md", "Guide 2"],
      ["guide3.md", "Guide 3"]
    ],
    "/more/virtual-project-teams/concepts/": [
      ["concept1.md", "Concept 1"],
      ["concept2.md", "Concept 2"],
      ["concept3.md", "Concept 3"]
    ],
    "/more/virtual-project-teams/guides/": [
      ["guide1.md", "Guide 1"],
      ["guide2.md", "Guide 2"],
      ["guide3.md", "Guide 3"]
    ],
    "/more/hub/guides/": [
      ["guide1.md", "Guide 1"],
      ["guide2.md", "Guide 2"],
      ["guide3.md", "Guide 3"]
    ]
  };
}
