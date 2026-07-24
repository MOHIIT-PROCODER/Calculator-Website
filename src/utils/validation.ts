export function validateNumber(value: any, min?: number, max?: number): string | null {
	const parsed = parseFloat(value);
	if (isNaN(parsed)) {
		return 'Please enter a valid number';
	}
	if (min !== undefined && parsed < min) {
		return `Value must be at least ${min}`;
	}
	if (max !== undefined && parsed > max) {
		return `Value cannot exceed ${max}`;
	}
	return null;
}
