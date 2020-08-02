<!--
 * Create by Yee on 2020/8/2 10:43
 -->
<template>
  <div class="row"
       :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vw-row',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    created () {
    },
    mounted () {
      // 遍历孩子节点，赋值每个child 的 gutter
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
  }
</style>
