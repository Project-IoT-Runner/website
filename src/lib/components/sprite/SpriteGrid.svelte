<script lang="ts">
    import type { Sprite } from '$lib/sprite';
    import SpriteCard from './SpriteCard.svelte';

    export let sprites: Sprite[] | null = null;
</script>

<div class="grid grid-cols-3 gap-4">
    {#if sprites}
        {#each sprites as sprite (sprite.id)}
            <SpriteCard {sprite} />
        {/each}
    {:else}
        <div>
            <p class="italic text-muted-foreground">Geen sprites gevonden...</p>
        </div>
    {/if}
</div>
