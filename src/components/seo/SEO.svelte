<script lang="ts">
	import { 
		generateWebsiteSchema, 
		generateBreadcrumbSchema, 
		generateCalculatorSchema, 
		generateFAQSchema 
	} from '../../utils/schema';
	import type { FAQItem } from '../../types/seo';

	let { 
		title, 
		description, 
		keywords = [], 
		ogType = 'website', 
		canonicalUrl = '', 
		calculatorSchema = null,
		faqItems = []
	} = $props<{
		title: string;
		description: string;
		keywords?: string[];
		ogType?: string;
		canonicalUrl?: string;
		calculatorSchema?: { name: string; description: string; url: string } | null;
		faqItems?: FAQItem[];
	}>();

	let fullUrl = $state('');
	
	$effect(() => {
		fullUrl = canonicalUrl || window.location.href;
	});

	let websiteSchemaJson = $derived(generateWebsiteSchema(fullUrl ? new URL(fullUrl).origin : 'https://calculator.net'));
	let breadcrumbSchemaJson = $derived(() => {
		if (!fullUrl) return null;
		const pathSegments = new URL(fullUrl).pathname.split('/').filter(Boolean);
		const breadcrumbs = pathSegments.map((segment, index) => {
			const url = '/' + pathSegments.slice(0, index + 1).join('/');
			return {
				name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
				item: new URL(fullUrl).origin + url
			};
		});
		return generateBreadcrumbSchema(breadcrumbs);
	});

	let calcSchemaJson = $derived(calculatorSchema ? generateCalculatorSchema(calculatorSchema.name, calculatorSchema.description, calculatorSchema.url) : null);
	let faqSchemaJson = $derived(faqItems.length > 0 ? generateFAQSchema(faqItems) : null);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords.length > 0}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<!-- OpenGraph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	{#if fullUrl}
		<meta property="og:url" content={fullUrl} />
		<link rel="canonical" href={fullUrl} />
	{/if}

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	<!-- JSON-LD Scripts -->
	{#if fullUrl}
		<script type="application/ld+json">
			{websiteSchemaJson}
		</script>
		
		{#if breadcrumbSchemaJson()}
			<script type="application/ld+json">
				{breadcrumbSchemaJson()}
			</script>
		{/if}
	{/if}

	{#if calcSchemaJson}
		<script type="application/ld+json">
			{calcSchemaJson}
		</script>
	{/if}

	{#if faqSchemaJson}
		<script type="application/ld+json">
			{faqSchemaJson}
		</script>
	{/if}
</svelte:head>
