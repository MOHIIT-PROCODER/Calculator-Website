<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';

	let length = $state(12);
	let generated = $state('');

	function generate() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
		let pass = '';
		for (let i = 0; i < length; i++) {
			pass += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		generated = pass;
	}
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<h3>Security Configuration</h3>
		<NumberInput label="Password Length" min={6} max={64} bind:value={length} />
		<button class="generate-btn" onclick={generate}>Generate Password</button>
	</div>

	<div class="results-panel">
		<h3>Generated Credentials</h3>
		<div class="summary-card glass">
			{#if generated}
				<span class="password-text">{generated}</span>
			{:else}
				<span class="placeholder-text">Click Generate to start</span>
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.generate-btn {
		padding: 0.75rem;
		border: none;
		border-radius: var(--radius-md);
		background: var(--primary);
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background var(--transition-fast);
	}
	.generate-btn:hover {
		background: var(--primary-hover);
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		min-height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-tertiary);
	}
	.password-text {
		font-family: monospace;
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--primary);
		word-break: break-all;
	}
	.placeholder-text {
		color: var(--text-tertiary);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
