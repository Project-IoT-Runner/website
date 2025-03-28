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
    <Card.Footer>
        <Button
            class="mr-4 no-underline"
            variant="secondary"
            style="background: var(--blue); color: white;"
            href="/sprite/{sprite.id}">View</Button
        >
        <Button
            class="no-underline"
            variant="secondary"
            style="background: var(--blue); color: white;"
            href="/sprite/{sprite.id}/edit">Update</Button
        >
    </Card.Footer>
</Card.Root>
