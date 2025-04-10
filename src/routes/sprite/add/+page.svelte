<script lang="ts">
    import SpriteCreateBox from '$lib/components/sprite/SpriteCreateBox.svelte';

    import type { Sprite } from '$lib/sprite';

    let sprite: Sprite = {
        pixels: new Array(64).fill(false)
    };
</script>

<div class="flex h-full w-full justify-center">
    <div class="w-96">
        <SpriteCreateBox pixelData={sprite.pixels} {sprite} />
    </div>
</div>
