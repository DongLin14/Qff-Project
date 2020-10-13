import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Home from '../components/home/home'
import write from "../components/home/write"
import refer from '../components/home/refer'
import userList from "../components/home/userList";

//1.安装插件
Vue.use(Router)

//2.创建Router对象
const routes = [
  {
    path: '/',
    //重定向，设置默认路由
    redirect: '/home'
  },
  {
    name: 'login',
    path: '/login',
    component: Login
   },
  // {
  //   path: '/write',
  //   name: 'write',
  //   component:write,
  // },
  // {
  //   path: '/userList',
  //   name: 'userList',
  //   component:userList,
  // },
  // {
  //   path: '/refer',
  //   name: 'refer',
  //   component: refer,
  // },
  {
    name: 'home',
    path: '/home',
    component: Home,
    children: [
      {
        path: '/write',
        name: 'write',
        component:write,
      },
      {
        path: '/userList',
        name: 'userList',
        component:userList,
      },
      {
        path: '/refer',
        name: 'refer',
        component: refer,
      }
      ]
  }
]

//配置路由和组件之间的映射关系
const router = new Router({
  routes,
  //history,哈希值去掉#
  mode: 'history'
})

//3.将router对象传入Vue实例
export default router


