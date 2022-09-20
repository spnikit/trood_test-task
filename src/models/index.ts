export interface Item {
    name: string;
    color: string;
    value: number;
}

export interface ItemAndFraction extends Item {
    fraction: number;
}