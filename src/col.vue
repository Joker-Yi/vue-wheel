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
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'vw-col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      phone: {type: Object, validator,},
      ipad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
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
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      },
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ... (phone && [`col-phone-${phone.span}`]),
          ... (ipad && [`col-ipad-${ipad.span}`]),
          ... (narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
          ... (pc && [`col-pc-${pc.span}`]),
          ... (widePc && [`col-wide-pc-${widePc.span}`]),
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
    /*phone*/
    @media (max-width: 576px) {
      $class-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*pad*/
    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*窄屏pc*/
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*pc*/
    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    /*宽屏pc*/
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
