<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
</script>

<SEO title="Page Not Found - calculator.net" description="The page you are looking for does not exist." />

<div class="error-view text-center glass animate-fade-in">
	<h2>404 - Page Not Found</h2>
	<p>We couldn't find the page you are looking for.</p>
	<a href="/" class="home-btn">Go to Homepage</a>
</div>

<style>
	.error-view {
		padding: 4rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		max-width: 500px;
		margin: 4rem auto;
	}
	h2 {
		font-size: 2rem;
		font-weight: 750;
	}
	p {
		color: var(--text-secondary);
	}
	.home-btn {
		background: var(--primary);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-md);
		font-weight: 600;
	}
</style>
