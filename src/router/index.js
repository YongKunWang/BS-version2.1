import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Home from '../views/Home'
import Monitor from '../views/Monitor'
import MonitorTen from '../views/monitor/MonitorTen'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
