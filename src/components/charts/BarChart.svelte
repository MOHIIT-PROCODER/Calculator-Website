<script lang="ts">
	let { data = [], title = '', yLabel = '' } = $props<{
		data: { label: string; value: number; color?: string }[];
		title?: string;
		yLabel?: string;
	}>();

	let maxValue = $derived(Math.max(...data.map(d => d.value), 10));
	
	// Chart dimensions
	const width = 400;
	const height = 200;
	const paddingLeft = 40;
	const paddingBottom = 30;
	const paddingTop = 10;
	const paddingRight = 10;

	// Gridlines calculations
	let gridlines = $derived.by(() => {
		const steps = 4;
		const lines = [];
		for (let i = 0; i <= steps; i++) {
			const val = (maxValue / steps) * i;
			const y = height - paddingBottom - ((val / maxValue) * (height - paddingBottom - paddingTop));
			lines.push({ value: val, y });
		}
		return lines;
	});

	// Bar mapping calculations
	let bars = $derived.by(() => {
		const chartWidth = width - paddingLeft - paddingRight;
		const barWidth = data.length > 0 ? (chartWidth / data.length) * 0.6 : 0;
		const spacing = data.length > 0 ? (chartWidth / data.length) * 0.4 : 0;
		
		return data.map((d, index) => {
			const barHeight = ((d.value / maxValue) * (height - paddingBottom - paddingTop));
			const x = paddingLeft + (index * (barWidth + spacing)) + (spacing / 2);
			const y = height - paddingBottom - barHeight;
			return {
				...d,
				x,
				y,
				width: barWidth,
				height: barHeight
			};
		});
	});
</script>

<div class="chart-container glass animate-fade-in">
	{#if title}
		<h4 class="chart-title">{title}</h4>
	{/if}

	<div class="svg-wrapper">
		<svg viewBox="0 0 {width} {height}" width="100%" height="100%">
			<!-- Gridlines -->
			{#each gridlines as line}
				<line
					x1={paddingLeft}
					y1={line.y}
					x2={width - paddingRight}
					y2={line.y}
					stroke="var(--border-color)"
					stroke-width="1"
					stroke-dasharray="3,3"
				/>
				<text
					x={paddingLeft - 8}
					y={line.y + 4}
					text-anchor="end"
					class="axis-text"
				>
					{line.value >= 1000 ? (line.value / 1000).toFixed(0) + 'k' : line.value.toFixed(0)}
				</text>
			{/each}

			<!-- Bars -->
			{#each bars as bar}
				<rect
					x={bar.x}
					y={bar.y}
					width={bar.width}
					height={bar.height}
					fill={bar.color || 'var(--primary)'}
					rx="3"
					class="bar-rect"
				/>
				<text
					x={bar.x + bar.width / 2}
					y={height - paddingBottom + 16}
					text-anchor="middle"
					class="axis-text label-text"
				>
					{bar.label}
				</text>
			{/each}
			
			<!-- Bottom Axis Line -->
			<line
				x1={paddingLeft}
				y1={height - paddingBottom}
				x2={width - paddingRight}
				y2={height - paddingBottom}
				stroke="var(--border-color)"
				stroke-width="1.5"
			/>
		</svg>
	</div>
</div>

<style>
	.chart-container {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
	.chart-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	.svg-wrapper {
		width: 100%;
		height: 220px;
	}
	.axis-text {
		font-size: 0.65rem;
		fill: var(--text-tertiary);
		font-weight: 500;
	}
	.label-text {
		font-weight: 600;
		fill: var(--text-secondary);
	}
	.bar-rect {
		transition: transform 0.2s ease, fill 0.2s ease;
		transform-origin: bottom;
		cursor: pointer;
	}
	.bar-rect:hover {
		filter: brightness(1.1);
	}
</style>
