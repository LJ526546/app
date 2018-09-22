<template>
  <div>
    
  </div>
</template>

<script>
export default {
  created () {
    const id = this.$route.params.id
    this.$http.get('static/data.json').then((res) =>{
      console.log(res.data.list[id])
    })
  },
}
</script>

<style scoped lang="less">

</style>
