const { logger, chalk } = require("@vuepress/shared-utils");

module.exports = {
  dest: "build",
  base: baseConfiguration(),
  head: headConfiguration(),
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/img/logos/studyathome-noir.svg",
    nav: require("./nav/en"),
    displayAllHeaders: true,
    sidebar: sidebarConfiguration()
  },
  extraWatchFiles: ["./nav/en.js"]
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
    ["link", { rel: "manifest", href: "assets/manifest.json" }],
    ["link", { rel: "mask-icon", href: "assets/favicon/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["link", { rel: "shortcut icon", href: "assets/favicon/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "StudyATHome Internationally - Hub" }],
    ["meta", { name: "application-name", content: "StudyATHome Internationally - Hub" }],
    ["meta", { name: "msapplication-TileColor", content: "#00aba9" }],
    ["meta", { name: "msapplication-config", content: "assets/favicon/browserconfig.xml" }],
    ["meta", { name: "theme-c</meta>olor", content: "#ffffff" }]
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
