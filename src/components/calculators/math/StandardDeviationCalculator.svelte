<script lang="ts">
	import { calculateStatistics, parseNumbers } from '../../../calculations/math/statistics';

	let inputString = $state('10, 12, 23, 23, 16, 23, 21, 16');

	let numbers = $derived(parseNumbers(inputString));
	let result = $derived(calculateStatistics(numbers));
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Input Values</h3>
		<p class="help">Enter numbers separated by commas, spaces, or newlines.</p>
		<textarea bind:value={inputString} placeholder="e.g. 10, 12, 23, 23"></textarea>
	</div>

	<div class="results-panel">
		<h3>Statistics</h3>
		<div class="breakdown-grid">
			<div class="breakdown-item glass">
				<span>Mean (Average)</span>
				<strong>{result.mean.toFixed(2)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Median</span>
				<strong>{result.median}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Sample Std. Dev</span>
				<strong>{result.stdDevSample.toFixed(4)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Population Std. Dev</span>
				<strong>{result.stdDevPopulation.toFixed(4)}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Count</span>
				<strong>{result.count}</strong>
			</div>
			<div class="breakdown-item glass">
				<span>Sum</span>
				<strong>{result.sum}</strong>
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
		gap: 1rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.help {
		font-size: 0.85rem;
		color: var(--text-tertiary);
	}
	textarea {
		width: 100%;
		height: 120px;
		padding: 0.75rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		color: var(--text-primary);
		font-size: 1rem;
		outline: none;
		resize: none;
		font-family: monospace;
	}
	textarea:focus {
		border-color: var(--primary);
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
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
