module.exports = [
  { text: "Home", link: "/" },
  { text: "Courses", link: "/courses/" },
  // { text: "Project Teams", link: "/projectteams/" },
  {
    text: "More",
    items: [
      {
        text: "eLearning Sharing",
        items: [
          {
            text: "Concepts",
            link: "/e-learning-sharing/concepts/"
          },
          { text: "FAQ", link: "/e-learning-sharing/faq" }
        ]
      },
      // {
      //   text: "Virtual Project Teams",
      //   items: [
      //     { text: "Concepts", link: "/virtual-project-teams/concepts/" },
      //     { text: "Guides", link: "/virtual-project-teams/guides/" },
      //     { text: "FAQ", link: "/virtual-project-teams/faq" }
      //   ]
      // },
      {
        text: "General",
        items: [
          { text: "Contact", link: "/studyathome/contact" },
          {
            text: "Partner",
            link: "/studyathome/partner/"
          },
          { text: "Terms", link: "/studyathome/terms" },
          { text: "Privacy", link: "/studyathome/privacy" },
          { text: "Sitemap", link: "/studyathome/sitemap" },
          { text: "About", link: "/studyathome/about" },
          {
            text: "Hub Editing",
            link: "/studyathome/markdown"
          }
        ]
      }
    ]
  }
];
