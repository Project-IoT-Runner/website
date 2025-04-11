<script lang="ts">
    import SpritePreview from '$lib/components/sprite/SpritePreview.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let { sprite } = data;
</script>

<div class="flex w-full justify-center">
    <div class="flex w-96 flex-col items-center gap-8">
        <h2 class="text-3xl font-bold">{sprite.name}</h2>

        <div class="w-96">
            <div
                class="aspect-square w-full rounded-md border bg-secondary p-2"
            >
                <SpritePreview pixelData={sprite.pixels} />
            </div>
        </div>

        <div class="flex w-full justify-between">
            <Button href="/sprite/{sprite.id}/edit">Bewerk</Button>
            <Button href="/sprite/{sprite.id}/use">Gebruik</Button>
        </div>
    </div>
</div>
