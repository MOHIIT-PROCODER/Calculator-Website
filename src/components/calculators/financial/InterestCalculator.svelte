<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let principal = $state(1000);
	let interestRate = $state(5);
	let years = $state(3);

	let interestEarned = $derived(principal * (interestRate / 100) * years);
	let totalValue = $derived(principal + interestEarned);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Simple Interest</h3>
		<NumberInput label="Principal Investment ($)" min={0} bind:value={principal} />
		<RangeInput label="Annual Interest Rate (%)" min={0.5} max={25} step={0.5} bind:value={interestRate} />
		<RangeInput label="Term (Years)" min={1} max={30} step={1} bind:value={years} />
	</div>

	<div class="results-panel">
		<div class="summary-card glass">
			<span class="summary-label">Interest Earned</span>
			<span class="summary-value">{formatCurrency(interestEarned)}</span>
		</div>
		<div class="summary-card glass total-val">
			<span class="summary-label">Total Value</span>
			<span class="summary-value">{formatCurrency(totalValue)}</span>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Interest Accumulations and Calculations</h2>
	<p>Interest calculations form the mathematical backbone of modern lending, credit, and savings tools. Whether you are depositing money into a certificate of deposit (CD) to earn yield or borrowing money from a commercial lender, interest represents the cost of capital. Simple interest is computed strictly on the original principal sum, unlike compound interest which accumulates interest on past interest earned.</p>
	<h3>Simple Interest Formula Breakdown</h3>
	<p>The mathematical equation for calculating simple interest is expressed as <strong>I = P * r * t</strong>. Each variable represents a crucial parameter:</p>
	<ul>
		<li><strong>Principal (P):</strong> The initial sum of money borrowed, lent, or deposited before interest starts accumulating.</li>
		<li><strong>Annual Interest Rate (r):</strong> The percentage rate charged or earned per year, expressed as a decimal for calculation (e.g., 5.0% is written as 0.05).</li>
		<li><strong>Time (t):</strong> The borrowing timeframe, measured in years. For intervals expressed in months or days, the duration is normalized (e.g., 6 months is 0.5 years).</li>
	</ul>
	<h3>Accumulated Simple Interest Reference ($10,000 Principal)</h3>
	<p>This table compares total simple interest earned on a $10,000 deposit over common durations and rates:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Annual Rate (%)</th>
				<th>1-Year Interest</th>
				<th>3-Year Interest</th>
				<th>5-Year Interest</th>
				<th>Total Balance (5 Yrs)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>3.0%</td><td>$300</td><td>$900</td><td>$1,500</td><td>$11,500</td></tr>
			<tr><td>5.0%</td><td>$500</td><td>$1,500</td><td>$2,500</td><td>$12,500</td></tr>
			<tr><td>7.0%</td><td>$700</td><td>$2,100</td><td>$3,500</td><td>$13,500</td></tr>
			<tr><td>9.0%</td><td>$900</td><td>$2,700</td><td>$4,500</td><td>$14,500</td></tr>
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
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
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
