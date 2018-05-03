<template>
  <div id="app">
    <mt-header fixed title="首页">
        <router-link to="/" slot="left">
          <mt-button icon="back" slot="left" v-if="$route.path != '/home'" @click="$router.go(-1)">返回</mt-button>
        </router-link>
    </mt-header>
    <router-view/>
      <div class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员11</span>
        </router-link>
        <router-link class="mui-tab-item" to="cart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return{

    }
  }
};
</script>

<style>
	.title{
				margin: 20px 15px 10px;
				color: #6d6d72;
				font-size: 15px;
			}
			
			.oa-contact-cell.mui-table .mui-table-cell {
				padding: 11px 0;
				vertical-align: middle;
			}
			
			.oa-contact-cell {
				position: relative;
				margin: -11px 0;
			}
	
			.oa-contact-avatar {
				width: 75px;
			}
			.oa-contact-avatar img {
				border-radius: 50%;
			}
			.oa-contact-content {
				width: 100%;
			}
			.oa-contact-name {
				margin-right: 20px;
			}
			.oa-contact-name, oa-contact-position {
				float: left;
			}
      .page{
        padding:40px 0 50px 0;
      }
      .mui-badge{
        z-index: 888
      }
</style>
