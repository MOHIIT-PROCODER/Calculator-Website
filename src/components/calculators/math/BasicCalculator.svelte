<script lang="ts">
	let display = $state('0');
	let equation = $state('');
	
	function pressKey(key: string) {
		if (display === '0' && !isNaN(Number(key))) {
			display = key;
		} else {
			display += key;
		}
	}

	function clear() {
		display = '0';
		equation = '';
	}

	function backspace() {
		if (display.length > 1) {
			display = display.slice(0, -1);
		} else {
			display = '0';
		}
	}

	function calculate() {
		try {
			// Safely evaluate simple math expressions using Function
			const sanitized = display.replace(/×/g, '*').replace(/÷/g, '/');
			const result = new Function(`return ${sanitized}`)();
			equation = display + ' =';
			display = String(result);
		} catch (e) {
			display = 'Error';
		}
	}
</script>

<div class="basic-calc glass animate-fade-in">
	<div class="calc-screen">
		<span class="calc-eq">{equation}</span>
		<span class="calc-val">{display}</span>
	</div>

	<div class="calc-buttons">
		<button onclick={clear} class="btn-ctrl">C</button>
		<button onclick={backspace} class="btn-ctrl">⌫</button>
		<button onclick={() => pressKey('/')} class="btn-op">÷</button>
		<button onclick={() => pressKey('*')} class="btn-op">×</button>

		<button onclick={() => pressKey('7')}>7</button>
		<button onclick={() => pressKey('8')}>8</button>
		<button onclick={() => pressKey('9')}>9</button>
		<button onclick={() => pressKey('-')} class="btn-op">-</button>

		<button onclick={() => pressKey('4')}>4</button>
		<button onclick={() => pressKey('5')}>5</button>
		<button onclick={() => pressKey('6')}>6</button>
		<button onclick={() => pressKey('+')} class="btn-op">+</button>

		<button onclick={() => pressKey('1')}>1</button>
		<button onclick={() => pressKey('2')}>2</button>
		<button onclick={() => pressKey('3')}>3</button>
		<button onclick={calculate} class="btn-eq">=</button>

		<button onclick={() => pressKey('0')} class="btn-zero">0</button>
		<button onclick={() => pressKey('.')}>.</button>
	</div>
</div>

<style>
	.basic-calc {
		max-width: 320px;
		margin: 0 auto;
		padding: 1.5rem;
		border-radius: var(--radius-lg);
		background: var(--bg-secondary);
	}
	.calc-screen {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
		padding: 1rem;
		background: var(--bg-tertiary);
		border-radius: var(--radius-md);
		height: 90px;
		margin-bottom: 1.5rem;
		border: 1px solid var(--border-color);
	}
	.calc-eq {
		font-size: 0.85rem;
		color: var(--text-tertiary);
		min-height: 1.2rem;
	}
	.calc-val {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		text-align: right;
	}
	.calc-buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
	}
	button {
		height: 52px;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		color: var(--text-primary);
		font-size: 1.2rem;
		font-weight: 600;
		cursor: pointer;
		transition: background var(--transition-fast), transform var(--transition-fast);
	}
	button:hover {
		background: var(--bg-tertiary);
		transform: scale(1.02);
	}
	.btn-op {
		background: var(--primary-light);
		color: var(--primary);
		border-color: var(--primary);
	}
	.btn-op:hover {
		background: var(--primary);
		color: white;
	}
	.btn-ctrl {
		background: rgba(239, 68, 68, 0.1);
		color: var(--error);
		border-color: var(--error);
	}
	.btn-eq {
		grid-row: span 2;
		height: 116px;
		background: var(--primary);
		color: white;
		border-color: var(--primary);
	}
	.btn-zero {
		grid-column: span 2;
	}
</style>
