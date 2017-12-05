<template>
  <div class="guide">
    <tab-nav :tabList="tabList" :now="index" @item-click="tab"></tab-nav>
    <ul class="list">
      <li class="item" v-for="item in recommendList">
        <split height="10"></split>
        <div class="item-head">
          <span class="avatar"></span>
          <span class="user-name">{{ item.userName }}</span>
          <span class="from">{{ item.from }}</span>
        </div>
        <div class="item-body" @click="jumpInfo(item)">
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
  </div>
</template>

<script type="text/ecmascript-6">
import tabNav from "components/tab/tab-nav";
import split from "components/split/split";
import tabBottom from "components/tab/tab-bottom";

export default {
  data() {
    return {
      index: 0,
      dataList: [],
      // recommendList: [],
      tabList: [
        {
          label: "推荐",
        },
        {
          label: "关注",
        }
      ]
    };
  },
  created() {
    this.initList();
  },
  computed: {
    recommendList() {
      let result = this.dataList.filter((item) => {
        return item.type == this.index
      })
      return result
    }
  },
  methods: {
    tab(item, index) {
      this.index = index
    },
    initList() {
      this.$ajax({
        url: "/api/guide",
        success(res) {
          this.dataList = res.data.data;
        }
      });
    },
    jumpInfo(item) {
      this.$router.push({
        path: "/guide-info",
        query: {
          id: item.id
        }
      });
    }
  },
  components: {
		tabNav,
    split,
    tabBottom
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global';

.guide
  padding 40px 0 60px 0
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