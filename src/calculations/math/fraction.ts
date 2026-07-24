export interface Fraction {
	numerator: number;
	denominator: number;
}

export function gcd(a: number, b: number): number {
	a = Math.abs(a);
	b = Math.abs(b);
	while (b) {
		const t = b;
		b = a % b;
		a = t;
	}
	return a;
}

export function simplifyFraction(f: Fraction): Fraction {
	const common = gcd(f.numerator, f.denominator);
	const sign = Math.sign(f.numerator) * Math.sign(f.denominator) || 1;
	return {
		numerator: sign * Math.abs(f.numerator) / common,
		denominator: Math.abs(f.denominator) / common
	};
}

export function addFractions(f1: Fraction, f2: Fraction): Fraction {
	return simplifyFraction({
		numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
		denominator: f1.denominator * f2.denominator
	});
}

export function subtractFractions(f1: Fraction, f2: Fraction): Fraction {
	return simplifyFraction({
		numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
		denominator: f1.denominator * f2.denominator
	});
}

export function multiplyFractions(f1: Fraction, f2: Fraction): Fraction {
	return simplifyFraction({
		numerator: f1.numerator * f2.numerator,
		denominator: f1.denominator * f2.denominator
	});
}

export function divideFractions(f1: Fraction, f2: Fraction): Fraction {
	return simplifyFraction({
		numerator: f1.numerator * f2.denominator,
		denominator: f1.denominator * f2.numerator
	});
}
