export interface QuadraticResult {
	root1: string;
	root2: string;
	discriminant: number;
	type: 'two_real' | 'one_real' | 'complex' | 'invalid';
}

export function solveQuadratic(a: number, b: number, c: number): QuadraticResult {
	if (a === 0) {
		if (b === 0) {
			return { root1: 'None', root2: 'None', discriminant: 0, type: 'invalid' };
		}
		// Linear equation bx + c = 0 => x = -c/b
		const root = (-c / b).toFixed(4);
		return { root1: root, root2: root, discriminant: 0, type: 'one_real' };
	}

	const discriminant = b * b - 4 * a * c;

	if (discriminant > 0) {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return {
			root1: root1.toFixed(4),
			root2: root2.toFixed(4),
			discriminant,
			type: 'two_real'
		};
	} else if (discriminant === 0) {
		const root = (-b / (2 * a)).toFixed(4);
		return {
			root1: root,
			root2: root,
			discriminant,
			type: 'one_real'
		};
	} else {
		const real = (-b / (2 * a)).toFixed(4);
		const imag = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
		return {
			root1: `${real} + ${imag}i`,
			root2: `${real} - ${imag}i`,
			discriminant,
			type: 'complex'
		};
	}
}
