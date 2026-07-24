<script lang="ts">
	let { data = [], title = '', yLabel = '' } = $props<{
		data: { label: string; value: number }[];
		title?: string;
		yLabel?: string;
	}>();

	let maxValue = $derived(Math.max(...data.map(d => d.value), 10));
	
	// Chart dimensions
	const width = 400;
	const height = 200;
	const paddingLeft = 45;
	const paddingBottom = 30;
	const paddingTop = 15;
	const paddingRight = 15;

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

	// Line path points calculations
	let pathPoints = $derived.by(() => {
		if (data.length === 0) return '';
		const chartWidth = width - paddingLeft - paddingRight;
		const segmentWidth = data.length > 1 ? chartWidth / (data.length - 1) : chartWidth;
		
		return data.map((d, index) => {
			const x = paddingLeft + (index * segmentWidth);
			const y = height - paddingBottom - ((d.value / maxValue) * (height - paddingBottom - paddingTop));
			return { x, y };
		});
	});

	let linePath = $derived(pathPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' '));
	
	let areaPath = $derived(() => {
		if (pathPoints.length === 0) return '';
		const first = pathPoints[0];
		const last = pathPoints[pathPoints.length - 1];
		return `${linePath} L ${last.x.toFixed(1)} ${(height - paddingBottom).toFixed(1)} L ${first.x.toFixed(1)} ${(height - paddingBottom).toFixed(1)} Z`;
	});

	// Render a limited set of labels for clarity
	let labelStep = $derived(Math.max(Math.ceil(data.length / 5), 1));
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

			<!-- Area Under the Line -->
			{#if areaPath()}
				<path
					d={areaPath()}
					fill="url(#area-gradient)"
					opacity="0.2"
				/>
			{/if}

			<!-- Main Trend Line -->
			{#if linePath}
				<path
					d={linePath}
					fill="transparent"
					stroke="var(--primary)"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			{/if}

			<!-- Axis Labels -->
			{#each data as item, index}
				{#if index % labelStep === 0 || index === data.length - 1}
					{@const pt = pathPoints[index]}
					{#if pt}
						<text
							x={pt.x}
							y={height - paddingBottom + 16}
							text-anchor="middle"
							class="axis-text label-text"
						>
							{item.label}
						</text>
					{/if}
				{/if}
			{/each}

			<!-- Gradients Definition -->
			<defs>
				<linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="var(--primary)" />
					<stop offset="100%" stop-color="var(--primary)" stop-opacity="0" />
				</linearGradient>
			</defs>
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
</style>
