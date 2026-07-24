<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
</script>

<SEO title="About Us - calculator.net" description="Learn more about the team, formulas, and history behind calculator.net." />

<Breadcrumb items={[{ name: 'About', url: '/about' }]} />

<div class="content-page glass animate-fade-in">
	<section class="about-section">
		<h1>About Us</h1>
		<p>We are a group of IT professionals enthusiastic in creating quality free tools and content on the Internet. The main purpose of this website is to provide a comprehensive collection of free online calculators for ease of public use. This site was launched on calculators.info first in 2007. In 2008, we migrated to calculator.net.</p>
		
		<p>The calculators on this site were grouped into 4 sections: financial, fitness & health, math, and others. All of the calculators were developed in-house. Some calculators use open-source JavaScript components under different open-source licenses. More than 90% of the calculators are based on well-known formulas or equations from textbooks, such as the mortgage calculator, BMI calculator, etc. If formulas are controversial, we provide the results of all popular formulas, as can be seen in the Ideal Weight Calculator. Calculators such as the love calculator that are solely meant for amusement are based on internal formulas. The results of the financial calculators were reviewed by our financial advisors, who work for major personal financial advising firms. The results of the health calculators were reviewed and approved by local medical doctors. More than 99% of the descriptive content was developed in-house with a small amount of content taken from wikipedia.org under the GNU Free Documentation License. The descriptive content of the financial calculators was created and reviewed by our financial team. The descriptive content of the health calculators was reviewed by local medical doctors.</p>
		
		<p>This site is owned and operated by Maple Tech. International LLC.</p>
	</section>

	<hr class="section-divider" />

	<section class="faq-section">
		<h2>Frequently Asked Questions</h2>
		<div class="faq-list">
			<div class="faq-item">
				<h4 class="faq-question">Q: Can I link from my website to a calculator on calculator.net?</h4>
				<p class="faq-answer">A: Yes, please feel free to link to any page on calculator.net.</p>
			</div>

			<div class="faq-item">
				<h4 class="faq-question">Q: How should I send suggestions or report problems?</h4>
				<p class="faq-answer">A: We appreciate and welcome any suggestions and bug reporting. Please write to us via the form below. If it involves a calculator, please include the URL of the calculator and the parameters you used.</p>
			</div>

			<div class="faq-item">
				<h4 class="faq-question">Q: Do you have an API for the calculators?</h4>
				<p class="faq-answer">A: Sorry, we do not have an API available.</p>
			</div>

			<div class="faq-item">
				<h4 class="faq-question">Q: How can I advertise on calculator.net?</h4>
				<p class="faq-answer">A: Please use Google Ads placement targeting. Please do not try to reach us on advertisement optimization, header bidding, etc.</p>
			</div>

			<div class="faq-item">
				<h4 class="faq-question">Q: How do I delete my data from calculator.net?</h4>
				<p class="faq-answer">A: For registered users, a button is available to delete your entire registration information, saved calculations, and settings after signing in. Alternatively, you can use the 'Contact Us' form to request the removal of your registration and data. We will process the removal within two business days after verification.</p>
			</div>
		</div>
	</section>
</div>

<style>
	.content-page {
		padding: 3rem;
		max-width: 850px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.about-section {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 750;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}
	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
	}
	p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 1.05rem;
	}
	.section-divider {
		border: 0;
		height: 1px;
		background: var(--border-color);
		margin: 1rem 0;
	}
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.faq-item {
		padding: 1.25rem;
		border-radius: var(--radius-md);
		background: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.faq-question {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	.faq-answer {
		font-size: 1rem;
		color: var(--text-secondary);
	}
</style>
