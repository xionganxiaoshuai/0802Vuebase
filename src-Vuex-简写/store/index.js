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
  // context本质就是我们的Store对象，它是对store对象做了一个封装，比store对象东西多，store对象当中有的东西，context当中都有
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