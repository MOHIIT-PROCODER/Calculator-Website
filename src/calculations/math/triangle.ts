export interface TriangleResult {
	area: number;
	perimeter: number;
	semiperimeter: number;
	alpha: number; // in degrees
	beta: number;  // in degrees
	gamma: number; // in degrees
	isValid: boolean;
}

export function calculateTriangleFromSides(a: number, b: number, c: number): TriangleResult {
	// Triangle inequality checks
	if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
		return { area: 0, perimeter: 0, semiperimeter: 0, alpha: 0, beta: 0, gamma: 0, isValid: false };
	}

	const perimeter = a + b + c;
	const s = perimeter / 2;
	const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

	// Calculate angles in radians using Law of Cosines
	const radA = Math.acos((b * b + c * c - a * a) / (2 * b * c));
	const radB = Math.acos((a * a + c * c - b * b) / (2 * a * c));
	const radC = Math.acos((a * a + b * b - c * c) / (2 * a * b));

	// Convert to degrees
	const alpha = (radA * 180) / Math.PI;
	const beta = (radB * 180) / Math.PI;
	const gamma = (radC * 180) / Math.PI;

	return {
		area: Number(area.toFixed(2)),
		perimeter: Number(perimeter.toFixed(2)),
		semiperimeter: Number(s.toFixed(2)),
		alpha: Number(alpha.toFixed(1)),
		beta: Number(beta.toFixed(1)),
		gamma: Number(gamma.toFixed(1)),
		isValid: true
	};
}
