<script lang="ts">
    import SpriteGrid from '$lib/components/sprite/SpriteGrid.svelte';
    import type { PageData } from './$types';

    let { data } = $props();
    let { sprites }: PageData = data;
</script>

<SpriteGrid {sprites} />
