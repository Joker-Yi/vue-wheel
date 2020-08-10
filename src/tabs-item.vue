<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs-item" @click="hanldClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vw-tabs-item",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      hanldClick() {
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: red;
    }
  }
</style>
