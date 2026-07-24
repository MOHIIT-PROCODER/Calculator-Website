import { calculateBMR } from './bmr';
import type { BMRInput } from './bmr';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extreme';

export const activityFactors: Record<ActivityLevel, number> = {
	sedentary: 1.2,
	light: 1.375,
	moderate: 1.55,
	active: 1.725,
	extreme: 1.9
};

export interface TDEEInput extends BMRInput {
	activityLevel: ActivityLevel;
}

export function calculateTDEE(input: TDEEInput): number {
	const bmr = calculateBMR(input);
	const factor = activityFactors[input.activityLevel] || 1.2;
	return bmr * factor;
}
