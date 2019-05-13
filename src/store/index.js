import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import kind from './kind'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    kind
  }
})

export default store