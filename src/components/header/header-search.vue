<template>
  <div class="header-search">
    <form action="" @submit.prevent="submit">
      <input class="search-bar" type="search" v-model="keyword" placeholder="搜索书名/作者">
      <i class="iconfont icon-faxian"></i>
    </form>
    <i class="iconfont icon-shenfen"></i>
    <span class="dot">1</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      keyword: ''
    };
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
.header-search
  height 45px
  display flex
  line-height 45px
  border-bottom 1px solid $gray-bg
  background #fff
  width 100%
  padding 0 10px
  box-sizing border-box
  position relative
  form
    flex 1
    position relative
    .search-bar
      width 100%
      display inline-block
      height 30px
      background #efefef
      border-radius 20px
      text-align center
      font-size 12px
    .iconfont
      position absolute
      top 2px
      left 50%
      margin-left -75px
      outline none
  .iconfont
    flex 0 0 30px
    width 30px
    text-align center
  .dot
    position absolute
    top 5px
    right 5px
    background pink
    border-radius 50%
    width 15px
    height 15px
    line-height 15px
    text-align center
    color #fff
    font-size 12px
    
 

    
</style>