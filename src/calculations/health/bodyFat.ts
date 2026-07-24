export interface BodyFatInput {
	gender: 'male' | 'female';
	height: number; // cm
	neck: number; // cm
	waist: number; // cm
	hip?: number; // cm (required for female)
}

export function calculateBodyFat(input: BodyFatInput): number {
	const { gender, height, neck, waist, hip = 0 } = input;

	if (gender === 'male') {
		const val = waist - neck;
		if (val <= 0 || height <= 0) return 0;
		return 86.01 * Math.log10(val) - 70.041 * Math.log10(height) + 36.76;
	} else {
		const val = waist + hip - neck;
		if (val <= 0 || height <= 0) return 0;
		return 163.205 * Math.log10(val) - 97.684 * Math.log10(height) - 78.387;
	}
}
