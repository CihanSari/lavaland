"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const lavalog_1 = require("./lavalog");
const webserver_1 = require("./webserver");
const arguments_1 = require("./arguments");
function main() {
    lavalog_1.serverLogger.info("Application started");
    const servePath = arguments_1.appArguments.servePath
        ? path.join(__dirname, "../..", arguments_1.appArguments.servePath)
        : path.join(__dirname, "../lavaland-gui");
    const port = Number(process.env.PORT) || arguments_1.appArguments.port || 8080;
    console.log(`Serving: ${servePath}`);
    const webserver = new webserver_1.Webserver(port, servePath);
    lavalog_1.serverLogger.info("Server started");
    return webserver;
}
exports.main = main;
//# sourceMappingURL=application.js.map