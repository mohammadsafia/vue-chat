import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/components/Welcome')
    },
    {
      path: "/chat",
      name: "Chat",
      component: () => import("@/components/Chat"),
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({name: "Welcome"})
        }
      }
    }
  ]
})
