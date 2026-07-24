<script lang="ts">
	let { items = [] } = $props<{ items: { name: string; url: string }[] }>();
</script>

<nav class="breadcrumb" aria-label="Breadcrumb">
	<ol>
		{#each items as item, index}
			{#if index > 0}
				<li class="separator" aria-hidden="true">/</li>
			{/if}
			<li>
				{#if index === items.length - 1}
					<span aria-current="page">{item.name}</span>
				{:else}
					<a href={item.url}>{item.name}</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.breadcrumb {
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
	}
	ol {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0;
	}
	li {
		color: var(--text-secondary);
	}
	li a {
		color: var(--text-tertiary);
		font-weight: 500;
	}
	li a:hover {
		color: var(--primary);
	}
	.separator {
		margin: 0 0.5rem;
		color: var(--text-tertiary);
		font-weight: 300;
	}
	span[aria-current="page"] {
		color: var(--text-primary);
		font-weight: 600;
	}
</style>
