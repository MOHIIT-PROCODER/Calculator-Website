<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import { calculateROI } from '../../../calculations/financial/roi';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let amountInvested = $state(5000);
	let amountReturned = $state(7500);
	let investmentLength = $state(3);

	let result = $derived(
		calculateROI({
			amountInvested,
			amountReturned,
			investmentLength
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>ROI Details</h3>
		<NumberInput label="Amount Invested ($)" min={0} bind:value={amountInvested} />
		<NumberInput label="Amount Returned ($)" min={0} bind:value={amountReturned} />
		<RangeInput label="Investment Length (Years)" min={1} max={30} step={1} bind:value={investmentLength} />
	</div>

	<div class="results-panel">
		<h3>Investment Returns</h3>
		<div class="summary-card glass">
			<span class="summary-label">Return on Investment (ROI)</span>
			<span class="summary-value">{result.roi.toFixed(2)}%</span>
		</div>
		<div class="summary-card glass annualized-card">
			<span class="summary-label">Annualized ROI</span>
			<span class="summary-value">{result.annualizedRoi.toFixed(2)}%</span>
		</div>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Net Profit</span>
				<strong>{formatCurrency(result.investmentGain)}</strong>
			</div>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Return on Investment (ROI) and Asset Yields</h2>
	<p>Return on Investment (ROI) is a primary financial metric used to evaluate the efficiency or profitability of an investment. Whether you are analyzing stock purchases, real estate transactions, business expansions, or advertising campaigns, ROI measures the net return relative to the initial investment cost.</p>
	<h3>Understanding ROI Calculations</h3>
	<p>ROI is expressed as a percentage, making it easy to compare returns across different asset classes. Key metrics include:</p>
	<ul>
		<li><strong>Net Profit:</strong> The final value of the investment minus its initial cost.</li>
		<li><strong>ROI Percentage:</strong> (Net Profit / Initial Cost) * 100. A positive ROI indicates profitability, while a negative ROI represents a financial loss.</li>
		<li><strong>Annualized ROI:</strong> The average annual return earned over the holding period, allowing you to compare short-term and long-term investments.</li>
	</ul>
	<h3>ROI and Yield Reference Table</h3>
	<p>This table compares ROI percentages and annualized returns based on purchase costs and final payouts over different timeframes:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Purchase Cost</th>
				<th>Payout Value</th>
				<th>Net Return ($)</th>
				<th>Total ROI (%)</th>
				<th>Annualized (3 Yrs)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$10,000</td><td>$12,500</td><td>$2,500</td><td>25.0%</td><td>7.72%</td></tr>
			<tr><td>$10,000</td><td>$15,000</td><td>$5,000</td><td>50.0%</td><td>14.47%</td></tr>
			<tr><td>$25,000</td><td>$35,000</td><td>$10,000</td><td>40.0%</td><td>11.87%</td></tr>
			<tr><td>$50,000</td><td>$80,000</td><td>$30,000</td><td>60.0%</td><td>16.96%</td></tr>
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
	.annualized-card {
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
	.breakdown-grid {
		display: grid;
		grid-template-columns: 1fr;
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
