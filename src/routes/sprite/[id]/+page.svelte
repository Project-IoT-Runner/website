<script lang="ts">
    import { page } from '$app/state';
    import SpritePreview from '$lib/components/sprite/SpritePreview.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { sprite } = data;
</script>

<div class="w-full h-full flex justify-center  ">
	<div class="w-96">
		<SpritePreview pixelData={sprite.pixels} />
	</div>
</div>

