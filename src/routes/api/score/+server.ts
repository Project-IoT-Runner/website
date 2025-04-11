import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {
    const { data: score } = await supabase.from('score').select('*').limit(1);
    return new Response(JSON.stringify(score));
};
export const PUT: RequestHandler = async ({
    params,
    request,
    locals: { supabase }
}) => {
    if (!params.device_id) {
        error(400, 'Missing id parameter');
    }

    const device_id = parseInt(params.device_id);

    if (isNaN(device_id)) {
        error(400, 'Invalid id parameter');
    }

    const score = await request.json();

    const { data: updatedScore, error: spriteLoadError } = await supabase
        .from('score')
        .update(score)
        .eq('device_id', device_id)
        .single();

    if (spriteLoadError) {
        throw error(404, 'Sprite not found');
    }

    return new Response(JSON.stringify(updatedScore));
};
