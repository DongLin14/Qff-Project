import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Home from '../components/home/home'
import write from "../components/home/write"
import refer from '../components/home/refer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/write',
          name: 'write',
          component:write,
        },
        {
          path: '/home/refer',
          name: 'refer',
          component: refer,
        }
      ]
    },
  ]
})
