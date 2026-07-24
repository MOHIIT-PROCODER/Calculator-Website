import { describe, it, expect } from 'vitest';
import { calculateBMI } from '../src/calculations/health/bmi';

describe('BMI Calculator', () => {
	it('should calculate BMI correctly in metric system', () => {
		const result = calculateBMI({
			weight: 70, // kg
			height: 175, // cm
			unitSystem: 'metric'
		});

		expect(result.bmi).toBe(22.9);
		expect(result.category).toBe('Normal Weight');
	});

	it('should calculate BMI correctly in imperial system', () => {
		const result = calculateBMI({
			weight: 154, // lbs
			height: 69, // inches (5'9")
			unitSystem: 'imperial'
		});

		expect(result.bmi).toBe(22.7);
		expect(result.category).toBe('Normal Weight');
	});

	it('should categorize underweight correctly', () => {
		const result = calculateBMI({
			weight: 50,
			height: 175,
			unitSystem: 'metric'
		});

		expect(result.category).toBe('Underweight');
	});
});
