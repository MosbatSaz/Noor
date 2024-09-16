import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Archive from '../components/Archive'
import Konkur from '../components/Konkur'
import Advicer from '../components/Advicer'
import Classes from '../components/Classes'
import Teachers from '../components/Teachers'
import Exam from '../components/Exam'
import Ceo from '../components/Ceo'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Comment from '../components/Comment'
// import Admin from '../views/Admin.vue'
// import AdminPanel from '../views/Admin-panel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[

      //Dialog Components
    {
      path:'Archive',
      component:Archive
    },
    {
      path:'Konkur',
      component:Konkur
    },
    {
      path:'Advicer',
      component:Advicer
    },
    {
      path:'Classes',
      component:Classes
    },
    {
      path:'Teachers',
      component:Teachers
    },
    {
      path:'Exam',
      component:Exam
    },

      //Bottom Sheet Components

    {
      path:'Ceo',
      component:Ceo
    },
    {
      path:'Contact',
      component:Contact
    },
    {
      path:'Faq',
      component:Faq
    },
    {
      path:'Comment',
      component:Comment
    }  
  ]
  },
  // {
  //   path: '/Admin',
  //   name: 'Admin',
  //   component:Admin
  // },
  // {
  //   path: '/AdminPanel',
  //   name: 'AdminPanel',
  //   component:AdminPanel
  // }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
