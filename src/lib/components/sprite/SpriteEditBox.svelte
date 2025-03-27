<script lang="ts">
    import type { PixelData, Sprite } from '$lib/sprite';
    import * as Card from '$lib/components/ui/card';
    import Button from '../ui/button/button.svelte';
    import { goto } from '$app/navigation';

    let { pixelData, sprite }: { pixelData: PixelData; sprite: Sprite } =
        $props();

    const togglePixel = (index: number) => {
        pixelData = pixelData.map((pixel: boolean, ix: number) =>
            ix === index ? !pixel : pixel
        );
    };

    const updateSprite = async () => {
        await fetch('/api/sprite/' + sprite.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pixels: pixelData })
        });

        goto('/');
    };
</script>

<Card.Root class="min-w-64">
    <Card.Content>
        <div class="grid aspect-square w-full grid-cols-8 grid-rows-8">
            {#each pixelData as pixel, ix (ix)}
                <div
                    class:bg-primary={pixel}
                    class="h-full w-full"
                    onclick={() => togglePixel(ix)}
                ></div>
            {/each}
        </div>
    </Card.Content>
    <Card.Footer>
        <Button class="mr-4" variant="secondary" onclick={() => updateSprite()}>
            Update
        </Button>
        <Button class="no-underline" variant="secondary" href="/">
            Cancel
        </Button>
    </Card.Footer>
</Card.Root>
