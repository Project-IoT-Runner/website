<script lang="ts">
    import SpritePreview from '$lib/components/sprite/SpritePreview.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let { sprite } = data;
</script>

<div class="flex h-full w-full flex-col items-center gap-20">
    <div class="flex w-full justify-between">
        <h2 class="text-3xl font-bold">{sprite.name}</h2>
        <Button variant="link" href="/sprite/{sprite.id}/edit">Bewerk</Button>
    </div>

    <div class="w-96">
        <div class="aspect-square w-full rounded-md border bg-secondary p-2">
            <SpritePreview pixelData={sprite.pixels} />
        </div>
    </div>
</div>
