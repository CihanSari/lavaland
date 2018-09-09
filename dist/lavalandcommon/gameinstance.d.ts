import { GameMap } from ".";
export declare class GameInstance {
    readonly map: GameMap;
    readonly id: string;
    onclose: Function;
    constructor(map: GameMap);
    gameSessionSent: boolean;
    mapSent: boolean;
    container: Record<string, any>;
}
export declare const activeGames: Map<string, GameInstance>;
