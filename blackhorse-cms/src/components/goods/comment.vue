<template>
  <div>
      <comment :id="$route.params.id"></comment>
  </div>
</template> 
<script>
import axios from 'axios';
import comment from "../common/comment.vue"
export default {
  data(){
      return{
          
      }
  },
  components:{
      comment
  }
}
</script>
<style>

</style>

 
