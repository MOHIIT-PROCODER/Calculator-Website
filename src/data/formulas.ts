export interface FormulaDetails {
	formula: string;
	explanation: string;
	example: string;
	detailedSEO?: string;
}

export const formulasRegistry: Record<string, FormulaDetails> = {
	mortgage: {
		formula: "M = P * [r(1+r)^n] / [(1+r)^n - 1]",
		explanation: "Where M is the monthly payment, P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments (loan term in years multiplied by 12).",
		example: "For a loan amount of $300,000 at a 5% annual interest rate over 30 years: r = 0.05 / 12 = 0.004167, n = 30 * 12 = 360. The monthly payment M = 300,000 * [0.004167(1.004167)^360] / [(1.004167)^360 - 1] = $1,610.46.",
	},
	loan: {
		formula: "Payment = P * [r(1+r)^n] / [(1+r)^n - 1]",
		explanation: "P is the principal loan amount, r is the periodic interest rate (annual interest rate divided by payment frequency), and n is the total number of payments (duration in years multiplied by payment frequency).",
		example: "A general loan of $10,000 at 6% annual interest rate for 5 years paid monthly: periodic rate r = 0.06 / 12 = 0.005, periods n = 5 * 12 = 60. The monthly payment = 10,000 * [0.005(1.005)^60] / [(1.005)^60 - 1] = $193.33.",
	},
	'auto-loan': {
		formula: "Monthly Payment = P * [r(1+r)^n] / [(1+r)^n - 1]",
		explanation: "P is the vehicle loan amount (purchase price minus down payment and trade-in value, plus taxes/fees), r is the periodic rate, and n is the term in months.",
		example: "An auto loan of $20,000 at a 6.5% interest rate over 5 years (60 months): r = 0.065 / 12 = 0.005417, n = 60. The monthly payment is $391.32.",
	},
	interest: {
		formula: "I = P * r * t",
		explanation: "Simple interest formula: I is the interest earned, P is the principal amount, r is the annual rate of interest, and t is the time duration in years.",
		example: "For a deposit of $5,000 at an annual simple interest rate of 4% for 3 years: I = 5,000 * 0.04 * 3 = $600 interest earned. The total accumulated balance is $5,600.",
	},
	'compound-interest': {
		formula: "A = P * (1 + r/n)^(n*t)",
		explanation: "A is the final accumulated balance, P is the initial principal, r is the nominal annual rate, n is the compounding frequency per year, and t is the time in years.",
		example: "For a principal of $1,000 compounded monthly at an annual interest rate of 5% for 10 years: A = 1,000 * (1 + 0.05/12)^(12*10) = $1,647.01.",
	},
	investment: {
		formula: "FV = PV * (1 + r)^n + PMT * [((1 + r)^n - 1) / r]",
		explanation: "FV is the future value of the investment, PV is the present value (initial principal), r is the periodic return rate, n is the number of periods, and PMT is the recurring periodic contribution.",
		example: "For an initial investment of $10,000 with monthly contributions of $100 earning 8% annually for 15 years: Future Value is $67,789.37.",
	},
	retirement: {
		formula: "Target Nest Egg = Annual Expenses / Safe Withdrawal Rate (typically 4%)",
		explanation: "Computes the target savings balance needed for retirement based on annual spending and retirement length, adjusted for inflation and annual return.",
		example: "If you spend $50,000 annually, target nest egg using the 4% rule: 50,000 / 0.04 = $1,250,000 retirement goal.",
	},
	salary: {
		formula: "Hourly Wage = Annual Salary / 2080 working hours",
		explanation: "Standard conversion assuming a 40-hour work week over 52 working weeks in a year (52 * 40 = 2080 working hours).",
		example: "An annual salary of $65,000 equates to: 65,000 / 2080 = $31.25 hourly wage rate.",
	},
	'sales-tax': {
		formula: "Total Price = Net Price * (1 + Tax Rate)",
		explanation: "Calculates sales tax by multiplying the net price of goods by the tax rate. You can also back-calculate the net price from the gross price.",
		example: "For an item costing $50 with a 7% sales tax rate: Sales Tax = $50 * 0.07 = $3.50. Total Price = $50 + $3.50 = $53.50.",
	},
	savings: {
		formula: "A = P * (1 + r/n)^(n*t)",
		explanation: "Determines the growth of a savings account over a given period, incorporating compound interest and optional monthly savings deposits.",
		example: "Starting with a balance of $5,000 compounding monthly at a 3% annual interest rate over 5 years yields an accumulated balance of $5,808.08.",
	},
	roi: {
		formula: "ROI = (Net Return / Investment Cost) * 100",
		explanation: "Measures return on investment (ROI) percentages and annualized yields based on starting capital and final payout values.",
		example: "If you purchase an asset for $10,000 and sell it for $12,500, Net Return is $2,500. ROI = ($2,500 / $10,000) * 100 = 25%.",
	},
	budget: {
		formula: "Needs (50%) | Wants (30%) | Savings/Debt (20%)",
		explanation: "Creates a standard monthly budget using the popular 50/30/20 rule of thumb based on your net income.",
		example: "For a monthly net income of $4,000, the budget divides as: Needs = $2,000, Wants = $1,200, Savings = $800.",
	},
	bmi: {
		formula: "BMI = weight (kg) / [height (m)]^2",
		explanation: "Body Mass Index metric: body weight in kilograms divided by the square of body height in meters. In imperial units, BMI = [weight (lbs) / height (in)^2] * 703.",
		example: "For a person weighing 70 kilograms and standing 1.75 meters tall: BMI = 70 / (1.75 * 1.75) = 22.86 (Normal range).",
	},
	calorie: {
		formula: "Daily Calories = BMR * Activity Multiplier",
		explanation: "Daily calorie targets are computed using the Mifflin-St Jeor equation to find Basal Metabolic Rate, which is then multiplied by an activity factor (Sedentary: 1.2, Active: 1.55, etc.).",
		example: "For a BMR of 1,600 kcal and moderate physical activity (1.55 multiplier): Daily Calories = 1,600 * 1.55 = 2,480 calories daily.",
	},
	'body-fat': {
		formula: "Navy Body Fat % (Male) = 86.010 * log10(abdomen - neck) - 70.041 * log10(height) + 36.76",
		explanation: "US Navy tape measurement equations based on neck, waist/abdomen, and hip circumferences (hip is used for females only). Formulas use log10 of inch dimensions.",
		example: "For a male standing 70 inches tall with a 34-inch waist and 15-inch neck: Navy Body Fat % = 86.010 * log10(34 - 15) - 70.041 * log10(70) + 36.76 = 16.3% fat index."
	},
	bmr: {
		formula: "BMR (Mifflin-St Jeor Male) = 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) + 5",
		explanation: "Basal Metabolic Rate: energy expenditure required to sustain basic metabolic functions at absolute rest. Female formula ends with - 161.",
		example: "For a 30-year-old male weighing 80 kg and standing 180 cm: BMR = 10 * 80 + 6.25 * 180 - 5 * 30 + 5 = 800 + 1125 - 150 + 5 = 1,780 kcal daily BMR."
	},
	tdee: {
		formula: "TDEE = BMR * Activity Factor",
		explanation: "Total Daily Energy Expenditure is the total number of calories your body burns in a 24-hour cycle including physical activity.",
		example: "For a BMR of 1,800 kcal and active lifestyle (1.725 multiplier): TDEE = 1,800 * 1.725 = 3,105 calories per day."
	},
	'ideal-weight': {
		formula: "Devine (Male) = 50.0 + 2.3 * (Height in inches - 60)",
		explanation: "Ideal body weight calculations based on Devine, Robinson, and Miller equations for adults standing over 5 feet tall (60 inches).",
		example: "For a male standing 5'10\" (70 inches tall): Ideal Weight = 50.0 + 2.3 * (70 - 60) = 50.0 + 23 = 73.0 kg (approx. 160.9 lbs)."
	},
	macro: {
		formula: "Calories = Protein (4 kcal/g) + Carbs (4 kcal/g) + Fat (9 kcal/g)",
		explanation: "Converts your daily calorie targets into specific macronutrient gram weights based on targets (e.g., High Protein, Balanced, or Low Carb).",
		example: "For a 2,000 kcal target on a Balanced split (30% Protein, 40% Carbs, 30% Fat): Protein = 150g, Carbs = 200g, Fat = 67g."
	},
	protein: {
		formula: "Daily Protein = Body Weight (kg) * Activity Factor",
		explanation: "Recommends daily protein intake ranges based on standard guidelines: 0.8g/kg for sedentary, 1.2–2.0g/kg for active athletes.",
		example: "For an active individual weighing 80 kg, the protein requirement is: 80 * 1.6 = 128 grams of protein per day."
	},
	pregnancy: {
		formula: "Trimester = Days Since Last Menstrual Period / 90 days",
		explanation: "Tracks pregnancy progress, estimating current gestational age in weeks and days, remaining days to delivery, and current trimester.",
		example: "If the last period began 150 days ago, gestational age is 21 weeks and 3 days, placing the pregnancy in the 2nd trimester."
	},
	'due-date': {
		formula: "Due Date = Last Menstrual Period (LMP) + 280 Days",
		explanation: "Uses Naegele's rule to estimate baby's due date: add 7 days to the first day of the last menstrual period, subtract 3 months, and add 1 year.",
		example: "If the last period began on October 1, 2025: subtract 3 months (July 1), add 7 days (July 8), add 1 year -> Estimated Due Date is July 8, 2026."
	},
	pace: {
		formula: "Pace = Time / Distance",
		explanation: "Calculates running pace (minutes per mile or kilometer), average speeds, or splits based on total distance and duration.",
		example: "Running a 10K (6.21 miles) in 50 minutes: Pace = 50 / 6.21 = 8 minutes and 3 seconds per mile."
	},
	basic: {
		formula: "Output = Operand1 [ +, -, *, / ] Operand2",
		explanation: "Performs basic arithmetic calculations including addition, subtraction, multiplication, and division.",
		example: "Performing standard division: 15 divided by 4 = 3.75."
	},
	scientific: {
		formula: "Result = Trigonometric(x) | Logarithmic(x) | Exponential(x)",
		explanation: "Evaluates advanced mathematical formulas including trigonometry (sine, cosine, tangent), logs, powers, roots, and constants.",
		example: "Evaluating sine of 30 degrees: sin(30) = 0.5; natural logarithm of e: ln(e) = 1."
	},
	percentage: {
		formula: "Percentage = (Part / Whole) * 100",
		explanation: "Computes the relative ratio of a part compared to a whole baseline, scaled to a base of one hundred.",
		example: "What percentage is 15 out of 60? Percentage = (15 / 60) * 100 = 0.25 * 100 = 25%."
	},
	fraction: {
		formula: "Decimal = Numerator / Denominator",
		explanation: "Converts a fraction into its decimal representation by division, or reduces fractions to their lowest terms using the Greatest Common Divisor (GCD).",
		example: "Reducing the fraction 8/12: The Greatest Common Divisor is 4. Divided: (8/4) / (12/4) = 2/3. In decimal: 2 / 3 = 0.6667."
	},
	triangle: {
		formula: "c^2 = a^2 + b^2 - 2ab * cos(C)",
		explanation: "Trigonometric rules of triangles: includes the Pythagorean theorem for right triangles and the Law of Cosines for oblique triangles, along with SOH CAH TOA ratios.",
		example: "A right triangle with side lengths a = 3 and b = 4: hypotenuse c = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5."
	},
	area: {
		formula: "Rectangle Area = Length * Width | Circle Area = π * r²",
		explanation: "Calculates total two-dimensional surface areas for squares, rectangles, circles, triangles, trapezoids, and ellipses.",
		example: "For a circle with a radius of 5 meters: Area = π * 5^2 = 25π ≈ 78.54 square meters."
	},
	volume: {
		formula: "Cylinder Volume = π * r² * h | Sphere Volume = 4/3 * π * r³",
		explanation: "Calculates the three-dimensional space enclosed by common solid shapes: cylinders, spheres, cones, cubes, and pyramids.",
		example: "For a cylinder with a radius of 3 inches and height of 10 inches: Volume = π * 3^2 * 10 = 90π ≈ 282.74 cubic inches."
	},
	probability: {
		formula: "P(A) = Number of Favorable Outcomes / Total Outcomes",
		explanation: "Calculates single event probability, combined independent probabilities, and conditional probability distributions.",
		example: "Probability of rolling a 4 on a standard 6-sided die: P(A) = 1 / 6 ≈ 16.67%."
	},
	'standard-deviation': {
		formula: "s = sqrt[ sum((x_i - mean)^2) / (n - 1) ]",
		explanation: "Sample standard deviation formula: measures the dispersion of data points relative to their mean average.",
		example: "For dataset {2, 4, 6}: Mean = 4. Variances squared = (2-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 0 + 4 = 8. Sample variance = 8 / (3-1) = 4. Standard deviation = sqrt(4) = 2."
	},
	quadratic: {
		formula: "x = [-b +/- sqrt(b^2 - 4ac)] / 2a",
		explanation: "Quadratic equation formula solving for real and complex roots of ax^2 + bx + c = 0.",
		example: "For x^2 - 5x + 6 = 0: a = 1, b = -5, c = 6. Discriminant D = (-5)^2 - 4*1*6 = 25 - 24 = 1. Roots are x1 = (5 + 1)/2 = 3 and x2 = (5 - 1)/2 = 2."
	},
	matrix: {
		formula: "Matrix Det(A) = ad - bc (for 2x2 matrix)",
		explanation: "Solves systems, determinants, additions, subtractions, and multiplications of multi-dimensional arrays.",
		example: "Determinant of [[3, 5], [2, 4]] is (3 * 4) - (5 * 2) = 12 - 10 = 2."
	},
	'random-number': {
		formula: "Random = Floor(Math.random() * (Max - Min + 1)) + Min",
		explanation: "Generates secure, customizable sets of pseudo-random integers within specified range parameters.",
		example: "Generating a random number between 1 and 100: values fall uniformly across the 100 integer options."
	},
	age: {
		formula: "Age = Current Date - Date of Birth",
		explanation: "Accounts for differences in years, months, and days, adjusting for variable month lengths and leap years.",
		example: "Born on August 15, 1995, checking age on September 1, 2023: Difference is exactly 28 years and 17 days."
	},
	date: {
		formula: "Target Date = Start Date +/- Days Duration",
		explanation: "Finds elapsed days, calendar gaps, or target dates by adding or subtracting specific intervals of time.",
		example: "Adding 45 days to September 1, 2023: results in the target date October 16, 2023."
	},
	time: {
		formula: "Time Result = Duration1 +/- Duration2",
		explanation: "Performs arithmetic addition or subtraction of hour, minute, and second values, handling modulo carryovers.",
		example: "Adding 2 hours 45 minutes to 3 hours 30 minutes: 5 hours 75 minutes = 6 hours and 15 minutes."
	},
	hours: {
		formula: "Work Hours = (End Time - Start Time) - Break Duration",
		explanation: "Calculates total working hours and decimal equivalents between times, deducting break intervals.",
		example: "Working from 9:00 AM to 5:30 PM with a 30-minute lunch break: Total hours = 8.5 hours (8 hours 30 minutes)."
	},
	gpa: {
		formula: "GPA = Sum(Grade Points * Credits) / Sum(Credits)",
		explanation: "Computes a weighted average: Grade Points (A=4, B=3, C=2, etc.) multiplied by credit hours, divided by the total sum of credit hours.",
		example: "A 3-credit course with an A grade (4.0 points) and a 4-credit course with a B grade (3.0 points): GPA = (4.0*3 + 3.0*4) / (3 + 4) = (12 + 12) / 7 = 3.43 GPA."
	},
	grade: {
		formula: "Class Grade = Sum(Segment Grade * Segment Weight)",
		explanation: "Computes weighted grades based on category segments (e.g. Homework 20%, Midterm 30%, Final Exam 50%).",
		example: "Having a 90% in Homework (20% weight) and 80% on Midterm (80% weight): Overall Grade = 90*0.2 + 80*0.8 = 18 + 64 = 82%."
	},
	password: {
		formula: "Entropy (bits) = Length * Log2(Pool Size)",
		explanation: "Determines password strength based on pool size (lowercase, uppercase, numbers, symbols) and length.",
		example: "A 12-character alphanumeric password: Pool size = 62. Entropy = 12 * log2(62) ≈ 71.4 bits of secure entropy."
	},
	tip: {
		formula: "Tip Amount = Total Bill * Tip Percentage",
		explanation: "Calculates tip values and splits bills between multiple dinner guests including rounding options.",
		example: "For a bill of $80 with a 15% tip split between 4 guests: Tip = $12. Total = $92. Share per guest = $23."
	},
	discount: {
		formula: "Sale Price = Original Price * (1 - Discount %)",
		explanation: "Calculates final sale prices, money saved, or starting prices based on discount percentage markers.",
		example: "An item priced at $120 marked 25% off: Savings = $30. Sale Price = $90."
	},
	conversion: {
		formula: "Value_converted = Value_base * Conversion_Multiplier",
		explanation: "Converts dimensions (length, temperature, weight, volume) between metric and imperial scales using exact constants.",
		example: "Converting 5 miles to kilometers (constant is 1.609344): 5 * 1.609344 = 8.0467 kilometers."
	}
};

export function getFormulaDetails(id: string): FormulaDetails {
	return formulasRegistry[id] || {
		formula: "Result = Function(Inputs)",
		explanation: "Calculated dynamically based on input parameters using standardized algebraic models.",
		example: "Enter numeric parameters in the inputs panel above, then press 'Calculate' to see the step-by-step arithmetic breakdown."
	};
}
