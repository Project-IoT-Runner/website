import type { Sprite } from '$lib/sprite';
import { sprites } from '$lib/store';
import { error, type RequestHandler } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify(get(sprites)));
};

export const POST: RequestHandler = async ({ request }) => {
    const sprite: Sprite = await request.json();

    if (!sprite.pixels) {
        throw error(400, 'Missing pixels data in request body');
    }

    sprites.update((sprites) => {
      sprites.push(sprite);
      return sprites;
    })

    return new Response(JSON.stringify(sprite));
};
