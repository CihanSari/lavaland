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
const uuid_1 = require("uuid");
const lavalandcommon_1 = require("../lavalandcommon");
const mapGenerator_1 = require("./mapGenerator");
const db_1 = require("./db");
class LavalandRPCHandler {
    constructor() {
        this.activeGames = new Map();
        this.db = new db_1.lavaDB();
    }
    handle(message, reason, res, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            if (reason === lavalandcommon_1.ClientMessageReasons.GameSessionRequest) {
                yield this.gameSessionRequest(res);
            }
            else if (reason === lavalandcommon_1.ClientMessageReasons.MapRequest) {
                yield this.mapRequest({ message: message, res });
            }
            else if (reason === lavalandcommon_1.ClientMessageReasons.MapFinished) {
                yield this.mapFinished({ message: message, ip, res });
            }
            else {
                yield this.leaderboardRequest({ message: message, res });
            }
        });
    }
    gameSessionRequest(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mapGenerator = new mapGenerator_1.MapGenerator(200, 100);
            // instance.browserLogger.info("Game session request");
            const gameInstance = new GameInstance(mapGenerator.getMap());
            const gameId = gameInstance.id;
            const messageResponse = {
                gameId,
                messageType: lavalandcommon_1.HostMessageReasons.GameSessionRequestResponse
            };
            this.activeGames.set(gameId, gameInstance);
            gameInstance.onclose = () => {
                this.activeGames.delete(gameId);
            };
            res.send(messageResponse);
            gameInstance.gameSessionSent = true;
        });
    }
    mapRequest({ message, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameId = message.gameId;
            const game = this.activeGames.get(gameId);
            if (game != null) {
                const gameMap = game.map;
                const messageResponse = {
                    messageType: lavalandcommon_1.HostMessageReasons.MapRequestResponse,
                    gameMap
                };
                res.send(messageResponse);
                game.mapSent = true;
            }
            else {
                const messageResponse = {
                    messageType: lavalandcommon_1.HostMessageReasons.GameNotFound,
                    gameId
                };
                res.send(messageResponse);
            }
        });
    }
    mapFinished({ message, ip, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameId = message.gameId;
            const game = this.activeGames.get(gameId);
            if (game != null) {
                if (game.gameSessionSent && game.mapSent) {
                    yield this.db.addGame(message.name, message.duration, ip, message.finishMethod);
                }
                const leaderboard = yield this.db.getGames(message.finishMethod);
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
        });
    }
    leaderboardRequest({ message, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const leaderboard = yield this.db.getGames(message.finishMethod);
            const messageResponse = {
                messageType: lavalandcommon_1.HostMessageReasons.LeaderboardResponse,
                finishMethod: message.finishMethod,
                leaderboard,
                duration: 0 //remove later
            };
            res.send(messageResponse);
        });
    }
}
exports.LavalandRPCHandler = LavalandRPCHandler;
class GameInstance {
    constructor(map) {
        this.map = map;
        this.id = uuid_1.v4();
        this.onclose = () => { };
        this.gameSessionSent = false;
        this.mapSent = false;
        this.container = {};
    }
}
//# sourceMappingURL=rpcHandler.js.map