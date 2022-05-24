import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'

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
    },
    {
      path: "/login",
      name:"login",
      component: Login
    }
  ],
  scrollBehavior(){
    return window.scrollTo({top:0, behavior: "smooth"})
  }
})
