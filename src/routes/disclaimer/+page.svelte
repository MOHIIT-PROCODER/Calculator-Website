<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
</script>

<SEO title="Disclaimer - calculator.net" description="Read our calculation disclaimer." />

<Breadcrumb items={[{ name: 'Disclaimer', url: '/disclaimer' }]} />

<div class="content-page glass animate-fade-in">
	<h1>Disclaimer</h1>
	<p>calculator.net provides free calculation services "as is" without warranty or representations of mathematical perfection. We make every effort to implement equations according to standard principles, but we cannot warrant perfect alignment with local tax structures, bank fee amortization conventions, or personal health profiles.</p>
	<p>Under no circumstances shall calculator.net be liable for direct or indirect damage arising from financial loans, budgets, or medical routines initiated based on calculator outputs.</p>
</div>

<style>
	.content-page {
		padding: 3rem;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 750;
	}
	p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 1.05rem;
	}
</style>
