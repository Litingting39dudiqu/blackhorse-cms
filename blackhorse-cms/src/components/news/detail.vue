<template>
  <div class="page news">
    <!-- 引入评论组件 -->
    <detail :article="newsDetail"></detail>
      <div class="news-comment">
        <!-- 引入评论组件 -->
      <comment :id="$route.params.id"></comment>
    </div>   
  </div>
</template>
<script>
import axios from "axios";

import comment from '../common/comment.vue'

import detail from  '../common/detail.vue'
export default {
  data(){
    return{
      newsDetail:{}
    }  
  },
   created(){
      axios({
        url:'http://www.escook.cn:3000/api/getnew/' + this.$route.params.id
       
      }).then(res=>{
        if(res.data.status == 0 ){
           this.newsDetail = res.data.message[0]
          //  console.log(res.data.message[0])
        }
      })
    }, 
    components:{
      comment,
      detail
    },
    
}
</script>
<style >

  .news{
    margin: 0 5px;
  }
  p img{
    width:100%
  }
</style>