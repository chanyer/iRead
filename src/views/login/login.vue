<template>
  <div class="login">
    <h1 class="title">iRead 爱阅读</h1>
    <div class="item">
      <i class="iconfont icon-shenfen"></i>
      <input type="text" placeholder="手机号" v-model="phoneNumber">
    </div>
    <div class="item">
      <i class="iconfont icon-password"></i>
      <input type="password" placeholder="密码" v-model="password">
    </div>
    <span class="btn" @click="login">登录</span>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      phoneNumber: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$router.push('home');// 线上环境必须注释
       return;// 线上环境必须注释
      var flag = this.regExpValidate('phoneNumber', this.phoneNumber)
      if (!flag) {
        let message = this.phoneNumber ? '手机号格式不正确' : '请输入手机号'
        Toast({
          message: message,
          iconClass: 'iconfont icon-tishishuoming',
          duration: 3000
        })
        return
      }
      if (!this.password) {
        Toast({
          message: '请输入密码',
          iconClass: 'iconfont icon-tishishuoming',
          duration: 3000
        })
        return
      }
      if (this.phoneNumber === '18311111111' && this.password === '123') {
        this.$router.push('home')
      } else {
        Toast({
          message: '手机号或者密码不正确',
          iconClass: 'iconfont icon-tishishuoming',
          duration: 3000
        })
      }
    }
	},
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl'
.login
  .title
    width 100%
    margin-top 50px
    text-align center
    font-size 20px
    color $primary-color
  .item
    width 90%
    margin 30px auto 
    border-bottom 1px solid $gray-bg
    position relative
    padding-bottom 10px
    &:first-of-type
      margin-top 100px
    .iconfont
      position absolute
      left 0
      top 7px
      font-size 18px
    input
      width 100%
      height 30px
      padding-left 30px
      font-size 14px
      box-sizing border-box
  .btn
    margin 0 auto
    display block
    text-align center
    width 90%
    background $primary-color
    border-radius 10px
    padding 10px 0
    color #ffffff
    letter-spacing 5px
    margin-top 50px

</style>
