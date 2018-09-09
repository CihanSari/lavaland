"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientMessageReasons;
(function (ClientMessageReasons) {
    ClientMessageReasons[ClientMessageReasons["GameSessionRequest"] = 0] = "GameSessionRequest";
    ClientMessageReasons[ClientMessageReasons["MapRequest"] = 1] = "MapRequest";
    ClientMessageReasons[ClientMessageReasons["MapFinished"] = 2] = "MapFinished";
    ClientMessageReasons[ClientMessageReasons["LeaderboardRequest"] = 3] = "LeaderboardRequest";
})(ClientMessageReasons = exports.ClientMessageReasons || (exports.ClientMessageReasons = {}));
exports.apiPaths = {
    [ClientMessageReasons.GameSessionRequest]: "api/gamesession",
    [ClientMessageReasons.LeaderboardRequest]: "api/leaderboard",
    [ClientMessageReasons.MapFinished]: "api/mapfinished"
};
//# sourceMappingURL=clientmessages.js.map