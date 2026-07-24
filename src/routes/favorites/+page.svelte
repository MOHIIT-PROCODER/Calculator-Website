<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
	import { calculators } from '../../data/calculators';

	let favoriteSlugs = $state<string[]>([]);

	$effect(() => {
		const stored = localStorage.getItem('favorites');
		if (stored) {
			try {
				favoriteSlugs = JSON.parse(stored);
			} catch (e) {
				// Ignore
			}
		}
	});

	let favorites = $derived(
		calculators.filter(c => favoriteSlugs.includes(c.slug))
	);
</script>

<SEO title="Your Favorites - calculator.net" description="Manage your favorited calculators." />

<Breadcrumb items={[{ name: 'Favorites', url: '/favorites' }]} />

<div class="favorites-page animate-fade-in">
	<h1 class="page-title">Your Favorite Calculators</h1>
	
	{#if favorites.length > 0}
		<div class="results-grid">
			{#each favorites as calc}
				<a href="/{calc.category}/{calc.slug}" class="result-card glass">
					<h3>{calc.name}</h3>
					<p>{calc.description}</p>
				</a>
			{/each}
		</div>
	{:else}
		<div class="no-favorites glass text-center">
			<p>You haven't saved any calculators to your favorites yet. Bookmark tools you use frequently for quick access.</p>
			<a href="/" class="home-btn">Explore Calculators</a>
		</div>
	{/if}
</div>

<style>
	.page-title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}
	.results-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}
	.result-card {
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.result-card h3 {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--primary);
	}
	.result-card p {
		font-size: 0.875rem;
		color: var(--text-secondary);
	}
	.no-favorites {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}
	.no-favorites p {
		color: var(--text-secondary);
		max-width: 480px;
	}
	.home-btn {
		background: var(--primary);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-md);
		font-weight: 600;
	}
</style>
