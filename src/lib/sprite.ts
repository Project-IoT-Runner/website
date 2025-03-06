export interface Sprite {
    id: number;
    name: string;
    pixels: PixelData;
}

export type PixelData = boolean[];
