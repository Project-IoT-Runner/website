<script lang="ts">
    import { Skeleton } from '$lib/components/ui/skeleton';
    import * as Card from '$lib/components/ui/card';
    import type { Sprite } from '$lib/sprite';
    import SpritePreview from './SpritePreview.svelte';

    export let sprite: Sprite | null = null;
</script>

<Card.Root class="min-w-64">
    <Card.Header>
        <div class="h-[2lh]">
            {#if sprite}
                <Card.Title>{sprite.name}</Card.Title>
            {:else}
                <Skeleton class="h-8 w-full" />
            {/if}
        </div>
    </Card.Header>
    <Card.Content>
        <div class="aspect-square w-full rounded-md border bg-secondary p-2">
            {#if sprite}
                <SpritePreview pixelData={sprite.pixels} />
            {:else}
                <Skeleton class="h-full w-full" />
            {/if}
        </div>
    </Card.Content>
</Card.Root>
