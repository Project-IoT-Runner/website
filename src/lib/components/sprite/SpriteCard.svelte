<script lang="ts">
    import { Skeleton } from '$lib/components/ui/skeleton';
    import * as Card from '$lib/components/ui/card';
    import type { Sprite } from '$lib/sprite';
    import SpritePreview from './SpritePreview.svelte';
    import { Button } from '$lib/components/ui/button/index.js';
    export let sprite: Sprite | null = null;
</script>

<Card.Root class="min-w-64">
    <Card.Header>
        <div class="h-[1lh]">
            {#if sprite}
                <Card.Title
                    class="overflow-hidden text-ellipsis whitespace-nowrap"
                >
                    {sprite.name}
                </Card.Title>
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
    <Card.Footer class="flex gap-4">
        {#if sprite}
            <Button variant="link" href="/sprite/{sprite.id}">Bekijk</Button>
            <Button variant="link" href="/sprite/{sprite.id}/edit">Bewerk</Button>
        {/if}
    </Card.Footer>
</Card.Root>
