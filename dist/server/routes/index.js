"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("./api");
function getRouter() {
    const router = express_1.Router();
    router.use('/api', api_1.getApi());
    return router;
}
exports.getRouter = getRouter;
//# sourceMappingURL=index.js.map