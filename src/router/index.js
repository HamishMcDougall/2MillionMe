import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FindYourCar from '@/components/FindYourCar'



Vue.use(Router)


import VueFire from 'vuefire'

// explicit installation required in module environments
Vue.use(VueFire)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/findyourcar',
      name: 'FindYourCar',
      component: FindYourCar
    }
  ]
})
