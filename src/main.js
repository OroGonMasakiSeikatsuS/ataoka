import Vue from "vue"
import App from "./App.vue"
import "./firebase"
import router from "./router"
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API,

    libraries: "places",
    region: "JP",
    language: "ja",
  },
})
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
