import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import firebase from "firebase";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const devServe = "http://localhost:8000/api";
const devSite = "http://localhost:8080";

Vue.prototype.$SERVE = devServe;
Vue.prototype.$SITE = devSite;
Vue.prototype.$http = axios;

const firebaseConfig = {
  apiKey: "AIzaSyADWmMNi2GAsdMyCFGZ6rFvBM0OTytm4Lw",
  authDomain: "vendas-simples.firebaseapp.com",
  projectId: "vendas-simples",
  storageBucket: "vendas-simples.appspot.com",
  messagingSenderId: "942228036344",
  appId: "1:942228036344:web:2cb9b0b81d6cc49620390d",
  measurementId: "G-S9KB2V92HB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(firebase);

Vue.config.productionTip = false;
let app = "";
firebase.auth().onAuthStateChanged((user) => {
  Vue.prototype.$USER = user;
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
