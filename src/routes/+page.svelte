<script lang="ts">
    import SpriteGrid from '$lib/components/sprite/SpriteGrid.svelte';
    import type { PageData } from './$types';

    let { data } = $props();
    let { sprites }: PageData = data;
</script>

<div class="mb-4 flex justify-between">
    <h1 class="text-3xl font-bold">Kies een sprite!</h1>
    <a
        href="/sprite/create"
        class="bg-bkz-darkblue rounded-sm px-3 py-2 text-white no-underline"
    >
        Nieuwe sprite
    </a>
</div>
<SpriteGrid {sprites} />
