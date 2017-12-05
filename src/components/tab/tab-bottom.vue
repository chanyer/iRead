<template>
  <div class="tab-bottom">
      <ul class="list">
          <li class="item" :class="{active: index === now}" v-for="(item, index) in tabList" @click="jumpPage(item, index)">
              <i class="iconfont" :class="item.icon"></i>
              <span class="text">{{ item.label }}</span>
          </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        // tabList: {
        //     type: Array,
        //     default: []
        // }
        now: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            // now: 0,
            tabList: [
                {
                    label: '导读',
                    icon: 'icon-faxian',
                    link: '/home/guide'
                },
                {
                    label: '书城',
                    icon: 'icon-shouye',
                    link: '/home/mall'
                },
                {
                    label: '书房',
                    icon: 'icon-jiantouyou',
                    link: '/home/room'
                },
                /* {
                    label: '社区',
                    icon: 'icon-shuoming',
                    link: '/home/community'
                }, */
                {
                    label: '我的',
                    icon: 'icon-shenfen',
                    link: '/home/mine'
                },
            ]
        }
    },
    methods: {
        jumpPage(item,index) {
            this.$emit('on-click',index)
            this.$router.push(item.link)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl'
.tab-bottom
    .list
        position fixed
        left 0
        bottom 0
        display flex
        width 100%
        padding 7px 0
        justify-content space-around
        flex-direction row
        border-top 1px solid #eee
        background $black-color-a
        .item
            flex 1            
            color #787878
            font-size 13px
            text-align center
            &.active
                color #eee
            .iconfont
                font-size 20px
                display block
            .text
                display block
                position relative
                font-size 10px
                top 5px
</style>