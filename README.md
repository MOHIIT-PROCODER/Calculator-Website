# CalcHub - Premium SvelteKit Calculator Platform

CalcHub is a premium, fast, and feature-rich online platform housing 40+ calculators mapping financial, health, mathematical, and everyday tasks. Built with SvelteKit (Svelte 5), TypeScript, and global styling tokens.

## Project Structure

```
calculator-platform/
│
├── static/
│   ├── favicon.ico
│   ├── robots.txt                    # SEO crawler rules
│   ├── sitemap.xml                   # Sitemap (generated at build time)
│   ├── site.webmanifest              # PWA/site information
│   │
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-default.webp           # Social sharing image
│   │   ├── financial.svg
│   │   ├── health.svg
│   │   ├── math.svg
│   │   └── other.svg
│   │
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
│
├── src/
│   ├── lib/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   └── Breadcrumb.svelte
│   │   │
│   │   ├── seo/
│   │   │   └── SEO.svelte
│   │   │
│   │   ├── common/
│   │   ├── forms/
│   │   │   ├── NumberInput.svelte
│   │   │   ├── SelectInput.svelte
│   │   │   ├── DateInput.svelte
│   │   │   ├── RadioGroup.svelte
│   │   │   └── RangeInput.svelte
│   │   │
│   │   ├── charts/
│   │   │   ├── PieChart.svelte
│   │   │   ├── LineChart.svelte
│   │   │   └── BarChart.svelte
│   │   │
│   │   └── calculators/
│   │       ├── financial/
│   │       │   ├── MortgageCalculator.svelte
│   │       │   ├── LoanCalculator.svelte
│   │       │   ├── AutoLoanCalculator.svelte
│   │       │   ├── InterestCalculator.svelte
│   │       │   ├── CompoundInterestCalculator.svelte
│   │       │   ├── InvestmentCalculator.svelte
│   │       │   ├── RetirementCalculator.svelte
│   │       │   ├── SalaryCalculator.svelte
│   │       │   ├── SalesTaxCalculator.svelte
│   │       │   ├── SavingsCalculator.svelte
│   │       │   ├── ROICalculator.svelte
│   │       │   └── BudgetCalculator.svelte
│   │       │
│   │       ├── health/
│   │       │   ├── BMICalculator.svelte
│   │       │   ├── CalorieCalculator.svelte
│   │       │   ├── BodyFatCalculator.svelte
│   │       │   ├── BMRCalculator.svelte
│   │       │   ├── TDEECalculator.svelte
│   │       │   ├── IdealWeightCalculator.svelte
│   │       │   ├── MacroCalculator.svelte
│   │       │   ├── ProteinCalculator.svelte
│   │       │   ├── PregnancyCalculator.svelte
│   │       │   ├── DueDateCalculator.svelte
│   │       │   └── PaceCalculator.svelte
│   │       │
│   │       ├── math/
│   │       │   ├── BasicCalculator.svelte
│   │       │   ├── ScientificCalculator.svelte
│   │       │   ├── PercentageCalculator.svelte
│   │       │   ├── FractionCalculator.svelte
│   │       │   ├── TriangleCalculator.svelte
│   │       │   ├── AreaCalculator.svelte
│   │       │   ├── VolumeCalculator.svelte
│   │       │   ├── ProbabilityCalculator.svelte
│   │       │   ├── StandardDeviationCalculator.svelte
│   │       │   ├── QuadraticCalculator.svelte
│   │       │   ├── MatrixCalculator.svelte
│   │       │   └── RandomNumberCalculator.svelte
│   │       │
│   │       └── other/
│   │           ├── AgeCalculator.svelte
│   │           ├── DateCalculator.svelte
│   │           ├── TimeCalculator.svelte
│   │           ├── HoursCalculator.svelte
│   │           ├── GPACalculator.svelte
│   │           ├── GradeCalculator.svelte
│   │           ├── PasswordGenerator.svelte
│   │           ├── TipCalculator.svelte
│   │           ├── DiscountCalculator.svelte
│   │           └── ConversionCalculator.svelte
│   │
│   ├── calculations/
│   │   ├── financial/
│   │   │   ├── mortgage.ts
│   │   │   ├── loan.ts
│   │   │   ├── compoundInterest.ts
│   │   │   ├── investment.ts
│   │   │   ├── retirement.ts
│   │   │   └── roi.ts
│   │   │
│   │   ├── health/
│   │   │   ├── bmi.ts
│   │   │   ├── calorie.ts
│   │   │   ├── bodyFat.ts
│   │   │   ├── bmr.ts
│   │   │   ├── tdee.ts
│   │   │   └── idealWeight.ts
│   │   │
│   │   ├── math/
│   │   │   ├── percentage.ts
│   │   │   ├── fraction.ts
│   │   │   ├── triangle.ts
│   │   │   ├── statistics.ts
│   │   │   └── quadratic.ts
│   │   │
│   │   └── other/
│   │       ├── age.ts
│   │       ├── date.ts
│   │       ├── gpa.ts
│   │       └── conversion.ts
│   │
│   ├── data/
│   │   ├── calculators.ts             # All calculator metadata
│   │   ├── categories.ts
│   │   ├── seo.ts                     # SEO metadata
│   │   ├── faq.ts                     # Accordion FAQs
│   │   └── relatedCalculators.ts      # Linking definitions
│   │
│   ├── utils/
│   │   ├── formatNumber.ts
│   │   ├── formatCurrency.ts
│   │   ├── validation.ts
│   │   ├── unitConverter.ts
│   │   └── schema.ts                  # JSON-LD schemas
│   │
│   └── types/
│       ├── calculator.ts
│       └── seo.ts
│
├── routes/
│   ├── +layout.svelte                 # Navbar + Footer
│   ├── +layout.ts                     # Static build flags
│   ├── +page.svelte                   # Main dashboard
│   ├── [category]/
│   │   ├── +page.svelte               # Category landing page
│   │   └── [slug]/
│   │       ├── +page.svelte           # Dynamic calculator loader
│   │       └── +page.ts               # Router entries for build
│   │
│   ├── search/                        # Client-side dynamic search
│   ├── favorites/                     # User bookmarks
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   ├── disclaimer/
│   ├── sitemap/                       # Interactive HTML sitemap
│   └── 404/                           # Custom fallback views
│
├── tests/
│   ├── mortgage.test.ts
│   ├── bmi.test.ts
│   ├── percentage.test.ts
│   └── age.test.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Responsive Charts**: Lightweight native SVG-based `PieChart`, `BarChart`, and `LineChart` widgets.
- **Svelte 5 Runes**: Utilizes `$state`, `$derived`, and `$effect` for responsive validation and rendering.
- **SEO & Schemas**: Auto-injects meta descriptions, OpenGraph attributes, and JSON-LD structured schemas (WebApplication, Breadcrumb, FAQPage) dynamically.
- **Client-Side Storage**: Locally remembers dark mode preferences and favorited bookmarks without tracking users.

## Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Run unit tests**:
   ```bash
   npm run test
   ```

4. **Verify static bundle compiles**:
   ```bash
   npm run build
   ```
