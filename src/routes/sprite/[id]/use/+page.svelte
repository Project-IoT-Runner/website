<script lang="ts">
    import SpritePreview from '$lib/components/sprite/SpritePreview.svelte';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let { sprite } = data;

    let deviceId = $state();

    async function useSprite() {
        if (!deviceId) {
            alert('Vul een goed apparaat nummer in!');
            return;
        }

        await fetch(`/api/device/${deviceId}/set-sprite/${sprite.id}`, {
            method: 'POST'
        }).catch((e) => console.error('Failed to set selected sprite: ' + e));

        alert('Sprite wordt verstuurd!');
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
                placeholder="Apparaat nummer"
                type="number"
                bind:value={deviceId}
            />
            <Button onclick={() => useSprite()}>Gebruik</Button>
        </div>
    </div>
</div>
