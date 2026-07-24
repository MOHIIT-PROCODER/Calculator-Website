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
	<label for={inputId}>{label}</label>
	<select
		id={inputId}
		bind:value
	>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
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
	select {
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
	select:focus {
		border-color: var(--primary);
	}
	:global(html.dark) select {
		background: transparent;
		border-radius: 0;
		border: none;
		border-bottom: 2px solid var(--border-color);
		padding: 0.5rem 0;
	}
	:global(html.dark) select:focus {
		border-bottom-color: var(--primary);
		box-shadow: none;
	}
	option {
		background-color: var(--bg-secondary);
		color: var(--text-primary);
	}
</style>
