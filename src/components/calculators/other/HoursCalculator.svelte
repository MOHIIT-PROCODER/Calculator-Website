<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let rate = $state(20);
	let workedHours = $state(40);

	let totalPay = $derived(rate * workedHours);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Working Hours</h3>
		<NumberInput label="Hourly Pay Rate ($)" min={0} bind:value={rate} />
		<NumberInput label="Hours Worked" min={0} bind:value={workedHours} />
	</div>

	<div class="results-panel">
		<h3>Earnings</h3>
		<div class="summary-card glass">
			<span class="summary-label">Estimated Gross Pay</span>
			<span class="summary-value">${totalPay.toFixed(2)}</span>
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

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
