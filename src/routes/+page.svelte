<script lang="ts">
	import SEO from '../components/seo/SEO.svelte';
	import { categories } from '../data/categories';
	import { calculators } from '../data/calculators';
	import { seoData } from '../data/seo';

	let searchQuery = $state('');
	
	let filteredCalculators = $derived(
		searchQuery.trim() === ''
			? []
			: calculators.filter(c => 
					c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					c.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
	);

	let popular = calculators.filter(c => c.popular);
</script>

<SEO 
	title={seoData.home.title} 
	description={seoData.home.description} 
	keywords={seoData.home.keywords}
/>

<div class="home-hero glass text-center">
	<h1>Free Online Calculators</h1>
	<p>Solve mortgages, track health indicators, convert units, and solve complex algebra calculations instantly.</p>
	
	<div class="search-box">
		<input 
			type="text" 
			placeholder="Search 40+ free calculators..." 
			bind:value={searchQuery}
		/>
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
	</div>

	<div class="benefits-list">
		<span>✓ 40+ calculators</span>
		<span>✓ Free</span>
		<span>✓ No signup</span>
	</div>

	{#if filteredCalculators.length > 0}
		<div class="search-results glass animate-fade-in">
			{#each filteredCalculators as calc}
				<a href="/{calc.category}/{calc.slug}" class="search-result-item">
					<strong>{calc.name}</strong> - <span>{calc.description}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<section class="categories-section">
	<h2 class="section-title">Explore by Category</h2>
	<div class="categories-grid">
		{#each categories as cat}
			<a href="/{cat.id}" class="category-card glass">
				<div class="card-icon {cat.id}">
					{#if cat.id === 'financial'}
						💸
					{:else if cat.id === 'health'}
						🍏
					{:else if cat.id === 'math'}
						📐
					{:else}
						⚙️
					{/if}
				</div>
				<h3>{cat.name}</h3>
				<p>{cat.description}</p>
				<span class="card-link">View calculators &rarr;</span>
			</a>
		{/each}
	</div>
</section>

<section class="popular-section">
	<h2 class="section-title">Popular Calculators</h2>
	<div class="popular-grid">
		{#each popular as calc}
			<a href="/{calc.category}/{calc.slug}" class="popular-card glass">
				<h4>{calc.name} &rarr;</h4>
				<p>{calc.description}</p>
			</a>
		{/each}
	</div>

	<div class="view-all-wrapper">
		<a href="/sitemap" class="view-all-btn">View all 40+ calculators &rarr;</a>
	</div>
</section>

<section class="why-calchub-section glass">
	<h3 class="why-title">Why calculator.net?</h3>
	<div class="why-calchub-grid">
		<div class="why-card">
			<span class="why-icon">⚡</span>
			<h4>Instant Results</h4>
			<p>Calculations happen directly in your browser with zero latency.</p>
		</div>
		<div class="why-card">
			<span class="why-icon">🔒</span>
			<h4>No Sign-up</h4>
			<p>Access all tools instantly without creating an account or paying fees.</p>
		</div>
		<div class="why-card">
			<span class="why-icon">📐</span>
			<h4>Formula Explained</h4>
			<p>Every calculator outlines its equations, explanations, and math details.</p>
		</div>
		<div class="why-card">
			<span class="why-icon">📱</span>
			<h4>Works on Any Device</h4>
			<p>Fully optimized for desktop, tablet, and mobile browsers.</p>
		</div>
	</div>
</section>

<style>
	.home-hero {
		padding: 3rem 1.5rem;
		margin-bottom: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	h1 {
		font-size: 2.75rem;
		font-weight: 800;
		margin-bottom: 0.75rem;
		letter-spacing: -0.03em;
		color: var(--text-primary);
	}
	p {
		font-size: 1.15rem;
		color: var(--text-secondary);
		max-width: 600px;
		line-height: 1.6;
		margin-bottom: 1.75rem;
	}
	.search-box {
		position: relative;
		width: 100%;
		max-width: 500px;
	}
	.search-box input {
		width: 100%;
		padding: 0.9rem 1rem 0.9rem 3rem;
		font-size: 1.05rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-primary);
		color: var(--text-primary);
		outline: none;
		box-shadow: var(--shadow-sm);
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.search-box input:focus {
		border-color: var(--primary);
		box-shadow: var(--shadow-md);
	}
	.search-icon {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		color: var(--text-tertiary);
	}
	.benefits-list {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
		font-size: 0.95rem;
		color: var(--text-secondary);
		font-weight: 550;
	}
	.search-results {
		position: absolute;
		top: calc(100% + 0.5rem);
		width: 100%;
		max-width: 500px;
		background: var(--bg-secondary);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-lg);
		z-index: 20;
		max-height: 250px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	.search-result-item {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--border-color);
		font-size: 0.95rem;
		text-align: left;
	}
	.search-result-item:hover {
		background: var(--bg-tertiary);
	}
	.search-result-item strong {
		color: var(--primary);
	}
	.search-result-item span {
		color: var(--text-secondary);
	}
	.section-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		letter-spacing: -0.02em;
	}
	.categories-section, .popular-section {
		margin-bottom: 3.5rem;
	}
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}
	.category-card {
		padding: 2.25rem 1.5rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		transition: border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
	}
	.category-card:hover {
		transform: translateY(-3px);
		border-color: var(--primary);
		box-shadow: var(--shadow-md);
	}
	.card-icon {
		width: 60px;
		height: 60px;
		border-radius: var(--radius-md);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
	}
	.card-icon.financial { background-color: rgba(124, 58, 237, 0.1); }
	.card-icon.health { background-color: rgba(16, 185, 129, 0.1); }
	.card-icon.math { background-color: rgba(217, 70, 239, 0.1); }
	.card-icon.other { background-color: rgba(245, 158, 11, 0.1); }
	
	.category-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
	}
	.category-card p {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.4;
	}
	.card-link {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--primary);
		margin-top: auto;
	}
	.popular-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}
	.popular-card {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		transition: border-color var(--transition-fast), transform var(--transition-fast);
	}
	.popular-card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}
	.popular-card h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--primary);
	}
	.popular-card p {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.45;
	}
	.view-all-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}
	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--primary);
		color: white !important;
		padding: 0.75rem 1.75rem;
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: 0.95rem;
		transition: background var(--transition-fast), transform var(--transition-fast);
	}
	.view-all-btn:hover {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.why-calchub-section {
		padding: 2.5rem 2rem;
		margin-bottom: 3rem;
	}
	.why-title {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1.75rem;
	}
	.why-calchub-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}
	.why-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
	}
	.why-icon {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}
	.why-card h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	.why-card p {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.45;
	}

	@media (max-width: 1024px) {
		.categories-grid, .popular-grid, .why-calchub-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 640px) {
		h1 {
			font-size: 2.25rem;
		}
		p {
			font-size: 1.05rem;
		}
		.categories-grid, .popular-grid, .why-calchub-grid {
			grid-template-columns: 1fr;
		}
		.search-box {
			max-width: 100%;
		}
		.search-results {
			max-width: 100%;
		}
		.benefits-list {
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.75rem;
		}
	}
</style>
