<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let min = $state(1);
	let max = $state(100);
	let count = $state(5);
	let generatedList = $state<number[]>([]);

	function generate() {
		const list: number[] = [];
		for (let i = 0; i < count; i++) {
			const num = Math.floor(Math.random() * (max - min + 1)) + min;
			list.push(num);
		}
		generatedList = list;
	}
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Random Number Parameters</h3>
		<NumberInput label="Min Limit" bind:value={min} />
		<NumberInput label="Max Limit" bind:value={max} />
		<NumberInput label="Count" min={1} max={100} bind:value={count} />
		<button class="generate-btn" onclick={generate}>Generate Numbers</button>
	</div>

	<div class="results-panel">
		<h3>Generated Values</h3>
		<div class="summary-card glass">
			{#if generatedList.length > 0}
				<div class="number-chips">
					{#each generatedList as num}
						<span class="number-chip">{num}</span>
					{/each}
				</div>
			{:else}
				<span class="placeholder-text">Click Generate to start</span>
			{/if}
		</div>
	</div>
</div>

<style>
	.calculator-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}
	.inputs-panel {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.generate-btn {
		padding: 0.75rem;
		border: none;
		border-radius: var(--radius-md);
		background: var(--primary);
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background var(--transition-fast);
	}
	.generate-btn:hover {
		background: var(--primary-hover);
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		min-height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.number-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
	}
	.number-chip {
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		background: var(--primary-light);
		color: var(--primary);
		font-weight: 700;
		font-size: 1.25rem;
	}
	.placeholder-text {
		color: var(--text-tertiary);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
