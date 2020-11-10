import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import History from '../views/Hello/History'
import Favorite from '../views/Hello/Favorite'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则
  routes: [
    { path: '/home', component: Home },
    { path: '/classifye', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        { path: 'history', component: History },
        { path: 'favorite', component: Favorite },
        { path: '', redirect: '/hello/favorite' }
      ]
    },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/searchresult', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' }
  ]
})

// 对外暴露
export default router
