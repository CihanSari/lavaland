import { Neighbors } from "../lavalandcommon";
export declare type fncEach<T> = (x: number, y: number, value: T, neighbors: Neighbors<T>) => T | null;
export declare class WorldMatrix<T> {
    content: (T | null)[][];
    private width;
    private height;
    setWidth(newWidth: number, value?: T | null): number;
    setHeight(newHeight: number, value?: T | null): number;
    setSize(width: number, height: number, value?: T | null): void;
    setValue(x: number, y: number, value?: T | null): void;
    getValue(x: number, y: number): T | null;
    forEachValue(each: fncEach<T | null>): void;
    constructor(width: number, height: number);
    getWidth(): number;
    getHeight(): number;
}
