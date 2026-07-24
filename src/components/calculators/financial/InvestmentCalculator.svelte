<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { calculateInvestment } from '../../../calculations/financial/investment';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let startingAmount = $state(10000);
	let contribution = $state(500);
	let contributionFrequency = $state<'monthly' | 'annually'>('monthly');
	let rateOfReturn = $state(8);
	let years = $state(20);
	let inflationRate = $state(2.5);

	let result = $derived(
		calculateInvestment({
			startingAmount,
			contribution,
			contributionFrequency,
			rateOfReturn,
			years,
			inflationRate
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Investment Projections</h3>
		<NumberInput label="Starting Capital ($)" min={0} bind:value={startingAmount} />
		<NumberInput label="Contributions ($)" min={0} bind:value={contribution} />
		<SelectInput
			label="Contribution Frequency"
			bind:value={contributionFrequency}
			options={[
				{ value: 'monthly', label: 'Monthly' },
				{ value: 'annually', label: 'Annually' }
			]}
		/>
		<RangeInput label="Annual Rate of Return (%)" min={0} max={25} step={0.5} bind:value={rateOfReturn} />
		<RangeInput label="Duration (Years)" min={1} max={40} step={1} bind:value={years} />
		<RangeInput label="Annual Inflation Rate (%)" min={0} max={10} step={0.1} bind:value={inflationRate} />
	</div>

	<div class="results-panel">
		<div class="summary-card glass">
			<span class="summary-label">Nominal Future Value</span>
			<span class="summary-value">{formatCurrency(result.nominalValue)}</span>
		</div>

		<div class="summary-card glass real-value-card">
			<span class="summary-label">Real Future Value (Inflation Adjusted)</span>
			<span class="summary-value">{formatCurrency(result.realValue)}</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Total Deposits</span>
				<strong>{formatCurrency(startingAmount + result.totalContributions)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Investment Gains</span>
				<strong>{formatCurrency(result.totalEarnings)}</strong>
			</div>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Long-Term Investments & Portfolio Projections</h2>
	<p>An Investment Calculator is a vital financial instrument designed to project the future valuation of assets, mutual funds, or equity portfolios. Investing involves deploying capital today to achieve compounding yields and capital gains in the future. By modeling initial investments alongside recurring contributions, you can map out financial goals like college funds, home down payments, or business capital reserves.</p>
	<h3>Key Performance Metrics for Portfolios</h3>
	<p>To maximize portfolio returns, investors must balance risk, inflation targets, and contribution frequencies. Crucial parameters include:</p>
	<ul>
		<li><strong>Starting Capital:</strong> The initial balance deployed into the market or fund.</li>
		<li><strong>Periodic Contributions:</strong> Regular deposits (monthly, quarterly, or annually) that boost investment velocity.</li>
		<li><strong>Annual Rate of Return:</strong> The expected rate of return on your investment, usually matching stock market benchmarks (e.g., 7% to 10% before inflation).</li>
		<li><strong>Investment Horizon:</strong> The length of time your funds remain invested to leverage compound growth.</li>
	</ul>
	<h3>Future Value Projections (7% Rate of Return)</h3>
	<p>This table shows the future value of investments with different monthly contributions over 10 to 30 years, assuming a $0 starting balance and a 7% annual yield compounded monthly:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Monthly Contribution ($)</th>
				<th>10-Year Horizon</th>
				<th>20-Year Horizon</th>
				<th>30-Year Horizon</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$100 / month</td><td>$17,308</td><td>$52,093</td><td>$121,997</td></tr>
			<tr><td>$300 / month</td><td>$51,925</td><td>$156,278</td><td>$365,991</td></tr>
			<tr><td>$500 / month</td><td>$86,542</td><td>$260,463</td><td>$609,985</td></tr>
			<tr><td>$1,000 / month</td><td>$173,085</td><td>$520,927</td><td>$1,219,971</td></tr>
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
	.real-value-card {
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
	}
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.breakdown-item strong {
		font-size: 1.2rem;
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
