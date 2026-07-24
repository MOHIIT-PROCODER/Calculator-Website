export interface Calculator {
	id: string;
	name: string;
	description: string;
	category: 'financial' | 'health' | 'math' | 'other';
	slug: string;
	popular: boolean;
	icon: string;
}

export interface Category {
	id: 'financial' | 'health' | 'math' | 'other';
	name: string;
	description: string;
	icon: string;
	color: string;
}

export interface Unit {
	name: string;
	label: string;
	factor: number;
}
