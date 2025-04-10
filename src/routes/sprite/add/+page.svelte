<script lang="ts">
    import SpriteEditBox from '$lib/components/sprite/SpriteEditBox.svelte';
    import type { Sprite } from '$lib/sprite';

    let sprite: Sprite = { pixels: [], name: 'Nieuwe sprite' };
</script>

<div class="flex h-full w-full justify-center">
    <div class="w-96">
        <SpriteEditBox pixelData={sprite.pixels} {sprite} />
    </div>
</div>
