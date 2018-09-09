import { Router } from "express";
import {
    HostMessageReasons,
    GameSessionRequestResponse
} from "../../../lavalandcommon";
import { MapGenerator } from "../../mapGenerator";
import { GameInstance, activeGames } from "../../../lavalandcommon/gameinstance";

export function requestGameSession() {
    const route = Router();

    route.get("/gamesession/*", async (req, res) => {
        // const message: GameSessionRequest = req.body;
        const mapGenerator = new MapGenerator(200, 100);
        // instance.browserLogger.info("Game session request");

        const gameInstance = new GameInstance(mapGenerator.getMap());
        const gameId = gameInstance.id;
        const messageResponse: GameSessionRequestResponse = {
            gameId,
            gameMap: gameInstance.map,
            messageType: HostMessageReasons.GameSessionRequestResponse
        };
        res.send(messageResponse);
        gameInstance.gameSessionSent = true;
        activeGames.set(gameId, gameInstance);
        gameInstance.onclose = () => {
            activeGames.delete(gameId);
        };
    });
    return route;
}