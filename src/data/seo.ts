import type { SEOData } from '../types/seo';

export const seoData: Record<string, SEOData> = {
	home: {
		title: 'Calculator Hub - Free Online Calculators for Finance, Health, & Math',
		description: 'Access 40+ free, beautiful, and interactive online calculators. Get instant results for mortgages, loans, BMI, math, and daily tools.',
		keywords: ['online calculator', 'free calculators', 'mortgage calculator', 'bmi calculator', 'gpa calculator', 'percentage calculator']
	},
	financial: {
		title: 'Financial Calculators - Loans, Mortgages, Savings, & ROI',
		description: 'Make informed money choices with our free financial suite. Analyze mortgage rates, compound interest, retirement projections, and business ROI.',
		keywords: ['financial calculator', 'mortgage loan calculator', 'compound interest calculator', 'savings projection']
	},
	health: {
		title: 'Health & Fitness Calculators - BMI, Calorie, BMR, & Activity',
		description: 'Track and optimize your health goals. Calculators for Body Mass Index (BMI), daily calorie target, body fat, and pregnancy due dates.',
		keywords: ['health calculator', 'bmi calculator metric', 'calorie counter tracker', 'bmr Mifflin St Jeor']
	},
	math: {
		title: 'Mathematics Calculators - Algebra, Geometry, Statistics, & Area',
		description: 'Solve mathematical problems instantly. Tools for quadratic roots, triangle angles, standard deviations, and volume computations.',
		keywords: ['math helper', 'fraction calculator', 'triangle solver trigonometry', 'quadratic formula solver']
	},
	other: {
		title: 'Everyday Practical Calculators - Age, Tip, & Password Generator',
		description: 'Quick answers for day-to-day computations. Calculate age, date intervals, restaurant bills, and create secure credentials.',
		keywords: ['age calculator years months', 'password creator entropy', 'tip splitter', 'unit conversion calculator']
	}
};
