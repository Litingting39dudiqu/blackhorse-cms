<template>
  <div class="page news">
    <div class="news-detail">
      <div class="news-title">
        <h4 v-text="newsDetail.title"></h4>
        <p>
          <span class="pull-left">发表时间:{{newsDetail.add_time | dateformat('YYYY年MM月DD HH:mm:ss')}}</span>
          <span class="mui-pull-right">点击:{{newsDetail.click}}次</span>
        </p>
      </div>
      <hr>
      <div class="news-content">
        <p v-html="newsDetail.content"></p> 
      </div>
    </div>
    <div class="news-comment">

      <comment :id="$route.params.id"></comment>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
import dateformat from "@/filter/dateformte";
import comment from '../common/comment.vue'
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
    filters:{
      dateformat
    },
    components:{
      comment
    }
}
</script>
<style >

  .news{
    margin: 0 5px;
  }
</style>