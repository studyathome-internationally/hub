// import VueMatomo from "vue-matomo";

export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  if (process.env.NODE_ENV === "development" && !isServer) {
    const { default: pageComponents } = await import("@internal/page-components");
    // Hot reload page components,  in development mode, due to custom theme.
    // > [Vue warn]: Unknown custom element: <v-xxxxxxxx> - did you register the component correctly?
    for (const name in pageComponents) {
      Vue.component(name, pageComponents[name]);
    }
  }

  if (!isServer) {
    // Matomo Analytics
    const VueMatomo = await import("vue-matomo");
    Vue.use(VueMatomo, {
      host: "https://analytics.wbt.wien/",
      siteId: 6,
      // trackerFileName: "matomo",
      router,
      // enableLinkTracking: true,
      // requireConsent: false,
      // trackInitialView: true,
      // disableCookies: false,
      // enableHeartBeatTimer: false,
      // heartBeatTimerInterval: 15,
      // debug: false,
      // userId: undefined,
      // cookieDomain: undefined,
      // domains: undefined,
      // preInitActions: [],
    });
  }
};
