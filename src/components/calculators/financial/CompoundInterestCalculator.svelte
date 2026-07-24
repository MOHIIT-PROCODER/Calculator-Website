<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import LineChart from '../../charts/LineChart.svelte';
	import { calculateCompoundInterest } from '../../../calculations/financial/compoundInterest';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let principal = $state(5000);
	let contribution = $state(200);
	let contributionFrequency = $state<'monthly' | 'annually'>('monthly');
	let interestRate = $state(7);
	let years = $state(15);
	let compoundFrequency = $state<'daily' | 'monthly' | 'quarterly' | 'annually'>('monthly');

	let result = $derived(
		calculateCompoundInterest({
			principal,
			contribution,
			contributionFrequency,
			interestRate,
			years,
			compoundFrequency
		})
	);

	let chartData = $derived(
		result.yearlyDetails.map(detail => ({
			label: `Yr ${detail.year}`,
			value: detail.balance
		}))
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Compound Interest Details</h3>
		<NumberInput label="Initial Deposit ($)" min={0} bind:value={principal} />
		<NumberInput label="Contribution ($)" min={0} bind:value={contribution} />

		<SelectInput
			label="Contribution Frequency"
			bind:value={contributionFrequency}
			options={[
				{ value: 'monthly', label: 'Monthly' },
				{ value: 'annually', label: 'Annually' }
			]}
		/>

		<RangeInput
			label="Interest Rate (%)"
			min={0.1}
			max={20}
			step={0.1}
			bind:value={interestRate}
		/>

		<RangeInput
			label="Duration (Years)"
			min={1}
			max={40}
			step={1}
			bind:value={years}
		/>

		<SelectInput
			label="Compounding Frequency"
			bind:value={compoundFrequency}
			options={[
				{ value: 'daily', label: 'Daily' },
				{ value: 'monthly', label: 'Monthly' },
				{ value: 'quarterly', label: 'Quarterly' },
				{ value: 'annually', label: 'Annually' }
			]}
		/>
	</div>

	<div class="results-panel">
		<div class="summary-card glass">
			<span class="summary-label">Estimated Future Value</span>
			<span class="summary-value">{formatCurrency(result.futureValue)}</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Initial Principal</span>
				<strong>{formatCurrency(result.totalPrincipal)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Deposits</span>
				<strong>{formatCurrency(result.totalContributions)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Interest Earned</span>
				<strong>{formatCurrency(result.totalInterest)}</strong>
			</div>
		</div>

		{#if result.futureValue > 0}
			<LineChart data={chartData} title="Savings Growth Path Over Time" />
		{/if}
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Compound Interest & Wealth Acceleration</h2>
	<p>Compound interest is the addition of interest to the principal sum of a loan or deposit, or in other words, interest on interest. It makes your investments grow exponentially over time.</p>
	<h3>Compounding Frequencies Reference</h3>
	<p>The frequency of compounding directly dictates how often interest is calculated and added to the principal. Here is the standard reference table:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Compounding Type</th>
				<th>Periods per Year (n)</th>
				<th>Effective Annual Yield Benefit</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>Daily</td><td>365</td><td>Highest yield potential (compounded continuously)</td></tr>
			<tr><td>Monthly</td><td>12</td><td>Very high yield (common for savings and credit cards)</td></tr>
			<tr><td>Quarterly</td><td>4</td><td>Moderate yield (typical for corporate bonds)</td></tr>
			<tr><td>Annually</td><td>1</td><td>Standard yield (base annual rate computation)</td></tr>
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
