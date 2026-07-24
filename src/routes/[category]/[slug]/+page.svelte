<script lang="ts">
	import { page } from '$app/state';
	import SEO from '../../../components/seo/SEO.svelte';
	import Breadcrumb from '../../../components/layout/Breadcrumb.svelte';
	import Sidebar from '../../../components/layout/Sidebar.svelte';

	import { calculators } from '../../../data/calculators';
	import { categories } from '../../../data/categories';
	import { faqData } from '../../../data/faq';
	import { relatedCalculators } from '../../../data/relatedCalculators';
	import { getFormulaDetails } from '../../../data/formulas';
	import { generateSEOArticle } from '../../../utils/seoGenerator';

	// Financial UI Components
	import MortgageCalculator from '../../../components/calculators/financial/MortgageCalculator.svelte';
	import LoanCalculator from '../../../components/calculators/financial/LoanCalculator.svelte';
	import AutoLoanCalculator from '../../../components/calculators/financial/AutoLoanCalculator.svelte';
	import InterestCalculator from '../../../components/calculators/financial/InterestCalculator.svelte';
	import CompoundInterestCalculator from '../../../components/calculators/financial/CompoundInterestCalculator.svelte';
	import InvestmentCalculator from '../../../components/calculators/financial/InvestmentCalculator.svelte';
	import RetirementCalculator from '../../../components/calculators/financial/RetirementCalculator.svelte';
	import SalaryCalculator from '../../../components/calculators/financial/SalaryCalculator.svelte';
	import SalesTaxCalculator from '../../../components/calculators/financial/SalesTaxCalculator.svelte';
	import SavingsCalculator from '../../../components/calculators/financial/SavingsCalculator.svelte';
	import ROICalculator from '../../../components/calculators/financial/ROICalculator.svelte';
	import BudgetCalculator from '../../../components/calculators/financial/BudgetCalculator.svelte';

	// Health UI Components
	import BMICalculator from '../../../components/calculators/health/BMICalculator.svelte';
	import CalorieCalculator from '../../../components/calculators/health/CalorieCalculator.svelte';
	import BodyFatCalculator from '../../../components/calculators/health/BodyFatCalculator.svelte';
	import BMRCalculator from '../../../components/calculators/health/BMRCalculator.svelte';
	import TDEECalculator from '../../../components/calculators/health/TDEECalculator.svelte';
	import IdealWeightCalculator from '../../../components/calculators/health/IdealWeightCalculator.svelte';
	import MacroCalculator from '../../../components/calculators/health/MacroCalculator.svelte';
	import ProteinCalculator from '../../../components/calculators/health/ProteinCalculator.svelte';
	import PregnancyCalculator from '../../../components/calculators/health/PregnancyCalculator.svelte';
	import DueDateCalculator from '../../../components/calculators/health/DueDateCalculator.svelte';
	import PaceCalculator from '../../../components/calculators/health/PaceCalculator.svelte';

	// Math UI Components
	import BasicCalculator from '../../../components/calculators/math/BasicCalculator.svelte';
	import ScientificCalculator from '../../../components/calculators/math/ScientificCalculator.svelte';
	import PercentageCalculator from '../../../components/calculators/math/PercentageCalculator.svelte';
	import FractionCalculator from '../../../components/calculators/math/FractionCalculator.svelte';
	import TriangleCalculator from '../../../components/calculators/math/TriangleCalculator.svelte';
	import AreaCalculator from '../../../components/calculators/math/AreaCalculator.svelte';
	import VolumeCalculator from '../../../components/calculators/math/VolumeCalculator.svelte';
	import ProbabilityCalculator from '../../../components/calculators/math/ProbabilityCalculator.svelte';
	import StandardDeviationCalculator from '../../../components/calculators/math/StandardDeviationCalculator.svelte';
	import QuadraticCalculator from '../../../components/calculators/math/QuadraticCalculator.svelte';
	import MatrixCalculator from '../../../components/calculators/math/MatrixCalculator.svelte';
	import RandomNumberCalculator from '../../../components/calculators/math/RandomNumberCalculator.svelte';

	// Other UI Components
	import AgeCalculator from '../../../components/calculators/other/AgeCalculator.svelte';
	import DateCalculator from '../../../components/calculators/other/DateCalculator.svelte';
	import TimeCalculator from '../../../components/calculators/other/TimeCalculator.svelte';
	import HoursCalculator from '../../../components/calculators/other/HoursCalculator.svelte';
	import GPACalculator from '../../../components/calculators/other/GPACalculator.svelte';
	import GradeCalculator from '../../../components/calculators/other/GradeCalculator.svelte';
	import PasswordGenerator from '../../../components/calculators/other/PasswordGenerator.svelte';
	import TipCalculator from '../../../components/calculators/other/TipCalculator.svelte';
	import DiscountCalculator from '../../../components/calculators/other/DiscountCalculator.svelte';
	import ConversionCalculator from '../../../components/calculators/other/ConversionCalculator.svelte';

	const componentMap: Record<string, any> = {
		'mortgage-calculator': MortgageCalculator,
		'loan-calculator': LoanCalculator,
		'auto-loan-calculator': AutoLoanCalculator,
		'interest-calculator': InterestCalculator,
		'compound-interest-calculator': CompoundInterestCalculator,
		'investment-calculator': InvestmentCalculator,
		'retirement-calculator': RetirementCalculator,
		'salary-calculator': SalaryCalculator,
		'sales-tax-calculator': SalesTaxCalculator,
		'savings-calculator': SavingsCalculator,
		'roi-calculator': ROICalculator,
		'budget-calculator': BudgetCalculator,

		'bmi-calculator': BMICalculator,
		'calorie-calculator': CalorieCalculator,
		'body-fat-calculator': BodyFatCalculator,
		'bmr-calculator': BMRCalculator,
		'tdee-calculator': TDEECalculator,
		'ideal-weight-calculator': IdealWeightCalculator,
		'macro-calculator': MacroCalculator,
		'protein-calculator': ProteinCalculator,
		'pregnancy-calculator': PregnancyCalculator,
		'due-date-calculator': DueDateCalculator,
		'pace-calculator': PaceCalculator,

		'basic-calculator': BasicCalculator,
		'scientific-calculator': ScientificCalculator,
		'percentage-calculator': PercentageCalculator,
		'fraction-calculator': FractionCalculator,
		'triangle-calculator': TriangleCalculator,
		'area-calculator': AreaCalculator,
		'volume-calculator': VolumeCalculator,
		'probability-calculator': ProbabilityCalculator,
		'standard-deviation-calculator': StandardDeviationCalculator,
		'quadratic-calculator': QuadraticCalculator,
		'matrix-calculator': MatrixCalculator,
		'random-number-calculator': RandomNumberCalculator,

		'age-calculator': AgeCalculator,
		'date-calculator': DateCalculator,
		'time-calculator': TimeCalculator,
		'hours-calculator': HoursCalculator,
		'gpa-calculator': GPACalculator,
		'grade-calculator': GradeCalculator,
		'password-generator': PasswordGenerator,
		'tip-calculator': TipCalculator,
		'discount-calculator': DiscountCalculator,
		'conversion-calculator': ConversionCalculator
	};

	let categoryParam = $derived(page.params.category);
	let slugParam = $derived(page.params.slug);

	let calculator = $derived(calculators.find(c => c.slug === slugParam && c.category === categoryParam));
	let categoryObj = $derived(categories.find(c => c.id === categoryParam));
	let selectedComponent = $derived(calculator ? componentMap[calculator.slug] : null);

	let faqs = $derived(calculator ? faqData[calculator.slug] || [] : []);
	
	let relatedList = $derived.by(() => {
		if (!calculator) return [];
		const relatedIds = relatedCalculators[calculator.id] || [];
		return calculators.filter(c => relatedIds.includes(c.id));
	});

	let formulaDetails = $derived(calculator ? getFormulaDetails(calculator.id) : null);
	let isFavorited = $state(false);

	let seoContent = $derived.by(() => {
		if (!calculator || !formulaDetails) return '';
		return formulaDetails.detailedSEO || generateSEOArticle(calculator, formulaDetails);
	});

	$effect(() => {
		if (calculator) {
			const stored = localStorage.getItem('favorites');
			if (stored) {
				try {
					const arr = JSON.parse(stored);
					isFavorited = arr.includes(calculator.slug);
				} catch (e) {}
			}
		}
	});

	function toggleFavorite() {
		if (!calculator) return;
		const stored = localStorage.getItem('favorites');
		let arr: string[] = [];
		if (stored) {
			try {
				arr = JSON.parse(stored);
			} catch (e) {}
		}
		if (arr.includes(calculator.slug)) {
			arr = arr.filter(slug => slug !== calculator.slug);
			isFavorited = false;
		} else {
			arr.push(calculator.slug);
			isFavorited = true;
		}
		localStorage.setItem('favorites', JSON.stringify(arr));
	}

	let breadcrumbs = $derived.by(() => {
		if (!categoryObj || !calculator) return [];
		return [
			{ name: categoryObj.name, url: `/${categoryObj.id}` },
			{ name: calculator.name, url: `/${categoryObj.id}/${calculator.slug}` }
		];
	});
</script>

{#if calculator && categoryObj}
	<SEO 
		title="{calculator.name} - Free Calculator" 
		description={calculator.description}
		calculatorSchema={{
			name: calculator.name,
			description: calculator.description,
			url: page.url.href
		}}
		faqItems={faqs}
	/>

	<Breadcrumb items={breadcrumbs} />

	<div class="layout-columns">
		<div class="main-column">
			<div class="title-row">
				<h1 class="page-title">{calculator.name}</h1>
				<button 
					class="favorite-btn" 
					onclick={toggleFavorite} 
					aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
				>
					{#if isFavorited}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--error)" stroke="var(--error)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
					{:else}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
					{/if}
				</button>
			</div>
			<p class="page-description">{calculator.description}</p>

			<div class="calculator-wrapper">
				{#if selectedComponent}
					{@const CalcComp = selectedComponent}
					<CalcComp />
				{:else}
					<p>Calculator details loading...</p>
				{/if}
			</div>

			<!-- Formula & Explanation Sections -->
			{#if formulaDetails}
				<div class="calculator-docs">
					<section class="doc-section glass animate-fade-in">
						<h3>📐 Mathematical Formula</h3>
						<div class="formula-box">
							<code>{formulaDetails.formula}</code>
						</div>
					</section>

					<section class="doc-section glass animate-fade-in">
						<h3>ℹ️ Formula Explanation</h3>
						<p>{formulaDetails.explanation}</p>
					</section>

					<section class="doc-section glass animate-fade-in">
						<h3>📝 Practical Example</h3>
						<p>{formulaDetails.example}</p>
					</section>

					{#if seoContent}
						<section class="doc-section detailed-seo-section glass animate-fade-in">
							{@html seoContent}
						</section>
					{/if}
				</div>
			{/if}

			<!-- FAQ Section -->
			{#if faqs.length > 0}
				<section class="faq-section glass animate-fade-in">
					<h2>Frequently Asked Questions</h2>
					<div class="faq-list">
						{#each faqs as faq}
							<div class="faq-item">
								<h4>{faq.question}</h4>
								<p>{faq.answer}</p>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Related Section -->
			{#if relatedList.length > 0}
				<section class="related-section glass animate-fade-in">
					<h2>Related Calculators</h2>
					<div class="related-grid">
						{#each relatedList as rel}
							<a href="/{rel.category}/{rel.slug}" class="related-link">
								{rel.name}
							</a>
						{/each}
					</div>
				</section>
			{/if}
		</div>

		<div class="side-column">
			<Sidebar />
		</div>
	</div>
{:else}
	<div class="error-view text-center glass">
		<h2>404 - Calculator Not Found</h2>
		<p>We couldn't find the calculator you are looking for.</p>
		<a href="/" class="home-btn">Go to Homepage</a>
	</div>
{/if}

<style>
	.layout-columns {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 2rem;
		align-items: start;
	}
	.title-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}
	.page-title {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 0;
		letter-spacing: -0.02em;
	}
	.favorite-btn {
		background: none;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-secondary);
		transition: transform var(--transition-fast), color var(--transition-fast);
		border-radius: 50%;
	}
	.favorite-btn:hover {
		color: var(--error);
		transform: scale(1.15);
		background: rgba(239, 68, 68, 0.05);
	}
	.page-description {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
		line-height: 1.5;
	}
	.calculator-wrapper {
		margin-bottom: 2.5rem;
	}
	.calculator-docs {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}
	.doc-section {
		padding: 2rem;
	}
	.doc-section h3 {
		font-size: 1.25rem;
		font-weight: 650;
		margin-bottom: 0.75rem;
		color: var(--text-primary);
	}
	.doc-section p {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}
	.formula-box {
		background: var(--bg-primary);
		padding: 1rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		overflow-x: auto;
	}
	.formula-box code {
		font-family: monospace;
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--primary);
	}
	.faq-section, .related-section {
		padding: 2rem;
		margin-bottom: 2.5rem;
	}
	.faq-section h2, .related-section h2 {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.faq-item h4 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.faq-item p {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 1rem;
	}
	.related-link {
		color: var(--primary);
		font-weight: 600;
		font-size: 0.95rem;
	}
	.related-link:hover {
		text-decoration: underline;
	}
	.error-view {
		padding: 4rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.home-btn {
		background: var(--primary);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-md);
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.layout-columns {
			grid-template-columns: 1fr;
		}
		.side-column {
			display: none;
		}
	}

	/* Detailed SEO Rich Text Styles */
	.detailed-seo-section {
		grid-column: span 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	:global(.rich-seo-content) {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-top: 0.5rem;
	}
	:global(.rich-seo-content h3) {
		font-size: 1.3rem;
		font-weight: 650;
		margin-top: 1.5rem;
		color: var(--text-primary);
		border-bottom: 1.5px solid var(--border-color);
		padding-bottom: 0.4rem;
	}
	:global(.rich-seo-content p) {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}
	:global(.rich-seo-content ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		color: var(--text-secondary);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	:global(.rich-seo-content ul li) {
		line-height: 1.5;
	}
	:global(.seo-table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.25rem 0;
		font-size: 0.95rem;
		border-radius: var(--radius-sm);
		overflow: hidden;
	}
	:global(.seo-table th, .seo-table td) {
		border: 1px solid var(--border-color);
		padding: 0.75rem 1rem;
		text-align: left;
	}
	:global(.seo-table th) {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
		font-weight: 600;
	}
	:global(.seo-table tr:nth-child(even)) {
		background-color: rgba(0, 0, 0, 0.015);
	}
	:global(html.dark .seo-table tr:nth-child(even)) {
		background-color: rgba(255, 255, 255, 0.015);
	}
</style>
