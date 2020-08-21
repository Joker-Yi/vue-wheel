<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "vw-tabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },

    mounted () {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head，但你没有写子组件')
      }
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'vw-tabs-head') {
          vm.$children.forEach((childVm) => { // 找到是哪个tabs-item 触发的事件，传递给所有后代
            if (childVm.$options.name === 'vw-tabs-item' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style scoped>

</style>
