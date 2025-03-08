<script lang="ts">
    import { page } from '$app/state';
    import SpriteEditBox from '$lib/components/sprite/SpriteEditBox.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { sprite } = data;
</script>

<div class="w-full h-full flex justify-center  ">
	<div class="w-96">
		<SpriteEditBox pixelData={sprite.pixels} sprite={sprite} />
	</div>
</div>

