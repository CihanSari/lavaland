export declare enum ClientMessageReasons {
    GameSessionRequest = 0,
    MapRequest = 1,
    MapFinished = 2,
    LeaderboardRequest = 3
}
export interface LavalandClientMessageBase {
    gameId?: string;
}
export interface GameSessionRequest extends LavalandClientMessageBase {
    gameId?: never;
}
export interface MapFinished extends LavalandClientMessageBase {
    gameId: string;
    duration: number;
    name: string;
    finishMethod: "Gate" | "Wisps" | "Debug";
}
export interface LeaderboardRequest extends LavalandClientMessageBase {
    gameId?: never;
    finishMethod: "Gate" | "Wisps" | "Debug";
}
export declare type LavalandClientMessage = GameSessionRequest | MapFinished | LeaderboardRequest;
export declare const apiPaths: {
    [ClientMessageReasons.GameSessionRequest]: string;
    [ClientMessageReasons.LeaderboardRequest]: string;
    [ClientMessageReasons.MapFinished]: string;
};
