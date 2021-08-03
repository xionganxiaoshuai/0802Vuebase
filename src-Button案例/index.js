// import Vue from "vue/dist/vue.esm"; // 带解析器版本
import Vue from "vue"; // 不带解析器版本
import App from './App.vue';

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
  el: '#root',
  render: (h) => h(App)
})