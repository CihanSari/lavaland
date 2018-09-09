import { Router } from "express";
import {
    HostMessageReasons,
    MapFinished,
    GameNotFound,
    MapFinishedResponse
} from "../../../lavalandcommon";
import { activeGames } from "../../../lavalandcommon/gameinstance";
import { getLavalandDatabase } from "../../db";

export function informMapFinishedRoute() {
    const route = Router();

    route.post("/mapfinished/*", async (req, res) => {
        const message: MapFinished = req.body;

        const gameId = message.gameId;
        const game = activeGames.get(gameId);
        if (game != null) {
            if (game.gameSessionSent && game.mapSent) {
                const ip = (
                    req.headers["x-forwarded-for"] ||
                    req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    (req.connection as any).socket.remoteAddress
                ).split(",")[0] as string;
                await getLavalandDatabase().addGame(
                    message.name,
                    message.duration,
                    ip,
                    message.finishMethod
                );
            }
            const leaderboard = await getLavalandDatabase().getGames(message.finishMethod);
            const messageResponse: MapFinishedResponse = {
                messageType: HostMessageReasons.MapFinishedResponse,
                finishMethod: message.finishMethod,
                leaderboard,
                rank: -1,
                gameId
            };
            res.send(messageResponse);
        } else {
            const messageResponse: GameNotFound = {
                messageType: HostMessageReasons.GameNotFound,
                gameId
            };
            res.send(messageResponse);
        }
    });
    return route;
}