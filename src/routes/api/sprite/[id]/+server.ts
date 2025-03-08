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

export const POST: RequestHandler = async ({ params, request, locals: { supabase } }) => {
    if (!params.id) {
        error(400, 'Missing id parameter');
    }

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }
    const { pixels } = await request.json(); 

    if (!pixels) {
        throw error(400, 'Missing pixels data in request body'); 
    }

    const { data: sprite, error: spriteLoadError } = await supabase
        .from('sprites')
        .update({ pixels: pixels }) 
        .eq('id', id)
        .single();

    if (spriteLoadError) {
        throw error(404, 'Sprite not found'); 
    }

    return new Response(JSON.stringify(sprite));
};