<script lang="ts">
	let { title, description } = $props<{ title: string; description: string }>();
</script>

<header class="page-header glass animate-fade-in">
	<div class="header-content">
		<h1>{title}</h1>
		<p>{description}</p>
	</div>
</header>

<style>
	.page-header {
		padding: 2.5rem;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
		position: relative;
		overflow: hidden;
	}
	.header-content {
		position: relative;
		z-index: 10;
		max-width: 800px;
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
		letter-spacing: -0.025em;
		background: linear-gradient(to right, var(--text-primary), var(--primary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}
	@media (max-width: 640px) {
		.page-header {
			padding: 1.5rem;
		}
		h1 {
			font-size: 1.75rem;
		}
		p {
			font-size: 0.95rem;
		}
	}
</style>
