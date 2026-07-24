export interface CompoundInterestInput {
	principal: number;
	contribution: number;
	contributionFrequency?: 'monthly' | 'annually';
	interestRate: number;
	years: number;
	compoundFrequency?: 'daily' | 'monthly' | 'quarterly' | 'annually';
}

export interface CompoundYearDetail {
	year: number;
	principal: number;
	interestEarned: number;
	totalInterest: number;
	totalContributions: number;
	balance: number;
}

export interface CompoundInterestResult {
	futureValue: number;
	totalPrincipal: number;
	totalContributions: number;
	totalInterest: number;
	yearlyDetails: CompoundYearDetail[];
}

export function calculateCompoundInterest(input: CompoundInterestInput): CompoundInterestResult {
	const {
		principal,
		contribution,
		contributionFrequency = 'monthly',
		interestRate,
		years,
		compoundFrequency = 'monthly'
	} = input;

	let compoundsPerYear = 12;
	if (compoundFrequency === 'daily') compoundsPerYear = 365;
	if (compoundFrequency === 'quarterly') compoundsPerYear = 4;
	if (compoundFrequency === 'annually') compoundsPerYear = 1;

	const r = interestRate / 100;
	let balance = principal;
	let totalContributions = 0;
	let totalInterest = 0;
	const yearlyDetails: CompoundYearDetail[] = [];

	// Map periods within the year
	for (let year = 1; year <= years; year++) {
		const startOfYearBalance = balance;
		let yearContributions = 0;
		let yearInterest = 0;

		// Perform compound calculation per day/month/etc.
		for (let period = 1; period <= compoundsPerYear; period++) {
			const compoundRate = r / compoundsPerYear;
			
			// Interest accrual
			const interest = balance * compoundRate;
			balance += interest;
			yearInterest += interest;

			// Add contributions aligned to periods
			if (contributionFrequency === 'monthly') {
				// Contribution added at the end of each month
				const contributionsPerCompound = 12 / compoundsPerYear;
				if (compoundsPerYear >= 12) {
					if (period % (compoundsPerYear / 12) === 0) {
						balance += contribution;
						yearContributions += contribution;
					}
				} else {
					balance += contribution * contributionsPerCompound;
					yearContributions += contribution * contributionsPerCompound;
				}
			}
		}

		if (contributionFrequency === 'annually') {
			balance += contribution;
			yearContributions += contribution;
		}

		totalContributions += yearContributions;
		totalInterest += yearInterest;

		yearlyDetails.push({
			year,
			principal,
			interestEarned: yearInterest,
			totalInterest,
			totalContributions,
			balance
		});
	}

	return {
		futureValue: balance,
		totalPrincipal: principal,
		totalContributions,
		totalInterest,
		yearlyDetails
	};
}
