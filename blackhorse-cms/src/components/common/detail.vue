<template>
     <div class="news-detail">
      <div class="news-title">
        <h4 v-text="article.title"></h4>
        <p>
          <span class="pull-left">发表时间:{{article.add_time | dateformat('YYYY年MM月DD HH:mm:ss')}}</span>
          <span class="mui-pull-right">点击:{{article.click}}次</span>
        </p>
      </div>
      <hr>
      <div class="news-content">
        <slot name="pics"></slot>
        <p v-html="article.content"></p> 
      </div>
    </div>
</template>
<script>
import dateformat from "../../filter/dateformte";
export default {
  data(){
    return{

    }
  },
  props:['article'],
  filters:{
    dateformat
  }
}
</script>
<style>
 p img{
    width:100%
  }
</style>


