<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let beforeTaxAmount = $state(100);
	let taxRate = $state(8.25);

	let taxAmount = $derived(beforeTaxAmount * (taxRate / 100));
	let totalAmount = $derived(beforeTaxAmount + taxAmount);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Sales Tax Details</h3>
		<NumberInput label="Net Price (Before Tax) ($)" min={0} bind:value={beforeTaxAmount} />
		<NumberInput label="Sales Tax Rate (%)" min={0} max={100} step={0.01} bind:value={taxRate} />
	</div>

	<div class="results-panel">
		<h3>Sales Tax Calculation</h3>
		<div class="summary-card glass">
			<span class="summary-label">Tax Amount</span>
			<span class="summary-value">{formatCurrency(taxAmount)}</span>
		</div>
		<div class="summary-card glass total-val">
			<span class="summary-label">Total Price (After Tax)</span>
			<span class="summary-value">{formatCurrency(totalAmount)}</span>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Sales Tax & Value-Added Consumer Taxes</h2>
	<p>Sales tax calculations are a routine part of daily retail transactions, commercial purchases, and business accounting. Sales tax is an ad valorem consumption tax imposed by municipal, state, or federal governments on the sale of goods and services. A Sales Tax Calculator helps buyers and sellers calculate gross totals and back-calculate net prices from tax-inclusive totals.</p>
	<h3>Understanding Sales Tax Calculations</h3>
	<p>Calculating sales tax is straightforward, but it requires identifying base prices and tax percentages:</p>
	<ul>
		<li><strong>Net Price (Before Tax):</strong> The base cost of an item or service before taxes are applied.</li>
		<li><strong>Tax Rate (%):</strong> The tax percentage set by local jurisdictions, which varies significantly by region (e.g., states, counties, or municipalities).</li>
		<li><strong>Total Price (After Tax):</strong> The gross amount paid by the consumer: Net Price * (1 + Tax Rate).</li>
		<li><strong>Reverse Sales Tax:</strong> Back-calculating the net price from a tax-inclusive total: Total Price / (1 + Tax Rate).</li>
	</ul>
	<h3>Total Price Comparison at Common Tax Rates</h3>
	<p>This table compares gross purchase costs for standard item prices across common sales tax rates:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Net Base Price ($)</th>
				<th>5% Tax Rate</th>
				<th>7% Tax Rate</th>
				<th>9% Tax Rate</th>
				<th>12% Tax Rate</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$10.00</td><td>$10.50</td><td>$10.70</td><td>$10.90</td><td>$11.20</td></tr>
			<tr><td>$50.00</td><td>$52.50</td><td>$53.50</td><td>$54.50</td><td>$56.00</td></tr>
			<tr><td>$100.00</td><td>$105.00</td><td>$107.00</td><td>$109.00</td><td>$112.00</td></tr>
			<tr><td>$500.00</td><td>$525.00</td><td>$535.00</td><td>$545.00</td><td>$560.00</td></tr>
		</tbody>
	</table>
</section>
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
	.total-val {
		background: linear-gradient(135deg, var(--primary-light), var(--bg-secondary));
		border-color: var(--primary);
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
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}


	.seo-section {
		margin-top: 2.5rem;
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		grid-column: span 2;
	}
	.seo-section h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		border-bottom: 1.5px solid var(--border-color);
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.seo-section h3 {
		font-size: 1.2rem;
		font-weight: 650;
		color: var(--text-primary);
		margin-top: 1rem;
	}
	.seo-section p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 0.95rem;
		margin: 0;
	}
	.seo-section ul {
		list-style-type: disc;
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: var(--text-secondary);
		font-size: 0.95rem;
	}
	.seo-section ul li {
		line-height: 1.5;
	}
	@media (max-width: 768px) {
		.seo-section {
			grid-column: span 1;
		}
	}
</style>
