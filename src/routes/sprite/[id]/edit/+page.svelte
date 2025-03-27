<script lang="ts">
    import SpriteEditBox from '$lib/components/sprite/SpriteEditBox.svelte';

    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    let { sprite } = data;
</script>

<div class="flex h-full w-full justify-center">
    <div class="w-96">
        <SpriteEditBox pixelData={sprite.pixels} {sprite} />
    </div>
</div>
