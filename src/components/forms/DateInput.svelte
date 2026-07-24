<script lang="ts">
	let {
		value = $bindable(),
		label
	} = $props<{
		value: string;
		label: string;
	}>();

	let inputId = $derived(label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
</script>

<div class="form-group">
	<label for={inputId}>{label}</label>
	<input
		type="date"
		id={inputId}
		bind:value
	/>
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
		transition: border-color var(--transition-fast);
		cursor: pointer;
	}
	input:focus {
		border-color: var(--primary);
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
</style>
