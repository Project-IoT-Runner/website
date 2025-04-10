<script lang="ts">
    import SpritePreview from '$lib/components/sprite/SpritePreview.svelte';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let { sprite } = data;

    let deviceId = $state();

    function useSprite() {
        if (!deviceId) {
            alert('Vul een goed runner nummber in!');
            return;
        }

        alert('TODO: sprite available maken');
    }
</script>

<div class="flex w-full justify-center">
    <div class="flex w-96 flex-col gap-8">
        <h1 class="text-3xl font-bold">Gebruik Sprite ({sprite.name})</h1>

        <div class="overflow-hidden rounded border">
            <SpritePreview pixelData={sprite.pixels} />
        </div>

        <div class="flex gap-4">
            <Input
                placeholder="Runner nummer"
                type="number"
                bind:value={deviceId}
            />
            <Button onclick={() => useSprite()}>Gebruik</Button>
        </div>
    </div>
</div>
