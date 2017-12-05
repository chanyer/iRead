<template>
  <div class="split" :style="{height: height + 'px', backgroundColor: bgColor}">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        height: {
            type: String,
            default: '5'
        },
        bgColor: {
            type: String,
            default: '#f6f6f6'
        }
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/global.styl'
.split
    width 100%                
</style>