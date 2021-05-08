"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class GameInstance {
    constructor(map) {
        this.map = map;
        this.id = uuid_1.v4();
        this.onclose = () => { };
        this.gameSessionSent = false;
        this.container = {};
    }
}
exports.GameInstance = GameInstance;
exports.activeGames = new Map();
//# sourceMappingURL=gameinstance.js.map