<script lang="ts">
    import type { PixelData, Sprite } from '$lib/sprite';
    import * as Card from '$lib/components/ui/card';
    import Button from '../ui/button/button.svelte';
    import { goto } from '$app/navigation';

    let { pixelData, sprite }: { pixelData: PixelData; sprite: Sprite } = $props();
    let name = $state('name');
    const togglePixel = (index: number) => {
        console.log(sprite)
        pixelData = pixelData.map((pixel, ix) =>
            ix === index ? !pixel : pixel
        );
    };

    const CreateSprite = async () => {
        await fetch('/api/sprite/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: name,
                pixels: pixelData 
            })
        });

        goto('/');
    };

</script>

<Card.Root class="min-w-64">
    <Card.Content>
        <div class="grid aspect-square w-full grid-cols-8 grid-rows-8 border">
            {#each pixelData as pixel, ix (ix)}
                <div
                    class:bg-primary={pixel}
                    class="h-full w-full"
                    onclick={() => togglePixel(ix)}
                ></div>
            {/each}
        </div>
        <input type="text" bind:value={name} class="bg-transparent border w-full"/>
    </Card.Content>
    <Card.Footer>
        
        <Button class="mr-4" variant="secondary" onclick={() => CreateSprite()}>Created</Button>
        <Button class="no-underline" variant="secondary" href="/">cancel</Button>

    </Card.Footer>
</Card.Root>
