import type { FAQItem } from '../types/seo';

export const faqData: Record<string, FAQItem[]> = {
	'mortgage-calculator': [
		{
			question: 'What is included in a monthly mortgage payment?',
			answer: 'A standard mortgage payment consists of Principal (paying off the loan balance), Interest (cost of borrowing), Taxes (local property taxes), and Insurance (homeowners insurance and PMI if applicable), often abbreviated as PITI.'
		},
		{
			question: 'How does a down payment affect my mortgage?',
			answer: 'A larger down payment reduces the total amount you need to borrow, which lowers your monthly payments and saves you interest. If you put down 20% or more, you also avoid paying Private Mortgage Insurance (PMI).'
		}
	],
	'loan-calculator': [
		{
			question: 'What is the difference between principal and interest?',
			answer: 'Principal is the actual amount of money you borrowed. Interest is the fee charged by the lender for letting you borrow that money, usually calculated as an annual percentage rate (APR).'
		},
		{
			question: 'What does amortization mean?',
			answer: 'Amortization is the process of spreading out a loan into a series of equal periodic payments. Over time, the portion of each payment that goes toward interest decreases, while the portion going toward the principal increases.'
		}
	],
	'bmi-calculator': [
		{
			question: 'What is Body Mass Index (BMI)?',
			answer: 'BMI is a simple measurement that uses your height and weight to estimate whether your weight is in a healthy range. It is defined as weight in kilograms divided by the square of height in meters.'
		},
		{
			question: 'Is BMI accurate for everyone?',
			answer: 'No. BMI is a general screening tool and does not directly measure body fat. It can overestimate body fat in muscular individuals (like athletes) and underestimate body fat in older adults who have lost muscle mass.'
		}
	],
	'calorie-calculator': [
		{
			question: 'How are daily calorie needs calculated?',
			answer: 'Daily calorie needs are calculated by first determining your Basal Metabolic Rate (BMR) - the calories your body burns at rest - and then multiplying it by an activity factor representing your daily exercise.'
		},
		{
			question: 'How many calories do I need to lose weight?',
			answer: 'To lose weight, you generally need to create a calorie deficit. A safe, sustainable target is a deficit of 500 calories per day, which translates to roughly 1 pound (0.45 kg) of weight loss per week.'
		}
	],
	'percentage-calculator': [
		{
			question: 'How do you calculate a percentage?',
			answer: 'To find the percentage of a value, divide the part by the whole and multiply by 100. For example, 15 out of 60 is (15 / 60) * 100 = 25%.'
		},
		{
			question: 'How is percentage increase calculated?',
			answer: 'Subtract the old value from the new value, divide the difference by the old value, and then multiply by 100. Formula: ((New - Old) / Old) * 100.'
		}
	],
	'age-calculator': [
		{
			question: 'How does the age calculator handle leap years?',
			answer: 'The age calculator automatically counts 366 days for years that are leap years (divisible by 4, but not 100, unless also divisible by 400). This guarantees exact calculations down to the day.'
		}
	]
};
