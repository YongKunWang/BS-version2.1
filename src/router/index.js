import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Home from '../views/Home'
import Monitor from '../views/Monitor'
import MonitorTen from '../views/monitor/MonitorTen'
import History from '../views/History'
import OverView from '../views/history/Overview'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  {
    path: '/monitor',
    component: Monitor,
    redirect: '/monitor/10',
    children: [
      { path: '/monitor/10', component: MonitorTen }
    ]
  },
  {
    path: '/history',
    component: History,
    redirect: '/history/overview',
    children: [
      { path: '/history/overview', component: OverView }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
