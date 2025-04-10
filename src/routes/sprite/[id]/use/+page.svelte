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

<h1>{sprite.name}</h1>
<SpritePreview pixelData={sprite.pixels} />
<Input placeholder="Runner nummer" type="number" bind:value={deviceId}></Input>
<Button onclick={() => useSprite()}>Gebruik</Button>
