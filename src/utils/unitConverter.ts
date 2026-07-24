export interface UnitConversionCategory {
	name: string;
	units: { [key: string]: number | ((val: number, reverse?: boolean) => number) };
	labels: { [key: string]: string };
}

export const conversionData: Record<string, UnitConversionCategory> = {
	length: {
		name: 'Length',
		units: {
			m: 1,
			cm: 0.01,
			mm: 0.001,
			km: 1000,
			in: 0.0254,
			ft: 0.3048,
			yd: 0.9144,
			mi: 1609.344
		},
		labels: {
			m: 'Meters (m)',
			cm: 'Centimeters (cm)',
			mm: 'Millimeters (mm)',
			km: 'Kilometers (km)',
			in: 'Inches (in)',
			ft: 'Feet (ft)',
			yd: 'Yards (yd)',
			mi: 'Miles (mi)'
		}
	},
	weight: {
		name: 'Weight / Mass',
		units: {
			kg: 1,
			g: 0.001,
			mg: 0.000001,
			lb: 0.45359237,
			oz: 0.028349523
		},
		labels: {
			kg: 'Kilograms (kg)',
			g: 'Grams (g)',
			mg: 'Milligrams (mg)',
			lb: 'Pounds (lb)',
			oz: 'Ounces (oz)'
		}
	},
	temperature: {
		name: 'Temperature',
		units: {
			c: (val: number, reverse?: boolean) => val,
			f: (val: number, reverse?: boolean) => {
				if (reverse) return ((val - 32) * 5) / 9;
				return (val * 9) / 5 + 32;
			},
			k: (val: number, reverse?: boolean) => {
				if (reverse) return val - 273.15;
				return val + 273.15;
			}
		},
		labels: {
			c: 'Celsius (°C)',
			f: 'Fahrenheit (°F)',
			k: 'Kelvin (K)'
		}
	},
	area: {
		name: 'Area',
		units: {
			sqm: 1,
			sqcm: 0.0001,
			sqkm: 1000000,
			sqin: 0.00064516,
			sqft: 0.09290304,
			acre: 4046.8564224,
			hectare: 10000
		},
		labels: {
			sqm: 'Square Meters (m²)',
			sqcm: 'Square Centimeters (cm²)',
			sqkm: 'Square Kilometers (km²)',
			sqin: 'Square Inches (in²)',
			sqft: 'Square Feet (ft²)',
			acre: 'Acres',
			hectare: 'Hectares'
		}
	},
	volume: {
		name: 'Volume',
		units: {
			l: 1,
			ml: 0.001,
			cum: 1000,
			gal: 3.78541178,
			qt: 0.946352946,
			pt: 0.473176473,
			cup: 0.236588236,
			fl_oz: 0.02957353
		},
		labels: {
			l: 'Liters (L)',
			ml: 'Milliliters (mL)',
			cum: 'Cubic Meters (m³)',
			gal: 'Gallons (US)',
			qt: 'Quarts (US)',
			pt: 'Pints (US)',
			cup: 'Cups (US)',
			fl_oz: 'Fluid Ounces (US)'
		}
	},
	speed: {
		name: 'Speed',
		units: {
			mps: 1,
			kph: 0.277777778,
			mph: 0.44704,
			knot: 0.514444444
		},
		labels: {
			mps: 'Meters per second (m/s)',
			kph: 'Kilometers per hour (km/h)',
			mph: 'Miles per hour (mph)',
			knot: 'Knots'
		}
	}
};

export function convertUnits(value: number, from: string, to: string, category: string): number {
	const cat = conversionData[category];
	if (!cat) return NaN;

	const fromUnit = cat.units[from];
	const toUnit = cat.units[to];

	if (!fromUnit || !toUnit) return NaN;

	// Temperature conversions use functions
	if (category === 'temperature') {
		const baseVal = typeof fromUnit === 'function' ? fromUnit(value, true) : value;
		const finalVal = typeof toUnit === 'function' ? toUnit(baseVal, false) : baseVal;
		return finalVal;
	}

	// Normal scaling conversions
	const valueInBase = value * (fromUnit as number);
	return valueInBase / (toUnit as number);
}
