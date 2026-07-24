import { calculateTDEE } from './tdee';
import type { TDEEInput } from './tdee';

export interface CalorieResult {
	tdee: number;
	maintenance: number;
	weightLoss: number;
	extremeLoss: number;
	weightGain: number;
}

export function calculateCalories(input: TDEEInput): CalorieResult {
	const tdee = calculateTDEE(input);

	return {
		tdee,
		maintenance: tdee,
		weightLoss: Math.max(1200, tdee - 500),
		extremeLoss: Math.max(1000, tdee - 1000),
		weightGain: tdee + 500
	};
}
