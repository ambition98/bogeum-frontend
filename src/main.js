import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
// import axiosConfig from './axiosConfig.js'
import globalMethod from './globalMethod.js'

axios.defaults.withCredentials = true
if (window.location.host === 'localhost:8080') {
  axios.defaults.baseURL = 'http://localhost/api/v1'
} else {
  axios.defaults.baseURL = 'https://bogeum.xyz/api/v1'
}
Vue.prototype.$axios = axios
// Vue.prototype.$axios = axiosConfig
Vue.config.productionTip = false
Vue.use(globalMethod)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
