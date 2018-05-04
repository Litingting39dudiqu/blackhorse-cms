<template>
    <div>
        <h4>发表评论</h4>
        <hr>
        <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
        <mt-button size="large" type="primary" @click="postcommon">发表评论</mt-button>

        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(v,i) in commentList" :key='i'>
              <a href="javascript:;">          
                  <p class="comment-tilte">
                   <span>第{{i+1}}楼</span>
                      <span>发表时间:{{v.add_time | dateformte("YYYY-MM-DD HH:mm:ss")}} </span>
                      <span class="mui-pull-right">{{v.user_name}}</span>     
                  </p>
                  
                   <img class="mui-media-object mui-pull-right" src="../../assets/image/menu1.png">
              
                    <div class="mui-media-body">
                        <p class="mui-ellipsis comment-content" v-text="v.content"></p>
                    </div>
              </a>
          </li>
          
        </ul>
       <mt-button type="danger" plain class="mint-button mint-button--large" @click="more" v-if="showMore">加载更多</mt-button>
    </div>
</template>
<script>
import axios from "axios";
import dateformte from "../../filter/dateformte";
import { Toast } from 'mint-ui';
export default {
  data(){
      return {
          commentList:[],
          showMore:true,
        currentPage :1,
         content: ""
      }
  },
   props:['id'], 
  created(){  
   this.getDate()
  },
  filters:{
      dateformte
  },
  methods:{
      //发送ajax请求获取获取评论信息
      getDate(){
            axios({
          url:'http://www.escook.cn:3000/api/getcomments/' 
          +this.id + "?pageindex="+this.currentPage,
            }).then(res=>{
                if(res.data.status == 0){
                    this.commentList.push(...res.data.message);
                    if(res.data.message.length == 0){
                        this.showMore = false
                        Toast("没有更多了")
                    }
                }
            })
      },
      more(){
          this.currentPage++;
          this.getDate();
      },
      //发表评论，提交评论信息，并且在列表页显示
      postcommon(){
          axios({
              url:'http://www.escook.cn:3000/api/postcomment/'+this.id, 
              method:'post',
              data:"content="+ this.content,          
          }).then(res=>{
              if(res.data.status==0){
                this.commentList.unshift({
                    add_time:new Date(),
                    content : this.content,
                    user_name : "匿名用户"
                })
                this.content =""
              }
          })
      }
  }
}
</script>
<style>
.mint-button--large{
    margin-bottom: 10px
}
</style>


