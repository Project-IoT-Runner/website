<script lang="ts">
    import type { PixelData } from '$lib/sprite';

    let { pixelData }: { pixelData: PixelData } = $props();
</script>

<div class="grid aspect-square w-full grid-cols-8 grid-rows-8">
    {#each pixelData as pixel, ix (ix)}
        <div class:bg-primary={pixel} class="h-full w-full"></div>
    {/each}
</div>
