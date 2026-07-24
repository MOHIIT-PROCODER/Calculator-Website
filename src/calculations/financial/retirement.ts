export interface RetirementInput {
	currentAge: number;
	retirementAge: number;
	lifeExpectancy: number;
	currentSavings: number;
	monthlyContribution: number;
	investmentReturn: number; // pre-retirement annual return
	postRetirementReturn: number; // post-retirement annual return
	monthlyExpensesTarget: number; // monthly expenses needed in retirement (today's dollars)
	inflationRate: number;
}

export interface RetirementResult {
	savingsAtRetirement: number;
	savingsAtRetirementReal: number;
	totalContributions: number;
	nestEggLastsYears: number;
	isTargetMet: boolean;
	monthlyIncomeInflationAdjusted: number;
}

export function calculateRetirement(input: RetirementInput): RetirementResult {
	const {
		currentAge,
		retirementAge,
		lifeExpectancy,
		currentSavings,
		monthlyContribution,
		investmentReturn,
		postRetirementReturn,
		monthlyExpensesTarget,
		inflationRate
	} = input;

	const yearsToRetire = Math.max(0, retirementAge - currentAge);
	const yearsInRetirement = Math.max(0, lifeExpectancy - retirementAge);

	const r = investmentReturn / 100 / 12;
	const inf = inflationRate / 100 / 12;
	
	let savings = currentSavings;
	let totalContributions = 0;

	// Pre-retirement accumulation phase
	const monthsToRetire = yearsToRetire * 12;
	for (let i = 0; i < monthsToRetire; i++) {
		savings = savings * (1 + r) + monthlyContribution;
		totalContributions += monthlyContribution;
	}

	const savingsAtRetirement = savings;
	const inflationMultiplier = Math.pow(1 + inflationRate / 100, -yearsToRetire);
	const savingsAtRetirementReal = savingsAtRetirement * inflationMultiplier;

	// Post-retirement decumulation phase
	const monthlyExpensesRetirement = monthlyExpensesTarget * Math.pow(1 + inflationRate / 100, yearsToRetire);
	
	let nestEgg = savingsAtRetirement;
	const postR = postRetirementReturn / 100 / 12;
	let monthsActive = 0;
	const maxMonths = yearsInRetirement * 12;

	while (nestEgg > 0 && monthsActive < maxMonths) {
		// Accrue interest
		nestEgg = nestEgg * (1 + postR);
		// Subtract inflation-adjusted monthly expenses
		const currentExpense = monthlyExpensesRetirement * Math.pow(1 + inf, monthsActive);
		nestEgg -= currentExpense;
		
		if (nestEgg > 0) {
			monthsActive++;
		} else {
			break;
		}
	}

	const nestEggLastsYears = Number((monthsActive / 12).toFixed(1));
	const isTargetMet = nestEggLastsYears >= yearsInRetirement;

	return {
		savingsAtRetirement,
		savingsAtRetirementReal,
		totalContributions,
		nestEggLastsYears,
		isTargetMet,
		monthlyIncomeInflationAdjusted: monthlyExpensesRetirement
	};
}
