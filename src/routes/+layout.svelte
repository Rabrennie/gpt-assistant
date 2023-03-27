<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<Navbar></Navbar>
<main class="p-8">
    <slot />
</main>
