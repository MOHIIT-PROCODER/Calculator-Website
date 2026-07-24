<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
	import { categories } from '../../data/categories';
	import { calculators } from '../../data/calculators';
</script>

<SEO title="Sitemap - calculator.net" description="Full directory list of all calculator.net calculators." />

<Breadcrumb items={[{ name: 'Sitemap', url: '/sitemap' }]} />

<div class="sitemap-page glass animate-fade-in">
	<h1>calculator.net Sitemap</h1>
	
	<div class="sitemap-sections">
		<div class="sitemap-section">
			<h3>Pages</h3>
			<ul class="sitemap-links">
				<li><a href="/">Homepage</a></li>
				<li><a href="/about">About Us</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
				<li><a href="/terms">Terms of Use</a></li>
				<li><a href="/disclaimer">Disclaimer</a></li>
			</ul>
		</div>

		{#each categories as cat}
			<div class="sitemap-section">
				<h3>{cat.name}</h3>
				<ul class="sitemap-links">
					<li><a href="/{cat.id}" class="category-index-link">Index: {cat.name}</a></li>
					{#each calculators.filter(c => c.category === cat.id) as calc}
						<li><a href="/{cat.id}/{calc.slug}">{calc.name}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style>
	.sitemap-page {
		padding: 3rem;
		max-width: 1000px;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 750;
		margin-bottom: 2.5rem;
	}
	.sitemap-sections {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 2.5rem;
	}
	.sitemap-section h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.5rem;
		color: var(--text-primary);
	}
	.sitemap-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.sitemap-links a {
		font-size: 0.95rem;
		color: var(--text-secondary);
	}
	.sitemap-links a:hover {
		color: var(--primary);
	}
	.category-index-link {
		font-weight: 600;
		color: var(--primary) !important;
	}
</style>
