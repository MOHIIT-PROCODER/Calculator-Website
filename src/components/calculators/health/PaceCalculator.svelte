<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';

	let distance = $state(5); // km or miles
	let unit = $state<'km' | 'miles'>('km');
	let hours = $state(0);
	let minutes = $state(25);
	let seconds = $state(0);

	let pace = $derived.by(() => {
		const totalSeconds = hours * 3600 + minutes * 60 + seconds;
		if (distance <= 0 || totalSeconds <= 0) return '00:00';
		const secondsPerUnit = totalSeconds / distance;
		const min = Math.floor(secondsPerUnit / 60);
		const sec = Math.floor(secondsPerUnit % 60);
		return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
	});
</script>

<div class="calculator-grid">
	<div class="inputs-panel glass">
		<h3>Running Pace Calculator</h3>
		<div class="dist-row">
			<NumberInput label="Distance" min={0.1} step={0.1} bind:value={distance} />
			<SelectInput
				label="Unit"
				bind:value={unit}
				options={[
					{ value: 'km', label: 'Kilometers' },
					{ value: 'miles', label: 'Miles' }
				]}
			/>
		</div>

		<div class="time-row">
			<NumberInput label="Hours" min={0} max={24} bind:value={hours} />
			<NumberInput label="Mins" min={0} max={59} bind:value={minutes} />
			<NumberInput label="Secs" min={0} max={59} bind:value={seconds} />
		</div>
	</div>

	<div class="results-panel">
		<h3>Estimated Speed Profile</h3>
		<div class="summary-card glass">
			<span class="summary-label">Average Pace (per {unit === 'km' ? 'km' : 'mile'})</span>
			<span class="summary-value">{pace} / {unit === 'km' ? 'km' : 'mi'}</span>
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
	}
	.dist-row {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;
	}
	.time-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		text-align: center;
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
