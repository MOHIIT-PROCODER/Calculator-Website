<script lang="ts">
	import { categories } from '../../data/categories';
	import { calculators } from '../../data/calculators';
	
	let popular = calculators.filter(c => c.popular);
</script>

<aside class="sidebar glass animate-fade-in">
	<div class="sidebar-section">
		<h3>Categories</h3>
		<ul class="sidebar-list">
			{#each categories as category}
				<li>
					<a href="/{category.id}" class="category-link">
						<span class="category-indicator {category.id}"></span>
						{category.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="sidebar-section">
		<h3>Popular Calculators</h3>
		<ul class="sidebar-list">
			{#each popular as calc}
				<li>
					<a href="/{calc.category}/{calc.slug}" class="popular-link">
						{calc.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style>
	.sidebar {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: sticky;
		top: 84px;
	}
	h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.5rem;
	}
	.sidebar-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.category-link, .popular-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.95rem;
		color: var(--text-secondary);
		padding: 0.25rem 0;
	}
	.category-link:hover, .popular-link:hover {
		color: var(--primary);
	}
	.category-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: inline-block;
	}
	.category-indicator.financial { background-color: #3b82f6; }
	.category-indicator.health { background-color: #10b981; }
	.category-indicator.math { background-color: #d946ef; }
	.category-indicator.other { background-color: #f59e0b; }
</style>
