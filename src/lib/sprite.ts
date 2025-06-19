export type Sprite = {
    id: number;
    name: string;
    pixels: boolean[];
};

export type Score = {
    device_id: number;
    score: number;
};

export type PixelData = Sprite['pixels'];
