<template>
  <div class="book">
    <h2 class="title">{{ book.title }}</h2>
    <ul class="content-list">
      <li class="content"  v-for="(content, index) in book.content" :key="index">
        <h4 class="head">{{ content.head }}</h4>
        <h2 class="subtitle">{{ content.subtitle }}</h2>
        <p class="subcontent" v-for="(item, index) in content.subcontent">{{ item }}</p>
      </li>
    </ul>
    <div class="end">-- 完 --</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
          book: {},
        }
    },
    created() {
      let bookId = this.$route.query.id
      this.init(bookId)
    },
    methods: {
        init(id) {
          this.$ajax({
            url: 'api/room',
            success(res) {
              let bookList = res.data.data
              this.book = bookList.filter((item) => {
                return item.id == id
              })[0]
             
            }
          })
        }
    },
    components: {

    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl';
.book
  width 100%
  box-sizing border-box
  padding 20px
  .title
    font-size 12px
    color $gray-font
  .content-list
    margin-top 20px
    .head
      text-align center
      font-size 14px
      margin-top 100px
      color $gray-font
    .subtitle
      font-size 16px
      text-align center
      padding 15px
      color $primary-color
      margin-bottom 10px
    .subcontent
      text-indent 27px
      line-height 25px
      padding 5px 0
      word-break break-all
  .end
    text-align center
    padding 30px 0 10px 0
    color $primary-color
</style>