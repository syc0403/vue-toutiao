import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name:'主页',
    component: () => import("@/pages/Home.vue"),
  },
{
  path: '/home',
  name:'主页',
  component: () => import("@/pages/Home.vue"),
},
{
  path:'/my',
  name:'',
  component: () => import("@/pages/My.vue")
},
{
  path:'/login',
  name:'登陆注册',
  component: () => import("@/pages/Login.vue")
},{
  path:'/user',
  name:'登陆注册',
  component: () => import("@/pages/User.vue")
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
