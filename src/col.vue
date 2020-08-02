<!--
 * Create by Yee on 2020/8/2 10:44
 -->
<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vw-col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0,
      }
    },
    computed: {
      // 不能放在data里，因为要根据gutter的值变了 colStyle也要随之变动
      colStyle() {
        return {
          paddingLeft: this.gutter/2+'px',
          paddingRight: this.gutter/2+'px'
        }
      },
      colClass() {
        let {span, offset} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    $class-prefix: col-;
    /*for循环 */
    @for $n from 1 through 24 {
      /*插值语法*/
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    /*单个 col 的偏移*/
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
