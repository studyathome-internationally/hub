console.log("BASE", process.env.BASE);
module.exports = {
  dest: "build",
  base: process.env.BASE || "/",
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  themeConfig: {
    // logo: "./assets/img/logos/studyathome-noir.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Project Teams", link: "/projectteams/" },
      // { text: "Guide", link: "/guide/" },
      { text: "More", link: "/more/" }
      // { text: "Contact", link: "/contact/" },
      // { text: "Concepts", link: "/concepts/" },
      // { text: "Partner", link: "/partner/" },
      // { text: "About", link: "/about/" },
      // { text: "Sitemap", link: "/sitemap/" }
    ]
  }
};
