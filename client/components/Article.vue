<template>
	<article class="article">
		<div class="container">
			<header class="article__header">
				<div class="row no-gutters justify-content-between">
					<a href="#" class="
					article__item article__item_link">Back</a>
					<span class="article__item">2016, Aug</span>
				</div>
			</header>
			<section class="article__action">
				<span class="article__title">Start of a project</span>
				<div class="row">
					<div class="col-6">
						<p class="article__content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div class="col-6">
						<p class="article__content">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugi
						</p>
					</div>
				</div>
			</section>
	<!-- 		<analytics></analytics> -->
			<section class="article__action">
				<div class="row">
					<div class="col-6">
						<p class="article__content">
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</section>	
		</div>
	</article>
</template>

<script>
export default {
	name: 'Article'
}
</script>

<style lang="scss">
$bgColor: #fff;
$textColor: #000;
$itemColor: #6d6e70;
$strokeColor: #979797;

.article {
	position: fixed;
	display: block;
	margin: 0;
	padding: 50px 50px;
	height: 100vh;
	width: 736px;

	right: 0;
	top: 0;

	background-color: $bgColor;
	
	overflow-y: auto;

	&__header {
		display: block;
		padding: 0;
		margin: 0;
		padding-bottom: 13px; 

		border-bottom: 1px solid $strokeColor;
	}

	&__item {
		font-family: inherit;
		font-size: 13px;
		font-weight: 400;
		line-height: 19px;

		color: #6d6e70;

		&_link {
			text-decoration: none;
			
			&:hover {
				text-decoration: underline;
				text-decoration-style: dotted;
					text-decoration-color: $textColor;
				opacity: 0.8;
			}
		}
	}

	&__action {
		display: block;
		margin: 0;
		padding: 20px 0;
	}

	&__title {
		display: block;
		margin-bottom: 32px;

		font-family: 'Roboto';
		font-size: 24px;
		font-weight: 500;
		line-height: 33px;
		color: $textColor;

		text-align: left;
	}

	&__content {
		display: block;
		margin: 0;
		margin-bottom: 12px;
		padding: 0;
		
		font-family: inherit;
		font-size: 13px;
		line-height: 19px;
		font-weight: 400;
		color: $textColor;

		text-align: left;
	}
}
</style>










