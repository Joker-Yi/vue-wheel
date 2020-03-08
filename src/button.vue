<template>
	<button class="vw-button" :class="{[`icon-${iconPosition}`]:true}">
		<svg v-if="icon" class="icon">
			<use :xlink:href="`#i-${icon}`"></use>
		</svg>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
export default {
	name: '',
	// props: ['icon','iconPosition']
	props: {
	  icon: {},
    iconPosition: {
	    type: String,
			default: 'left',
			validator(value) {
        return value === 'left' || value === 'right';
      }
		}
	}
}
</script>

<style scoped lang="scss">
	.vw-button {
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		&:hover {
			border-color: var(--border-color-hover);
			cursor: pointer;
		}
		&:active {
			background-color: var(--button-active-bg);
		}
		&:focus {
			outline: none;
		}
		> .icon {
			order: 1;
			margin-right: 0.1em;
			margin-left: 0;
		}
		> .content {
			order: 2;
		}

		&.icon-right {
			> .icon {
				order: 2;
				margin-right: 0;
				margin-left: 0.1em;
			}
			> .content {
				order: 1;
			}
		}
	}
	.icon {
		width: 1em;
		height: 1em;
	}
</style>
