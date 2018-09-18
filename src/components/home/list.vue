<template>
  <div>
    <ul class="item">
      <li :class=" 'icon' + (index+1)" v-for="(key,index) in key" :key="index">
        <i></i>
        <a href="javascript:;">{{ key }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: ['找攻略','看游记','问达人','结伴','酒店','旅行商城','机票','当地玩乐']
    }
  },
}
</script>

<style scoped lang="less">
.item{
  padding: .2rem .15rem;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      font-size: .3rem;
    }
    i{
      width: .915rem;
      height: .915rem;
      background: url('../../assets/nav.png') no-repeat;
      background-size: 3.75rem;
      display: inline-block;
      margin-bottom: .2rem;
    }
  }
  .icon1{
    i{
      background-position: 0 0;
    }
    a{
      color: #ff9d00;
    }
  }
  .icon2{
    i{
      background-position: 0 -.93rem;
    }
    a{
      color: #feca2b;
    }
  }
  .icon3{
    i{
      background-position: -1.86rem -.93rem;
    }
    a{
      color: #42d6ba
    }
  }
  .icon4{
    i{
      background-position: -.93rem -.93rem;
    }
    a{
      color: #f94a87;
    }
  }
  .icon5{
    i{
      background-position: -.93rem 0;
    }
    a{
      color: #32a2f1;
    }
  }
  .icon6{
    i{
      background-position: -1.86rem 0;
    }
    a{
      color: #fd4e4e;
    }
  }
  .icon7{
    i{
      background-position: -2.79rem 0;
    }
    a{
      color: #acce0e;
    }
  }
  .icon8{
    i{
      background-position: -2.79rem -.93rem;
    }
    a{
      color: #b160df;
    }
  }
}
</style>
