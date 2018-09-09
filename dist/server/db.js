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
const path = require("path");
const sqlite3 = require("sqlite3");
class lavaDB {
    constructor(dbpath = path.join(__dirname, "../lavaland.sqlite3")) {
        this.db = new sqlite3.Database(dbpath);
        this.db.serialize(() => {
            this.db.run("CREATE TABLE IF NOT EXISTS games_table (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, ip TEXT, method TEXT, duration INTEGER)");
        });
    }
    addGame(name, duration, ip, method) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPromise = new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO games_table (name, duration, ip, method) VALUES ('${name}', '${duration}', '${ip}', '${method}')`, function (err) {
                    if (err == null) {
                        resolve(this.lastID);
                    }
                    else {
                        reject(err);
                    }
                });
            });
            return yield idPromise;
        });
    }
    getGames(method) {
        const res = [];
        const query = `SELECT * FROM games_table WHERE method='${method}' ORDER BY duration;`;
        return new Promise((resolve, reject) => {
            this.db.each(query, (err, row) => {
                if (err != null) {
                    console.error(err);
                    reject(err);
                }
                else {
                    const { name, duration } = row;
                    res.push({ name, duration });
                }
            }, () => {
                resolve(res);
            });
        });
    }
}
exports.lavaDB = lavaDB;
const db = new lavaDB();
function getLavalandDatabase() {
    return db;
}
exports.getLavalandDatabase = getLavalandDatabase;
//# sourceMappingURL=db.js.map