import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login/login'
import home from 'views/home/home'
import guide from 'views/guide/guide'
import guideInfo from 'views/guide/guide-info'
import recommend from 'views/guide/recommend'
import attent from 'views/guide/attent'
import mall from 'views/mall/mall'
import room from 'views/room/room'
import book from 'views/room/book'
import community from 'views/community/community'
import mine from 'views/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/login'
    },
    { path: '/login',
      component: login
    },
    { path: '/guide-info',
      component: guideInfo
    },
    { path: '/book',
      component: book
    },
    {
      path: '/home',
      component: home,
      redirect: '/home/guide',
      children: [
        {
          path: 'guide',
          component: guide,
        },
        {
          path: 'mall',
          component: mall
        },
        {
          path: 'room',
          component: room
        },  
        {
          path: 'community',
          component: community
        },
        {
          path: 'mine',
          component: mine
        },
      ]
    }
  ]
})
