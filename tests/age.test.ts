import { describe, it, expect } from 'vitest';
import { calculateAge } from '../src/calculations/other/age';

describe('Age Calculator', () => {
	it('should calculate age correctly between two dates', () => {
		const birth = new Date(1990, 5, 15); // June 15, 1990
		const target = new Date(2023, 5, 15); // June 15, 2023
		const result = calculateAge(birth, target);

		expect(result.years).toBe(33);
		expect(result.months).toBe(0);
		expect(result.days).toBe(0);
	});

	it('should handle birthday not yet reached in the year', () => {
		const birth = new Date(1990, 5, 15); // June 15, 1990
		const target = new Date(2023, 4, 15); // May 15, 2023
		const result = calculateAge(birth, target);

		expect(result.years).toBe(32);
		expect(result.months).toBe(11);
		expect(result.days).toBe(0);
	});
});
