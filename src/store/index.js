import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import todoList from './modules/todoList'
import setting from "./modules/setting"
import countNumber from './modules/countNumber'
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {},
  actions: {},
  modules: {
    todoList,
    setting,
    countNumber
  }
})

export default store
