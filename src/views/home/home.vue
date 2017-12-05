<template>
  <div class="home">
    <router-view></router-view>
    <tab-bottom :now="now" @on-click="lightMenu"></tab-bottom> 
  </div> 
</template>

<script type="text/ecmascript-6">
import tabBottom from "components/tab/tab-bottom";
export default {
  data() {
    return {
      now: 0,
    };
  },
  methods: {
    lightMenu(index) {
      this.now = index
    },
  },
  components: {
    tabBottom
  }
};
</script>

<style lang="stylus">
</style>