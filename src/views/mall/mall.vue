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
    <split height="10"></split>
    <div class="main">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(item, index) in menuList" :key="index">
            <span class="text">{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="book-wrapper" ref="bookWrapper">
        <ul>
          <li class="book-item" v-for="(book, index) in bookList" :key="index">
            <div class="picture">
              <img :src="book.picture" alt="">
            </div>
            <div class="info">
              <div class="name">书名:{{ book.name }}</div>
              <div class="author">作者：{{ book.author }}</div>
              <div class="price">￥{{ book.price }}</div>
              <div class="cart">+</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import headerSearch from "components/header/header-search"
import split from "components/split/split"
import BScroll from "better-scroll"

export default {
  data() {
    return {
      menuList: [
        {
          value: 'guide',
          label: '今日推荐',
        },
        {
          value: 'new',
          label: '新书热荐',
        },
        {
          value: 'hot',
          label: '畅销榜'
        },
        {
          value: 'read',
          label: '阅读榜',
        },
        {
          value: 'search',
          label: '热搜榜',
        },
      ],
      bookList: []
     
    };
  },
  created() {
    this.initBook()
    this.$nextTick(() => {
      this.initScroll()      
    })
  },
  methods: {
    initBook() {
      this.$ajax({
        url: './api/book',
        success(res) {
          console.log(res.data.data)
          this.bookList = res.data.data
        }
      })
    },
    initScroll() {
      let bookWrapper = this.$refs.bookWrapper
      this.scroll = new BScroll(bookWrapper, {})
    }
  },
  components: {
    headerSearch,
    split
  }
};
</script>

<style lang="stylus" scoped>
.mall
  .mint-swipe
    height 100px
    .banner
      width 100%
      height 100px
      background pink
  .main
    display flex
    position absolute
    top 155px
    bottom 45px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      background #efefef
      .menu-item 
        width 100%
        height 54px
        line-height 54px
        font-size 13px
        text-align center
        position relative
        &:last-child
          .text
            border none
        .text
          display inline-block
          margin 0 auto
          border-bottom 1px solid rgba(100,100,100,.8)
          height 54px
          line-height 54px
          width 60px
    .book-wrapper
      flex 1
      background pink
      height 100%
      .book-item
        height 150px
</style>