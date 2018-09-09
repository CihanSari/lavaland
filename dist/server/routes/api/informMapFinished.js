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
const gameinstance_1 = require("../../../lavalandcommon/gameinstance");
const db_1 = require("../../db");
function informMapFinishedRoute() {
    const route = express_1.Router();
    route.post("/mapfinished/*", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const message = req.body;
        const gameId = message.gameId;
        const game = gameinstance_1.activeGames.get(gameId);
        if (game != null) {
            if (game.gameSessionSent && game.mapSent) {
                const ip = (req.headers["x-forwarded-for"] ||
                    req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress).split(",")[0];
                yield db_1.getLavalandDatabase().addGame(message.name, message.duration, ip, message.finishMethod);
            }
            const leaderboard = yield db_1.getLavalandDatabase().getGames(message.finishMethod);
            const messageResponse = {
                messageType: lavalandcommon_1.HostMessageReasons.MapFinishedResponse,
                finishMethod: message.finishMethod,
                leaderboard,
                rank: -1,
                gameId
            };
            res.send(messageResponse);
        }
        else {
            const messageResponse = {
                messageType: lavalandcommon_1.HostMessageReasons.GameNotFound,
                gameId
            };
            res.send(messageResponse);
        }
    }));
    return route;
}
exports.informMapFinishedRoute = informMapFinishedRoute;
//# sourceMappingURL=informMapFinished.js.map