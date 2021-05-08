"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lavalandcommon_1 = require("../../../lavalandcommon");
const mapGenerator_1 = require("../../mapGenerator");
const gameinstance_1 = require("../../../lavalandcommon/gameinstance");
function requestGameSession() {
    const route = express_1.Router();
    route.get("/gamesession", (req, res) => __awaiter(this, void 0, void 0, function* () {
        // const message: GameSessionRequest = req.body;
        const mapGenerator = new mapGenerator_1.MapGenerator(200, 100);
        // instance.browserLogger.info("Game session request");
        const gameInstance = new gameinstance_1.GameInstance(mapGenerator.getMap());
        const gameId = gameInstance.id;
        console.log(gameInstance, gameId);
        const messageResponse = {
            gameId,
            gameMap: gameInstance.map,
            messageType: lavalandcommon_1.HostMessageReasons.GameSessionRequestResponse
        };
        res.send(messageResponse);
        gameInstance.gameSessionSent = true;
        gameinstance_1.activeGames.set(gameId, gameInstance);
        gameInstance.onclose = () => {
            gameinstance_1.activeGames.delete(gameId);
        };
    }));
    return route;
}
exports.requestGameSession = requestGameSession;
//# sourceMappingURL=requestGameSession.js.map