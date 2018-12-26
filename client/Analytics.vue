<template>
	<div class="analytics">
		<h2 class="analytics__title">{{ post.title }}</h2>
		<p class="analytics__content">{{ post.content }}</p>
	</div>
</template>
<script>
	export default { 
 		props: ['post']
	}
</script>
<style lang="scss" scoped>
	.analytics {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;

		font-family: "Roboto", sans-serif;

		&__title {
			display: inline-block;
			margin-bottom: 13px;

			font-size: 30px;
			line-height: 33px;

			color: #6e6e70;

			vertical-align: middle;
		}

		&__content {
			display: inline-block;
			margin: 0;

			font-size: 13px;
			line-height: 19px;
			font-style: italic;

			color: rgba(0, 0, 0, 0.38);
		}
	}
</style>
