import { calculators } from '../../../data/calculators';

export function entries() {
	return calculators.map(c => ({
		category: c.category,
		slug: c.slug
	}));
}

export const prerender = true;
