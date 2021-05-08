import { Router } from 'express';

import { GameSessionRequestResponse, HostMessageReasons } from '../../../lavalandcommon';
import { activeGames, GameInstance } from '../../../lavalandcommon/gameinstance';
import { MapGenerator } from '../../mapGenerator';

export function requestGameSession() {
    const route = Router();

    route.get("/gamesession", async (req, res) => {
        // const message: GameSessionRequest = req.body;
        const mapGenerator = new MapGenerator(200, 100);
        // instance.browserLogger.info("Game session request");

        const gameInstance = new GameInstance(mapGenerator.getMap());
        const gameId = gameInstance.id;
        console.log(gameInstance, gameId)
        const messageResponse: GameSessionRequestResponse = {
            gameId,
            gameMap: gameInstance.map,
            messageType: HostMessageReasons.GameSessionRequestResponse
        };
        res.status(200).send(messageResponse);
        gameInstance.gameSessionSent = true;
        activeGames.set(gameId, gameInstance);
        gameInstance.onclose = () => {
            activeGames.delete(gameId);
        };
    });
    return route;
}