export interface BMIInput {
	weight: number; // kg or lbs
	height: number; // cm or inches
	unitSystem?: 'metric' | 'imperial';
}

export interface BMIResult {
	bmi: number;
	category: string;
	colorClass: string;
	healthyRange: string;
}

export function calculateBMI(input: BMIInput): BMIResult {
	const { weight, height, unitSystem = 'metric' } = input;

	let bmi = 0;
	if (height > 0) {
		if (unitSystem === 'metric') {
			// Weight: kg, Height: cm
			bmi = weight / Math.pow(height / 100, 2);
		} else {
			// Weight: lbs, Height: inches
			bmi = (weight / Math.pow(height, 2)) * 703;
		}
	}

	let category = '';
	let colorClass = '';
	let healthyRange = '';

	if (bmi < 18.5) {
		category = 'Underweight';
		colorClass = 'text-warning';
	} else if (bmi >= 18.5 && bmi < 25) {
		category = 'Normal Weight';
		colorClass = 'text-success';
	} else if (bmi >= 25 && bmi < 30) {
		category = 'Overweight';
		colorClass = 'text-warning';
	} else {
		category = 'Obese';
		colorClass = 'text-error';
	}

	if (unitSystem === 'metric') {
		const minWeight = 18.5 * Math.pow(height / 100, 2);
		const maxWeight = 24.9 * Math.pow(height / 100, 2);
		healthyRange = `${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`;
	} else {
		const minWeight = (18.5 * Math.pow(height, 2)) / 703;
		const maxWeight = (24.9 * Math.pow(height, 2)) / 703;
		healthyRange = `${minWeight.toFixed(1)} lbs - ${maxWeight.toFixed(1)} lbs`;
	}

	return {
		bmi: Number(bmi.toFixed(1)),
		category,
		colorClass,
		healthyRange
	};
}
