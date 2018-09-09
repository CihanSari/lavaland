import { GameMap } from "../lavalandcommon";
export declare class MapGenerator {
    mapWidth: number;
    mapHeight: number;
    private transitionProbabilities;
    private mapEdgesInLava;
    private totalNumberOfWisps;
    private totalNumberOfSpeedBoosts;
    private totalNumberOfSpeedBanes;
    private mapMatrix;
    private map;
    constructor(mapWidth: number, mapHeight: number);
    getMap(): GameMap;
    private getTileProbability;
    private isPassable;
    private getPassableTile;
    private getPassableTiles;
    private constructMap;
}
