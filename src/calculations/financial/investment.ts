export interface InvestmentInput {
	startingAmount: number;
	contribution: number;
	contributionFrequency: 'monthly' | 'annually';
	rateOfReturn: number;
	years: number;
	inflationRate?: number;
}

export interface InvestmentResult {
	nominalValue: number;
	realValue: number; // Inflation adjusted
	totalContributions: number;
	totalEarnings: number;
}

export function calculateInvestment(input: InvestmentInput): InvestmentResult {
	const {
		startingAmount,
		contribution,
		contributionFrequency,
		rateOfReturn,
		years,
		inflationRate = 0
	} = input;

	const r = rateOfReturn / 100;
	const inf = inflationRate / 100;
	const realRate = (1 + r) / (1 + inf) - 1;

	let nominalBalance = startingAmount;
	let realBalance = startingAmount;
	let totalContributions = 0;

	const periods = contributionFrequency === 'monthly' ? years * 12 : years;
	const nominalPeriodRate = contributionFrequency === 'monthly' ? r / 12 : r;
	const realPeriodRate = contributionFrequency === 'monthly' ? realRate / 12 : realRate;

	for (let i = 1; i <= periods; i++) {
		nominalBalance = nominalBalance * (1 + nominalPeriodRate) + contribution;
		realBalance = realBalance * (1 + realPeriodRate) + contribution;
		totalContributions += contribution;
	}

	return {
		nominalValue: nominalBalance,
		realValue: realBalance,
		totalContributions,
		totalEarnings: Math.max(0, nominalBalance - (startingAmount + totalContributions))
	};
}
