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
const lavalog_1 = require("./lavalog");
class LavalandRPCInstance {
    constructor(req, res) {
        this.id = uuid_1.v4();
        this.browserLogger = lavalog_1.makeBrowserLogger(this.id);
        this.onclose = () => { };
        this.handler = null;
        const message = JSON.parse(req.body);
        this.initSession(message, res);
    }
    initSession(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Response
                const message = {
                    messageType: lavalandcommon_1.HostMessageReasons.SessionId,
                    sessionId: this.id
                };
                res.send(message);
                lavalog_1.serverLogger.info(`Session started: ${this.id}`);
            }
            catch (ex) {
                lavalog_1.serverLogger.error(ex.message);
            }
        });
    }
}
exports.LavalandRPCInstance = LavalandRPCInstance;
//# sourceMappingURL=rpcInstance.js.map