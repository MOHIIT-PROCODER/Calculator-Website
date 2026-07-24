<script lang="ts">
	import SEO from '../../components/seo/SEO.svelte';
	import Breadcrumb from '../../components/layout/Breadcrumb.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (email.trim() && message.trim()) {
			submitted = true;
		}
	}
</script>

<SEO title="Contact Us - calculator.net" description="Contact the calculator.net team." />

<Breadcrumb items={[{ name: 'Contact', url: '/contact' }]} />

<div class="content-page glass animate-fade-in">
	<div class="contact-container">
		<div class="contact-form-section">
			<h1>Contact Us</h1>
			<p class="intro-text">We can be reached via the following form. Normally, we will respond within 2 business days.</p>
			
			{#if submitted}
				<div class="success-box glass text-center animate-fade-in">
					<h3>Message Sent!</h3>
					<p>Thank you for reaching out. We will get back to you shortly.</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="contact-form">
					<div class="form-group">
						<label for="name">Your name:</label>
						<input type="text" id="name" bind:value={name} placeholder="Enter your name" required />
					</div>
					
					<div class="form-group">
						<label for="email">Your email:</label>
						<input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
					</div>

					<div class="form-group">
						<label for="message">Message to us:</label>
						<textarea id="message" bind:value={message} placeholder="Type your message details here..." required></textarea>
					</div>

					<button type="submit">Send</button>
				</form>
			{/if}
		</div>

		<div class="contact-sidebar">
			<div class="address-card glass">
				<h3>Mailing Address</h3>
				<p class="company-name">Maple Tech. International LLC</p>
				<p class="address-detail">
					2203 Timberloch Pl<br />
					Suite 252<br />
					The Woodlands, TX 77380
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.content-page {
		padding: 3rem;
		max-width: 950px;
		margin: 0 auto;
	}
	.contact-container {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3.5rem;
		align-items: start;
	}
	@media (max-width: 768px) {
		.contact-container {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 750;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}
	.intro-text {
		color: var(--text-secondary);
		margin-bottom: 2rem;
		line-height: 1.5;
	}
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	label {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	input, textarea {
		width: 100%;
		padding: 0.75rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		color: var(--text-primary);
		font-size: 1rem;
		outline: none;
		transition: border-color var(--transition-fast);
	}
	textarea {
		height: 140px;
		resize: none;
	}
	input:focus, textarea:focus {
		border-color: var(--primary);
	}
	button {
		padding: 0.75rem 2rem;
		border: none;
		border-radius: var(--radius-md);
		background: var(--primary);
		color: white;
		font-size: 1.05rem;
		font-weight: 600;
		cursor: pointer;
		align-self: flex-start;
		transition: background var(--transition-fast);
	}
	button:hover {
		background: var(--primary-hover);
	}
	.address-card {
		padding: 2rem;
		border-radius: var(--radius-lg);
		background: var(--bg-tertiary);
		border: 1.5px solid var(--border-color);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.address-card h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.5rem;
	}
	.company-name {
		font-weight: 650;
		color: var(--text-primary);
	}
	.address-detail {
		line-height: 1.6;
		color: var(--text-secondary);
		font-style: normal;
	}
	.success-box {
		padding: 3rem;
		border-color: var(--success);
		background: rgba(16, 185, 129, 0.05);
		border-radius: var(--radius-md);
	}
	.success-box h3 {
		color: var(--success);
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}
</style>
