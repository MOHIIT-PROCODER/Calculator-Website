<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let hourlyRate = $state(25);
	let hoursPerDay = $state(8);
	let daysPerWeek = $state(5);

	let daily = $derived(hourlyRate * hoursPerDay);
	let weekly = $derived(daily * daysPerWeek);
	let annual = $derived(weekly * 52);
	let monthly = $derived(annual / 12);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Income Details</h3>
		<NumberInput label="Hourly Pay Rate ($)" min={0} bind:value={hourlyRate} />
		<NumberInput label="Hours Worked Per Day" min={1} max={24} bind:value={hoursPerDay} />
		<NumberInput label="Days Worked Per Week" min={1} max={7} bind:value={daysPerWeek} />
	</div>

	<div class="results-panel">
		<h3>Salary Breakdown</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Hourly</span>
				<strong>{formatCurrency(hourlyRate)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Daily</span>
				<strong>{formatCurrency(daily)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Weekly</span>
				<strong>{formatCurrency(weekly)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Monthly</span>
				<strong>{formatCurrency(monthly)}</strong>
			</div>
			<div class="breakdown-item glass annual-item">
				<span>Annual</span>
				<strong>{formatCurrency(annual)}</strong>
			</div>
		</div>
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Salary Conversions and Paycheck Intervals</h2>
	<p>A Salary Calculator translates payment structures into standardized, comparable intervals. Whether you receive hourly wages, a weekly paycheck, a monthly salary, or an annual base salary, understanding these conversion rates is essential for budgeting, job offer evaluations, and tax calculations.</p>
	<h3>Standard Conversion Equations</h3>
	<p>Converting salaries relies on standard assumptions, including 52 work weeks per year and a 40-hour work week, totaling 2,080 working hours annually (52 * 40 = 2,080). Conversions include:</p>
	<ul>
		<li><strong>Hourly Wage to Annual Salary:</strong> Hourly Rate * 2,080 hours.</li>
		<li><strong>Weekly Salary:</strong> Annual Salary / 52 weeks.</li>
		<li><strong>Monthly Salary:</strong> Annual Salary / 12 months.</li>
		<li><strong>Daily Rate:</strong> Annual Salary / 260 working days (assuming 5 days/week).</li>
	</ul>
	<h3>Salary Interval Conversion Reference</h3>
	<p>Refer to this table showing conversions for common annual base salary amounts based on standard 40-hour work weeks:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Annual Salary ($)</th>
				<th>Hourly Rate ($)</th>
				<th>Weekly Pay ($)</th>
				<th>Monthly Pay ($)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$35,000</td><td>$16.83</td><td>$673.08</td><td>$2,916.67</td></tr>
			<tr><td>$50,000</td><td>$24.04</td><td>$961.54</td><td>$4,166.67</td></tr>
			<tr><td>$75,000</td><td>$36.06</td><td>$1,442.31</td><td>$6,250.00</td></tr>
			<tr><td>$100,000</td><td>$48.08</td><td>$1,923.08</td><td>$8,333.33</td></tr>
			<tr><td>$150,000</td><td>$72.12</td><td>$2,884.62</td><td>$12,500.00</td></tr>
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
	.annual-item {
		grid-column: span 2;
		background: linear-gradient(135deg, var(--primary-light), var(--bg-secondary));
		border-color: var(--primary);
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
		.annual-item {
			grid-column: span 1;
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
