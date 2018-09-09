import { GameMap } from "./worldcoordinates";
export declare enum HostMessageReasons {
    GameSessionRequestResponse = 0,
    MapFinishedResponse = 1,
    GameNotFound = 2,
    LeaderboardResponse = 3
}
export interface LavalandHostMessageBase {
    messageType: HostMessageReasons;
}
export interface GameSessionRequestResponse extends LavalandHostMessageBase {
    messageType: HostMessageReasons.GameSessionRequestResponse;
    gameId: string;
    gameMap: GameMap;
}
export interface GameNotFound extends LavalandHostMessageBase {
    messageType: HostMessageReasons.GameNotFound;
    gameId: string;
}
export interface MapFinishedResponse extends LavalandHostMessageBase {
    messageType: HostMessageReasons.MapFinishedResponse;
    gameId: string;
    leaderboard: {
        name: string;
        duration: number;
    }[];
    rank: number;
    finishMethod: "Gate" | "Wisps" | "Debug";
}
export interface LeaderboardResponse extends LavalandHostMessageBase {
    messageType: HostMessageReasons.LeaderboardResponse;
    leaderboard: {
        name: string;
        duration: number;
    }[];
    duration: number;
    finishMethod: "Gate" | "Wisps" | "Debug";
}
export declare type LavalandHostMessage = GameSessionRequestResponse | MapFinishedResponse | GameNotFound | LeaderboardResponse;
