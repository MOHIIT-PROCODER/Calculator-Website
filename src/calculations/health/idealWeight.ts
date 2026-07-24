export interface IdealWeightResult {
	devine: number;
	robinson: number;
	miller: number;
}

export function calculateIdealWeight(heightCm: number, gender: 'male' | 'female'): IdealWeightResult {
	const heightInches = heightCm / 2.54;
	const inchesOver5Ft = Math.max(0, heightInches - 60);

	let devine = 0;
	let robinson = 0;
	let miller = 0;

	if (gender === 'male') {
		devine = 50.0 + 2.3 * inchesOver5Ft;
		robinson = 52.0 + 1.9 * inchesOver5Ft;
		miller = 56.2 + 1.41 * inchesOver5Ft;
	} else {
		devine = 45.5 + 2.3 * inchesOver5Ft;
		robinson = 49.0 + 1.7 * inchesOver5Ft;
		miller = 53.1 + 1.36 * inchesOver5Ft;
	}

	return {
		devine: Number(devine.toFixed(1)),
		robinson: Number(robinson.toFixed(1)),
		miller: Number(miller.toFixed(1))
	};
}
