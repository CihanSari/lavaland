import { LavalandRPCHandler } from "./rpcHandler";
import { GameSessionRequest } from "../lavalandcommon";
import { Request, Response } from "express";
import { Logger } from "winston";
export declare class LavalandRPCInstance {
    readonly id: string;
    readonly browserLogger: Logger;
    onclose: Function;
    handler: LavalandRPCHandler | null;
    constructor(req: Request, res: Response);
    initSession(request: GameSessionRequest, res: Response): Promise<void>;
}
