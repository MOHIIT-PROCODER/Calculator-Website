<script lang="ts">
	import { page } from '$app/state';
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
	import { calculators } from '../../data/calculators';

	let query = $state('');
	
	$effect(() => {
		query = new URLSearchParams(window.location.search).get('q') || '';
	});

	let results = $derived(
		query.trim() === ''
			? []
			: calculators.filter(c => 
					c.name.toLowerCase().includes(query.toLowerCase()) ||
					c.description.toLowerCase().includes(query.toLowerCase())
				)
	);
</script>

<SEO title="Search Results - calculator.net" description="Search free online calculators." />

<Breadcrumb items={[{ name: 'Search', url: '/search' }]} />

<div class="search-page animate-fade-in">
	<h1 class="page-title">Search Results for "{query}"</h1>
	
	{#if results.length > 0}
		<div class="results-grid">
			{#each results as calc}
				<a href="/{calc.category}/{calc.slug}" class="result-card glass">
					<h3>{calc.name}</h3>
					<p>{calc.description}</p>
					<span class="category-tag {calc.category}">{calc.category}</span>
				</a>
			{/each}
		</div>
	{:else}
		<div class="no-results glass text-center">
			<p>No calculators matched your search query. Try searching for something else like "mortgage" or "bmi".</p>
			<a href="/" class="home-btn">Browse Categories</a>
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
		position: relative;
	}
	.result-card h3 {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--primary);
	}
	.result-card p {
		font-size: 0.875rem;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}
	.category-tag {
		position: absolute;
		bottom: 1rem;
		right: 1.25rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 600;
		padding: 0.2rem 0.5rem;
		border-radius: var(--radius-sm);
	}
	.category-tag.financial { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
	.category-tag.health { background: rgba(16, 185, 129, 0.1); color: #10b981; }
	.category-tag.math { background: rgba(217, 70, 239, 0.1); color: #d946ef; }
	.category-tag.other { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
	
	.no-results {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}
	.no-results p {
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
