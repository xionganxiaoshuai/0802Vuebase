// import Vue from "vue/dist/vue.esm"; // 带解析器版本
import Vue from "vue"; // 不带解析器版本
import App from './App.vue';
// import store from './store/index.js'
import router from './router/index.js'

// 1.带解析器版本写法
// new Vue({
//   el:'#root',
//   components: {
//     App
//   },
//   template:'<App />'
// })



// 2.不带解析器版本写法
new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  el: '#root',
  render: (h) => h(App),
  router
  // store  // 只有在这声明使用store对象，那么结果就是每个组件对象当中都可以通过this.$store找到这个store对象
})