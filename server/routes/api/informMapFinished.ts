import { Router } from "express";
import {
    HostMessageReasons,
    MapFinished,
    GameNotFound,
    MapFinishedResponse
} from "../../../lavalandcommon";
import { activeGames } from "../../../lavalandcommon/gameinstance";
import { getLavalandDatabase } from "../../db";
import { serverLogger as logger } from "../../lavalog"
export function informMapFinishedRoute() {
    const route = Router();

    route.post("/mapfinished", async (req, res) => {
        const message: MapFinished = req.body;
        logger.info(`informMapFinishedRoute(): Body: ${JSON.stringify(req.body)}.`)
        const gameId = message.gameId;
        const game = activeGames.get(gameId);
        logger.info(`informMapFinishedRoute(): Game: ${gameId} where game is ${game == null ? "null" : "nonnull"}.`)
        if (game != null) {
            if (game.gameSessionSent) {
                logger.info(`informMapFinishedRoute(): Game session sent! ${gameId}`)
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
                    message.finishMethod,
                    gameId
                );
                logger.info(`informMapFinishedRoute(): Finished game added! ${gameId}`)
            }
            const leaderboard = await getLavalandDatabase().getGames(message.finishMethod);
            logger.info(`informMapFinishedRoute(): Leaderboard contains ${leaderboard.length} games of this type: ${message.finishMethod}`)

            const messageResponse: MapFinishedResponse = {
                messageType: HostMessageReasons.MapFinishedResponse,
                finishMethod: message.finishMethod,
                leaderboard,
                rank: -1,
                gameId
            };
            res.status(200).send(messageResponse);
        } else {
            const messageResponse: GameNotFound = {
                messageType: HostMessageReasons.GameNotFound,
                gameId
            };
            res.status(400).send(messageResponse);
        }
    });
    return route;
}