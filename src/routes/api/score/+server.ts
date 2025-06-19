import { score } from '$lib/store';
import { error, type RequestHandler } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const GET: RequestHandler = async () => {
    const scoreValue = get(score);
    return new Response(JSON.stringify(scoreValue));
};

export const PUT: RequestHandler = async ({ params, request }) => {
    if (!params.device_id) {
        error(400, 'Missing id parameter');
    }

    const device_id = parseInt(params.device_id);

    if (isNaN(device_id)) {
        error(400, 'Invalid id parameter');
    }

    const scoreValue = await request.json();

  score.update(score => {
    score = scoreValue;
    return score;
  });

    return new Response(JSON.stringify(scoreValue));
};
