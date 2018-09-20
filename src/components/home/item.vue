<template>
  <div>
    <div class="listWrap">
      <router-link :to="{ path:'details/'+ index }" class="list" v-for="(list,index) in list" :key="index">
        <h1>{{ list.title }}</h1>
        <div class="wrap">
          <img class="left" :src="list.src" alt="">
          <div class="right">
            <span class="intro">{{ list.intro }}</span>
            <div class="bottom">
              <span class="read">{{ list.read }}浏览</span>
              <div class="people">
                <span class="name">{{ list.name }}</span>
                <img :src="list.img" alt="">
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: '1'
    }
  },
  props: {
    list: {
      type : [Object,Array]
    }
  },
}
</script>

<style scoped lang="less">
.listWrap{
  .list{
    border-bottom: 1px solid #999;
    display: block;
    h1{
      font-size: .3rem;
      color: #000;
      padding: .2rem;
      font-weight: normal;
    }
    .wrap{
      display: flex;
      padding: .3rem;
      .left{
        width: 2.6rem;
        height: 1.8rem;
      }
      .right{
        margin: 0 .3rem;
        .intro{
          word-break: break-all;
          color: #999;
          font-size: .28rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 1.11rem;
        }
        .bottom{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: .3rem;
          .read{
            color: #999;
            font-size: .28rem;
          }
          .people{
            display: flex;
            align-items: center;
            .name{
              font-size: .28rem;
              color: #999;
              margin-right: .1rem;
            }
            img{
              width: .4rem;
              height: .4rem;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
