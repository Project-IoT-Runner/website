<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<header class="border-b bg-secondary px-8 py-4">
    <h1 class="text-2xl font-bold">
        <a href="/" class="no-underline hover:underline">Runner</a>
    </h1>
</header>

<main class="mx-auto my-8 w-full max-w-5xl px-4">
    {@render children()}
</main>

<footer class="border-t bg-secondary px-8 py-4">
    <p>&copy; 2025 Team Runner</p>
</footer>

<style>
    :global(body) {
        display: grid;
        height: 100vh;
        grid-template-rows: auto 1fr auto;
    }
</style>
