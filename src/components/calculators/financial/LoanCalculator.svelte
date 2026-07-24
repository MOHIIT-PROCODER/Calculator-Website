<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import BarChart from '../../charts/BarChart.svelte';
	import { calculateLoan } from '../../../calculations/financial/loan';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let loanAmount = $state(20000);
	let interestRate = $state(6.5);
	let loanTerm = $state(5);
	let paymentFrequency = $state<'monthly' | 'biweekly' | 'weekly'>('monthly');

	let result = $derived(
		calculateLoan({
			loanAmount,
			interestRate,
			loanTerm,
			paymentFrequency
		})
	);

	let chartData = $derived([
		{ label: 'Principal', value: loanAmount, color: 'var(--primary)' },
		{ label: 'Interest', value: result.totalInterest, color: 'var(--warning)' }
	]);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Loan Details</h3>
		<NumberInput label="Loan Amount ($)" min={0} bind:value={loanAmount} />
		
		<RangeInput
			label="Interest Rate (%)"
			min={0.1}
			max={25}
			step={0.1}
			bind:value={interestRate}
		/>
		
		<RangeInput
			label="Loan Term (Years)"
			min={1}
			max={30}
			step={1}
			bind:value={loanTerm}
		/>

		<SelectInput
			label="Payment Frequency"
			bind:value={paymentFrequency}
			options={[
				{ value: 'monthly', label: 'Monthly' },
				{ value: 'biweekly', label: 'Bi-Weekly' },
				{ value: 'weekly', label: 'Weekly' }
			]}
		/>
	</div>

	<div class="results-panel">
		<div class="summary-card glass">
			<span class="summary-label">Periodic Payment ({paymentFrequency})</span>
			<span class="summary-value">{formatCurrency(result.periodicPayment)}</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Total Principal</span>
				<strong>{formatCurrency(loanAmount)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Interest</span>
				<strong>{formatCurrency(result.totalInterest)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Payments</span>
				<strong>{formatCurrency(result.totalPaid)}</strong>
			</div>
		</div>

		{#if result.totalInterest > 0}
			<BarChart data={chartData} title="Principal vs Interest Breakdown" />
		{/if}
	</div>
</div>

<div class="schedule-section glass animate-fade-in">
	<h3>Amortization Schedule</h3>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th>Period</th>
					<th>Payment</th>
					<th>Principal Paid</th>
					<th>Interest Paid</th>
					<th>Remaining Balance</th>
				</tr>
			</thead>
			<tbody>
				<!-- Show first 12 periods, and if longer, truncate for performance -->
				{#each result.amortizationSchedule.slice(0, 24) as row}
					<tr>
						<td>{row.period}</td>
						<td>{formatCurrency(row.payment)}</td>
						<td>{formatCurrency(row.principal)}</td>
						<td>{formatCurrency(row.interest)}</td>
						<td>{formatCurrency(row.remainingBalance)}</td>
					</tr>
				{/each}
				{#if result.amortizationSchedule.length > 24}
					<tr>
						<td colspan="5" class="schedule-more">
							... and {result.amortizationSchedule.length - 24} more periods.
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Understanding Loan Amortization and Borrowing Costs</h2>
	<p>Amortization is the process of spreading a loan into a series of fixed periodic payments. Each payment contributes to both the principal balance and the interest charges. A Loan Calculator helps you estimate borrowing costs for personal loans, business financing, auto purchases, or consolidate credit card debts, ensuring you borrow within your budget boundaries.</p>
	<h3>Understanding APR vs. Nominal Interest Rates</h3>
	<p>When comparing loan offers, it is vital to distinguish between the nominal interest rate and the Annual Percentage Rate (APR):</p>
	<ul>
		<li><strong>Nominal Interest Rate:</strong> The base interest rate charged on the loan balance, excluding auxiliary fees.</li>
		<li><strong>Annual Percentage Rate (APR):</strong> The comprehensive cost of borrowing, which integrates both the nominal interest rate and any upfront origination fees, closing costs, or administrative processing points. The APR provides a more accurate tool for comparing different loan offers.</li>
		<li><strong>Secured vs. Unsecured Loans:</strong> Secured loans require collateral (like a home or car) and typically carry lower interest rates. Unsecured loans (like personal loans or credit cards) do not require collateral, carrying higher interest rates due to increased lender risk.</li>
	</ul>
	<h3>Factors in Loan Optimization</h3>
	<p>Borrowers can adjust several variables to optimize their loans:</p>
	<ul>
		<li><strong>Payment Frequency:</strong> Making bi-weekly payments instead of monthly payments can slightly reduce total interest costs by accelerating principal reduction.</li>
		<li><strong>Prepayment Clauses:</strong> Verify if your loan contract includes prepayment penalties, which charge fees for paying off the loan balance early.</li>
		<li><strong>Loan Term:</strong> Choose the shortest term with monthly payments you can comfortably afford to minimize total interest charges.</li>
	</ul>
	<h3>Monthly Payments per $10,000 borrowed</h3>
	<p>Refer to this reference table to estimate monthly payments and total interest costs at common interest rates and loan term lengths:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Annual Rate (%)</th>
				<th>3-Year Payment ($)</th>
				<th>3-Year Total Interest ($)</th>
				<th>5-Year Payment ($)</th>
				<th>5-Year Total Interest ($)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>5.0%</td><td>$299.71</td><td>$789</td><td>$188.71</td><td>$1,323</td></tr>
			<tr><td>7.5%</td><td>$311.06</td><td>$1,198</td><td>$200.39</td><td>$2,023</td></tr>
			<tr><td>10.0%</td><td>$322.67</td><td>$1,616</td><td>$212.47</td><td>$2,748</td></tr>
			<tr><td>12.5%</td><td>$334.54</td><td>$2,043</td><td>$224.94</td><td>$3,496</td></tr>
			<tr><td>15.0%</td><td>$346.65</td><td>$2,479</td><td>$237.90</td><td>$4,274</td></tr>
		</tbody>
	</table>
</section>
<style>
	.calculator-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
		margin-bottom: 2rem;
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
		grid-template-columns: repeat(3, 1fr);
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
	.schedule-section {
		padding: 2rem;
		width: 100%;
	}
	.table-container {
		overflow-x: auto;
		width: 100%;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}
	th, td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--border-color);
		font-size: 0.95rem;
	}
	th {
		font-weight: 600;
		color: var(--text-secondary);
	}
	tr:hover {
		background: var(--bg-tertiary);
	}
	.schedule-more {
		text-align: center;
		color: var(--text-tertiary);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
		.breakdown-grid {
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
