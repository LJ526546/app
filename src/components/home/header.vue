<template>
  <div>
    <div class="header">
      <router-link to="/"><img :src="src" alt="" ref="img"></router-link>
      <div>
        <input type="text" readonly="readonly">
        <i class="el-icon-search"></i>
      </div>
      <a href="javascript:;">登录</a>
    </div>
    <div class="block">
    <el-carousel height="4.22rem">
      <el-carousel-item v-for="(banner,index) in banner" :key="index">
        <img :src="banner" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    src:{
      type: String
    },
    banner: {
      type: [Array,String]
    }
  }
}
</script>

<style scoped lang="less">
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .15rem .1rem;
  img{
    width: 1.62rem
  }
  div{
    display: flex;
    align-items: center;
    width: 3rem;
    padding-left: .24rem;
    border-radius: .4rem;
    background: hsl(0, 0%, 95%);
    height: .5rem;
    padding-right: .2rem;
    input{
      background: transparent;
      border: 0;
      height: 100%;
      width: 100%;
    }
    i{
      font-size: .35rem;
      color: #bbb;
      font-weight: bold;
      padding: 0 .2rem;
    }
  }
  a{
    color:#ffa800;
    font-size: .3rem;
  }
}
.block{
  img{
    width: 100%;
  }
  .el-carousel__arrow{
    background: rgba(0,0,0,.4)
  }
}
</style>
