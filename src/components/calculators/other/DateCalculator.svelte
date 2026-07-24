<script lang="ts">
	import DateInput from '../../forms/DateInput.svelte';
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { addDurationToDate, differenceBetweenDates } from '../../../calculations/other/date';

	let startDateStr = $state(new Date().toISOString().split('T')[0]);
	let amount = $state(10);
	let unit = $state<'days' | 'weeks' | 'months' | 'years'>('days');
	let operation = $state<'add' | 'subtract'>('add');

	let adjustedDate = $derived(
		addDurationToDate(
			new Date(startDateStr),
			amount,
			unit,
			operation
		)
	);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Add or Subtract Duration</h3>
		<DateInput label="Start Date" bind:value={startDateStr} />
		<div class="operation-row">
			<SelectInput
				label="Operation"
				bind:value={operation}
				options={[
					{ value: 'add', label: 'Add' },
					{ value: 'subtract', label: 'Subtract' }
				]}
			/>
			<NumberInput label="Amount" min={1} bind:value={amount} />
		</div>
		<SelectInput
			label="Unit"
			bind:value={unit}
			options={[
				{ value: 'days', label: 'Days' },
				{ value: 'weeks', label: 'Weeks' },
				{ value: 'months', label: 'Months' },
				{ value: 'years', label: 'Years' }
			]}
		/>
	</div>

	<div class="results-panel">
		<h3>Adjusted Date</h3>
		<div class="summary-card glass">
			<span class="summary-label">Result Date</span>
			<span class="summary-value">
				{adjustedDate.toLocaleDateString(undefined, { dateStyle: 'full' })}
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
	.operation-row {
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
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
