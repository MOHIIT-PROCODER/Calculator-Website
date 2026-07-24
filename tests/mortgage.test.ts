import { describe, it, expect } from 'vitest';
import { calculateMortgage } from '../src/calculations/financial/mortgage';

describe('Mortgage Calculator', () => {
	it('should calculate mortgage payment correctly', () => {
		const result = calculateMortgage({
			homeValue: 300000,
			downPayment: 60000, // 20% down
			interestRate: 4.5,
			loanTerm: 30,
			propertyTaxRate: 1.2,
			homeInsurance: 1200
		});

		expect(result.loanAmount).toBe(240000);
		expect(result.monthlyPI).toBeCloseTo(1216.04, 1);
		expect(result.monthlyTax).toBe(300); // 300000 * 0.012 / 12
		expect(result.monthlyInsurance).toBe(100); // 1200 / 12
		expect(result.monthlyPMI).toBe(0); // 20% down, no PMI
		expect(result.totalMonthly).toBeCloseTo(1616.04, 1);
	});

	it('should add PMI if down payment is less than 20%', () => {
		const result = calculateMortgage({
			homeValue: 300000,
			downPayment: 30000, // 10% down
			interestRate: 4.5,
			loanTerm: 30,
			propertyTaxRate: 1.2,
			homeInsurance: 1200,
			pmiRate: 0.5
		});

		expect(result.monthlyPMI).toBeGreaterThan(0);
		expect(result.loanAmount).toBe(270000);
	});
});
