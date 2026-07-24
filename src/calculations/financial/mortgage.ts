export interface MortgageInput {
	homeValue: number;
	downPayment: number;
	interestRate: number;
	loanTerm: number; // in years
	propertyTaxRate?: number; // annual percent of home value
	homeInsurance?: number; // annual cost
	pmiRate?: number; // annual percent of loan balance (for down payments < 20%)
}

export interface MortgageResult {
	monthlyPI: number;
	monthlyTax: number;
	monthlyInsurance: number;
	monthlyPMI: number;
	totalMonthly: number;
	loanAmount: number;
	totalInterest: number;
	totalPaid: number;
}

export function calculateMortgage(input: MortgageInput): MortgageResult {
	const {
		homeValue,
		downPayment,
		interestRate,
		loanTerm,
		propertyTaxRate = 1.2,
		homeInsurance = 1200,
		pmiRate = 0.5
	} = input;

	const loanAmount = Math.max(0, homeValue - downPayment);
	const r = interestRate / 100 / 12;
	const n = loanTerm * 12;

	let monthlyPI = 0;
	if (loanAmount > 0) {
		if (r === 0) {
			monthlyPI = loanAmount / n;
		} else {
			monthlyPI = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
		}
	}

	const monthlyTax = (homeValue * (propertyTaxRate / 100)) / 12;
	const monthlyInsurance = homeInsurance / 12;
	const monthlyPMI = downPayment < homeValue * 0.2 ? (loanAmount * (pmiRate / 100)) / 12 : 0;
	const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

	const totalPaid = monthlyPI * n;
	const totalInterest = Math.max(0, totalPaid - loanAmount);

	return {
		monthlyPI,
		monthlyTax,
		monthlyInsurance,
		monthlyPMI,
		totalMonthly,
		loanAmount,
		totalInterest,
		totalPaid
	};
}
