<template>
	<svg class="vw-icon">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script>
export default {
	props: ['name']
}
</script>

<style scoped lang="scss">
	.vw-icon {
		width: 1em;
		height: 1em;
	}

</style>
