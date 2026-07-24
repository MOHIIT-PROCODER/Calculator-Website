<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import PieChart from '../../charts/PieChart.svelte';
	import { formatCurrency } from '../../../utils/formatCurrency';

	let netIncome = $state(4000);

	let needs = $derived(netIncome * 0.5);
	let wants = $derived(netIncome * 0.3);
	let savings = $derived(netIncome * 0.2);

	let chartData = $derived([
		{ label: 'Needs (50%)', value: needs, color: 'var(--primary)' },
		{ label: 'Wants (30%)', value: wants, color: 'var(--warning)' },
		{ label: 'Savings/Debt (20%)', value: savings, color: 'var(--success)' }
	]);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Monthly Budget</h3>
		<NumberInput label="Monthly Net Take-Home Income ($)" min={0} bind:value={netIncome} />
	</div>

	<div class="results-panel">
		<h3>50/30/20 Budget Breakdown</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass border-needs">
				<span>Needs (50%)</span>
				<strong>{formatCurrency(needs)}</strong>
				<p class="description">Housing, utilities, groceries, transport, insurance.</p>
			</div>
			<div class="breakdown-item glass border-wants">
				<span>Wants (30%)</span>
				<strong>{formatCurrency(wants)}</strong>
				<p class="description">Dining out, entertainment, shopping, hobbies, travel.</p>
			</div>
			<div class="breakdown-item glass border-savings">
				<span>Savings & Debt (20%)</span>
				<strong>{formatCurrency(savings)}</strong>
				<p class="description">Emergency fund, retirement plans, extra debt paydowns.</p>
			</div>
		</div>

		{#if netIncome > 0}
			<PieChart data={chartData} title="Budget Allocations" />
		{/if}
	</div>
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Budget Allocation and Cash Flow Management</h2>
	<p>A Budget Calculator is an essential tool for managing household finances and tracking savings goals. Budgeting ensures that your income covers your bills while allowing you to save for the future and pay down debt. One of the most popular budgeting frameworks is the 50/30/20 rule, which splits net monthly income into three distinct categories.</p>
	<h3>The 50/30/20 Budget Framework</h3>
	<p>The 50/30/20 rule is a simple, effective way to manage your income and build healthy financial habits:</p>
	<ul>
		<li><strong>Needs (50%):</strong> Essential expenses that you must pay to live, including rent or mortgage payments, groceries, utilities, healthcare, and minimum debt payments.</li>
		<li><strong>Wants (30%):</strong> Discretionary spending on non-essential lifestyle choices, including dining out, entertainment, shopping, travel, and subscription services.</li>
		<li><strong>Savings & Debt (20%):</strong> Capital allocated to financial goals, including emergency funds, high-yield savings deposits, investments, and extra payments to pay down high-interest debt.</li>
	</ul>
	<h3>50/30/20 Allocation Reference Table</h3>
	<p>This table shows standard monthly budget allocations for common net monthly income levels:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Net Monthly Income</th>
				<th>Needs (50%)</th>
				<th>Wants (30%)</th>
				<th>Savings & Debt (20%)</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$2,500</td><td>$1,250</td><td>$750</td><td>$500</td></tr>
			<tr><td>$4,000</td><td>$2,000</td><td>$1,200</td><td>$800</td></tr>
			<tr><td>$6,000</td><td>$3,000</td><td>$1,800</td><td>$1,200</td></tr>
			<tr><td>$8,000</td><td>$4,000</td><td>$2,400</td><td>$1,600</td></tr>
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-left: 4px solid var(--border-color);
	}
	.border-needs { border-left-color: var(--primary); }
	.border-wants { border-left-color: var(--warning); }
	.border-savings { border-left-color: var(--success); }
	
	.breakdown-item span {
		font-size: 0.85rem;
		color: var(--text-secondary);
		font-weight: 600;
	}
	.breakdown-item strong {
		font-size: 1.25rem;
		color: var(--text-primary);
	}
	.description {
		font-size: 0.8rem;
		color: var(--text-tertiary);
		margin-top: 0.25rem;
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
