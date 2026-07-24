export function addDurationToDate(
	startDate: Date,
	amount: number,
	unit: 'days' | 'weeks' | 'months' | 'years',
	operation: 'add' | 'subtract'
): Date {
	const result = new Date(startDate.getTime());
	const scale = operation === 'add' ? 1 : -1;
	const val = amount * scale;

	if (unit === 'days') {
		result.setDate(result.getDate() + val);
	} else if (unit === 'weeks') {
		result.setDate(result.getDate() + val * 7);
	} else if (unit === 'months') {
		result.setMonth(result.getMonth() + val);
	} else if (unit === 'years') {
		result.setFullYear(result.getFullYear() + val);
	}

	return result;
}

export interface DateDiffResult {
	days: number;
	weeks: number;
	months: number;
	years: number;
	formattedString: string;
}

export function differenceBetweenDates(start: Date, end: Date): DateDiffResult {
	const startMs = start.getTime();
	const endMs = end.getTime();
	const diffMs = Math.abs(endMs - startMs);

	const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	const weeks = Number((days / 7).toFixed(1));

	// Approximate calculations
	const years = Number((days / 365.25).toFixed(2));
	const months = Number((days / 30.437).toFixed(2));

	return {
		days,
		weeks,
		months,
		years,
		formattedString: `${days} days (${weeks} weeks)`
	};
}
