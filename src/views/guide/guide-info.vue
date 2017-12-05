<template>
  <div class="guide-info">
    <v-header icon="icon-shenfen" title="文章详情" @right-click="collect"></v-header>
    <div class="user">
      <span class="avatar"></span>
      <span class="user-name">{{ info.userName }}</span>
      <i class="iconfont" 
      :class="{'icon-jiajianzujianjiahao': info.subscibe == 0, 'icon-xuanzhong': info.subscibe == 1}"
      @click="subscibe">订阅</i>
    </div>
    <div class="article">
      <div class="article-title">{{ info.title }}</div>
      <div class="article-info">
        <span class="user-name">文/{{ info.userName }}</span>
        <span class="date">{{ info.date }}</span>
      </div>
      <div class="article-banner"></div>  
      <div class="article-message">
        <p v-for="item in info.message">{{ item }}</p>
      </div>
    </div>
    <div class="discuss" v-for="item in info.discuss">
      <div class="discuss-head">
        <span class="avatar"></span>
        <span class="user-name">{{ item.userName }}</span>
        <span class="inform">举报</span>
      </div>
      <div class="discuss-body">{{ item.info }}</div>
      <div class="discuss-foot">{{ item.date }}</div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import header from "components/header/header";
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    let id = this.$route.query.id;
    this.initInfo(id);
  },
  methods: {
    initInfo(id) {
      this.$ajax({
        url: "/api/guide",
        success(res) {
          let dataList = res.data.data;
          this.info = dataList.filter(item => {
            return item.id === id;
          })[0];
          console.log(this.info);
        }
      });
    },
    collect() {},
    subscibe() {
      this.info.subscibe = !this.info.subscibe
    }
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl';
.guide-info
  .user
    width 100%
    padding 0 10px
    height 40px
    line-height 40px
    font-size 11px
    display flex
    align-items center
    box-sizing border-box
    background rgb(248,248,248)
    .avatar
      width 30px
      height 30px
      border-radius 50%
      background pink
      margin-right 10px
    .user-name
      flex 1
      text-align left
    .iconfont
      height 16px
      line-height 16px
      font-size 10px
      color red
      padding 0 12px
      text-align center
      border 1px solid red
      border-radius 10px
      &.icon-xuanzhong
        color $primary-color
        border 1px solid $primary-color
  .article
    width cale(100% - 20px)
    padding 0 10px 15px 10px
    margin 0 auto
    &-title
      font-size 18px
      font-weight 500
      color #333
      text-align center
      width 80%
      padding 15px 0
      margin 0 auto
    &-info
      width 100%
      display flex
      justify-content space-between
      padding 5px
      .user-name, .date
        display inline-block
        box-sizing border-box
        width 49%
        text-align right
        font-size 10px
        color $primary-color 
      .date
        text-align left
        color $gray-font
    &-banner
      width 100%
      height 150px
      background pink
      box-sizing content-box
    &-message
      p
        text-indent 20px
        line-height 20px
        padding 3px 0
        font-size 14px
        color $gray-font
  .discuss
    background $gray-bg
    border-bottom 1px solid #eee
    padding 0 10px
    &-head
      width 100%     
      height 40px
      line-height 40px
      font-size 11px
      display flex
      align-items center
      box-sizing border-box
      background rgb(248,248,248)
      .avatar
        width 25px
        height 25px
        border-radius 50%
        background pink
        margin-right 10px
      .user-name
        flex 1
        text-align left
        color $primary-color
      .inform
        color $gray-font
    &-body
      font-size 12px
      color #333
      padding-left 35px
    &-foot
      font-size 10px
      color $gray-font
      padding 10px 35px

</style>