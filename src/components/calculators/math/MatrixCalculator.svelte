<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let a = $state(1);
	let b = $state(2);
	let c = $state(3);
	let d = $state(4);

	let determinant = $derived(a * d - b * c);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>2×2 Matrix Coefficients</h3>
		<div class="matrix-grid">
			<NumberInput label="a₁₁" bind:value={a} />
			<NumberInput label="a₁₂" bind:value={b} />
			<NumberInput label="a₂₁" bind:value={c} />
			<NumberInput label="a₂₂" bind:value={d} />
		</div>
	</div>

	<div class="results-panel">
		<h3>Properties</h3>
		<div class="summary-card glass">
			<span class="summary-label">Determinant (det A)</span>
			<span class="summary-value">{determinant}</span>
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
	.matrix-grid {
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

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
