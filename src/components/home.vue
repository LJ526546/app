<template>
  <div v-if="show">
    <top :src = src :banner = banner></top>
    <list></list>
    <div class="line">
      <h3>推荐攻略</h3>
    </div>
  </div>
</template>

<script>
import top from '@/components/home/header'
import list from '@/components/home/list'
export default {
  data () {
    return {
      src: '',
      banner: '',
      show: false
    }
  },
  created () {
    this.$http.get('static/data.json').then((res) => {
      this.src = res.data.logo
      this.banner = res.data.banner
      this.show = true
    }).catch((res) =>{
      return false
    })
  },
  components: {
    top,
    list
  }
}
</script>

<style scoped lang='less'>
.line{
  text-align: center;
  background-color: #f8f8f8;
  h3{
    font-size: .3rem;
    color: #999;
    line-height: .8rem;
  }
}
</style>
