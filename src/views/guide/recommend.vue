<template>
  <div class="recommend">
    <ul class="list">
      <li class="item" v-for="item in recommendList" @click="jumpInfo(item)">
        <split height="10"></split>
        <div class="item-head">
          <span class="avatar"></span>
          <span class="user-name">{{ item.userName }}</span>
          <span class="from">{{ item.from }}</span>
        </div>
        <div class="item-body">
          <span class="banner"></span>
          <span class="title">{{ item.title }}</span>
          <span class="sub-title">{{ item.subTitle }}</span>
        </div>
        <div class="item-foot">
          <i class="iconfont icon-faxian">{{ item.scan }}</i>
          <i class="iconfont icon-faxian">{{ item.like }}</i>
          <i class="iconfont icon-faxian">{{ item.discuss.length }}</i>
        </div>
      </li>
    </ul>
    <!-- <tab-bottom now="0"></tab-bottom> -->
  </div>
</template>

<script type="text/ecmascript-6">
import split from "components/split/split"
import tabBottom from 'components/tab/tab-bottom'

export default {
  data() {
    return {
      recommendList: []
    };
  },
  created() {
    this.initList()
  },
  methods: {
    initList() {
      this.$ajax({
        url: "/api/recommend",
        success(res) {
          console.log(res)
          this.recommendList = res.data.data
        }
      })
    },
    jumpInfo(item) {
      this.$router.push({
        path: '/guide-info',
        query: {
          id: item.id
        }
      })
    },
  },
  components: {
    split,
    tabBottom
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global'
.recommend
  .list
    .item
      &-head
        width 100%
        padding 0 10px
        height 40px
        line-height 40px
        font-size 11px
        display flex
        align-items center
        box-sizing border-box
        .avatar
          width 30px
          height 30px
          border-radius 50%
          background pink
          margin-right 10px
        .user-name
          flex 1
          text-align left
        .from
          height 15px
          line-height 15px
          text-align right
          background $blue-color
          padding 2px 5px
          color $white-font
          border-radius 3px
      &-body
        .banner
          display block
          width 100%
          height 150px
          background pink
        .title
          display block
          font-size 12px
          padding 10px
        .sub-title
          display block
          font-size 10px
          padding 0 10px
          color $gray-font
      &-foot
        text-align right
        padding 10px
        .iconfont
          font-size 12px
          color $gray-font
          margin-left 15px
          &:before
            margin-right 3px
</style>