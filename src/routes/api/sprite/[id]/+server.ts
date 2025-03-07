import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, locals: { supabase } }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

    const { data: sprite, error: spriteLoadError } = await supabase
        .from('sprites')
        .select('*')
        .eq('id', id)
        .single();

    if (spriteLoadError) {
        error(404, 'Sprite not found');
    }

    return new Response(JSON.stringify(sprite));
};
