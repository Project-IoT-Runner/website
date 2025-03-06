import type { Sprite } from '$lib/sprite';
import { error, type RequestHandler } from '@sveltejs/kit';

// FIXME: Voor nu hebben we hier even een placeholder voor de sprites,
//        totdat we een database hebben die we kunnen gebruiken
//        om de sprites op te halen.
const sprites: Sprite[] = [
    {
        id: 0,
        name: 'Creeper?! Ahhhw mannnn',
        // prettier-ignore
        pixels: [
            true, true , true,  true,  true,  true,  true,  true,
            true, true , true,  true,  true,  true,  true,  true,
            true, false, false, true,  true,  false, false, true,
            true, false, false, true,  true,  false, false, true,
            true, true , true,  false, false, true,  true,  true,
            true, true , false, false, false, false, true,  true,
            true, true , false, false, false, false, true,  true,
            true, true , false, true,  true,  false, true,  true
        ]
    },
    {
        id: 1,
        name: 'Pikachu',
        // prettier-ignore
        pixels: [
            false, true,  true,  false, false, false, false, true,
            false, true,  true,  true,  false, false, false, true,
            false, false, false, true,  true,  true,  true,  true,
            true,  true,  false, true,  true,  true,  true,  true,
            true,  true,  false, true,  true,  true,  true,  true,
            false, true,  false, true,  true,  true,  true,  false,
            false, true,  true,  true,  true,  true,  true,  false,
            false, false, true,  true,  true,  true,  true,  false
        ]
    }
];

export const GET: RequestHandler = ({ params }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

    const sprite = sprites.find((sprite) => sprite.id === id);

    if (!sprite) {
        error(404, 'Sprite not found');
    }

    return new Response(JSON.stringify(sprite));
};
