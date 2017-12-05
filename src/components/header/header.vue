<template>
  <div class="header">
    <i class="iconfont icon-fanhui" @click="goBack"></i>
    <h1 class="title">{{ title }}</h1>
    <i class="iconfont" :class="icon" v-show="icon" @click="rightClick"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    rightClick() {
      this.$emit('right-click')
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl'
.header
  display flex
  height 45px
  line-height 45px
  border-bottom 1px solid $gray-bg
  background $primary-color
  .iconfont
    font-size 16px
    color #eee
    padding 0 10px
  .title
    text-align center
    flex 1
    font-weight 500
    color #eee
    
</style>