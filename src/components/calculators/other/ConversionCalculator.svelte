<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { conversionData, convertUnits } from '../../../utils/unitConverter';

	let category = $state<string>('length');
	let fromUnit = $state<string>('m');
	let toUnit = $state<string>('ft');
	let value = $state<number>(1);

	let result = $derived(convertUnits(value, fromUnit, toUnit, category));

	// Synchronize units on category change
	$effect(() => {
		const cat = conversionData[category];
		if (cat) {
			const units = Object.keys(cat.units);
			fromUnit = units[0];
			toUnit = units[1] || units[0];
		}
	});

	let categoryOptions = $derived(
		Object.keys(conversionData).map(k => ({ value: k, label: conversionData[k].name }))
	);

	let fromOptions = $derived(
		conversionData[category]
			? Object.keys(conversionData[category].units).map(k => ({
					value: k,
					label: conversionData[category].labels[k]
			  }))
			: []
	);

	let toOptions = $derived(fromOptions);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Unit Conversion</h3>
		
		<SelectInput
			label="Conversion Category"
			bind:value={category}
			options={categoryOptions}
		/>

		<NumberInput label="Value to Convert" bind:value={value} />

		<div class="units-row">
			<SelectInput label="From Unit" bind:value={fromUnit} options={fromOptions} />
			<SelectInput label="To Unit" bind:value={toUnit} options={toOptions} />
		</div>
	</div>

	<div class="results-panel">
		<h3>Converted Value</h3>
		<div class="summary-card glass">
			<span class="summary-value">
				{isNaN(result) ? '0' : result.toFixed(4)}
			</span>
			<span class="summary-label">
				{conversionData[category]?.labels[toUnit] || ''}
			</span>
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
	}
	.units-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
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
		margin-top: 0.5rem;
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
