import { writable, type Writable } from 'svelte/store';
import type { Sprite } from './sprite';

export const selectedSprite1: Writable<Sprite | null> = writable(null);
export const selectedSprite2: Writable<Sprite | null> = writable(null);
