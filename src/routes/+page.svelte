<script lang="ts">
    import SpriteGrid from '$lib/components/sprite/SpriteGrid.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';

    let { data } = $props();
    let { sprites }: PageData = data;
</script>

<div class="mb-4 flex justify-between">
    <h1 class="text-3xl font-bold">Kies een sprite!</h1>

    <Button href="/sprite/add">Nieuwe sprite</Button>
</div>

<SpriteGrid {sprites} />
