import { sprites } from '$lib/store';
import { error, type RequestHandler } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const GET: RequestHandler = async ({ params }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

    const sprite = get(sprites).find(sprite => sprite.id == id);

    return new Response(JSON.stringify(sprite));
};

export const PUT: RequestHandler = async ({ params, request }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

    const sprite = await request.json();

    let updatedSprite = null;
    sprites.update(sprites => {
      const index = sprites.findIndex(sprite => sprite.id == id);
      sprites[index].name = sprite.name ?? sprites[index].name;
      sprites[index].pixels = sprite.pixels ?? sprites[index].pixels;
      updatedSprite = sprites[index];
      return sprites;
    });

    return new Response(JSON.stringify(updatedSprite));
};

export const DELETE: RequestHandler = async ({ params }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

  let deletedSprite = null;
  sprites.update(sprites => {
    const index = sprites.findIndex(sprite => sprite.id == id);
    if (index !== -1) {
      deletedSprite = sprites[index];
      return sprites.filter(sprite => sprite.id != id);
    }
    return sprites;
  });

    return new Response(JSON.stringify(deletedSprite));
};
