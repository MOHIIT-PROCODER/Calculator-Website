<script lang="ts">
	import CompoundInterestCalculator from './CompoundInterestCalculator.svelte';
</script>

<div class="savings-wrapper">
	<CompoundInterestCalculator />
</div>


<section class="seo-section glass animate-fade-in">
	<h2>Guide to Building Savings and Emergency Reserves</h2>
	<p>A Savings Calculator helps you plan your financial future by projecting how your savings grow over time. Whether you are building an emergency fund, saving for a down payment, or planning a major purchase, understanding interest compounding is key to reaching your savings goals.</p>
	<h3>Maximizing Savings with Compound Interest</h3>
	<p>To get the most out of your savings, you need to understand how interest rate variables and recurring deposits speed up your progress:</p>
	<ul>
		<li><strong>Initial Deposit:</strong> The starting balance in your savings account.</li>
		<li><strong>Monthly Contribution:</strong> Regular savings deposits that increase your principal base.</li>
		<li><strong>Annual Percentage Yield (APY):</strong> The real rate of return earned on your savings, accounting for compound interest. High-yield savings accounts (HYSAs) often pay significantly higher APYs than traditional savings accounts.</li>
		<li><strong>Compounding Period:</strong> How often interest is calculated and added to your balance (daily, monthly, quarterly, or annually). More frequent compounding increases your total return.</li>
	</ul>
	<h3>Growth Projections ($5,000 Starting Balance, 4.5% APY)</h3>
	<p>This table projects the growth of a savings account starting with $5,000 at a 4.5% APY with monthly contributions over 1 to 10 years:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Monthly Deposit ($)</th>
				<th>1-Year Balance</th>
				<th>3-Year Balance</th>
				<th>5-Year Balance</th>
				<th>10-Year Balance</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$0 / month</td><td>$5,230</td><td>$5,723</td><td>$6,262</td><td>$7,848</td></tr>
			<tr><td>$100 / month</td><td>$6,460</td><td>$9,531</td><td>$12,961</td><td>$23,285</td></tr>
			<tr><td>$300 / month</td><td>$8,920</td><td>$17,147</td><td>$26,358</td><td>$54,159</td></tr>
			<tr><td>$500 / month</td><td>$11,380</td><td>$24,763</td><td>$39,755</td><td>$85,033</td></tr>
		</tbody>
	</table>
</section>

<style>

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
