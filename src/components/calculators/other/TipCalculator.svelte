<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';

	let bill = $state(50);
	let tipPercent = $state(15);
	let people = $state(2);

	let totalTip = $derived(bill * (tipPercent / 100));
	let totalAmount = $derived(bill + totalTip);
	let amountPerPerson = $derived(people > 0 ? totalAmount / people : 0);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Dinner Invoice</h3>
		<NumberInput label="Bill Amount ($)" min={0} bind:value={bill} />
		<RangeInput label="Tip Percent (%)" min={5} max={30} step={1} bind:value={tipPercent} />
		<NumberInput label="Number of People" min={1} max={50} bind:value={people} />
	</div>

	<div class="results-panel">
		<h3>Bill Splitting</h3>
		<div class="summary-card glass">
			<span class="summary-label">Amount Per Person</span>
			<span class="summary-value">${amountPerPerson.toFixed(2)}</span>
		</div>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Total Tip</span>
				<strong>${totalTip.toFixed(2)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Bill</span>
				<strong>${totalAmount.toFixed(2)}</strong>
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
	.breakdown-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		text-align: center;
	}
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
