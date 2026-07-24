<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RadioGroup from '../../forms/RadioGroup.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { calculateTDEE } from '../../../calculations/health/tdee';
	import type { ActivityLevel } from '../../../calculations/health/tdee';
	import { formatNumber } from '../../../utils/formatNumber';

	let weight = $state(70);
	let height = $state(175);
	let age = $state(28);
	let gender = $state<'male' | 'female'>('male');
	let activityLevel = $state<ActivityLevel>('moderate');

	let result = $derived(
		calculateTDEE({
			weight,
			height,
			age,
			gender,
			activityLevel
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>TDEE Profile</h3>
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
			label="Activity Intensity"
			bind:value={activityLevel}
			options={[
				{ value: 'sedentary', label: 'Sedentary (desk job, no exercise)' },
				{ value: 'light', label: 'Light Exercise (1-3 days/week)' },
				{ value: 'moderate', label: 'Moderate Exercise (3-5 days/week)' },
				{ value: 'active', label: 'Active (6-7 days/week)' },
				{ value: 'extreme', label: 'Extra Active (athletic training)' }
			]}
		/>
	</div>

	<div class="results-panel">
		<h3>Total Daily Energy Expenditure</h3>
		<div class="summary-card glass">
			<span class="summary-label">Estimated TDEE</span>
			<span class="summary-value">{formatNumber(result, 0)} kcal/day</span>
			<p class="desc">The total amount of calories burned per day based on your activity level.</p>
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
