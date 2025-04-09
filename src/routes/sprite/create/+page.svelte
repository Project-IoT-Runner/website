<script lang="ts">
    import { page } from '$app/state';
    import SpriteCreateBox from '$lib/components/sprite/SpriteCreateBox.svelte';
    
    import type { Sprite } from '$lib/sprite';

	import type { PageProps } from '../add/$types';

	let { data }: PageProps = $props();
	let sprite: Sprite = {
        pixels: new Array(64).fill(false)
    
    } ;
</script>

<div class="w-full h-full flex justify-center  ">
	<div class="w-96">
		<SpriteCreateBox pixelData={sprite.pixels} sprite={sprite} />
	</div>
</div>

