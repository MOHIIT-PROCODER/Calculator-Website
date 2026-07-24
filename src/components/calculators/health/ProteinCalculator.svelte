<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';

	let weight = $state(70);
	let activityType = $state<'sedentary' | 'moderate' | 'heavy'>('moderate');

	let protein = $derived.by(() => {
		let factor = 0.8; // grams per kg
		if (activityType === 'moderate') factor = 1.3;
		if (activityType === 'heavy') factor = 1.8;
		return weight * factor;
	});
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Protein Target</h3>
		<NumberInput label="Weight (kg)" min={30} max={300} bind:value={weight} />
		<SelectInput
			label="Activity Profile"
			bind:value={activityType}
			options={[
				{ value: 'sedentary', label: 'Sedentary (General health, 0.8g/kg)' },
				{ value: 'moderate', label: 'Active (Moderate sport, 1.3g/kg)' },
				{ value: 'heavy', label: 'Athlete (Heavy strength/endurance, 1.8g/kg)' }
			]}
		/>
	</div>

	<div class="results-panel">
		<h3>Target Protein Intake</h3>
		<div class="summary-card glass">
			<span class="summary-label">Recommended Protein Target</span>
			<span class="summary-value">{protein.toFixed(0)} g/day</span>
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
