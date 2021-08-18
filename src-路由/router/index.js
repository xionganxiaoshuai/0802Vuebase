import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import MessageDateil from '../pages/MessageDateil.vue'
import NewsDateil from '../pages/NewsDateil.vue'
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component: Home,
      children:[
        {
          path: '/home/message',
          component: Message,
          children:[
            {
              path: '/home/message/messagedateil',
              component: MessageDateil
            }
          ]
        },
        {
          path: '/home/news',
          component: News,
          children: [
            {
              path: '/home/news/newsdateil',
              component: NewsDateil
            }
        ]
        },
        {
          path: '/',
          redirect: '/home/message'
        }
      ]
    },
      {
        path: '/about',
        component: About
      },
      {
        path:'/',
        redirect: '/home'
      }
  ]
})