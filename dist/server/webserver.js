"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const servelavaland_1 = require("./servelavaland");
const cors = require("cors");
/**
 *
 *
 * @export
 * @class Webserver
 */
class Webserver {
    /**
     *Creates an instance of Webserver.
     * @param {number} port
     * @param {string} servepath
     * @memberof Webserver
     */
    constructor(port, servepath) {
        this.port = port;
        this.servepath = servepath;
        this.app = express();
        //
        this.setup();
        this.app.listen(this.port);
    }
    /**
     *
     *
     * @private
     * @memberof Webserver
     */
    setup() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(servelavaland_1.middlewareServeLavaland(this.servepath));
    }
}
exports.Webserver = Webserver;
//# sourceMappingURL=webserver.js.map