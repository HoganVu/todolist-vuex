import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  ToggleButton,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
