<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Header from '../../components/layout/Header.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
	import { calculators } from '../../data/calculators';
	import { categories } from '../../data/categories';
	import { seoData } from '../../data/seo';

	const category = categories.find(c => c.id === 'math')!;
	const list = calculators.filter(c => c.category === 'math');
</script>

<SEO 
	title={seoData.math.title} 
	description={seoData.math.description} 
	keywords={seoData.math.keywords}
/>

<Breadcrumb items={[{ name: 'Mathematics', url: '/math' }]} />

<Header title={category.name} description={category.description} />

<div class="calculators-grid animate-fade-in">
	{#each list as calc}
		<a href="/math/{calc.slug}" class="calculator-card glass">
			<h3>{calc.name}</h3>
			<p>{calc.description}</p>
		</a>
	{/each}
</div>

<style>
	.calculators-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}
	.calculator-card {
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		transition: transform 0.2s, border-color 0.2s;
	}
	.calculator-card:hover {
		transform: translateY(-2px);
		border-color: var(--primary);
	}
	.calculator-card h3 {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--primary);
	}
	.calculator-card p {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
</style>
