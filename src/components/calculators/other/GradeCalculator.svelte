<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let score = $state(85);

	let letterGrade = $derived.by(() => {
		if (score >= 90) return 'A';
		if (score >= 80) return 'B';
		if (score >= 70) return 'C';
		if (score >= 60) return 'D';
		return 'F';
	});
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Grade Evaluation</h3>
		<NumberInput label="Enter Score (%)" min={0} max={100} bind:value={score} />
	</div>

	<div class="results-panel">
		<h3>Evaluation Result</h3>
		<div class="summary-card glass">
			<span class="summary-label">Letter Grade</span>
			<span class="summary-value">{letterGrade}</span>
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
