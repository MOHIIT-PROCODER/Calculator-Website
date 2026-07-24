export function generateWebsiteSchema(url: string) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'name': 'Calculator Platform',
		'url': url,
		'potentialAction': {
			'@type': 'SearchAction',
			'target': {
				'@type': 'EntryPoint',
				'urlTemplate': `${url}/search?q={search_term_string}`
			},
			'query-input': 'required name=search_term_string'
		}
	});
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'itemListElement': items.map((item, index) => ({
			'@type': 'ListItem',
			'position': index + 1,
			'name': item.name,
			'item': item.item
		}))
	});
}

export function generateCalculatorSchema(name: string, description: string, url: string) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		'name': name,
		'description': description,
		'url': url,
		'applicationCategory': 'BusinessApplication',
		'operatingSystem': 'All'
	});
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'mainEntity': faqs.map((faq) => ({
			'@type': 'Question',
			'name': faq.question,
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': faq.answer
			}
		}))
	});
}
