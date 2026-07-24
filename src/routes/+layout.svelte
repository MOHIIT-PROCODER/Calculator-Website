<script lang="ts">
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import '../index.css';

	let { children } = $props<{ children: any }>();
</script>

<div class="app-layout">
	<Navbar />
	<main class="container section-padding">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app-layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex-grow: 1;
	}
</style>
