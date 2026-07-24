<script lang="ts">
	import { categories } from '../../data/categories';
	import { calculators } from '../../data/calculators';
	
	let searchQuery = $state('');
	let mobileMenuOpen = $state(false);
	let isDark = $state(false);
	let activeIndex = $state(-1);
	let isFocused = $state(false);

	let deferredPrompt = $state<any>(null);
	let showInstallBtn = $state(false);

	$effect(() => {
		const handleInstallPrompt = (e: Event) => {
			e.preventDefault();
			deferredPrompt = e;
			showInstallBtn = true;
		};
		window.addEventListener('beforeinstallprompt', handleInstallPrompt);

		return () => {
			window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
		};
	});

	async function installApp() {
		if (!deferredPrompt) return;
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		console.log(`User response to install: ${outcome}`);
		deferredPrompt = null;
		showInstallBtn = false;
	}

	let suggestions = $derived.by(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return [];
		return calculators.filter(c => 
			c.name.toLowerCase().includes(q) ||
			c.description.toLowerCase().includes(q)
		);
	});

	$effect(() => {
		// Detect initial dark mode
		isDark = document.documentElement.classList.contains('dark') || 
			localStorage.getItem('theme') === 'dark';
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	function handleSearch(e: SubmitEvent) {
		e.preventDefault();
		if (searchQuery.trim()) {
			window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (suggestions.length === 0) return;
		
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			activeIndex = (activeIndex + 1) % suggestions.length;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length;
		} else if (e.key === 'Enter') {
			if (activeIndex >= 0 && activeIndex < suggestions.length) {
				e.preventDefault();
				const selected = suggestions[activeIndex];
				window.location.href = `/${selected.category}/${selected.slug}`;
				searchQuery = '';
				activeIndex = -1;
				isFocused = false;
			}
		} else if (e.key === 'Escape') {
			isFocused = false;
			activeIndex = -1;
		}
	}
</script>

<nav class="glass navbar">
	<div class="nav-container">
		<a href="/" class="logo">
			<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="logo-icon">
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
				<line x1="9" y1="9" x2="15" y2="9"></line>
				<line x1="9" y1="13" x2="15" y2="13"></line>
				<line x1="9" y1="17" x2="15" y2="17"></line>
				<line x1="12" y1="9" x2="12" y2="17"></line>
			</svg>
			<span class="logo-text">calculator<span class="highlight">.net</span></span>
		</a>

		<form class="nav-search" onsubmit={handleSearch}>
			<input 
				type="text" 
				placeholder="Search calculators..." 
				bind:value={searchQuery} 
				onkeydown={handleKeydown}
				onfocus={() => { isFocused = true; activeIndex = -1; }}
				onblur={() => setTimeout(() => isFocused = false, 200)}
			/>
			<button type="submit" aria-label="Search">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
			</button>

			{#if isFocused && searchQuery.trim() !== ''}
				<div class="search-suggestions glass">
					{#if suggestions.length > 0}
						{#each suggestions as item, idx}
							<a 
								href="/{item.category}/{item.slug}" 
								class="suggestion-item {idx === activeIndex ? 'active' : ''}"
								onmousedown={() => {
									window.location.href = `/${item.category}/${item.slug}`;
								}}
							>
								{item.name}
							</a>
						{/each}
					{:else}
						<div class="no-results-suggestion">No calculator found</div>
					{/if}
				</div>
			{/if}
		</form>

		<div class="nav-links">
			<a href="/" class="nav-link">Home</a>
			{#each categories as category}
				<a href="/{category.id}" class="nav-link">{category.name}</a>
			{/each}
			<a href="/favorites" class="nav-link fav-link" aria-label="Favorites">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
			</a>
			{#if showInstallBtn}
				<button class="install-btn" onclick={installApp} aria-label="Install App">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
					<span>Install</span>
				</button>
			{/if}
			<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
				{#if isDark}
					<!-- Sun icon -->
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
				{:else}
					<!-- Moon icon -->
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
				{/if}
			</button>
		</div>

		<button class="mobile-toggle" onclick={() => mobileMenuOpen = !mobileMenuOpen} aria-label="Toggle Menu">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
		</button>
	</div>
</nav>


{#if mobileMenuOpen}
	<div class="mobile-menu glass animate-fade-in">
		<a href="/" onclick={() => mobileMenuOpen = false}>Home</a>
		{#each categories as category}
			<a href="/{category.id}" onclick={() => mobileMenuOpen = false}>{category.name}</a>
		{/each}
		<a href="/favorites" onclick={() => mobileMenuOpen = false}>Favorites</a>
		{#if showInstallBtn}
			<button class="install-btn-mobile" onclick={() => { installApp(); mobileMenuOpen = false; }}>
				Install App
			</button>
		{/if}
		<button class="theme-toggle-mobile" onclick={() => { toggleTheme(); mobileMenuOpen = false; }}>
			{isDark ? 'Light Mode' : 'Dark Mode'}
		</button>
	</div>
{/if}

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 50;
		border-radius: 0;
		border-left: none;
		border-right: none;
		border-top: none;
		backdrop-filter: blur(20px);
	}
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.5rem;
		height: 64px;
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.55rem;
	}
	.logo-icon {
		color: var(--primary);
	}
	.highlight {
		color: var(--primary);
	}
	.nav-search {
		display: flex;
		align-items: center;
		position: relative;
		width: 320px;
	}
	.nav-search input {
		width: 100%;
		padding: 0.5rem 2.5rem 0.5rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background: var(--bg-primary);
		color: var(--text-primary);
		font-size: 0.9rem;
		outline: none;
		transition: border-color var(--transition-fast);
	}
	.nav-search input:focus {
		border-color: var(--primary);
	}
	.nav-search button {
		position: absolute;
		right: 0.75rem;
		background: none;
		border: none;
		color: var(--text-tertiary);
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	.nav-link {
		font-weight: 600;
		font-size: 1.05rem;
		color: var(--text-secondary);
	}
	.nav-link:hover {
		color: var(--primary);
	}
	.theme-toggle {
		background: none;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		padding: 0.25rem;
		display: flex;
		align-items: center;
		border-radius: var(--radius-sm);
		transition: background var(--transition-fast), color var(--transition-fast);
	}
	.theme-toggle:hover {
		color: var(--primary);
		background: var(--bg-tertiary);
	}
	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
	}
	.mobile-menu {
		position: fixed;
		top: 64px;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		gap: 1rem;
		z-index: 40;
		border-radius: 0 0 var(--radius-lg) var(--radius-lg);
	}
	.mobile-menu a {
		font-weight: 500;
		font-size: 1.1rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--border-color);
	}
	.theme-toggle-mobile {
		background: var(--primary);
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: var(--radius-md);
		font-weight: 600;
		cursor: pointer;
	}

	@media (max-width: 900px) {
		.nav-search {
			width: 200px;
		}
	}
	@media (max-width: 768px) {
		.nav-links, .nav-search {
			display: none;
		}
		.mobile-toggle {
			display: block;
		}
	}

	/* Search suggestions */
	.search-suggestions {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		margin-top: 0.5rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		max-height: 250px;
		overflow-y: auto;
		z-index: 100;
		box-shadow: var(--shadow-lg);
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0;
	}
	.suggestion-item {
		padding: 0.6rem 1rem;
		font-size: 0.9rem;
		color: var(--text-primary);
		text-align: left;
		cursor: pointer;
		display: block;
		transition: background var(--transition-fast);
	}
	.suggestion-item:hover, .suggestion-item.active {
		background: var(--bg-tertiary);
		color: var(--primary);
	}
	.no-results-suggestion {
		padding: 0.75rem 1rem;
		font-size: 0.9rem;
		color: var(--text-tertiary);
		text-align: center;
	}
	.install-btn {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		background: var(--primary);
		color: white;
		border: none;
		padding: 0.35rem 0.75rem;
		border-radius: var(--radius-sm);
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		transition: opacity 0.2s, transform 0.2s;
	}
	.install-btn:hover {
		opacity: 0.9;
		transform: translateY(-1px);
	}
	html.dark .install-btn {
		background: var(--brand-gradient);
		color: #000000;
		box-shadow: 0 0 10px rgba(46, 229, 157, 0.3);
	}
	.install-btn-mobile {
		background: var(--success);
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		display: block;
		width: 100%;
		text-align: center;
		margin-top: 0.25rem;
	}
	html.dark .install-btn-mobile {
		background: var(--brand-gradient);
		color: #000000;
	}
</style>
