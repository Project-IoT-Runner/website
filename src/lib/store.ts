import { writable, type Writable } from 'svelte/store';
import type { Sprite } from './sprite';

export const selectedSprite1: Writable<Sprite | null> = writable(null);
export const selectedSprite2: Writable<Sprite | null> = writable(null);
export const sprites: Writable<Sprite[]> = writable([
  {
    id: 1,
    name: 'Creeper',
    pixels: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,true,true,false,false,true,true,false,false,true,true,false,false,true,true,true,true,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,false,true,true,false,true,true,true,true,false,true,true,false,true,true]
  },
  {
    id: 2,
    name: 'Pikachu',
    pixels: [false,true,true,false,false,false,false,true,false,true,true,true,false,false,false,true,false,false,false,true,true,true,true,true,true,true,false,true,false,true,false,true,true,true,false,true,true,true,true,true,false,true,false,true,true,true,true,false,false,true,true,true,true,true,true,false,false,false,true,true,true,true,true,false]
  },
  {
    id: 14,
    name: 'Gigalange naam hier maar het moet nog langer want het is niet lang genoeg',
    pixels: [false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,true,false,false,false,false,true,false,false,true,false,true,true,false,true,false,false,true,false,true,true,false,true,false,false,true,false,false,false,false,true,false,false,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false]
  },
  {
    id: 18,
    name: 'Ballon',
    pixels: [false,false,true,true,true,false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,false,true,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false]
  },
  {
    id: 19,
    name: 'Meneer Braadworst',
    pixels: [false,false,true,true,true,true,false,false,false,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,false,false,true,true,false,true,false,true,true,true,true,false,true]
  },
  {
    id: 20,
    name: 'vbjh',
    pixels: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  }
]);

export const score: Writable<number> = writable(31415);
