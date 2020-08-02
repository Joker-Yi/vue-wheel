<!--
 * Create by Yee on 2020/8/2 10:44
 -->
<template>
  <div class="col"
       :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    width: 50%;
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
