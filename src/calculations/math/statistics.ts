export interface StatisticsResult {
	mean: number;
	median: number;
	mode: number[];
	range: number;
	variancePopulation: number;
	varianceSample: number;
	stdDevPopulation: number;
	stdDevSample: number;
	count: number;
	sum: number;
}

export function parseNumbers(input: string): number[] {
	return input
		.split(/[\s,]+/)
		.map(val => parseFloat(val.trim()))
		.filter(val => !isNaN(val) && isFinite(val));
}

export function calculateStatistics(numbers: number[]): StatisticsResult {
	const count = numbers.length;
	if (count === 0) {
		return { mean: 0, median: 0, mode: [], range: 0, variancePopulation: 0, varianceSample: 0, stdDevPopulation: 0, stdDevSample: 0, count: 0, sum: 0 };
	}

	const sum = numbers.reduce((acc, val) => acc + val, 0);
	const mean = sum / count;

	// Sorted list
	const sorted = [...numbers].sort((a, b) => a - b);
	const range = sorted[sorted.length - 1] - sorted[0];

	// Median
	let median = 0;
	if (count % 2 === 0) {
		median = (sorted[count / 2 - 1] + sorted[count / 2]) / 2;
	} else {
		median = sorted[Math.floor(count / 2)];
	}

	// Mode
	const frequencies: Record<number, number> = {};
	let maxFreq = 0;
	sorted.forEach(num => {
		frequencies[num] = (frequencies[num] || 0) + 1;
		if (frequencies[num] > maxFreq) {
			maxFreq = frequencies[num];
		}
	});

	const mode: number[] = [];
	if (maxFreq > 1) {
		Object.keys(frequencies).forEach(key => {
			const num = parseFloat(key);
			if (frequencies[num] === maxFreq) {
				mode.push(num);
			}
		});
	}

	// Variances
	const squaredDiffsSum = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
	const variancePopulation = squaredDiffsSum / count;
	const varianceSample = count > 1 ? squaredDiffsSum / (count - 1) : 0;

	return {
		mean,
		median,
		mode,
		range,
		variancePopulation,
		varianceSample,
		stdDevPopulation: Math.sqrt(variancePopulation),
		stdDevSample: Math.sqrt(varianceSample),
		count,
		sum
	};
}
