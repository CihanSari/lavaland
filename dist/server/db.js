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
const fs_1 = require("fs");
const chokidar = require("chokidar");
const path_1 = require("path");
const lavalog_1 = require("./lavalog");
const { stat, readFile, writeFile, mkdir } = fs_1.promises;
function initOrReadFile(filePath, v) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield stat(filePath);
        }
        catch (err) {
            lavalog_1.serverLogger.info(`initOrReadFile()::Creating file to read: ${filePath}`);
            yield mkdir(path_1.dirname(filePath), { recursive: true });
            yield writeFile(filePath, JSON.stringify(v));
        }
        lavalog_1.serverLogger.silly(`initOrReadFile()::File model read: ${filePath}`);
        const fileContent = yield readFile(filePath);
        return JSON.parse(fileContent.toString());
    });
}
exports.initOrReadFile = initOrReadFile;
class FoolsWatcherSubscription {
    constructor(set, unsubscribe) {
        this.set = set;
        this.unsubscribe = unsubscribe;
    }
}
exports.FoolsWatcherSubscription = FoolsWatcherSubscription;
class FoolsFileWatcher {
    constructor(fallbackValue) {
        this.fallbackValue = fallbackValue;
        this.onchange = [];
    }
    init(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.filePath = filePath;
                try {
                    yield stat(this.filePath);
                }
                catch (err) {
                    lavalog_1.serverLogger.info(`FoolsFileWatcher::init()::Creating file to watch: ${this.filePath}`);
                    yield mkdir(path_1.dirname(this.filePath), { recursive: true });
                    yield writeFile(this.filePath, JSON.stringify(this.fallbackValue));
                }
                lavalog_1.serverLogger.silly(`FoolsFileWatcher::init()::File watch initializing: ${this.filePath}`);
                if (this.myWatcher != null) {
                    this.myWatcher.close();
                }
                this.myWatcher = chokidar.watch(this.filePath, {
                    persistent: true,
                    depth: 0,
                });
                this.myWatcher.on('change', () => this.onFileChange());
                this.onFileChange();
                return new FoolsWatcherSubscription((nextValue) => __awaiter(this, void 0, void 0, function* () {
                    yield writeFile(this.filePath, JSON.stringify(nextValue));
                }), () => __awaiter(this, void 0, void 0, function* () {
                    if (this.myWatcher != null) {
                        yield this.myWatcher.close();
                    }
                }));
            }
            catch (err) {
                lavalog_1.serverLogger.error(`FoolsFileWatcher::init()::Failed to watch file!: ${err}`);
            }
        });
    }
    onFileChange() {
        return __awaiter(this, void 0, void 0, function* () {
            lavalog_1.serverLogger.silly(`FoolsFileWatcher::onFileChange()::File changed: ${this.filePath}`);
            try {
                const fileContent = yield readFile(this.filePath);
                const data = JSON.parse(fileContent.toString());
                try {
                    lavalog_1.serverLogger.silly(`FoolsFileWatcher::onFileChange()::File changes sending: ${this.filePath}`);
                    this.onchange.forEach((f) => f(data));
                    lavalog_1.serverLogger.silly(`FoolsFileWatcher::onFileChange()::File changes sent: ${this.filePath}`);
                }
                catch (err) {
                    lavalog_1.serverLogger.error(`FoolsFileWatcher::onFileChange()::Failed to send data from ${this.filePath}: ${err}`);
                }
            }
            catch (err) {
                lavalog_1.serverLogger.error(`FoolsFileWatcher::onFileChange()::Failed to parse data from ${this.filePath}: ${err}`);
            }
        });
    }
}
function initAndWatchModel(filePathUnnormalized, callback, fallbackValue) {
    const filePathNormalized = path_1.normalize(filePathUnnormalized);
    const watcher = new FoolsFileWatcher(fallbackValue);
    watcher.onchange.push(callback);
    return watcher.init(filePathNormalized);
}
class GameInterface {
    constructor(name, duration, ip, method) {
        this.name = name;
        this.duration = duration;
        this.ip = ip;
        this.method = method;
    }
}
class LavaDBInterface {
    constructor(games) {
        this.games = games;
    }
}
class lavaDB {
    constructor(dbpath = path_1.join(__dirname, "../lavalanddata.json")) {
        this.dbpath = dbpath;
        initAndWatchModel(this.dbpath, (data) => {
            this.dbContent = data;
        }, { games: {} }).then(sub => {
            if (sub) {
                this.subscription = sub;
            }
        });
    }
    addGame(name, duration, ip, method, gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbContentNext = this.dbContent;
            dbContentNext.games[gameId] = ({ name, duration, ip, method });
            yield this.subscription.set(dbContentNext);
        });
    }
    getGames(method) {
        const dbContentRes = this.dbContent;
        const gameIds = Object.keys(dbContentRes.games);
        const gameIdsFiltered = gameIds.filter((idStr) => {
            return dbContentRes.games[idStr].method == method;
        });
        const gameIdsSorted = gameIdsFiltered.sort((idStrA, idStrB) => {
            const durA = dbContentRes.games[idStrA].duration;
            const durB = dbContentRes.games[idStrB].duration;
            return durA - durB;
        });
        return gameIdsSorted.map((idStr) => {
            const { name, duration } = dbContentRes.games[idStr];
            return { name, duration };
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