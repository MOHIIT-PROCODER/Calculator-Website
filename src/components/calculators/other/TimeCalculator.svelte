<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let hrs = $state(2);
	let mins = $state(30);

	let totalMins = $derived(hrs * 60 + mins);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Duration Inputs</h3>
		<NumberInput label="Hours" min={0} bind:value={hrs} />
		<NumberInput label="Minutes" min={0} max={59} bind:value={mins} />
	</div>

	<div class="results-panel">
		<h3>Total Duration</h3>
		<div class="summary-card glass">
			<span class="summary-label">Total Minutes</span>
			<span class="summary-value">{totalMins} mins</span>
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
