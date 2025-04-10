<script lang="ts">
    import { goto } from '$app/navigation';
    import SpriteEditor from '$lib/components/sprite/SpriteEditor.svelte';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let sprite = $state(data.sprite);

    const updateSprite = async () => {
        await fetch('/api/sprite/' + sprite.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sprite)
        });

        goto('/');
    };
</script>

<div class="flex h-full w-full flex-col items-center gap-8">
    <h1 class="text-3xl font-bold">Sprite bewerken</h1>

    <form onsubmit={() => updateSprite()} class="flex w-96 flex-col gap-4">
        <SpriteEditor bind:pixelData={sprite.pixels} />
        <Input placeholder="Sprite naam" type="text" bind:value={sprite.name} />
        <div class="footer flex justify-between">
            <Button type="submit">Opslaan</Button>
            <Button variant="destructive" href="/">Annuleren</Button>
        </div>
    </form>
</div>
