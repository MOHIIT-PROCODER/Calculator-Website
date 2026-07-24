<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { calculateBMI } from '../../../calculations/health/bmi';

	let weight = $state(70);
	let height = $state(175);
	let unitSystem = $state<'metric' | 'imperial'>('metric');

	let result = $derived(
		calculateBMI({
			weight,
			height,
			unitSystem
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Body Mass Index (BMI)</h3>
		<SelectInput
			label="Unit System"
			bind:value={unitSystem}
			options={[
				{ value: 'metric', label: 'Metric (kg / cm)' },
				{ value: 'imperial', label: 'Imperial (lbs / inches)' }
			]}
		/>

		{#if unitSystem === 'metric'}
			<NumberInput label="Weight (kg)" min={10} max={300} bind:value={weight} />
			<NumberInput label="Height (cm)" min={50} max={250} bind:value={height} />
		{:else}
			<NumberInput label="Weight (lbs)" min={20} max={700} bind:value={weight} />
			<NumberInput label="Height (inches)" min={20} max={100} bind:value={height} />
		{/if}
	</div>

	<div class="results-panel">
		<h3>Your Result</h3>
		<div class="summary-card glass">
			<span class="summary-label">BMI Score</span>
			<span class="summary-value">{result.bmi}</span>
			<span class="summary-status {result.colorClass}">
				{result.category}
			</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Healthy Weight Range</span>
				<strong>{result.healthyRange}</strong>
			</div>
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
		font-size: 3rem;
		font-weight: 700;
		color: var(--text-primary);
	}
	.summary-status {
		display: block;
		margin-top: 0.75rem;
		font-size: 1.25rem;
		font-weight: 700;
	}
	.summary-status.text-success { color: var(--success); }
	.summary-status.text-warning { color: var(--warning); }
	.summary-status.text-error { color: var(--error); }
	
	.breakdown-grid {
		display: grid;
		grid-template-columns: 1fr;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
	}
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.25rem;
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
