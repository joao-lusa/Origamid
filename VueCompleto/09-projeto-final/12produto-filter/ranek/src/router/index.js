import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produto from '../views/Produto.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name:"home",
      component:HomeView
    },
    {
      path: "/produto/:id",
      name:"produto",
      component:Produto,
      props: true
    }
  ],
  scrollBehavior(){
    return window.scrollTo({top:0, behavior: "smooth"})
  }
})
