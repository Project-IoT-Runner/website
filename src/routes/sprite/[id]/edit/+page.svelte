<script lang="ts">
    import { goto } from '$app/navigation';
    import SpriteEditor from '$lib/components/sprite/SpriteEditor.svelte';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let sprite = $state(data.sprite);

    const updateSprite = async () => {
        await fetch(`/api/sprite/${sprite.id}`, {
            method: 'PUT',
            body: JSON.stringify(sprite)
        });

        goto('/');
    };

    const deleteSprite = async () => {
        if (confirm('Sprite verwijderen?')) {
            await fetch(`/api/sprite/${sprite.id}`, {
                method: 'DELETE'
            });

            goto('/');
        }
    };
</script>

<div class="flex h-full w-full flex-col items-center gap-8">
    <h1 class="text-3xl font-bold">Sprite bewerken</h1>

    <form onsubmit={() => updateSprite()} class="flex w-96 flex-col gap-4">
        <SpriteEditor bind:pixelData={sprite.pixels} />
        <Input placeholder="Sprite naam" type="text" bind:value={sprite.name} />
        <div class="footer flex justify-between">
            <div class="flex gap-4">
                <Button type="submit">Opslaan</Button>
                <Button variant="destructive" onclick={() => deleteSprite()}>
                    Verwijder
                </Button>
            </div>

            <Button class="w-fit" variant="link" href="/">Annuleer</Button>
        </div>
    </form>
</div>
