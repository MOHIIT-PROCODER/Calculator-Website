<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import { calculateTriangleFromSides } from '../../../calculations/math/triangle';

	let a = $state(3);
	let b = $state(4);
	let c = $state(5);

	let result = $derived(calculateTriangleFromSides(a, b, c));
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Triangle Sides</h3>
		<NumberInput label="Side Length a" min={0.1} bind:value={a} />
		<NumberInput label="Side Length b" min={0.1} bind:value={b} />
		<NumberInput label="Side Length c" min={0.1} bind:value={c} />
	</div>

	<div class="results-panel">
		<h3>Properties</h3>
		{#if result.isValid}
			<div class="summary-card glass">
				<span class="summary-label">Area</span>
				<span class="summary-value">{result.area} units²</span>
			</div>
			
			<div class="breakdown-grid">
				<div class="breakdown-item glass">
					<span>Perimeter</span>
					<strong>{result.perimeter}</strong>
				</div>
				<div class="breakdown-item glass">
					<span>Angle α (facing a)</span>
					<strong>{result.alpha}°</strong>
				</div>
				<div class="breakdown-item glass">
					<span>Angle β (facing b)</span>
					<strong>{result.beta}°</strong>
				</div>
				<div class="breakdown-item glass">
					<span>Angle γ (facing c)</span>
					<strong>{result.gamma}°</strong>
				</div>
			</div>
		{:else}
			<div class="summary-card glass error-card">
				<span class="error-msg">⚠️ Invalid Triangle! Sum of two sides must be greater than the third side.</span>
			</div>
		{/if}
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
		font-size: 2.25rem;
		font-weight: 700;
		color: var(--primary);
	}
	.breakdown-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
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
	.error-card {
		border-color: var(--error);
		background: rgba(239, 68, 68, 0.05);
	}
	.error-msg {
		color: var(--error);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
