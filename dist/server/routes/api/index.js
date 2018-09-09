"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requestLeaderBoards_1 = require("./requestLeaderBoards");
const requestGameSession_1 = require("./requestGameSession");
const informMapFinished_1 = require("./informMapFinished");
function getApi() {
    const router = express_1.Router();
    router.use(requestGameSession_1.requestGameSession());
    router.use(informMapFinished_1.informMapFinishedRoute());
    router.use(requestLeaderBoards_1.requestLeaderBoardsRoute());
    return router;
}
exports.getApi = getApi;
//# sourceMappingURL=index.js.map