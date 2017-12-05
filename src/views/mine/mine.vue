<template>
  <div class="mine">
    <v-header title="个人中心" icon="icon-shenfen" @right-click="set"></v-header>
    <div class="user-wrapper">
      <div class="avatar"></div>
      <div class="info">
        <span class="info-name">{{ userInfo.nickName }}</span>
        <span class="info-level">{{ userInfo.level }}</span>
      </div>
      <i class="iconfont icon-shenfen"></i>
    </div>
    <ul class="count-wrapper">
      <li class="item" v-for="(item, index) in userInfo.count" :key="index">
        <span class="figure">{{ item.total }}</span>
        <span class="text">{{ item.text }}</span>
      </li>
    </ul>
    <split height="15"></split>
    <div class="sign-wrapper">
      <div class="btn">签到</div>
      <div class="title">本周阅读:</div>
      <div class="read">
        <span class="read-time">{{ userInfo.readTime | formateTime }}</span>
        <span class="read-compare">超过{{ userInfo.compare }}的书友</span>
      </div>
    </div>
    <split height="15"></split>
    <ul class="nav-wrapper">
      <li class="item" v-for="(item,index) in navList" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <span class="text">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import header from "components/header/header";
import split from "components/split/split";
import tabBottom from "components/tab/tab-bottom";

export default {
  data() {
    return {
      userInfo: {},
      navList:[
        {
          text: '资源',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '收藏',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '好友',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '福利',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '订单',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '租约',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '书吧',
          icon:'icon-shenfen',
          path: '',
        },
        {
          text: '频道',
          icon:'icon-shenfen',
          path: '',
        },
      ],
    }
  },
  filters: {
    formateTime(value) {
      let result= ""
      let hour = parseInt(value / 60)
      let min = value % 60
      result += hour ? hour + "小时" : ''
      result += min ? min + "分钟" : ''
      return result
    }
  },
  created() {
    this.initUser()
  },
  methods: {
    initUser() {
      this.$ajax({
        url: '/api/user',
        success(res) {
          console.log(res)
          this.userInfo = res.data.data
        }
      })
    },
    set() {

    },
  },
  components: {
    'v-header': header,
    split,
    tabBottom,
  }
};
</script>

<style lang="stylus">
@import '../../assets/style/global.styl'
$height = 80px
.mine
  .user-wrapper
    display flex
    align-items center
    padding 20px 10px
    border-bottom 1px solid #efefef
    .avatar
      flex 0 0 50px
      width 50px
      height 50px
      background pink
      border-radius 50%
      margin 0 30px 0 10px
    .info
      flex 1
      display flex
      justify-content space-around
      flex-direction column
      &-name
        display block
        font-size 18px
      &-level
        width 40px
        margin-top 10px
        padding 3px 5px
        border-radius 10px
        font-size 12px
        color #eee
        text-align center
        display block
        background $primary-color
    .iconfont
      color $gray-font

  .count-wrapper
    display flex
    padding 15px 0
    .item
      flex 1
      text-align center
      border-right 1px solid #eee
      .figure
        font-size 20px
        display block
      .text
        margin-top 5px
        color $gray-font
        font-size 14px
        display block
  .sign-wrapper
    width 100%
    padding 20px 10px
    box-sizing border-box
    display flex
    item-align center
    .btn
      width $height
      height $height
      line-height 70px
      text-align center
      color #eee
      background $primary-color
      border-radius 50%
      border 5px solid #eee
      box-sizing border-box
    .title
      flex 1 
      text-align right
      line-height 80px
      color $gray-font
      padding-right 20px
      font-size 16px
    .read
      padding 0 10px
      display flex
      flex-direction column
      justify-content space-around
      &-time
        display block
        font-size 18px
      &-compare
        font-size 12px
        color $gray-font
        display block
        color $gray-font
  .nav-wrapper
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-around
    padding 10px 0
    .item
      text-align center
      width 24%
      padding 15px 0 
      box-sizing border-box
      &:nth-child(3n)
        .iconfont
          color red
      &:nth-child(3n+1)
        .iconfont
          color pink
      &:nth-child(3n+2)
        .iconfont
          color $primary-color
      .iconfont
        display block
        font-size 24px
      .text
        font-size 13px
        display block
        margin-top 5px
</style>