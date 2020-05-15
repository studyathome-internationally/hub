const { logger, chalk } = require("@vuepress/shared-utils");
const base = require("./config/base.js");

logger.info(`Building site with base ${chalk.magenta(base)} ...`);

module.exports = (ctx) => ({
  dest: "build",
  base,
  head: require("./config/head.js"),
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  plugins: require("./config/plugins.js"),
  markdown: {
    anchor: {
      permalink: true,
      // permalinkHref: (slug) => `.#${slug}`,
      // permalinkHref: (slug) => "javascript:;",
      // permalinkAttrs: (slug) => ({
      //   // onclick: `document.location.assign(document.location.pathname + '#${slug}')`,
      //   onclick: `$router.push(document.location.pathname + '#${slug}')`,
      // }),
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
    // displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: require("./config/sidebar.js"),
  },
});
