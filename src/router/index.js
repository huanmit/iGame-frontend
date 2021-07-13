import Vue from 'vue'
import VueRouter from 'vue-router'
import UserPage from '../views/UserPage.vue'
import EditInfo from '../views/EditInfo.vue'
import UserZoon from '../views/UserZoon.vue'
import CommentPage from '../Message/comment.vue'
import ReplyPage from '../Message/reply.vue'
import priMessage from '../Message/priMessa.vue'
import MessagePage from '../Message/MessagePage.vue'
import Home from '../MainPage/Home.vue'
import SearchPage from '../MainPage/Search.vue'
import BarPage from '../MainPage/bar.vue'
import Login from '../MainPage/Login.vue'
import Register from '../MainPage/Register.vue'
import redirct from '../views/redirct.vue'
import inform from '../views/inform.vue'
import BrowsePost from '../MainPage/BrowsePost.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/UserZoon',
    name:'UserZoon',
    component:UserZoon,
    children:[
      {path:'/UserPage',component:UserPage,children:[
        {path:'/activity',component:()=>import('../views/activity.vue')},
      {path:'/follow',component:()=>import('../views/follow.vue')},
      {path:'/history',component:()=>import('../views/history.vue')},
      {path:'/favorite',component:()=>import('../views/favorite.vue')},
      ]},
      {path:'/EditInfo',component:EditInfo}
    ]
  },
  {
    path:'/',
    name:'Home',
    component:Home,
  },
  {
    path:'/SearchPage',
    name:'SearchPage',
    component:SearchPage,
  },
  {
    path:'/MessagePage',
    name:'MessagePage',
    component:MessagePage,
    children:[
      {path:'/CommentPage',component:CommentPage},
      {path:'/MessagePage',component:MessagePage},
      {path:'/ReplyPage',component:ReplyPage},
      {path:'/priMessage',component:priMessage},
      
    ]
  },
  {
    path:'/BarPage',
    name:'BarPage',
    component:BarPage
  },
  {
    path:'/postid=xxx',
    name:'BrowsePost',
    component: BrowsePost
  },  
  {
    path:'/Login',
    name:'Login',
    component:Login,
    meta: {
      ifShow:true
    }
  },  
  {
    path:'/Register',
    name:'Register',
    component:Register,
    meta: {
      ifShow:true
    }
  },
  {
    path:'/redirct',
    name:'redirct',
    component:redirct,
  },
  {
    path:'/inform',
    name:'inform',
    component:inform,
  }

]

const router = new VueRouter({
  routes
})

export default router

