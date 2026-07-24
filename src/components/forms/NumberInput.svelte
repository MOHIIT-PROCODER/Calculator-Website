<script lang="ts">
	import { validateNumber } from '../../utils/validation';

	let {
		value = $bindable(),
		label,
		min,
		max,
		placeholder = '',
		step = 'any',
		error = $bindable(null)
	} = $props<{
		value: number | string;
		label: string;
		min?: number;
		max?: number;
		placeholder?: string;
		step?: string | number;
		error?: string | null;
	}>();

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		value = target.value;
		error = validateNumber(value, min, max);
	}

	let inputId = $derived(label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
</script>

<div class="form-group">
	<label for={inputId}>{label}</label>
	<input
		type="number"
		id={inputId}
		{placeholder}
		{min}
		{max}
		{step}
		{value}
		oninput={handleInput}
		class:has-error={error}
	/>
	{#if error}
		<span class="error-msg">{error}</span>
	{/if}
</div>

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.25rem;
		width: 100%;
	}
	label {
		font-size: 0.9rem;
		font-weight: 550;
		color: var(--text-secondary);
	}
	input {
		width: 100%;
		padding: 0.75rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		color: var(--text-primary);
		font-size: 1rem;
		outline: none;
		transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
	}
	input:focus {
		border-color: var(--primary);
		box-shadow: 0 0 0 3px var(--primary-light);
	}
	:global(html.dark) input {
		background: transparent;
		border-radius: 0;
		border: none;
		border-bottom: 2px solid var(--border-color);
		padding: 0.5rem 0;
	}
	:global(html.dark) input:focus {
		border-bottom-color: var(--primary);
		box-shadow: none;
	}
	input.has-error {
		border-color: var(--error);
	}
	.error-msg {
		font-size: 0.8rem;
		color: var(--error);
	}
</style>
