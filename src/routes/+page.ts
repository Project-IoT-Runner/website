import type { Sprite, Score } from '$lib/sprite';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const sprites: Sprite[] = await fetch('/api/sprite').then((res) =>
        res.json()
    );
    const score: Score[] = await fetch('api/score').then((res) => res.json())
    return { sprites, score };
};
