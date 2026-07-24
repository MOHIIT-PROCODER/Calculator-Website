<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';

	let shape = $state<'rectangle' | 'circle'>('rectangle');
	let width = $state(10);
	let height = $state(5);
	let radius = $state(7);

	let area = $derived.by(() => {
		if (shape === 'rectangle') return width * height;
		return Math.PI * radius * radius;
	});
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Area Calculation</h3>
		<SelectInput
			label="Select Shape"
			bind:value={shape}
			options={[
				{ value: 'rectangle', label: 'Rectangle' },
				{ value: 'circle', label: 'Circle' }
			]}
		/>

		{#if shape === 'rectangle'}
			<NumberInput label="Width" min={0} bind:value={width} />
			<NumberInput label="Height" min={0} bind:value={height} />
		{:else}
			<NumberInput label="Radius" min={0} bind:value={radius} />
		{/if}
	</div>

	<div class="results-panel">
		<h3>Resulting Area</h3>
		<div class="summary-card glass">
			<span class="summary-label">Area</span>
			<span class="summary-value">{area.toFixed(2)} units²</span>
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
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		text-align: center;
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
