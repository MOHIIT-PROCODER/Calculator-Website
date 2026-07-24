<footer class="footer glass">
	<div class="footer-container">
		<div class="footer-brand">
			<h3>Calc<span>Hub</span></h3>
			<p>Free, fast, and feature-rich online calculators to help you solve everyday math, finance, and health problems.</p>
		</div>
		
		<div class="footer-links-group">
			<div class="footer-column">
				<h4>Categories</h4>
				<a href="/financial">Financial</a>
				<a href="/health">Health & Fitness</a>
				<a href="/math">Mathematics</a>
				<a href="/other">Other Tools</a>
			</div>
			
			<div class="footer-column">
				<h4>Company</h4>
				<a href="/about">About Us</a>
				<a href="/contact">Contact</a>
			</div>
			
			<div class="footer-column">
				<h4>Legal</h4>
				<a href="/privacy-policy">Privacy Policy</a>
				<a href="/terms">Terms of Use</a>
				<a href="/disclaimer">Disclaimer</a>
				<a href="/sitemap">Sitemap</a>
			</div>
		</div>
	</div>
	
	<div class="footer-bottom">
		<p>&copy; {new Date().getFullYear()} calculator.net. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		margin-top: auto;
		border-radius: 0;
		border-bottom: none;
		border-left: none;
		border-right: none;
		padding: 4rem 1.5rem 2rem 1.5rem;
		background: var(--bg-secondary);
	}
	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 4rem;
	}
	.footer-brand h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.footer-brand span {
		color: var(--primary);
	}
	.footer-brand p {
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 360px;
		font-size: 0.95rem;
	}
	.footer-links-group {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	.footer-column h4 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
		color: var(--text-primary);
	}
	.footer-column a {
		display: block;
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
	}
	.footer-column a:hover {
		color: var(--primary);
	}
	.footer-bottom {
		max-width: 1200px;
		margin: 3rem auto 0 auto;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-color);
		display: flex;
		justify-content: center;
		color: var(--text-tertiary);
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.footer-container {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.footer-links-group {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}
	}
</style>
