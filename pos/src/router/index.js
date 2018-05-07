import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import pos from '@/components/page/pos'
import shop from '@/components/page/shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
