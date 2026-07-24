<script lang="ts">
	import DateInput from '../../forms/DateInput.svelte';
	import { calculateAge } from '../../../calculations/other/age';

	let birthDateStr = $state('1995-06-15');
	let targetDateStr = $state(new Date().toISOString().split('T')[0]);

	let result = $derived(
		calculateAge(
			new Date(birthDateStr),
			new Date(targetDateStr)
		)
	);
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Age Calculator</h3>
		<DateInput label="Date of Birth" bind:value={birthDateStr} />
		<DateInput label="Age at Target Date" bind:value={targetDateStr} />
	</div>

	<div class="results-panel">
		<h3>Your Age Profile</h3>
		<div class="summary-card glass">
			<span class="summary-label">Exact Age</span>
			<span class="summary-value">{result.years} years, {result.months} months, {result.days} days</span>
		</div>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Total Months</span>
				<strong>{result.totalMonths}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Weeks</span>
				<strong>{result.totalWeeks}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Days</span>
				<strong>{result.totalDays}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Total Hours</span>
				<strong>{result.totalHours.toLocaleString()}</strong>
			</div>
		</div>
	</div>
</div>

<style>
	.calculator-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}
	.inputs-panel {
		padding: 2rem;
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
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--primary);
	}
	.breakdown-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.breakdown-item {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
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
	}
</style>
