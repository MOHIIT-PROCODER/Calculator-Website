<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RadioGroup from '../../forms/RadioGroup.svelte';
	import { calculateBodyFat } from '../../../calculations/health/bodyFat';

	let gender = $state<'male' | 'female'>('male');
	let height = $state(175);
	let neck = $state(38);
	let waist = $state(85);
	let hip = $state(90);

	let result = $derived(
		calculateBodyFat({
			gender,
			height,
			neck,
			waist,
			hip
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Body Measurements</h3>
		<RadioGroup
			label="Gender"
			bind:value={gender}
			options={[
				{ value: 'male', label: 'Male' },
				{ value: 'female', label: 'Female' }
			]}
		/>

		<NumberInput label="Height (cm)" min={50} max={250} bind:value={height} />
		<NumberInput label="Neck Circumference (cm)" min={10} max={80} bind:value={neck} />
		<NumberInput label="Waist Circumference (cm)" min={30} max={200} bind:value={waist} />

		{#if gender === 'female'}
			<NumberInput label="Hip Circumference (cm)" min={30} max={200} bind:value={hip} />
		{/if}
	</div>

	<div class="results-panel">
		<h3>Estimated Fat Profile</h3>
		<div class="summary-card glass">
			<span class="summary-label">Body Fat Percentage</span>
			<span class="summary-value">
				{result > 0 ? result.toFixed(1) : '0.0'}%
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
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
