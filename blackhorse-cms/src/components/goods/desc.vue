<template>
  <div>
      <detail :article="goodsDesc"></detail>
  </div>
</template> 
<script>
import axios from "axios"
import detail from "../common/detail.vue"
export default {
  data(){
      return{
        goodsDesc:{}
      }
  },
  created(){
      axios({
          url:'http://www.escook.cn:3000/api/goods/getdesc/'+this.$route.params.id
      }).then(res=>{
          if(res.data.status==0){
              console.log(res.data.message)
              this.goodsDesc = res.data.message[0]
          }
      })
  },
  components:{
      detail
  }

}
</script>
<style>

</style>

