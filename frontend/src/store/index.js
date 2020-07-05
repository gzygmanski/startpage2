import Vue from 'vue'
import Vuex from 'vuex'
import mpd from './modules/mpd.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mpd
  }
})
