export declare class Neighbors<T> {
    readonly north: T;
    readonly northEast: T;
    readonly east: T;
    readonly southEast: T;
    readonly south: T;
    readonly southWest: T;
    readonly west: T;
    readonly northWest: T;
    constructor(north: T, northEast: T, east: T, southEast: T, south: T, southWest: T, west: T, northWest: T);
    compare(other: Neighbors<T>): boolean;
    to8Array(): T[];
    to4Array(): T[];
}
