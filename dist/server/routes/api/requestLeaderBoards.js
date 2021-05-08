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
const db_1 = require("../../db");
function requestLeaderBoardsRoute() {
    const route = express_1.Router();
    route.get("/leaderboard", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const message = req.body;
        const leaderboard = yield db_1.getLavalandDatabase().getGames(message.finishMethod);
        const messageResponse = {
            messageType: lavalandcommon_1.HostMessageReasons.LeaderboardResponse,
            finishMethod: message.finishMethod,
            leaderboard,
            duration: 0 //remove later
        };
        res.status(200).send(messageResponse);
    }));
    return route;
}
exports.requestLeaderBoardsRoute = requestLeaderBoardsRoute;
//# sourceMappingURL=requestLeaderBoards.js.map