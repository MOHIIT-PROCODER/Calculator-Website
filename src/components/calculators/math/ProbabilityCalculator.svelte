<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let occurrences = $state(2);
	let trials = $state(10);

	let probability = $derived(trials > 0 ? occurrences / trials : 0);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Single Event Probability</h3>
		<NumberInput label="Number of Occurrences" min={0} bind:value={occurrences} />
		<NumberInput label="Total Possible Outcomes / Trials" min={1} bind:value={trials} />
	</div>

	<div class="results-panel">
		<h3>Probability Result</h3>
		<div class="summary-card glass">
			<span class="summary-label">Probability (P)</span>
			<span class="summary-value">{(probability * 100).toFixed(2)}%</span>
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
