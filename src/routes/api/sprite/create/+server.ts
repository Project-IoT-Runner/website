import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {
    const { pixels, name } = await request.json(); 

    if (!pixels) {
        throw error(400, 'Missing pixels data in request body'); 
    }

    const { data: sprite, error: spriteLoadError } = await supabase
        .from('sprites')
        .insert({ pixels: pixels, name: name } ) 


    if (spriteLoadError) {
        throw error(404, 'Sprite not found'); 
    }

    return new Response(JSON.stringify(sprite));
};