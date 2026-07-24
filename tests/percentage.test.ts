import { describe, it, expect } from 'vitest';
import { 
	getPercentageOf, 
	getPercentOfValue, 
	getPercentDifference, 
	getPercentChange 
} from '../src/calculations/math/percentage';

describe('Percentage Calculator', () => {
	it('should calculate percentage of value correctly', () => {
		expect(getPercentageOf(15, 200)).toBe(30);
	});

	it('should calculate percent of total correctly', () => {
		expect(getPercentOfValue(30, 200)).toBe(15);
	});

	it('should calculate percent change correctly', () => {
		expect(getPercentChange(100, 150)).toBe(50);
		expect(getPercentChange(150, 100)).toBeCloseTo(-33.33, 1);
	});

	it('should calculate percent difference correctly', () => {
		expect(getPercentDifference(100, 200)).toBeCloseTo(66.67, 1);
	});
});
