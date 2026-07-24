<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';
</script>

<SEO title="Terms of Use - calculator.net" description="Read our terms of use regarding service agreement, user conduct, and liabilities." />

<Breadcrumb items={[{ name: 'Terms of Use', url: '/terms' }]} />

<div class="content-page glass animate-fade-in">
	<h1>Terms of Use</h1>
	
	<h3>Acceptance of Terms</h3>
	<p>Maple Tech International LLC. ("Company") provides this website at calculator.net (referred to hereafter as "the Website") for use by consumers and businesses. By using the Website in any way, you are agreeing to comply with the Terms of Use. Should you object to any term or condition of the Terms of Use or any guideline of the Website, your only recourse is to immediately discontinue use of the Website.</p>

	<h3>Changes to the Terms of Use</h3>
	<p>We reserve the right, at our sole discretion, to change, modify, or alter the Terms of Use at any time. Such changes shall become effective immediately upon the posting thereof. The most current version of the Terms of Use will be linked from the footer of the Website. You must review the Terms of Use on a regular basis to keep yourself apprised of any changes.</p>

	<h3>Conduct</h3>
	<p>You agree not to post any text, files, images, video, audio, or other materials ("Content") or use the Website in any way that:</p>
	<ul>
		<li>infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party;</li>
		<li>violates any state, federal, or other law;</li>
		<li>threatens, harasses, or is libelous;</li>
		<li>is harmful to minors;</li>
		<li>contains self-benefiting advertising or marketing in public areas of the Website that have not been paid for and are not designated for the addition of promotional content;</li>
		<li>produces software viruses or code harmful to other computers;</li>
		<li>disrupts the normal dialogue of users of the Website;</li>
		<li>employs misleading or false information;</li>
		<li>uses forged headers or other items to manipulate identifiers in order to disguise the origin of Content.</li>
	</ul>
	<p>You agree not to decompile or reverse engineer or otherwise attempt to discover any source code contained in the Website.</p>
	<p>Unless you receive explicit permission, you agree not to reproduce, duplicate, copy, sell, resell, or exploit for any commercial purposes, any aspect of the Website. Any business that registers with a listing or purchases advertising or any other service ("Customer") has the right and permission to manage their listing or purchased advertising or other services to their commercial benefit so long as the codes of conduct above are not violated.</p>

	<h3>Privacy</h3>
	<p>Please review our Privacy Policy for details on the Company's collection, disclosure, and use of personally identifiable information and privacy matters. Use of the Website is based on your agreement to the Privacy Policy and Terms of Use.</p>

	<h3>Content</h3>
	<p>This Website and some of the Content on this Website contain links to other resources on the Internet. Such links are provided as aids to assist you in identifying and locating other Internet resources that may be of interest to you, and are not intended to state or imply that Company sponsors, endorses, are affiliated or associated with, or are legally authorized to use any trade name, registered trademark, logo, legal or official seal, or copyrighted symbol that may be reflected in said links.</p>
	<p>Information or calculation results at our Website may be outdated due to the date and the method of the collection or may be incorrect. If you find information or calculation results on the Website that you believe to be in error, please contact us with the specifics and we will investigate the matter and where we are allowed by our data source we will update the information.</p>

	<h3>Limitations and Termination</h3>
	<p>Company may create limitations of your use of the Website including, but not limited to, the number of times you may access the Website. Limitations can include full termination of your access to the Website and you agree that Company has the right at any time, in its sole discretion, with or without notice, to modify or discontinue the Website (or any part thereof).</p>

	<h3>Disclaimer of Warranties</h3>
	<p>THE COMPANY WEBSITE AND ANY INCLUDED SERVICES ARE PROVIDED ON AN "AS IS" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, INCLUDING WITHOUT LIMITATION THE WARRANTIES THAT IT IS FREE OF DEFECTS, ERRORS, VIRUSES, MERCHANTABLE AND THAT IT IS FIT FOR A PARTICULAR PURPOSE OR NON-INFRINGING. YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK.</p>

	<h3>Limitations of Liability</h3>
	<p>UNDER NO CIRCUMSTANCES SHALL THE COMPANY BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, RESULTING FROM ANY ASPECT OF YOUR USE OF THE WEBSITE INCLUDING BUT NOT LIMITED TO DAMAGES THAT ARISE FROM YOUR INABILITY TO USE THE WEBSITE OR THE SERVICE, OR THE INTERRUPTION, MODIFICATION, OR TERMINATION OF THE WEBSITE OR ANY SERVICE OR PART THEREOF.</p>

	<h3>Jurisdiction</h3>
	<p>The Terms of Use shall be governed by the laws of the State of Texas without regard to its conflict of law provisions. You and Company agree to submit to the personal and exclusive jurisdiction of the courts located within the State of Texas.</p>

	<h3>Partial Invalidity</h3>
	<p>Any provision of this Terms of Use which is found to be invalid or unenforceable by any court in any jurisdiction shall not affect the validity or enforceability of the provision in other jurisdictions and shall not affect the validity or enforceability of the remaining provisions. The waiver or failure of the Company to exercise in any respect any right provided for in this Terms of Use shall not be deemed a waiver of any further right under this Agreement.</p>

	<h3>Violation of Terms</h3>
	<p>You agree that monetary damages may not be a sufficient remedy for any breach of this Agreement and that Company shall be entitled, without waiving any other rights or remedies, to seek injunctive or equitable relief as may be deemed proper by a court of competent jurisdiction.</p>

	<h3>General</h3>
	<p>The Terms of Use constitute the entire agreement between you and Company and govern your use of the Website, superseding any prior agreements between you and Company.</p>
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
	ul {
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: var(--text-secondary);
		font-size: 1.05rem;
		line-height: 1.5;
	}
</style>
