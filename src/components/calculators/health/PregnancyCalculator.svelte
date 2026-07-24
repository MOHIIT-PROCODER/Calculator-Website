<script lang="ts">
	import DateInput from '../../forms/DateInput.svelte';

	let lmpDateStr = $state(new Date().toISOString().split('T')[0]);

	let lmpDate = $derived(new Date(lmpDateStr));
	
	let dueDate = $derived.by(() => {
		const date = new Date(lmpDate.getTime());
		date.setDate(date.getDate() + 280); // 40 weeks standard
		return date;
	});

	let progress = $derived.by(() => {
		const now = new Date();
		const diffMs = now.getTime() - lmpDate.getTime();
		const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
		const weeks = Math.max(0, Math.min(40, Math.floor(diffDays / 7)));
		const days = Math.max(0, diffDays % 7);
		return { weeks, days };
	});
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Pregnancy Timing</h3>
		<DateInput label="Last Menstrual Period (LMP)" bind:value={lmpDateStr} />
	</div>

	<div class="results-panel">
		<h3>Estimated Pregnancy Progress</h3>
		<div class="summary-card glass">
			<span class="summary-label">Estimated Due Date</span>
			<span class="summary-value">{dueDate.toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
		</div>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Current Progress</span>
				<strong>{progress.weeks} Weeks, {progress.days} Days</strong>
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
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
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
		grid-template-columns: 1fr;
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
