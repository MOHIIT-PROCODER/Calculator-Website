import type { Category } from '../types/calculator';

export const categories: Category[] = [
	{
		id: 'financial',
		name: 'Financial',
		description: 'Calculate mortgage payments, interest rates, loans, savings, investments, and more.',
		icon: 'financial',
		color: 'from-blue-600 to-indigo-600'
	},
	{
		id: 'health',
		name: 'Health & Fitness',
		description: 'Track BMI, calories, BMR, body fat, macro intake, due dates, and pace.',
		icon: 'health',
		color: 'from-emerald-600 to-teal-600'
	},
	{
		id: 'math',
		name: 'Mathematics',
		description: 'Solve algebra, triangle properties, statistics, fractions, volumes, and percentages.',
		icon: 'math',
		color: 'from-purple-600 to-pink-600'
	},
	{
		id: 'other',
		name: 'Other Tools',
		description: 'Determine age, differences in dates, calculate tips, grade conversions, and passwords.',
		icon: 'other',
		color: 'from-amber-600 to-orange-600'
	}
];
