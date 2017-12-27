import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Course from '../components/Course'

Vue.use(Router)

export default new Router({
  //请求是无#符号,比如：http://localhost:8080/#/,设置了这个属性http://localhost:8080
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    }
  ]
})
