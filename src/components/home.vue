<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted () {
    this.$http.get('static/data.json').then((res) =>{
      console.log(res)
    }).catch((res) =>{
      console.log(1)
    })
  },
}
</script>

<style scoped lang='less'>

</style>
