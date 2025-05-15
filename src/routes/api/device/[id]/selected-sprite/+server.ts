import { selectedSprite1, selectedSprite2 } from '$lib/store';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const GET: RequestHandler = async ({ params }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const deviceId = parseInt(params.id);

    if (isNaN(deviceId)) {
        error(400, 'Invalid id parameter');
    }

    let sprite = get(selectedSprite1);
    console.log(sprite);
    if (deviceId == 2) {
        sprite = get(selectedSprite2);
    }

    return json({ sprite });
};
