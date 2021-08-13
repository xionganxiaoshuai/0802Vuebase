import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
  count:0
}
const mutations = {
  INCREMENT(state){
    this.state.count++
  },
  DECREMENT(state){
    this.state.count--
  }
}
const actions = {
  increment(context){
    context.commit('INCREMENT')
  },

  decrement({commit}){
    commit('DECREMENT')
  },

  incrementIfOdd({state,commit}){
    if (state.count %2 === 1) {
      commit('INCREMENT')
    }
  },

  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}


const getters = {}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})