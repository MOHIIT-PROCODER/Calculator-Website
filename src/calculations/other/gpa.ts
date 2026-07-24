export interface GPACourse {
	grade: string; // Letter grade
	credits: number;
}

export const gpaScale: Record<string, number> = {
	'A+': 4.0,
	'A': 4.0,
	'A-': 3.7,
	'B+': 3.3,
	'B': 3.0,
	'B-': 2.7,
	'C+': 2.3,
	'C': 2.0,
	'C-': 1.7,
	'D+': 1.3,
	'D': 1.0,
	'F': 0.0
};

export function calculateGPA(courses: GPACourse[]): number {
	let totalPoints = 0;
	let totalCredits = 0;

	courses.forEach(course => {
		const gradeValue = gpaScale[course.grade.toUpperCase()];
		if (gradeValue !== undefined && course.credits > 0) {
			totalPoints += gradeValue * course.credits;
			totalCredits += course.credits;
		}
	});

	if (totalCredits === 0) return 0;
	return Number((totalPoints / totalCredits).toFixed(2));
}
