<!--
 * Create by Yee on 2020/8/2 10:43
 -->
<template>
  <div class="row"
       :style="rowStyle"
       :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vw-row',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'right', 'center'].includes(value)
        }
      }
    },
    mounted () {
      // 遍历孩子节点，赋值每个child 的 gutter
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}
      },
      rowClass() {
        let {align} = this
        return [align && `align-${align}`]
      }
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>
