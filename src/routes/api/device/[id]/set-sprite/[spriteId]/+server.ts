import { selectedSprite1, selectedSprite2 } from '$lib/store';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ params, fetch }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const deviceId = parseInt(params.id);

    if (isNaN(deviceId)) {
        error(400, 'Invalid id parameter');
    }

    if (!params.spriteId) {
        error(400, 'Missing spriteId parameter');
    }

    const spriteId = parseInt(params.spriteId);

    if (isNaN(spriteId)) {
        error(400, 'Invalid spriteId parameter');
    }

    const sprite = await (await fetch(`/api/sprite/${spriteId}`)).json();
    if (deviceId == 2) {
        selectedSprite2.set(sprite);
    } else if (deviceId == 1) {
        selectedSprite1.set(sprite);
    }

    return json({ sprite });
};
