<template>
	<button class="vw-button"
					:class="{[`icon-${iconPosition}`]:true}"
					@click="$emit('click')">
		<vw-icon class="icon" v-if="icon && !loading" :name="icon"></vw-icon>
		<vw-icon class="loading icon" v-if="loading" name="loading"></vw-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
  import Icon from "./icon";
export default {
	name: 'vw-button',
  components: {
    'vw-icon': Icon
  },
	props: {
	  icon: {},
    iconPosition: {
	    type: String,
			default: 'left',
			validator(value) {
        return value === 'left' || value === 'right';
      }
		},
		loading: {
	    type: Boolean,
			default: false
		}
	},
	methods: {

	}
}
</script>

<style scoped lang="scss">
	@keyframes spin {
		0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
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
	.loading {
		animation: spin 1.5s infinite linear;
	}
</style>
