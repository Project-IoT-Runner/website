<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<header class="border-b bg-gray-100 px-8 py-4">
    <h1 class="text-2xl font-bold">
        <a href="/" class="no-underline hover:underline">Runner</a>
    </h1>
</header>
<main class="mx-auto my-8 max-w-5xl">
    {@render children()}
</main>
<footer></footer>
