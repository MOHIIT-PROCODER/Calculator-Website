<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
</script>

<SEO title="Privacy Policy - calculator.net" description="Read our privacy policy regarding data collection, cookies, and user security." />

<Breadcrumb items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

<div class="content-page glass animate-fade-in">
	<h1>Privacy Policy</h1>
	
	<p>Maple Tech International LLC operates the calculator.net website, which provides the SERVICE.</p>
	<p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
	<p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

	<h3>Information Collection and Use</h3>
	<p>We take and respect your privacy seriously. We may collect information via cookies or weblogs. This is to customize services and enhance customer satisfaction. The data we collect includes:</p>

	<h3>Log Data</h3>
	<p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

	<h3>Cookies and Third-Party Advertising</h3>
	<p>Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.</p>
	<p>Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
	<p>We allow third-party companies to serve ads and/or collect certain anonymous information when you visit our website. These companies may use non-personally identifiable information (e.g., click stream information, browser type, time and date, subject of advertisements clicked or scrolled over) during your visits to this and other Web sites in order to provide advertisements about goods and services likely to be of greater interest to you. These companies typically use a cookie or third-party web beacon to collect this information. To learn more about this behavioral advertising practice or to opt-out of this type of advertising, please visit <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a>.</p>

	<h3>Web Forms on Our Site</h3>
	<p>The information you fill and submit by the web forms on our site enables the calculators to function.</p>

	<h3>Security</h3>
	<p>We value your trust in providing us your Personal Information. Thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the Internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

	<h3>Links to Other Sites</h3>
	<p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

	<h3>Children's Privacy</h3>
	<p>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take the necessary actions.</p>

	<h3>Changes to This Privacy Policy</h3>
	<p>We reserve the right to update this privacy policy with or without notice. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
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
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 650;
		color: var(--text-primary);
		margin-top: 1rem;
	}
	p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 1.05rem;
	}
	a {
		color: var(--primary);
		text-decoration: underline;
	}
</style>
