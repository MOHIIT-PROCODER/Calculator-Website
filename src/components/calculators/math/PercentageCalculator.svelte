<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import { 
		getPercentageOf, 
		getPercentOfValue, 
		getPercentChange 
	} from '../../../calculations/math/percentage';

	// Case 1: What is X% of Y?
	let p1 = $state(15);
	let v1 = $state(200);
	let r1 = $derived(getPercentageOf(p1, v1));

	// Case 2: X is what percent of Y?
	let v2a = $state(30);
	let v2b = $state(150);
	let r2 = $derived(getPercentOfValue(v2a, v2b));

	// Case 3: Percent increase/decrease from X to Y?
	let v3a = $state(100);
	let v3b = $state(150);
	let r3 = $derived(getPercentChange(v3a, v3b));
</script>

<div class="percentage-calc-layout animate-fade-in">
	<div class="case-card glass">
		<h4>1. What is X% of Y?</h4>
		<div class="row">
			<NumberInput label="Percent (X%)" bind:value={p1} />
			<NumberInput label="Value (Y)" bind:value={v1} />
		</div>
		<div class="result-box">
			Result: <strong>{r1.toFixed(2)}</strong>
		</div>
	</div>

	<div class="case-card glass">
		<h4>2. X is what percent of Y?</h4>
		<div class="row">
			<NumberInput label="Part (X)" bind:value={v2a} />
			<NumberInput label="Whole (Y)" bind:value={v2b} />
		</div>
		<div class="result-box">
			Result: <strong>{r2.toFixed(2)}%</strong>
		</div>
	</div>

	<div class="case-card glass">
		<h4>3. Percentage Change (from X to Y)</h4>
		<div class="row">
			<NumberInput label="Initial (X)" bind:value={v3a} />
			<NumberInput label="Final (Y)" bind:value={v3b} />
		</div>
		<div class="result-box">
			Result: 
			<strong class={r3 >= 0 ? 'text-success' : 'text-error'}>
				{r3 >= 0 ? '+' : ''}{r3.toFixed(2)}%
			</strong>
		</div>
	</div>
</div>

<style>
	.percentage-calc-layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
	.case-card {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.result-box {
		padding: 1rem;
		border-radius: var(--radius-md);
		background: var(--bg-tertiary);
		font-size: 1.1rem;
		text-align: center;
	}
	.result-box strong {
		color: var(--primary);
	}
	.text-success { color: var(--success) !important; }
	.text-error { color: var(--error) !important; }
</style>
