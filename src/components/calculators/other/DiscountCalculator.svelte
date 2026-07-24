<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let price = $state(100);
	let discountPercent = $state(20);

	let savings = $derived(price * (discountPercent / 100));
	let finalPrice = $derived(price - savings);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Product Pricing</h3>
		<NumberInput label="Original Price ($)" min={0} bind:value={price} />
		<RangeInput label="Discount Percent (%)" min={1} max={99} step={1} bind:value={discountPercent} />
	</div>

	<div class="results-panel">
		<h3>Final Offer</h3>
		<div class="summary-card glass">
			<span class="summary-label">Final Price</span>
			<span class="summary-value">{formatCurrency(finalPrice)}</span>
		</div>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>You Save</span>
				<strong class="text-success">{formatCurrency(savings)}</strong>
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
		grid-template-columns: 1fr;
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
		font-size: 1.25rem;
	}
	.text-success {
		color: var(--success);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
