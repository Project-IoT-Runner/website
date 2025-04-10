<script lang="ts">
    import type { PixelData } from '$lib/sprite';

    export let pixelData: PixelData;

    const togglePixel = (ix: number) => {
        pixelData[ix] = !pixelData[ix];
    };
</script>

<div
    class="grid aspect-square w-full grid-cols-8 grid-rows-8 overflow-hidden rounded border"
>
    {#each pixelData as pixel, ix (ix)}
        <div
            class:bg-primary={pixel}
            class:hover:opacity-90={pixel}
            class:hover:bg-secondary={!pixel}
            class="h-full w-full cursor-pointer"
            onclick={() => togglePixel(ix)}
        ></div>
    {/each}
</div>
