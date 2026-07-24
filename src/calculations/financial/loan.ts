export interface LoanInput {
	loanAmount: number;
	interestRate: number;
	loanTerm: number; // in years
	paymentFrequency?: 'monthly' | 'biweekly' | 'weekly';
}

export interface AmortizationPeriod {
	period: number;
	payment: number;
	principal: number;
	interest: number;
	remainingBalance: number;
}

export interface LoanResult {
	periodicPayment: number;
	totalPaid: number;
	totalInterest: number;
	amortizationSchedule: AmortizationPeriod[];
}

export function calculateLoan(input: LoanInput): LoanResult {
	const { loanAmount, interestRate, loanTerm, paymentFrequency = 'monthly' } = input;

	let periodsPerYear = 12;
	if (paymentFrequency === 'biweekly') periodsPerYear = 26;
	if (paymentFrequency === 'weekly') periodsPerYear = 52;

	const r = interestRate / 100 / periodsPerYear;
	const n = loanTerm * periodsPerYear;

	let periodicPayment = 0;
	if (loanAmount > 0) {
		if (r === 0) {
			periodicPayment = loanAmount / n;
		} else {
			periodicPayment = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
		}
	}

	const schedule: AmortizationPeriod[] = [];
	let balance = loanAmount;
	let totalInterest = 0;

	for (let i = 1; i <= n; i++) {
		const interest = balance * r;
		const principal = Math.min(balance, periodicPayment - interest);
		balance = Math.max(0, balance - principal);
		totalInterest += interest;

		schedule.push({
			period: i,
			payment: periodicPayment,
			principal,
			interest,
			remainingBalance: balance
		});

		if (balance <= 0) break;
	}

	return {
		periodicPayment,
		totalPaid: loanAmount + totalInterest,
		totalInterest,
		amortizationSchedule: schedule
	};
}
