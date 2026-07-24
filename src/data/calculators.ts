import type { Calculator } from '../types/calculator';

export const calculators: Calculator[] = [
	// Financial
	{
		id: 'mortgage',
		name: 'Mortgage Calculator',
		description: 'Calculate monthly payments, interest and total loan cost.',
		category: 'financial',
		slug: 'mortgage-calculator',
		popular: true,
		icon: 'home'
	},
	{
		id: 'loan',
		name: 'Loan Calculator',
		description: 'Calculate monthly payments, interest cost, and amortization schedules for general loans.',
		category: 'financial',
		slug: 'loan-calculator',
		popular: true,
		icon: 'credit-card'
	},
	{
		id: 'auto-loan',
		name: 'Auto Loan Calculator',
		description: 'Calculate monthly payments, total costs, taxes, and fees for financing a car.',
		category: 'financial',
		slug: 'auto-loan-calculator',
		popular: false,
		icon: 'car'
	},
	{
		id: 'interest',
		name: 'Interest Calculator',
		description: 'Calculate simple interest earned or paid over a given period of time.',
		category: 'financial',
		slug: 'interest-calculator',
		popular: false,
		icon: 'percent'
	},
	{
		id: 'compound-interest',
		name: 'Compound Interest Calculator',
		description: 'Simulate compound interest over time with optional periodic contributions.',
		category: 'financial',
		slug: 'compound-interest-calculator',
		popular: true,
		icon: 'trending-up'
	},
	{
		id: 'investment',
		name: 'Investment Calculator',
		description: 'Determine the future value of your investments based on return rates and schedules.',
		category: 'financial',
		slug: 'investment-calculator',
		popular: true,
		icon: 'briefcase'
	},
	{
		id: 'retirement',
		name: 'Retirement Calculator',
		description: 'Plan your retirement savings goals and see how long your nest egg will last.',
		category: 'financial',
		slug: 'retirement-calculator',
		popular: false,
		icon: 'sun'
	},
	{
		id: 'salary',
		name: 'Salary Calculator',
		description: 'Convert salary between hourly, daily, weekly, monthly, and annual intervals.',
		category: 'financial',
		slug: 'salary-calculator',
		popular: false,
		icon: 'dollar-sign'
	},
	{
		id: 'sales-tax',
		name: 'Sales Tax Calculator',
		description: 'Compute total price with sales tax added, or back-calculate tax rate from net price.',
		category: 'financial',
		slug: 'sales-tax-calculator',
		popular: false,
		icon: 'shopping-bag'
	},
	{
		id: 'savings',
		name: 'Savings Calculator',
		description: 'Calculate the growth of your savings account over time with compound interest.',
		category: 'financial',
		slug: 'savings-calculator',
		popular: false,
		icon: 'piggy-bank'
	},
	{
		id: 'roi',
		name: 'ROI Calculator',
		description: 'Calculate return on investment (ROI) percentages and annualized yields.',
		category: 'financial',
		slug: 'roi-calculator',
		popular: false,
		icon: 'award'
	},
	{
		id: 'budget',
		name: 'Budget Calculator',
		description: 'Create a simple 50/30/20 monthly budget layout based on net income.',
		category: 'financial',
		slug: 'budget-calculator',
		popular: false,
		icon: 'pie-chart'
	},

	// Health
	{
		id: 'bmi',
		name: 'BMI Calculator',
		description: 'Calculate Body Mass Index (BMI) and health category according to standard parameters.',
		category: 'health',
		slug: 'bmi-calculator',
		popular: true,
		icon: 'activity'
	},
	{
		id: 'calorie',
		name: 'Calorie Calculator',
		description: 'Estimate daily calorie needs for weight maintenance, weight loss, or weight gain.',
		category: 'health',
		slug: 'calorie-calculator',
		popular: true,
		icon: 'apple'
	},
	{
		id: 'body-fat',
		name: 'Body Fat Calculator',
		description: 'Estimate body fat percentage using the US Navy method based on body measurements.',
		category: 'health',
		slug: 'body-fat-calculator',
		popular: false,
		icon: 'scissors'
	},
	{
		id: 'bmr',
		name: 'BMR Calculator',
		description: 'Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor or Harris-Benedict formulas.',
		category: 'health',
		slug: 'bmr-calculator',
		popular: false,
		icon: 'zap'
	},
	{
		id: 'tdee',
		name: 'TDEE Calculator',
		description: 'Determine Total Daily Energy Expenditure (TDEE) based on activity levels.',
		category: 'health',
		slug: 'tdee-calculator',
		popular: true,
		icon: 'flame'
	},
	{
		id: 'ideal-weight',
		name: 'Ideal Weight Calculator',
		description: 'Compare ideal body weight estimates based on Devine, Robinson, and Miller formulas.',
		category: 'health',
		slug: 'ideal-weight-calculator',
		popular: false,
		icon: 'scale'
	},
	{
		id: 'macro',
		name: 'Macro Calculator',
		description: 'Determine optimal daily macronutrient splits (protein, carbs, fats) for physical goals.',
		category: 'health',
		slug: 'macro-calculator',
		popular: false,
		icon: 'grid'
	},
	{
		id: 'protein',
		name: 'Protein Calculator',
		description: 'Find recommended daily protein intake based on weight, training status, and goal.',
		category: 'health',
		slug: 'protein-calculator',
		popular: false,
		icon: 'shield'
	},
	{
		id: 'pregnancy',
		name: 'Pregnancy Calculator',
		description: 'Estimate conception dates, gestational progress, and current trimester tracking.',
		category: 'health',
		slug: 'pregnancy-calculator',
		popular: false,
		icon: 'heart'
	},
	{
		id: 'due-date',
		name: 'Due Date Calculator',
		description: 'Calculate estimated baby due date based on the last menstrual period or conception date.',
		category: 'health',
		slug: 'due-date-calculator',
		popular: false,
		icon: 'calendar'
	},
	{
		id: 'pace',
		name: 'Pace Calculator',
		description: 'Calculate running pace, total time, or distance for running training and racing.',
		category: 'health',
		slug: 'pace-calculator',
		popular: false,
		icon: 'fast-forward'
	},

	// Math
	{
		id: 'basic',
		name: 'Basic Calculator',
		description: 'A standard arithmetic tool for simple math operations (add, subtract, multiply, divide).',
		category: 'math',
		slug: 'basic-calculator',
		popular: true,
		icon: 'plus-minus'
	},
	{
		id: 'scientific',
		name: 'Scientific Calculator',
		description: 'Perform advanced mathematical operations including trigonometry, logs, and exponents.',
		category: 'math',
		slug: 'scientific-calculator',
		popular: true,
		icon: 'terminal'
	},
	{
		id: 'percentage',
		name: 'Percentage Calculator',
		description: 'Calculate percentages, percentage change, and percentage differences easily.',
		category: 'math',
		slug: 'percentage-calculator',
		popular: true,
		icon: 'percent'
	},
	{
		id: 'fraction',
		name: 'Fraction Calculator',
		description: 'Add, subtract, multiply, and divide fractions, including simplifying and decimals conversion.',
		category: 'math',
		slug: 'fraction-calculator',
		popular: false,
		icon: 'divide'
	},
	{
		id: 'triangle',
		name: 'Triangle Calculator',
		description: 'Calculate angles, sides, perimeter, and area of triangles using trig formulas.',
		category: 'math',
		slug: 'triangle-calculator',
		popular: false,
		icon: 'triangle'
	},
	{
		id: 'area',
		name: 'Area Calculator',
		description: 'Determine the area of basic shapes: rectangle, circle, triangle, trapezoid, and ellipse.',
		category: 'math',
		slug: 'area-calculator',
		popular: false,
		icon: 'layers'
	},
	{
		id: 'volume',
		name: 'Volume Calculator',
		description: 'Determine the volume of common solids: sphere, cylinder, cone, cube, and pyramid.',
		category: 'math',
		slug: 'volume-calculator',
		popular: false,
		icon: 'box'
	},
	{
		id: 'probability',
		name: 'Probability Calculator',
		description: 'Calculate single-event, multiple-event, and conditional probabilities.',
		category: 'math',
		slug: 'probability-calculator',
		popular: false,
		icon: 'shuffle'
	},
	{
		id: 'standard-deviation',
		name: 'Standard Deviation Calculator',
		description: 'Compute sample and population standard deviation, mean, variance, and margins.',
		category: 'math',
		slug: 'standard-deviation-calculator',
		popular: false,
		icon: 'hash'
	},
	{
		id: 'quadratic',
		name: 'Quadratic Equation Solver',
		description: 'Find roots for second-degree polynomial equations using the quadratic formula.',
		category: 'math',
		slug: 'quadratic-calculator',
		popular: false,
		icon: 'git-commit'
	},
	{
		id: 'matrix',
		name: 'Matrix Calculator',
		description: 'Perform matrix arithmetic (addition, subtraction, multiplication) and find determinants.',
		category: 'math',
		slug: 'matrix-calculator',
		popular: false,
		icon: 'table'
	},
	{
		id: 'random-number',
		name: 'Random Number Generator',
		description: 'Generate customizable sets of random numbers within custom ranges.',
		category: 'math',
		slug: 'random-number-calculator',
		popular: false,
		icon: 'help-circle'
	},

	// Other
	{
		id: 'age',
		name: 'Age Calculator',
		description: 'Find your exact age in years, months, weeks, days, hours, and minutes.',
		category: 'other',
		slug: 'age-calculator',
		popular: true,
		icon: 'user'
	},
	{
		id: 'date',
		name: 'Date Calculator',
		description: 'Add or subtract days, weeks, months, or years from a start date, or find date gaps.',
		category: 'other',
		slug: 'date-calculator',
		popular: true,
		icon: 'calendar'
	},
	{
		id: 'time',
		name: 'Time Calculator',
		description: 'Add or subtract time durations in hours, minutes, and seconds.',
		category: 'other',
		slug: 'time-calculator',
		popular: false,
		icon: 'clock'
	},
	{
		id: 'hours',
		name: 'Hours Calculator',
		description: 'Calculate working hours between two times, taking breaks into account.',
		category: 'other',
		slug: 'hours-calculator',
		popular: false,
		icon: 'briefcase'
	},
	{
		id: 'gpa',
		name: 'GPA Calculator',
		description: 'Calculate semester or cumulative GPA based on letters or percentage grades.',
		category: 'other',
		slug: 'gpa-calculator',
		popular: false,
		icon: 'book-open'
	},
	{
		id: 'grade',
		name: 'Grade Calculator',
		description: 'Determine required final exam scores or overall class grades using weighted segments.',
		category: 'other',
		slug: 'grade-calculator',
		popular: false,
		icon: 'file-text'
	},
	{
		id: 'password',
		name: 'Password Generator',
		description: 'Generate high-entropy secure passwords using custom character parameter settings.',
		category: 'other',
		slug: 'password-generator',
		popular: false,
		icon: 'lock'
	},
	{
		id: 'tip',
		name: 'Tip Calculator',
		description: 'Compute restaurant tips and split bills between multiple dinner guests.',
		category: 'other',
		slug: 'tip-calculator',
		popular: false,
		icon: 'coffee'
	},
	{
		id: 'discount',
		name: 'Discount Calculator',
		description: 'Calculate sale prices, savings amounts, and original prices with percentage off.',
		category: 'other',
		slug: 'discount-calculator',
		popular: false,
		icon: 'tag'
	},
	{
		id: 'conversion',
		name: 'Conversion Calculator',
		description: 'Convert measurement units: length, weight, temperature, area, volume, and speed.',
		category: 'other',
		slug: 'conversion-calculator',
		popular: true,
		icon: 'refresh-cw'
	}
];
