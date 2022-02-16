import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SetupTimer from '../views/SetupTimer.vue'
import WorkTimer from '../views/WorkTimer.vue'
import BreakTimer from '../views/BreakTimer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'setup-timer',
        component: SetupTimer
      },
      {
        path: '/work-timer',
        name: 'work-timer',
        component: WorkTimer
      },
      {
        path: '/break-timer',
        name: 'break-timer',
        component: BreakTimer
      }
    ],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
