<script lang="ts">
	import LoanCalculator from './LoanCalculator.svelte';
</script>

<div class="auto-loan-wrapper">
	<div class="note glass">
		<p>ℹ️ Auto loan calculations share basic principles with regular loans, incorporating monthly schedules.</p>
	</div>
	<LoanCalculator />
</div>



<section class="seo-section glass animate-fade-in">
	<h2>Guide to Auto Loans & Vehicle Financing</h2>
	<p>An Auto Loan Calculator is an essential tool for navigating the financing landscape of vehicle acquisition. Buying a car represents a major financial commitment, often second only to homeownership. Securing a loan allows buyers to distribute the vehicle cost over manageable monthly installments, but calculating these costs requires balancing the purchase price, interest rates, loan terms, and auxiliary dealership fees.</p>
	<h3>Key Components of Auto Financing</h3>
	<p>To accurately project your vehicle budget, it is crucial to analyze how loan terms and down payments influence the total interest paid. Consider the following structural variables:</p>
	<ul>
		<li><strong>Vehicle Price & Trade-in Value:</strong> The retail price of the car minus any value from trading in your previous vehicle directly determines the starting loan principal.</li>
		<li><strong>Down Payment:</strong> Contributing cash upfront lowers the principal loan amount, decreases your monthly payment burden, and shields you from negative equity (owing more than the car is worth).</li>
		<li><strong>Loan Term (Months):</strong> Auto loans typically span 36 to 84 months. Shorter terms yield lower interest rates and total financing costs, while longer terms decrease monthly payments but inflate the total interest paid over the life of the loan.</li>
		<li><strong>Interest Rate (APR):</strong> The Annual Percentage Rate represents the annual cost of borrowing. A higher credit score generally unlocks lower APRs, which substantially reduces the monthly compounding interest.</li>
	</ul>
	<h3>Monthly Payments Comparison by Loan Amount</h3>
	<p>Refer to this reference table showing estimated monthly payments at an average 6.5% interest rate across common loan sizes and loan terms:</p>
	<table class="seo-table">
		<thead>
			<tr>
				<th>Loan Amount ($)</th>
				<th>36-Month Term</th>
				<th>48-Month Term</th>
				<th>60-Month Term</th>
				<th>72-Month Term</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>$15,000</td><td>$459.73</td><td>$355.70</td><td>$293.52</td><td>$302.22</td></tr>
			<tr><td>$25,000</td><td>$766.21</td><td>$592.83</td><td>$489.20</td><td>$503.70</td></tr>
			<tr><td>$35,000</td><td>$1,072.70</td><td>$829.97</td><td>$684.88</td><td>$705.18</td></tr>
			<tr><td>$50,000</td><td>$1,532.43</td><td>$1,185.67</td><td>$978.40</td><td>$1,007.40</td></tr>
		</tbody>
	</table>
</section>
<style>
	.auto-loan-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.note {
		padding: 1rem;
		font-size: 0.95rem;
		border-left: 4px solid var(--primary);
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
