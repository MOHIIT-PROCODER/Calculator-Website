<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RadioGroup from '../../forms/RadioGroup.svelte';
	import { calculateIdealWeight } from '../../../calculations/health/idealWeight';

	let height = $state(175);
	let gender = $state<'male' | 'female'>('male');

	let result = $derived(calculateIdealWeight(height, gender));
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Ideal Weight Parameters</h3>
		<RadioGroup
			label="Gender"
			bind:value={gender}
			options={[
				{ value: 'male', label: 'Male' },
				{ value: 'female', label: 'Female' }
			]}
		/>
		<NumberInput label="Height (cm)" min={100} max={250} bind:value={height} />
	</div>

	<div class="results-panel">
		<h3>Estimated Ideal Weight Profiles</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Devine Formula</span>
				<strong>{result.devine} kg</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Robinson Formula</span>
				<strong>{result.robinson} kg</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Miller Formula</span>
				<strong>{result.miller} kg</strong>
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
	.breakdown-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.25rem;
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
