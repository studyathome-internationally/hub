const { logger, chalk } = require("@vuepress/shared-utils");

const base = baseConfiguration();

module.exports = {
  dest: "build",
  base,
  head: headConfiguration(),
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  plugins: ["@vuepress/pwa"],
  themeConfig: {
    logo: "./assets/img/logos/studyathome-noir.svg",
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
function headConfiguration() {
  return [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "assets/favicon/apple-touch-icon.png" }
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "assets/favicon/favicon-32x32.png" }
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "16x16", href: "assets/favicon/favicon-16x16.png" }
    ],
    ["link", { rel: "manifest", href: "assets/favicon/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "assets/favicon/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["link", { rel: "shortcut icon", href: "assets/favicon/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "StudyATHome Internationally - Hub" }],
    ["meta", { name: "application-name", content: "StudyATHome Internationally - Hub" }],
    ["meta", { name: "msapplication-TileColor", content: "#00aba9" }],
    ["meta", { name: "msapplication-config", content: "assets/favicon/browserconfig.xml" }],
    ["meta", { name: "theme-c</meta>olor", content: "#ffffff" }]
  ];
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
