import Vuex from 'vuex' 
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      check: true
    },
    mutations: {
      checkChange (state, value) {
        state.check=value
      }
    }
  })
  