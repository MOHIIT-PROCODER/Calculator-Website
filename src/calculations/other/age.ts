export interface AgeResult {
	years: number;
	months: number;
	days: number;
	totalMonths: number;
	totalWeeks: number;
	totalDays: number;
	totalHours: number;
	totalMinutes: number;
}

export function calculateAge(birthDate: Date, targetDate: Date = new Date()): AgeResult {
	if (birthDate > targetDate) {
		return { years: 0, months: 0, days: 0, totalMonths: 0, totalWeeks: 0, totalDays: 0, totalHours: 0, totalMinutes: 0 };
	}

	const birthYear = birthDate.getFullYear();
	const birthMonth = birthDate.getMonth();
	const birthDay = birthDate.getDate();

	const targetYear = targetDate.getFullYear();
	const targetMonth = targetDate.getMonth();
	const targetDay = targetDate.getDate();

	let years = targetYear - birthYear;
	let months = targetMonth - birthMonth;
	let days = targetDay - birthDay;

	if (days < 0) {
		months--;
		// Get number of days in the previous month of targetDate
		const prevMonth = new Date(targetYear, targetMonth, 0);
		days += prevMonth.getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	const diffTime = Math.max(0, targetDate.getTime() - birthDate.getTime());
	const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const totalWeeks = Number((totalDays / 7).toFixed(1));
	const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
	const totalMinutes = Math.floor(diffTime / (1000 * 60));
	const totalMonths = years * 12 + months;

	return {
		years,
		months,
		days,
		totalMonths,
		totalWeeks,
		totalDays,
		totalHours,
		totalMinutes
	};
}
