<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';

	let shape = $state<'cylinder' | 'sphere'>('cylinder');
	let height = $state(10);
	let radius = $state(5);

	let volume = $derived.by(() => {
		if (shape === 'cylinder') return Math.PI * radius * radius * height;
		return (4 / 3) * Math.PI * Math.pow(radius, 3);
	});
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Volume Calculation</h3>
		<SelectInput
			label="Select Solid Shape"
			bind:value={shape}
			options={[
				{ value: 'cylinder', label: 'Cylinder' },
				{ value: 'sphere', label: 'Sphere' }
			]}
		/>

		<NumberInput label="Radius" min={0} bind:value={radius} />
		{#if shape === 'cylinder'}
			<NumberInput label="Height" min={0} bind:value={height} />
		{/if}
	</div>

	<div class="results-panel">
		<h3>Resulting Volume</h3>
		<div class="summary-card glass">
			<span class="summary-label">Volume</span>
			<span class="summary-value">{volume.toFixed(2)} units³</span>
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
