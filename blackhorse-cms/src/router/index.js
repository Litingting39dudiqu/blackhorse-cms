import Vue from 'vue'
import Router from 'vue-router'

import GoodsDetail from "../components/goods/detail.vue";
import GoodsList from "../components/goods/list.vue";
import GoodsDesc from "../components/goods/desc.vue";
import GoodsComment from "../components/goods/comment.vue"

import NewsDetail from "../components/news/detail.vue";
import NewsList from "../components/news/list.vue";

import PicDetail from "../components/pictures/detail.vue";
import PicList from "../components/pictures/list.vue";


import Cart from "../components/tabbar/cart.vue";
import Home from "../components/tabbar/home.vue";
import Member from "../components/tabbar/member.vue";
import Search from "../components/tabbar/search.vue";

Vue.use(Router)

export default new Router({
  // tabbar路由
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/search',
      component:Search
    },
    //商品
    {
      path:'/goods/detail/:id',
      component:GoodsDetail
    },
    {
      path:'/goods/list',
      component:GoodsList
    },
    {
      path:'/goods/desc/:id',
      component:GoodsDesc
    },
    {
      path:'/goods/comment/:id',
      component:GoodsComment
    },
     //新闻
     {
      path:'/news/detail/:id',
      component:NewsDetail
    },
    {
      path:'/news/list',
      component:NewsList
    },
       //图片
       {
        path:'/pic/detail/:id',
        component:PicDetail
      },
      {
        path:'/pic/list/:id',
        component:PicList
      },
  ],
  linkActiveClass: "mui-active"
})
