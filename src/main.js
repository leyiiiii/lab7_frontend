import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import user from "./store/user";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://localhost:8000/api";
// axios.defaults.baseURL = "http://175.178.148.25/api";
axios.defaults.baseURL = "https://test.zewan.cc/api";

// add token into headers
axios.interceptors.request.use(
    config => {
      const userInfo = user.getters.getUser(user.state());
      if (userInfo) {
        config.headers.Authorization = userInfo.user.Authorization;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
