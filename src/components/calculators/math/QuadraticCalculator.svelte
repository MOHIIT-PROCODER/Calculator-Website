<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import { solveQuadratic } from '../../../calculations/math/quadratic';

	let a = $state(1);
	let b = $state(-5);
	let c = $state(6);

	let result = $derived(solveQuadratic(a, b, c));
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Coefficients (ax² + bx + c = 0)</h3>
		<NumberInput label="a" bind:value={a} />
		<NumberInput label="b" bind:value={b} />
		<NumberInput label="c" bind:value={c} />
	</div>

	<div class="results-panel">
		<h3>Roots</h3>
		<div class="summary-card glass">
			<span class="summary-label">Discriminant (D)</span>
			<span class="summary-value">{result.discriminant}</span>
		</div>
		
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Root 1 (x₁)</span>
				<strong>{result.root1}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Root 2 (x₂)</span>
				<strong>{result.root2}</strong>
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
		padding: 1.5rem;
		text-align: center;
	}
	.summary-label {
		display: block;
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 2rem;
		font-weight: 700;
		color: var(--primary);
	}
	.breakdown-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
	}
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.25rem;
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
