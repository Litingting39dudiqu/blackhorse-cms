<template>
 <div>
  <div class="page">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(v, i) in luobo" :key="i">
                    <img :src="v.src" alt="">
                </mt-swipe-item>
              </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span>
              市场价：<del>￥{{goodsInfo.market_price}}</del>
              </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>
              销售价：<span class="sale_price">￥{{goodsInfo.sell_price}}</span>
            </span>
          </div>
          <div class="count">
            <span>购买数量：</span>        
              <numberBox v-model="count" :max="goodsInfo.stock_quantity" :min="0" :step="1"></numberBox>           
          </div>
          <div class="btns">
           <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addToCart">加入购物车</mt-button> 

          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time | dateformte('YYYY-MM-DD HH:mm:ss')}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
       <mt-button type="primary" size="large" :plain="true" @click="$router.push('/goods/desc/' + goodsInfo.id)">商品描述</mt-button>
        <br>
        <mt-button type="danger" size="large" :plain="true" @click="$router.push('/goods/comment/' + goodsInfo.id)">商品评论</mt-button>
    </div> 
  </div>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter">
      <div class="redball" v-show="isBallShow"></div>
    </transition>
    </div> 
</div>
</template>


<script>
import axios from "axios"
import dateformte from "../../filter/dateformte"
import numberBox from "../common/numberBox.vue"
export default {
  data(){
    return{
      luobo:[],
      goodsInfo:{},
      count:0,
      isBallShow:false
    }
  },
  created(){
    //发送轮播图请求
    axios({
      url: "http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id,
    }).then(res=>{
      if(res.data.status==0){
        this.luobo = res.data.message
      }
    });
    //发送详情数据请求
    axios({
      url:'http://www.escook.cn:3000/api/goods/getinfo/'+this.$route.params.id,
    }).then(res=>{
      if(res.data.status==0){
        this.goodsInfo = res.data.message[0]
      }
    })
  },
  methods:{
    //js获取dom元素在钩子函数里面写
    //进入前，获取小球的位置
    beforeEnter(el){
      el.style.top = "465px";
      el.style.left = "175px";
     

    },
    enter(el){
      //进去后，让小球滚到购物车  
      el.style.transition = "all 1s";  
      el.offsetWidth; 
      el.style.top =(510+window.pageYOffset)+ "px";
      el.style.left = "220px";     
      this.isBallShow=false

    },
    addToCart(){
      this.isBallShow=true
      //把当前商品往vuex里面存一份
      //在购物车详情页面，点击添加按钮，
      // 把index.js里面的数据addToCarts里的id和count获取到
      this.$store.commit("addTocarts",{
        id:this.$route.params.id,
        count:this.count
      })

    }
  },

  //时间过滤器
  filters:{
    dateformte
  },
  //引入加减子组件
  components:{
    numberBox
  },
  
};
</script>


<style scoped>
.redball {
  z-index: 999;
  top: 465px;
  left: 175px;
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
}
.mint-swipe {
  height: 180px;
}
.mint-swipe img {
  height: 100%;
}

.mint-swipe-item {
  text-align: center;
}

.mui-card-content-inner > div {
  margin: 10px 0;
}

.sale_price {
  color: red;
  font-size: 18px;
}

.mui-card-footer {
  display: block;
}
.mui-numbox-cms .mui-numbox-cms-input, .mui-numbox-cms .mui-input-numbox-cms{
    display: inline-block;
    overflow: hidden;
    width: 100% !important;
    height: 100%;
    margin: 0;
    padding: 0 3px !important;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none !important;
    border-right: solid 1px #ccc !important;
    border-left: solid 1px #ccc !important;
    border-radius: 0 !important;
}
.mui-numbox-cms .mui-numbox-cms-input, .mui-numbox-cms{
  display: inline-block;
}

</style>