export function getPercentageOf(percent: number, value: number): number {
	return (percent / 100) * value;
}

export function getPercentOfValue(part: number, total: number): number {
	if (total === 0) return 0;
	return (part / total) * 100;
}

export function getPercentDifference(value1: number, value2: number): number {
	const avg = (value1 + value2) / 2;
	if (avg === 0) return 0;
	return (Math.abs(value1 - value2) / avg) * 100;
}

export function getPercentChange(oldValue: number, newValue: number): number {
	if (oldValue === 0) return 0;
	return ((newValue - oldValue) / oldValue) * 100;
}
