import Vue from 'vue'
import Vuex from 'vuex'
import alert from './alert'
import auth from './auth'
import dialog from './dialog'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'sanbercode',
  storage : localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules : {
      alert,
      auth,
      dialog
  }  
})