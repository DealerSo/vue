import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  mode:'history', //请求是无#符号,比如：http://localhost:8080/#/,设置了这个属性http://localhost:8080
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
