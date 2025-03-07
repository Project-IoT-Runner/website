import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {
    const { data: sprites } = await supabase.from('sprites').select('*');
    return new Response(JSON.stringify(sprites));
};
