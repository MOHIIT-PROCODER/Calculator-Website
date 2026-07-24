export interface ROIInput {
	amountInvested: number;
	amountReturned: number;
	investmentLength: number;
	lengthUnit?: 'years' | 'months';
}

export interface ROIResult {
	investmentGain: number;
	roi: number; // in %
	annualizedRoi: number; // in %
}

export function calculateROI(input: ROIInput): ROIResult {
	const { amountInvested, amountReturned, investmentLength, lengthUnit = 'years' } = input;

	const investmentGain = amountReturned - amountInvested;
	let roi = 0;
	if (amountInvested > 0) {
		roi = (investmentGain / amountInvested) * 100;
	}

	const years = lengthUnit === 'months' ? investmentLength / 12 : investmentLength;
	let annualizedRoi = 0;
	if (amountInvested > 0 && years > 0 && amountReturned > 0) {
		annualizedRoi = (Math.pow(amountReturned / amountInvested, 1 / years) - 1) * 100;
	}

	return {
		investmentGain,
		roi,
		annualizedRoi
	};
}
