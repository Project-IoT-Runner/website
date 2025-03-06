import type { Sprite } from '$lib/sprite';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const sprites: Sprite[] = await fetch('/api/sprite').then((res) =>
        res.json()
    );
    return { sprites };
};
