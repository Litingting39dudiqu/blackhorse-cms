<template>
  <div class="page">
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="(v,i) in pics" :key="i"> 
        <img :src="v.img" alt="">
      </mt-swipe-item>
    </mt-swipe>



    		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/news/list">
		                    <img src="../../assets/image/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="/pic/list">
		                     <img src="../../assets/image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                     </router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/goods/list">
		                     <img src="../../assets/image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                  </router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home">
		                    <img src="../../assets/image/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="/home">
		                     <img src="../../assets/image/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home">
                        <img src="../../assets/image/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div>
                    </router-link>
                  </li>
		           
		        </ul> 
		</div>
  </div>
</template>

<script>
import axios from  "axios"
export default {
    data(){
      return{
          pics:[]
      }
    },
    created(){
       axios({
          url:"http://www.escook.cn:3000/api/getlunbo"
        }).then(res=>{
          // console.log(res)
          if(res.data.status == 0){
            this.pics = res.data.message
          }
        })
    }
}
</script>
<style>
 .swipe{
   height:157px;
 }
 .swipe img {
    width: 100%;
 }
 .mui-content img{
   width: 60%;
 }
.mui-grid-view.mui-grid-9{
  background-color: #fff;
}
body{
  background-color: #fff
}
</style>