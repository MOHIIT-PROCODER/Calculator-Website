<script lang="ts">
	let {
		value = $bindable(),
		label,
		options = []
	} = $props<{
		value: string | number;
		label: string;
		options: { value: string | number; label: string }[];
	}>();

	let inputId = $derived(label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
</script>

<div class="form-group">
	<span class="group-label">{label}</span>
	<div class="radio-options">
		{#each options as option}
			<label class="radio-option">
				<input
					type="radio"
					name={inputId}
					value={option.value}
					checked={value === option.value}
					onchange={() => value = option.value}
				/>
				<span class="option-label">{option.label}</span>
			</label>
		{/each}
	</div>
</div>

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.25rem;
		width: 100%;
	}
	.group-label {
		font-size: 0.9rem;
		font-weight: 550;
		color: var(--text-secondary);
	}
	.radio-options {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	.radio-option {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.65rem 1.25rem;
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		cursor: pointer;
		font-weight: 600;
		transition: background var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
	}
	.radio-option:hover {
		border-color: var(--primary);
	}
	.radio-option:has(input:checked) {
		border-color: var(--primary);
		background: var(--bg-secondary);
	}
	:global(html.dark) .radio-option {
		background: #1a1a1f;
	}
	:global(html.dark) .radio-option:has(input:checked) {
		border-color: #2ee59d;
		background: #000000;
		box-shadow: 0 0 10px rgba(46, 229, 157, 0.2);
	}
	.option-label {
		font-size: 1rem;
		color: var(--text-primary);
	}
	input[type="radio"] {
		display: none;
	}
</style>
