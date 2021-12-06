module.exports = [
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      popupComponent: "AutoSWUpdatePopup",
      updatePopup: true,
    },
  ],
  [
    "@vuepress/search",
    {
      // searchMaxSuggestions: 1,
      test: [
        "^(?!(" +
          "/courses/(machine-vision|assistive-technologies-hands-on|computer-animation|embsys-vhdl-2|human-computer-interaction-design|multi-dimensional-data-analysis|template)" +
          "|" +
          "/studyathome/partner/ukim/lecturer/ivan-chorbev" +
          "))",
      ],
    },
  ],
];
