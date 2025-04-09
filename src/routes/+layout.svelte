<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import '../app.css';

    let { children } = $props();

    function toggleColorMode() {
        if (localStorage.theme == 'light') {
            localStorage.theme = 'dark';
            document.documentElement.classList.toggle('dark', true);
        } else {
            localStorage.theme = 'light';
            document.documentElement.classList.toggle('dark', false);
        }
    }
</script>

<header class="border-b bg-secondary px-8 py-4 flex justify-between" style="background: var(--blue)">
    <h1 class="text-2xl font-bold">
        <a href="/" class="no-underline hover:underline" style="color: white"
            >Runner</a
        >
    </h1>
    <a href="/sprite/create" class="no-underline bg-white text-stone-900 p-2 rounded-sm">
        New sprite
    </a>
</header>

<main class="mx-auto my-8 w-full max-w-5xl px-4">
    {@render children()}
</main>

<footer class="border-t bg-secondary px-8 py-4">
    <p>&copy; 2025 Team Runner</p>

    <Button class="p-0" variant="link" onclick={() => toggleColorMode()}>
        Dark Mode
    </Button>
</footer>

<style>
    :global(body) {
        display: grid;
        height: 100vh;
        grid-template-rows: auto 1fr auto;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
