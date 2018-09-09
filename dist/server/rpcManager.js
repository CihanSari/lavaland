"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rpcHandler_1 = require("./rpcHandler");
class LavalandRPC {
    constructor() {
        this.handler = new rpcHandler_1.LavalandRPCHandler();
    }
    received(req, res) {
        const message = req.body;
        this.handler.handle(res, req, message);
    }
}
exports.LavalandRPC = LavalandRPC;
//# sourceMappingURL=rpcManager.js.map