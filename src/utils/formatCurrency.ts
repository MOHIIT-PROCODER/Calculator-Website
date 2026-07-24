export function formatCurrency(value: number, currency: string = 'USD'): string {
	if (isNaN(value) || !isFinite(value)) return '$0.00';
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
}
