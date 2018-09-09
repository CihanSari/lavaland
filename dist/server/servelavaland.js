"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
function middlewareServeLavaland(pathToServe) {
    const res = express.Router();
    res.use((req, _, next) => {
        console.info(`Express: [${req.url}]`);
        next();
    });
    res.use(express.static(pathToServe));
    res.use(routes_1.getRouter());
    res.use((req, res) => {
        console.error(`Express: [${req.url}] not found!`);
        res.sendStatus(404).send("Not found!");
    });
    return res;
}
exports.middlewareServeLavaland = middlewareServeLavaland;
//# sourceMappingURL=servelavaland.js.map