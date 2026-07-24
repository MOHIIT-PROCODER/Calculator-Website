<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import PieChart from '../../charts/PieChart.svelte';
	import { calculateMortgage } from '../../../calculations/financial/mortgage';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let homeValue = $state(300000);
	let downPayment = $state(60000);
	let interestRate = $state(4.5);
	let loanTerm = $state(30);
	let propertyTaxRate = $state(1.2);
	let homeInsurance = $state(1200);

	let result = $derived(
		calculateMortgage({
			homeValue,
			downPayment,
			interestRate,
			loanTerm,
			propertyTaxRate,
			homeInsurance
		})
	);

	let chartData = $derived([
		{ label: 'Principal & Interest', value: result.monthlyPI, color: 'var(--primary)' },
		{ label: 'Property Tax', value: result.monthlyTax, color: 'var(--warning)' },
		{ label: 'Home Insurance', value: result.monthlyInsurance, color: 'var(--success)' },
		{ label: 'PMI', value: result.monthlyPMI, color: 'var(--error)' }
	]);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Mortgage Details</h3>
		<NumberInput label="Home Value ($)" min={0} bind:value={homeValue} />
		
		<RangeInput
			label="Down Payment ($)"
			min={0}
			max={homeValue}
			step={1000}
			bind:value={downPayment}
		/>
		
		<RangeInput
			label="Interest Rate (%)"
			min={0.1}
			max={15}
			step={0.1}
			bind:value={interestRate}
		/>
		
		<RangeInput
			label="Loan Term (Years)"
			min={5}
			max={40}
			step={5}
			bind:value={loanTerm}
		/>

		<NumberInput label="Property Tax Rate (%)" min={0} step={0.01} bind:value={propertyTaxRate} />
		<NumberInput label="Annual Home Insurance ($)" min={0} bind:value={homeInsurance} />
	</div>

	<div class="results-panel">
		<div class="summary-card glass">
			<span class="summary-label">Estimated Monthly Payment</span>
			<span class="summary-value">{formatCurrency(result.totalMonthly)}</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Principal & Interest</span>
				<strong>{formatCurrency(result.monthlyPI)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Property Taxes</span>
				<strong>{formatCurrency(result.monthlyTax)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Home Insurance</span>
				<strong>{formatCurrency(result.monthlyInsurance)}</strong>
			</div>
			{#if result.monthlyPMI > 0}
				<div class="breakdown-item glass pmi-active">
					<span>PMI (Down Payment &lt; 20%)</span>
					<strong>{formatCurrency(result.monthlyPMI)}</strong>
				</div>
			{/if}
		</div>

		{#if result.totalMonthly > 0}
			<PieChart data={chartData} title="Monthly Payment Breakdown" />
		{/if}
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Mortgage Calculations & Home Financing</h2>
	<p>A Mortgage Calculator is an essential financial tool designed to estimate monthly payments, total interest costs, and amortization schedules for home loans. Purchasing real estate is typically the largest financial transaction in an individual's life. Understanding how interest rates, down payments, and loan terms interact allows prospective homebuyers to make informed decisions and secure terms that align with their long-term financial health.</p>
	<h3>Fixed-Rate vs. Adjustable-Rate Mortgages (ARMs)</h3>
	<p>Homebuyers can choose from several loan structures, each with distinct advantages and cost trajectories. Consider these common configurations:</p>
	<ul>
		<li><strong>30-Year Fixed-Rate Mortgage:</strong> The most popular loan term. It offers lower monthly payments by spreading the principal over three decades, but carries higher interest rates and results in significantly higher total interest paid over the life of the loan.</li>
		<li><strong>15-Year Fixed-Rate Mortgage:</strong> Requires higher monthly payments, but qualifies for lower interest rates and saves homebuyers 50% or more in total interest charges compared to 30-year options.</li>
		<li><strong>Adjustable-Rate Mortgages (ARMs):</strong> Feature a fixed interest rate for an initial period (e.g., 5 or 7 years), after which the rate adjusts annually based on market indexes. ARMs can be beneficial for buyers planning to sell or refinance before the initial rate period expires.</li>
	</ul>
	<h3>The Elements of a Mortgage Payment (PITI)</h3>
	<p>A standard mortgage payment consists of four primary components, often abbreviated as PITI:</p>
	<ul>
		<li><strong>Principal (P):</strong> The portion of the payment that directly reduces the outstanding loan balance.</li>
		<li><strong>Interest (I):</strong> The fee charged by the lender for borrowing the capital, which compounds monthly.</li>
		<li><strong>Taxes (T):</strong> Property taxes collected by local governments, often held in an escrow account and paid by the lender on your behalf.</li>
		<li><strong>Insurance (I):</strong> Homeowners insurance (to protect the property) and Private Mortgage Insurance (PMI), which is typically required if your down payment is less than 20% of the home's purchase price.</li>
	</ul>
	<h3>Mortgage Cost Comparison ($320,000 Loan Principal)</h3>
	<p>This table compares monthly principal and interest (P&I) payments and total interest costs for a $320,000 loan balance across common interest rates and terms:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Annual Rate (%)</th>
				<th>15-Year P&I ($)</th>
				<th>15-Year Total Interest ($)</th>
				<th>30-Year P&I ($)</th>
				<th>30-Year Total Interest ($)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>5.5%</td><td>$2,615.11</td><td>$150,719</td><td>$1,816.92</td><td>$334,091</td></tr>
			<tr><td>6.5%</td><td>$2,788.58</td><td>$181,944</td><td>$2,022.62</td><td>$408,143</td></tr>
			<tr><td>7.5%</td><td>$2,966.70</td><td>$214,006</td><td>$2,237.49</td><td>$485,496</td></tr>
			<tr><td>8.5%</td><td>$3,149.20</td><td>$246,857</td><td>$2,460.54</td><td>$565,794</td></tr>
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
		padding: 2rem;
		text-align: center;
		background: linear-gradient(135deg, var(--primary-light), var(--bg-secondary));
		border: 1px solid var(--primary);
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
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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
	.pmi-active {
		border-color: var(--error);
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
