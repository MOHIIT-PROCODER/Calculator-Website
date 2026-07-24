<script lang="ts">
	let { data = [], title = '' } = $props<{
		data: { label: string; value: number; color: string }[];
		title?: string;
	}>();

	let total = $derived(data.reduce((sum, item) => sum + item.value, 0));
	
	// Circle parameters
	const radius = 50;
	const circumference = 2 * Math.PI * radius; // ~314.16

	// Calculate angles and offsets for each slice
	let slices = $derived.by(() => {
		let currentOffset = 0;
		return data.map(item => {
			const percentage = total > 0 ? item.value / total : 0;
			const dashArray = `${(percentage * circumference).toFixed(2)} ${circumference.toFixed(2)}`;
			const dashOffset = (-currentOffset).toFixed(2);
			currentOffset += percentage * circumference;
			return {
				...item,
				percentage,
				dashArray,
				dashOffset
			};
		});
	});
</script>

<div class="chart-container glass">
	{#if title}
		<h4 class="chart-title">{title}</h4>
	{/if}
	
	<div class="chart-content">
		<div class="svg-wrapper">
			<svg width="100%" height="100%" viewBox="0 0 120 120" class="donut-svg">
				<!-- Background circle -->
				<circle
					cx="60"
					cy="60"
					r={radius}
					fill="transparent"
					stroke="var(--border-color)"
					stroke-width="12"
				/>
				<!-- Slices -->
				{#each slices as slice}
					{#if slice.value > 0}
						<circle
							cx="60"
							cy="60"
							r={radius}
							fill="transparent"
							stroke={slice.color}
							stroke-width="12"
							stroke-dasharray={slice.dashArray}
							stroke-dashoffset={slice.dashOffset}
							transform="rotate(-90 60 60)"
							class="donut-segment"
						/>
					{/if}
				{/each}
				<!-- Center hole text -->
				<text x="60" y="65" text-anchor="middle" class="chart-total-text">
					Total
				</text>
			</svg>
		</div>

		<div class="chart-legend">
			{#each data as item}
				<div class="legend-item">
					<span class="legend-dot" style="background-color: {item.color}"></span>
					<span class="legend-label">{item.label}</span>
					<span class="legend-value">
						{total > 0 ? ((item.value / total) * 100).toFixed(1) : 0}%
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.chart-container {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		width: 100%;
	}
	.chart-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
		align-self: flex-start;
	}
	.chart-content {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 2rem;
		width: 100%;
		flex-wrap: wrap;
	}
	.svg-wrapper {
		width: 160px;
		height: 160px;
		position: relative;
	}
	.donut-svg {
		transform: rotate(0deg);
	}
	.donut-segment {
		transition: stroke-width 0.2s ease, stroke-dashoffset 0.2s ease;
		cursor: pointer;
	}
	.donut-segment:hover {
		stroke-width: 14;
	}
	.chart-total-text {
		font-size: 0.8rem;
		font-weight: 600;
		fill: var(--text-tertiary);
	}
	.chart-legend {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		min-width: 160px;
	}
	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}
	.legend-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		display: inline-block;
	}
	.legend-label {
		color: var(--text-secondary);
		flex-grow: 1;
	}
	.legend-value {
		font-weight: 600;
		color: var(--text-primary);
	}
</style>
