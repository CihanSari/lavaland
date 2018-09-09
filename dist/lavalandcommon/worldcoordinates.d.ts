import { TileType } from "./tiletypes";
export declare type WorldCoordinates = {
    x: number;
    y: number;
};
export interface GameMap {
    mapWidth: number;
    mapHeight: number;
    background: TileType[][];
    player: {
        coords: WorldCoordinates;
    };
    wisps: WorldCoordinates[];
    speedBanes: WorldCoordinates[];
    speedBoons: WorldCoordinates[];
}
