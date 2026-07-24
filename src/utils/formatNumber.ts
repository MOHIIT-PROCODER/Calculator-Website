export function formatNumber(value: number, decimals: number = 2): string {
	if (isNaN(value) || !isFinite(value)) return '0';
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: decimals
	}).format(value);
}
