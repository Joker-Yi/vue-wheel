<!--
 * Create by Yee on 2020/8/21 10:45
 -->
<template>
  <div class="popover" @click="handleClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "vw-popover",
    data () {
      return {
        visible: false
      }
    },
    methods: {
      handleClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      // 移动弹出层，并计算定位的位置
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument (e) {
        // 当移动到content区域不隐藏
        if (this.$refs.popover &&
            (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
            (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
