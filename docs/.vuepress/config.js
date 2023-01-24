const { logger, chalk } = require("@vuepress/shared-utils");
const base = require("./config/base.js");

logger.info(`Building site with base ${chalk.magenta(base)} ...`);

module.exports = (ctx) => ({
  dest: "build",
  base,
  host: "localhost",
  head: require("./config/head.js"),
  title: "StudyATHome Internationally",
  description: "Sharing of eLearning courses between partner universities.",
  theme: "@studyathome-internationally/hub",
  plugins: require("./config/plugins.js"),
  markdown: {
    anchor: {
      permalink: true,
    },
  },
  extraWatchFiles: [".vuepress/config/**/*.js"],
  themeConfig: {
    docsRepo: "studyathome-internationally/hub",
    docsDir: "docs",
    editLinks: true,
    smoothScroll: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    logo: "/assets/img/logos/studyathome-noir.svg",
    nav: require("./config/nav/en"),
    sidebarDepth: 2,
    sidebar: require("./config/sidebar.js"),
    algolia: {
      apiKey: "f1fd393bbed56da9dd0988564b714776",
      indexName: "hub",
      appId: "MKD3X349RT",
    },
  },
});
