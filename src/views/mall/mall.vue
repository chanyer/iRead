<template>
  <div class="mall">
    <header-search></header-search>
    <mt-swipe :auto="20000">
      <mt-swipe-item>
        <div class="banner">1</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="banner">2</div>
      </mt-swipe-item>
    </mt-swipe>	
  </div>
</template>

<script type="text/ecmascript-6">
import headerSearch from "components/header/header-search"
import BScroll from "better-scroll"

export default {
  data() {
    return {
     
    };
  },
  created() {

  },
  methods: {

  },
  components: {
    headerSearch
  }
};
</script>

<style lang="stylus" scoped>
.mall
  .mit-swipe
    height 100px
  .banner
    width 100%
    height 100px
    background pink
</style>