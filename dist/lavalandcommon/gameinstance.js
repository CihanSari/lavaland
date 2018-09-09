"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class GameInstance {
    constructor(map) {
        this.map = map;
        this.id = uuid();
        this.onclose = () => { };
        this.gameSessionSent = false;
        this.mapSent = false;
        this.container = {};
    }
}
exports.GameInstance = GameInstance;
exports.activeGames = new Map();
//# sourceMappingURL=gameinstance.js.map