<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { 
		addFractions, 
		subtractFractions, 
		multiplyFractions, 
		divideFractions 
	} from '../../../calculations/math/fraction';

	let n1 = $state(1);
	let d1 = $state(2);
	let n2 = $state(1);
	let d2 = $state(3);
	let op = $state<'+' | '-' | '*' | '/'>('+');

	let result = $derived.by(() => {
		const f1 = { numerator: n1, denominator: d1 };
		const f2 = { numerator: n2, denominator: d2 };
		
		if (d1 === 0 || d2 === 0) return { numerator: 0, denominator: 1, error: 'Denominator cannot be zero!' };

		if (op === '+') return addFractions(f1, f2);
		if (op === '-') return subtractFractions(f1, f2);
		if (op === '*') return multiplyFractions(f1, f2);
		return divideFractions(f1, f2);
	});

	let decimalValue = $derived(result.numerator / result.denominator);
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Fraction Calculations</h3>
		<div class="fraction-inputs">
			<!-- Fraction 1 -->
			<div class="fraction-input">
				<NumberInput label="Numerator 1" bind:value={n1} />
				<div class="line"></div>
				<NumberInput label="Denominator 1" bind:value={d1} />
			</div>

			<!-- Operator -->
			<div class="operator-select">
				<SelectInput
					label="Operator"
					bind:value={op}
					options={[
						{ value: '+', label: '+' },
						{ value: '-', label: '-' },
						{ value: '*', label: '×' },
						{ value: '/', label: '÷' }
					]}
				/>
			</div>

			<!-- Fraction 2 -->
			<div class="fraction-input">
				<NumberInput label="Numerator 2" bind:value={n2} />
				<div class="line"></div>
				<NumberInput label="Denominator 2" bind:value={d2} />
			</div>
		</div>
	</div>

	<div class="results-panel">
		<h3>Resulting Fraction</h3>
		<div class="summary-card glass">
			{#if 'error' in result}
				<span class="summary-value error-text">{result.error}</span>
			{:else}
				<div class="result-fraction">
					<span>{result.numerator}</span>
					<div class="line"></div>
					<span>{result.denominator}</span>
				</div>
				<span class="summary-label">Decimal Value: {decimalValue.toFixed(4)}</span>
			{/if}
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
	.fraction-inputs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.fraction-input {
		display: flex;
		flex-direction: column;
		width: 100px;
	}
	.line {
		height: 2px;
		background: var(--text-primary);
		margin: 0.5rem 0;
	}
	.operator-select {
		width: 80px;
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.result-fraction {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 2rem;
		font-weight: 700;
		width: 80px;
	}
	.result-fraction .line {
		width: 100%;
		background: var(--primary);
	}
	.summary-label {
		font-size: 0.95rem;
		color: var(--text-secondary);
	}
	.error-text {
		color: var(--error);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
