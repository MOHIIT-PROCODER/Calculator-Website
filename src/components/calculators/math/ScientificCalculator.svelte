<script lang="ts">
	let expression = $state('');
	let result = $state('');
	let isRadian = $state(false); // Degrees by default

	function append(val: string) {
		// If there is an error in display, clear it
		if (result === 'Error') {
			clear();
		}
		expression += val;
	}

	function clear() {
		expression = '';
		result = '';
	}

	function backspace() {
		if (expression.length > 0) {
			expression = expression.slice(0, -1);
		}
	}

	function evaluate() {
		try {
			if (!expression.trim()) return;

			let evalExpr = expression;

			// Replace visual operators with code operators
			evalExpr = evalExpr.replace(/÷/g, '/');
			evalExpr = evalExpr.replace(/×/g, '*');
			evalExpr = evalExpr.replace(/mod/g, '%');
			evalExpr = evalExpr.replace(/π/g, 'pi');
			evalExpr = evalExpr.replace(/e/g, 'E');
			evalExpr = evalExpr.replace(/√\(/g, 'sqrt(');
			evalExpr = evalExpr.replace(/\^/g, '**');

			// Custom helper scope for math evaluation
			const pi = Math.PI;
			const E = Math.E;
			const sqrt = Math.sqrt;
			const log = Math.log10;
			const ln = Math.log;
			const abs = Math.abs;
			
			const toRad = (deg: number) => deg * Math.PI / 180;
			const sin = (x: number) => isRadian ? Math.sin(x) : Math.sin(toRad(x));
			const cos = (x: number) => isRadian ? Math.cos(x) : Math.cos(toRad(x));
			const tan = (x: number) => isRadian ? Math.tan(x) : Math.tan(toRad(x));

			// Evaluate expression safely using Function constructor inside controlled mathematical scope
			const fn = new Function('sin', 'cos', 'tan', 'log', 'ln', 'sqrt', 'pi', 'E', 'abs', `return ${evalExpr}`);
			const val = fn(sin, cos, tan, log, ln, sqrt, pi, E, abs);

			if (typeof val === 'number' && !isNaN(val)) {
				// Round to 8 decimal places and remove trailing zeros
				result = Number(val.toFixed(8)).toString();
			} else {
				result = 'Error';
			}
		} catch (err) {
			result = 'Error';
		}
	}

	function toggleRadDeg() {
		isRadian = !isRadian;
	}

	function inverseValue() {
		if (expression) {
			expression = `(1/(${expression}))`;
		}
	}

	function negateValue() {
		if (expression) {
			expression = `(-1*(${expression}))`;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		const key = e.key;
		if (/[0-9]/.test(key)) {
			append(key);
		} else if (['+', '-', '*', '/'].includes(key)) {
			const map: Record<string, string> = { '*': '×', '/': '÷', '+': '+', '-': '-' };
			append(map[key]);
		} else if (key === '.') {
			append('.');
		} else if (key === '(' || key === ')') {
			append(key);
		} else if (key === 'Enter' || key === '=') {
			e.preventDefault();
			evaluate();
		} else if (key === 'Backspace') {
			backspace();
		} else if (key === 'Escape') {
			clear();
		}
	}
</script>

<div class="sc-container animate-fade-in" tabindex="0" onkeydown={handleKeydown}>
	<div class="calculator-body glass">
		<!-- Screen Display -->
		<div class="display">
			<div class="mode-indicator">{isRadian ? 'RAD' : 'DEG'}</div>
			<div class="expression-line">{expression || '0'}</div>
			<div class="result-line">{result ? `= ${result}` : ''}</div>
		</div>

		<!-- Keyboard Buttons Grid -->
		<div class="keypad">
			<!-- Row 1: Scientific Helpers -->
			<button class="btn-sci" onclick={toggleRadDeg}>
				{isRadian ? 'DEG' : 'RAD'}
			</button>
			<button class="btn-sci" onclick={() => append('sin(')}>sin</button>
			<button class="btn-sci" onclick={() => append('cos(')}>cos</button>
			<button class="btn-sci" onclick={() => append('tan(')}>tan</button>
			<button class="btn-sci" onclick={() => append('^')}>xʸ</button>

			<!-- Row 2: Powers, Roots & Constants -->
			<button class="btn-sci" onclick={() => append('log(')}>log</button>
			<button class="btn-sci" onclick={() => append('ln(')}>ln</button>
			<button class="btn-sci" onclick={() => append('√(')}>√</button>
			<button class="btn-sci" onclick={() => append('π')}>π</button>
			<button class="btn-sci" onclick={() => append('e')}>e</button>

			<!-- Row 3: Control and Parenthesis -->
			<button class="btn-ctrl btn-brackets" onclick={() => append('(')}>(</button>
			<button class="btn-ctrl btn-brackets" onclick={() => append(')')}>)</button>
			<button class="btn-ctrl btn-clear" onclick={clear}>C</button>
			<button class="btn-ctrl btn-backspace" onclick={backspace}>⌫</button>
			<button class="btn-op" onclick={() => append('÷')}>÷</button>

			<!-- Row 4 -->
			<button class="btn-num" onclick={() => append('7')}>7</button>
			<button class="btn-num" onclick={() => append('8')}>8</button>
			<button class="btn-num" onclick={() => append('9')}>9</button>
			<button class="btn-op" onclick={() => append('×')}>×</button>
			<button class="btn-sci" onclick={() => append('mod')}>mod</button>

			<!-- Row 5 -->
			<button class="btn-num" onclick={() => append('4')}>4</button>
			<button class="btn-num" onclick={() => append('5')}>5</button>
			<button class="btn-num" onclick={() => append('6')}>6</button>
			<button class="btn-op" onclick={() => append('-')}>-</button>
			<button class="btn-sci" onclick={() => append('^2')}>x²</button>

			<!-- Row 6 -->
			<button class="btn-num" onclick={() => append('1')}>1</button>
			<button class="btn-num" onclick={() => append('2')}>2</button>
			<button class="btn-num" onclick={() => append('3')}>3</button>
			<button class="btn-op" onclick={() => append('+')}>+</button>
			<button class="btn-sci" onclick={inverseValue}>1/x</button>

			<!-- Row 7 -->
			<button class="btn-num btn-zero" onclick={() => append('0')}>0</button>
			<button class="btn-num" onclick={() => append('.')}>.</button>
			<button class="btn-sci" onclick={negateValue}>+/-</button>
			<button class="btn-eq" onclick={evaluate}>=</button>
		</div>
	</div>
</div>

<style>
	.sc-container {
		display: flex;
		justify-content: center;
		padding: 1rem 0;
		outline: none;
	}
	.calculator-body {
		width: 100%;
		max-width: 480px;
		background: var(--bg-secondary);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
		box-shadow: var(--shadow-lg);
		border: 1px solid var(--border-color);
	}
	.display {
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		padding: 1.25rem;
		margin-bottom: 1.5rem;
		text-align: right;
		min-height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.mode-indicator {
		position: absolute;
		top: 0.5rem;
		left: 0.75rem;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--primary);
		letter-spacing: 0.05em;
	}
	.expression-line {
		font-size: 1.4rem;
		color: var(--text-secondary);
		word-break: break-all;
		margin-top: 1rem;
		line-height: 1.3;
	}
	.result-line {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		word-break: break-all;
		margin-top: 0.5rem;
		line-height: 1.2;
	}
	.keypad {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.6rem;
	}
	button {
		border: 1px solid var(--border-color);
		background: var(--bg-primary);
		color: var(--text-primary);
		font-size: 1.05rem;
		font-weight: 600;
		padding: 0.85rem 0.5rem;
		border-radius: var(--radius-md);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
		user-select: none;
	}
	button:hover {
		background: var(--bg-tertiary);
		border-color: var(--primary);
	}
	button:active {
		transform: scale(0.95);
	}
	.btn-num {
		background: var(--bg-secondary);
		font-size: 1.15rem;
	}
	.btn-num:hover {
		background: var(--bg-tertiary);
	}
	.btn-sci {
		color: var(--text-secondary);
		font-size: 0.95rem;
		background: var(--bg-primary);
	}
	.btn-ctrl {
		color: var(--error);
		background: rgba(239, 68, 68, 0.05);
	}
	.btn-ctrl:hover {
		background: rgba(239, 68, 68, 0.1);
	}
	.btn-op {
		color: var(--primary);
		background: var(--primary-light);
		font-size: 1.2rem;
	}
	.btn-eq {
		grid-column: span 2;
		background: var(--primary);
		color: white !important;
		border-color: var(--primary);
		font-size: 1.25rem;
	}
	.btn-eq:hover {
		background: var(--primary-hover);
	}
	:global(html.dark) button.btn-eq {
		background: var(--brand-gradient);
		color: #000000 !important;
		font-weight: 700;
		box-shadow: 0 0 10px rgba(46, 229, 157, 0.2);
	}

	@media (max-width: 480px) {
		.calculator-body {
			padding: 1rem;
		}
		.keypad {
			gap: 0.4rem;
		}
		button {
			padding: 0.75rem 0.25rem;
			font-size: 0.95rem;
		}
		.btn-num {
			font-size: 1rem;
		}
	}
</style>
