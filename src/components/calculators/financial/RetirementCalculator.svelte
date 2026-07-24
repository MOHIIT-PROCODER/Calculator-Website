<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import RangeInput from '../../forms/RangeInput.svelte';
	import { calculateRetirement } from '../../../calculations/financial/retirement';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let currentAge = $state(30);
	let retirementAge = $state(65);
	let lifeExpectancy = $state(85);
	let currentSavings = $state(20000);
	let monthlyContribution = $state(500);
	let investmentReturn = $state(7.5);
	let postRetirementReturn = $state(4);
	let monthlyExpensesTarget = $state(3000);
	let inflationRate = $state(2.5);

	let result = $derived(
		calculateRetirement({
			currentAge,
			retirementAge,
			lifeExpectancy,
			currentSavings,
			monthlyContribution,
			investmentReturn,
			postRetirementReturn,
			monthlyExpensesTarget,
			inflationRate
		})
	);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Retirement Plan</h3>
		<div class="age-row">
			<NumberInput label="Current Age" min={18} max={100} bind:value={currentAge} />
			<NumberInput label="Retirement Age" min={currentAge} max={100} bind:value={retirementAge} />
		</div>
		<NumberInput label="Life Expectancy" min={retirementAge} max={120} bind:value={lifeExpectancy} />

		<NumberInput label="Current Savings ($)" min={0} bind:value={currentSavings} />
		<NumberInput label="Monthly Saving Contribution ($)" min={0} bind:value={monthlyContribution} />
		
		<RangeInput label="Pre-Retirement Annual Return (%)" min={1} max={15} step={0.1} bind:value={investmentReturn} />
		<RangeInput label="Post-Retirement Annual Return (%)" min={1} max={10} step={0.1} bind:value={postRetirementReturn} />
		<NumberInput label="Target Monthly Budget in Retirement ($)" min={0} bind:value={monthlyExpensesTarget} />
		<RangeInput label="Annual Inflation Rate (%)" min={0} max={10} step={0.1} bind:value={inflationRate} />
	</div>

	<div class="results-panel">
		<div class="summary-card glass" class:goal-met={result.isTargetMet} class:goal-missed={!result.isTargetMet}>
			<span class="summary-label">Savings at Retirement</span>
			<span class="summary-value">{formatCurrency(result.savingsAtRetirement)}</span>
			<span class="summary-status">
				{#if result.isTargetMet}
					🎉 Your savings will last through your expectancy! (lasts {result.nestEggLastsYears} years)
				{:else}
					⚠️ Savings will run out in {result.nestEggLastsYears} years. Consider saving more.
				{/if}
			</span>
		</div>

		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Purchasing Power (Real $)</span>
				<strong>{formatCurrency(result.savingsAtRetirementReal)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Future Monthly Cost</span>
				<strong>{formatCurrency(result.monthlyIncomeInflationAdjusted)}</strong>
			</div>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Retirement Runways & Savings Goals</h2>
	<p>Retirement planning is the foundation of long-term wealth management, ensuring financial independence once your primary working years conclude. A Retirement Calculator helps you project how much capital is required to maintain your desired lifestyle, factoring in inflation, savings rates, and post-retirement safe withdrawal limits.</p>
	<h3>Core Principles of Retirement Projections</h3>
	<p>Developing a robust retirement roadmap requires estimating annual expenses and evaluating investment runway targets:</p>
	<ul>
		<li><strong>Annual Retirement Expenses:</strong> The estimated budget needed to cover housing, healthcare, utilities, and leisure during retirement.</li>
		<li><strong>The 4% Safe Withdrawal Rule:</strong> A popular financial guideline stating that withdrawing 4% of your total retirement nest egg in the first year, adjusted for inflation in subsequent years, prevents you from running out of money over a 30-year retirement.</li>
		<li><strong>Retirement Horizon:</strong> The age at which you plan to stop working, determining your accumulation timeframe.</li>
		<li><strong>Inflation Adjustment:</strong> The general rise in prices (historically averaging 2% to 3% annually) that erodes purchasing power over time.</li>
	</ul>
	<h3>Recommended Nest Egg Target by Monthly Spending Needs</h3>
	<p>Refer to this table to estimate the target nest egg needed to support common post-retirement monthly spending goals under the 4% safe withdrawal rule:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Desired Monthly Budget</th>
				<th>Annual Expenses ($)</th>
				<th>Target Nest Egg (4% Rule)</th>
				<th>Safe Annual Withdrawal</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$3,000</td><td>$36,000</td><td>$900,000</td><td>$36,000</td></tr>
			<tr><td>$5,000</td><td>$60,000</td><td>$1,500,000</td><td>$60,000</td></tr>
			<tr><td>$8,000</td><td>$96,000</td><td>$2,400,000</td><td>$96,000</td></tr>
			<tr><td>$10,000</td><td>$120,000</td><td>$3,000,000</td><td>$120,000</td></tr>
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
	.age-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
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
		border: 1px solid var(--border-color);
	}
	.goal-met {
		border-color: var(--success);
		background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), var(--bg-secondary));
	}
	.goal-missed {
		border-color: var(--warning);
		background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 2.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}
	.summary-status {
		display: block;
		margin-top: 1rem;
		font-size: 0.9rem;
		font-weight: 600;
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
