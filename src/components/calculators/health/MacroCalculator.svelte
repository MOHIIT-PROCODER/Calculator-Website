<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import PieChart from '../../charts/PieChart.svelte';

	let targetCalories = $state(2000);

	let protein = $derived((targetCalories * 0.3) / 4);
	let carbs = $derived((targetCalories * 0.4) / 4);
	let fat = $derived((targetCalories * 0.3) / 9);

	let chartData = $derived([
		{ label: `Carbs - ${carbs.toFixed(0)}g`, value: carbs * 4, color: 'var(--primary)' },
		{ label: `Protein - ${protein.toFixed(0)}g`, value: protein * 4, color: 'var(--warning)' },
		{ label: `Fat - ${fat.toFixed(0)}g`, value: fat * 9, color: 'var(--success)' }
	]);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Macronutrient Target</h3>
		<NumberInput label="Target Daily Calories (kcal)" min={500} max={10000} bind:value={targetCalories} />
	</div>

	<div class="results-panel">
		<h3>Daily Macros (40/30/30 Split)</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass border-carbs">
				<span>Carbohydrates (40%)</span>
				<strong>{carbs.toFixed(0)} grams</strong>
			</div>
			<div class="breakdown-item glass border-protein">
				<span>Protein (30%)</span>
				<strong>{protein.toFixed(0)} grams</strong>
			</div>
			<div class="breakdown-item glass border-fat">
				<span>Fats (30%)</span>
				<strong>{fat.toFixed(0)} grams</strong>
			</div>
		</div>

		{#if targetCalories > 0}
			<PieChart data={chartData} title="Macro Caloric Split" />
		{/if}
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
	.breakdown-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-bottom: 3px solid var(--border-color);
	}
	.border-carbs { border-bottom-color: var(--primary); }
	.border-protein { border-bottom-color: var(--warning); }
	.border-fat { border-bottom-color: var(--success); }
	
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.2rem;
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
		.breakdown-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
