import type { Sprite } from '$lib/sprite';
import type { RequestHandler } from '@sveltejs/kit';

// FIXME: Voor nu hebben we hier even een placeholder voor de sprites,
//        totdat we een database hebben die we kunnen gebruiken
//        om de sprites op te halen.
const sprites: Sprite[] = [
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
    },
    {
        id: 0,
        name: 'Creeper?! Ahhhw mmmmmmmaaaaaannnnnnnnnnnn',
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
    }
];

export const GET: RequestHandler = () => {
    return new Response(JSON.stringify(sprites));
};
