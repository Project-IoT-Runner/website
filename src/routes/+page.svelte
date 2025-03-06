<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import SpritePreview from '$lib/SpritePreview.svelte';
	import { onMount } from 'svelte';
	import type { Sprite } from '$lib/sprite';
	import ExclamationTriangle from 'svelte-radix/ExclamationTriangle.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';

	let data: Sprite[] | null = null;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			const respone = await fetch('/api/sprite');
			if (!respone.ok) {
				throw new Error('Network respone was not ok');
			}
			data = await respone.json();
		} catch (err) {
			error = 'Failed to fetch data';
			console.error(err);
		} finally {
			loading = false;
		}
	});
</script>


{#if loading}
	<p>loading...</p>
{:else if error}
	<Alert.Root variant="destructive">
		<ExclamationTriangle class="h-4 w-4" />
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>{error}</Alert.Description>
	</Alert.Root>
{:else if data}
	<div class="grid grid-cols-3 gap-3">
		{#each data as sprite (sprite.id)}
			<a href="/sprite/{sprite.id}" class="p-1 no-underline">
				<Card.Root>
					<SpritePreview pixelData={sprite.pixels} />
					<Card.CardFooter>
						{sprite.name}
					</Card.CardFooter>
				</Card.Root>
			</a>
		{/each}
	</div>
{:else}
	<div>
		<p>No sprites</p>
	</div>
{/if}
