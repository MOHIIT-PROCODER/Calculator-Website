export interface BMRInput {
	weight: number; // kg
	height: number; // cm
	age: number;
	gender: 'male' | 'female';
	formula?: 'mifflin' | 'harris';
}

export function calculateBMR(input: BMRInput): number {
	const { weight, height, age, gender, formula = 'mifflin' } = input;

	if (formula === 'mifflin') {
		if (gender === 'male') {
			return 10 * weight + 6.25 * height - 5 * age + 5;
		} else {
			return 10 * weight + 6.25 * height - 5 * age - 161;
		}
	} else {
		// Harris-Benedict
		if (gender === 'male') {
			return 66.473 + 13.7516 * weight + 5.0033 * height - 6.755 * age;
		} else {
			return 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
		}
	}
}
