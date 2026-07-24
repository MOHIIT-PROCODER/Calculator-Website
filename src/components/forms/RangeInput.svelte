<script lang="ts">
	let {
		value = $bindable(),
		label,
		min,
		max,
		step = 1,
		suffix = ''
	} = $props<{
		value: number;
		label: string;
		min: number;
		max: number;
		step?: number;
		suffix?: string;
	}>();

	let inputId = $derived(label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
</script>

<div class="form-group">
	<div class="range-header">
		<label for={inputId}>{label}</label>
		<span class="range-value">{value}{suffix}</span>
	</div>
	<input
		type="range"
		id={inputId}
		{min}
		{max}
		{step}
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
	.range-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	label {
		font-size: 0.9rem;
		font-weight: 550;
		color: var(--text-secondary);
	}
	.range-value {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--primary);
	}
	input[type="range"] {
		width: 100%;
		height: 6px;
		background: var(--border-color);
		border-radius: var(--radius-sm);
		outline: none;
		-webkit-appearance: none;
		cursor: pointer;
		transition: background var(--transition-fast);
	}
	:global(html.dark) input[type="range"] {
		background: linear-gradient(to right, #2ee59d, #3bf2f2);
	}
	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--primary);
		transition: transform var(--transition-fast), box-shadow var(--transition-fast);
	}
	:global(html.dark) input[type="range"]::-webkit-slider-thumb {
		background: #ffffff;
		box-shadow: 0 0 10px rgba(46, 229, 157, 0.8);
		border: 1px solid #2ee59d;
	}
	input[type="range"]::-webkit-slider-thumb:hover {
		transform: scale(1.2);
	}
</style>
