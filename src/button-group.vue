<template>
	<div class="vw-button-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'vw-buttonGroup',
	mounted() {
	  for(let node of this.$el.children) {
	    let name = node.nodeName.toLowerCase()
	    if ( name !== 'button'){
				console.warn(`vx-button-group 的子元素应该全是 vw-button,当前为 ${name}`);
	    }
		}
  }
}
</script>

<style scoped lang="scss">
	.vw-button-group {
		display: inline-flex;
		vertical-align: middle;
		> .vw-button {
			border-radius: 0;
			&:not(:first-child) {
				margin-left: -1px;
			}
			&:first-child {
				border-top-left-radius: var(--border-radius);
				border-bottom-left-radius: var(--border-radius);
			}
			&:last-child {
				border-top-right-radius: var(--border-radius);
				border-bottom-right-radius: var(--border-radius);
			}
			&:hover {
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
