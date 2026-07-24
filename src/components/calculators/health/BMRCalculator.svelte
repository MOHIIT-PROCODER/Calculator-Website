<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RadioGroup from '../../forms/RadioGroup.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { calculateBMR } from '../../../calculations/health/bmr';
	import { formatNumber } from '../../../utils/formatNumber';

	let weight = $state(70);
	let height = $state(175);
	let age = $state(28);
	let gender = $state<'male' | 'female'>('male');
	let formula = $state<'mifflin' | 'harris'>('mifflin');

	let result = $derived(
		calculateBMR({
			weight,
			height,
			age,
			gender,
			formula
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>BMR Details</h3>
		<RadioGroup
			label="Gender"
			bind:value={gender}
			options={[
				{ value: 'male', label: 'Male' },
				{ value: 'female', label: 'Female' }
			]}
		/>

		<div class="inputs-row">
			<NumberInput label="Age" min={1} max={120} bind:value={age} />
			<NumberInput label="Weight (kg)" min={10} max={300} bind:value={weight} />
		</div>
		<NumberInput label="Height (cm)" min={50} max={250} bind:value={height} />

		<SelectInput
			label="Formula Style"
			bind:value={formula}
			options={[
				{ value: 'mifflin', label: 'Mifflin-St Jeor (Standard)' },
				{ value: 'harris', label: 'Harris-Benedict' }
			]}
		/>
	</div>

	<div class="results-panel">
		<h3>Your BMR Result</h3>
		<div class="summary-card glass">
			<span class="summary-label">Basal Metabolic Rate</span>
			<span class="summary-value">{formatNumber(result, 0)} kcal/day</span>
			<p class="desc">The number of calories your body needs to function at complete rest.</p>
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
	.inputs-row {
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
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--primary);
	}
	.desc {
		font-size: 0.85rem;
		color: var(--text-tertiary);
		margin-top: 1rem;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
