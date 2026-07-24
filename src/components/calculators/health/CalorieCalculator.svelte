<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import RadioGroup from '../../forms/RadioGroup.svelte';
	import BarChart from '../../charts/BarChart.svelte';
	import { calculateCalories } from '../../../calculations/health/calorie';
	import type { ActivityLevel } from '../../../calculations/health/tdee';
	import { formatNumber } from '../../../utils/formatNumber';

	let weight = $state(70);
	let height = $state(175);
	let age = $state(28);
	let gender = $state<'male' | 'female'>('male');
	let activityLevel = $state<ActivityLevel>('moderate');

	let result = $derived(
		calculateCalories({
			weight,
			height,
			age,
			gender,
			activityLevel
		})
	);

	let chartData = $derived([
		{ label: 'Loss (-500)', value: result.weightLoss, color: 'var(--warning)' },
		{ label: 'Maintain', value: result.maintenance, color: 'var(--primary)' },
		{ label: 'Gain (+500)', value: result.weightGain, color: 'var(--success)' }
	]);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Calorie Requirement Projections</h3>
		<RadioGroup
			label="Gender"
			bind:value={gender}
			options={[
				{ value: 'male', label: 'Male' },
				{ value: 'female', label: 'Female' }
			]}
		/>

		<div class="inputs-row">
			<NumberInput label="Age" min={10} max={120} bind:value={age} />
			<NumberInput label="Weight (kg)" min={20} max={300} bind:value={weight} />
		</div>
		<NumberInput label="Height (cm)" min={50} max={250} bind:value={height} />

		<SelectInput
			label="Activity Level"
			bind:value={activityLevel}
			options={[
				{ value: 'sedentary', label: 'Sedentary (No Exercise)' },
				{ value: 'light', label: 'Light Exercise (1-3 days/week)' },
				{ value: 'moderate', label: 'Moderate Exercise (3-5 days/week)' },
				{ value: 'active', label: 'Active (6-7 days/week)' },
				{ value: 'extreme', label: 'Extreme (Heavy Training / Job)' }
			]}
		/>
	</div>

	<div class="results-panel">
		<h3>Daily Caloric Goals</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass weight-loss">
				<span>Weight Loss (-0.5 kg/wk)</span>
				<strong>{formatNumber(result.weightLoss, 0)} kcal</strong>
			</div>
			<div class="breakdown-item glass weight-maintain">
				<span>Maintain Weight</span>
				<strong>{formatNumber(result.maintenance, 0)} kcal</strong>
			</div>
			<div class="breakdown-item glass weight-gain">
				<span>Weight Gain (+0.5 kg/wk)</span>
				<strong>{formatNumber(result.weightGain, 0)} kcal</strong>
			</div>
		</div>

		{#if result.maintenance > 0}
			<BarChart data={chartData} title="Calories Target Comparison" />
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
	.breakdown-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-left: 4px solid var(--border-color);
	}
	.weight-loss { border-left-color: var(--warning); }
	.weight-maintain { border-left-color: var(--primary); }
	.weight-gain { border-left-color: var(--success); }

	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
		font-weight: 600;
	}
	.breakdown-item strong {
		font-size: 1.3rem;
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
