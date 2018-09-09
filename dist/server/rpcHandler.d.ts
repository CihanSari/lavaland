import { Response } from "express";
import { ClientMessageReasons, LavalandClientMessage } from "../lavalandcommon";
export declare class LavalandRPCHandler {
    private activeGames;
    private db;
    handle(message: LavalandClientMessage, reason: ClientMessageReasons, res: Response, ip: string): Promise<void>;
    private gameSessionRequest;
    private mapRequest;
    private mapFinished;
    private leaderboardRequest;
}
