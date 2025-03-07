import type { Tables } from './database.types';

export type Sprite = Tables<'sprites'>;

export type PixelData = Sprite['pixels'];
