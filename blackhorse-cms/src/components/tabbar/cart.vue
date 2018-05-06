<template>

  <div class="page">
  <div class="goods-list">
    <div class="mui-card"  v-for="(v,i) in cartList" :key="i">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >
           <mt-switch v-model="v.isChecked"></mt-switch>
            <img :src="v.thumb_path" class="thumb_img">
          <div class="info"><h4>{{v.title}}</h4>
            <div class="box"><span class="price">￥{{v.sell_price}}</span>
              <numberBox :min="0" :max="100" v-model="v.count" :step="1"></numberBox>
              <a href="#">删除</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mui-card">
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <div class="amount">
          <p>总计（不含运费）</p>
          <p>
            已勾选商品
            <span class="red">{{totalCount}}</span> 件 总价：
            <span class="red">￥{{totalPrice}}</span></p></div>
        <button class="mint-button mint-button--danger mint-button--normal"><!----> <label
            class="mint-button-text">去结算</label></button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios"
import numberBox from "../common/numberBox.vue"
export default {
  data(){
    return{
      // count:0,
      cartList:[],
     
    }
  },
  created(){
     console.log( this.$store.getters.getIds)
    axios({
      url:"http://www.escook.cn:3000/api/goods/getshopcarlist/" + this.$store.getters.getIds
    }).then(res=>{
        if(res.data.status==0){  
          console.log(res.data.message)   
            res.data.message.forEach(v => {        
              v.count = this.$store.getters.getCountById(v.id);
              v.isChecked = false
            });
            this.cartList = res.data.message
          }
    })
  },
  watch:{
    cartList:{
        handler(){
          this.$store.commit("updataCount",this.cartList)
        },
        deep:true
    }
  },
  computed:{
    totalCount(){
      var sum = 0;
       this.cartList.forEach(function(v){
          if(v.isChecked){
            sum += v.count
          }
       })
        return sum;
    },
    totalPrice(){
      var sumPrice=0;
      this.cartList.forEach(function(v){
        if(v.isChecked){
            sumPrice += v.count* v.sell_price
          }
      })
      return sumPrice
    }
  },

  components:{
    numberBox
  },

}
</script>
<style scoped>
.goods-list .mui-card-content-inner .thumb_img {
  width: 60px;
  height: 60px;
}

.goods-list .mui-card-content-inner .info {
  flex: 1;
}

.goods-list .mui-card-content-inner .info h4 {
  font-size: 14px;
}

.goods-list .mui-card-content-inner .info .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-list .mui-card-content-inner .info .box .price {
  font-size: 16px;
  color: red;
}

.goods-list .mui-card-content-inner {
  display: flex;
}

.mui-card-content-inner .amount {
    flex: 1;
}


.mui-card-content-inner .red {
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>