<template>
  <div class="room">
    <v-header title="书房" icon="icon-faxian"></v-header>
    <ul class="list">
      <li class="item" v-for="item in bookList" :key="item.id" @click="jumpBook(item)">
        <div class="item-photo">
          <span class="text">{{ item.progress | formateProgress }}</span>
          <span class="block"></span>          
          <span class="progress" :style="{width: item.progress + '%'}"></span>
        </div>
        <h4 class="item-title">{{ item.title }}</h4>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'
import tabBottom from 'components/tab/tab-bottom'

export default {
  data() {
    return {
      now: 2,
      bookList: []
    }
  },
  created() {
    this.initList()
  },
  filters: {
    formateProgress(value) {
      if( value === '0') {
        return '未读'
      } else{
        return `已读${value}%`
      }
    }
  },
	methods: {
    // 请求数据，初始化列表
    initList() {
      this.$ajax({
        url: '/api/room',
        success(res) {
          console.log(res)
          this.bookList = res.data.data
        }
      })
    },
    jumpBook(item) {
      let bookId = item.id
      this.$router.push({
        path: '/book',
        query: {id: bookId}
      })
    }
  },
	components: {
		tabBottom,
    'v-header': header,
	}
};
</script>

<style lang="stylus">
@import '../../assets/style/global.styl'
.room
  position absolute
  height 100%
  top 0
  bottom 0
  background #fffefe
  .list
    padding 0 10px
    display flex
    justify-content space-between
    flex-wrap wrap
    .item
      flex 0 0 80px
      padding 20px
      &-photo
        background pink
        width 80px
        height 100px
        position relative
        .text, .block, .progress
          position absolute
          left 0
          bottom 0
          height 12px
          width 100%
        .text         
          text-align center      
          font-size 12px     
          color #eee
          z-index 100
        .progress
          position absolute
          left 0
          bottom 0
          background $primary-color
          z-index 99          
        .block
          background rgba(17,27,37, .7)
          z-index 98                 
      &-title
        padding 5px 0
        font-size 14px
        color $gray-font
      

</style>