import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Sprite } from "$lib/sprite";

export const load: PageLoad = async ({ params, fetch }) => {
 if (!params.id) {
        error(400, 'Missing id parameter');
    } 

    const id = parseInt(params.id);

    if (isNaN(id)) {
        error(400, 'Invalid id parameter');
    }

    const sprite: Sprite = await fetch("/api/sprite/" + id).then(res=> res.json());

    if (!sprite) {
        error(404, 'Sprite not found');
    }

    return { sprite };
}