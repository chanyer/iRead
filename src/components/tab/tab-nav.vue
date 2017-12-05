<template>
  <div class="tab-nav" >
    <div class="tab-wrapper" ref="tabWrapper">
      <ul class="list">
          <li class="item" :class="{active: index === now}" v-for="(item, index) in tabList" :key="index" @click="itemClick(item, index)">
              <span class="text">{{ item.label }}</span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    props: {
        now: {
          type: Number,
          default: 0,
        },
        tabList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
           
        }
    },
    created() {    
    },
    methods: {
        itemClick(item,index) {
            // this.now = index
            this.$emit('item-click', item, index)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl'
.tab-nav
    position fixed
    left 0
    top 0
    width 100%
    background #fff
  .tab-wrapper
    width 100%
    .list
        border-bottom 1px solid #eee
        height 40px
        line-height 40px
        text-align center
        .item
            display inline-block
            text-align center
            margin 0 20px 0 20px
            color $gray-font
            &.active
                color $primary-color
                border-bottom 2px solid $primary-color
            .text
                font-weight 600                
</style>