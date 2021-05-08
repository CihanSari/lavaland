(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../lavalandcommon/clientmessages.ts":
/*!*******************************************!*\
  !*** ../lavalandcommon/clientmessages.ts ***!
  \*******************************************/
/*! exports provided: ClientMessageReasons, apiPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMessageReasons", function() { return ClientMessageReasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiPaths", function() { return apiPaths; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ClientMessageReasons;
(function (ClientMessageReasons) {
    ClientMessageReasons[ClientMessageReasons["GameSessionRequest"] = 0] = "GameSessionRequest";
    ClientMessageReasons[ClientMessageReasons["MapRequest"] = 1] = "MapRequest";
    ClientMessageReasons[ClientMessageReasons["MapFinished"] = 2] = "MapFinished";
    ClientMessageReasons[ClientMessageReasons["LeaderboardRequest"] = 3] = "LeaderboardRequest";
})(ClientMessageReasons || (ClientMessageReasons = {}));
const apiPaths = {
    [ClientMessageReasons.GameSessionRequest]: "api/gamesession",
    [ClientMessageReasons.LeaderboardRequest]: "api/leaderboard",
    [ClientMessageReasons.MapFinished]: "api/mapfinished"
};


/***/ }),

/***/ "../lavalandcommon/hostmessages.ts":
/*!*****************************************!*\
  !*** ../lavalandcommon/hostmessages.ts ***!
  \*****************************************/
/*! exports provided: HostMessageReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostMessageReasons", function() { return HostMessageReasons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var HostMessageReasons;
(function (HostMessageReasons) {
    HostMessageReasons[HostMessageReasons["GameSessionRequestResponse"] = 0] = "GameSessionRequestResponse";
    HostMessageReasons[HostMessageReasons["MapFinishedResponse"] = 1] = "MapFinishedResponse";
    HostMessageReasons[HostMessageReasons["GameNotFound"] = 2] = "GameNotFound";
    HostMessageReasons[HostMessageReasons["LeaderboardResponse"] = 3] = "LeaderboardResponse";
})(HostMessageReasons || (HostMessageReasons = {}));


/***/ }),

/***/ "../lavalandcommon/index.ts":
/*!**********************************!*\
  !*** ../lavalandcommon/index.ts ***!
  \**********************************/
/*! exports provided: ClientMessageReasons, apiPaths, HostMessageReasons, Neighbors, TileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clientmessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientmessages */ "../lavalandcommon/clientmessages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientMessageReasons", function() { return _clientmessages__WEBPACK_IMPORTED_MODULE_1__["ClientMessageReasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apiPaths", function() { return _clientmessages__WEBPACK_IMPORTED_MODULE_1__["apiPaths"]; });

/* harmony import */ var _hostmessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hostmessages */ "../lavalandcommon/hostmessages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HostMessageReasons", function() { return _hostmessages__WEBPACK_IMPORTED_MODULE_2__["HostMessageReasons"]; });

/* harmony import */ var _neighbors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neighbors */ "../lavalandcommon/neighbors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Neighbors", function() { return _neighbors__WEBPACK_IMPORTED_MODULE_3__["Neighbors"]; });

/* harmony import */ var _tiletypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiletypes */ "../lavalandcommon/tiletypes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileType", function() { return _tiletypes__WEBPACK_IMPORTED_MODULE_4__["TileType"]; });








/***/ }),

/***/ "../lavalandcommon/neighbors.ts":
/*!**************************************!*\
  !*** ../lavalandcommon/neighbors.ts ***!
  \**************************************/
/*! exports provided: Neighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Neighbors", function() { return Neighbors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Neighbors {
    constructor(north, northEast, east, southEast, south, southWest, west, northWest) {
        this.north = north;
        this.northEast = northEast;
        this.east = east;
        this.southEast = southEast;
        this.south = south;
        this.southWest = southWest;
        this.west = west;
        this.northWest = northWest;
    }
    compare(other) {
        if (other.north != this.north) {
            return false;
        }
        else if (other.northEast != this.northEast) {
            return false;
        }
        else if (other.east != this.east) {
            return false;
        }
        else if (other.southEast != this.southEast) {
            return false;
        }
        else if (other.south != this.south) {
            return false;
        }
        else if (other.southWest != this.southWest) {
            return false;
        }
        else if (other.west != this.west) {
            return false;
        }
        else if (other.northWest != this.northWest) {
            return false;
        }
        return true;
    }
    to8Array() {
        return [
            this.north,
            this.northEast,
            this.east,
            this.southEast,
            this.south,
            this.southWest,
            this.west,
            this.northWest
        ];
    }
    to4Array() {
        return [this.north, this.east, this.south, this.west];
    }
}


/***/ }),

/***/ "../lavalandcommon/tiletypes.ts":
/*!**************************************!*\
  !*** ../lavalandcommon/tiletypes.ts ***!
  \**************************************/
/*! exports provided: TileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileType", function() { return TileType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TileType;
(function (TileType) {
    TileType[TileType["Water"] = 0] = "Water";
    TileType[TileType["Land"] = 1] = "Land";
    TileType[TileType["Lava"] = 2] = "Lava";
    TileType[TileType["Count"] = 3] = "Count";
})(TileType || (TileType = {}));


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lavaheader class=\"header lavatextFields\"></lavaheader>\r\n\r\n<lavastatistics class=\"statistics lavatextFields\" [remainingWisps]=\"totalNumberOfWisps-numberOfWispsCaught\" [currentSpeed]=\"player.currentSpeed\"\r\n  [currentRadius]=\"currentRadius()\" [numberOfSeconds]=\"secondsPassed\"></lavastatistics>\r\n<lavaCanvas class=\"fullScreen\" [settings]=\"mapSettings\" [player]=\"player\" [objects]=\"objects\" (mapDragRequest)=\"currentPlayerMovementRequest($event)\"></lavaCanvas>\r\n<lavanotification class=\"notification lavatextFields\" *ngIf=\"notificationText.length>0\" [notificationText]=\"notificationText\"></lavanotification>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Congratulations</h1>\r\n<div mat-dialog-content>\r\n  <h3>You have won in {{data.time}} seconds!</h3>\r\n  <h3>Enter name for leaderboard?</h3>\r\n  <mat-form-field>\r\n    <input #nameField matInput [(ngModel)]=\"data.name\" placeholder=\"Name\" pattern=\"[A-Za-z0-9]{3,}\" (input)=\"checkName()\" required>\r\n  </mat-form-field>\r\n  <p *ngIf=\"invalidName\">At least three English characters.</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-flat-button color=\"warn\" (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-flat-button [disabled]=\"invalidName\" cdkFocusInitial (click)=\"ok()\">Ok</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Lava Land</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Leaderboards</h1>\r\n<ol>\r\n  <li *ngFor=\"let entry of data\">\r\n    {{entry.name}} ({{entry.duration}} seconds)\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let text of notificationText\">{{text}}</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidenav\">\r\n  <table>\r\n    <tr>\r\n      <td class=\"title\">Remaining</td>\r\n      <td class=\"value\">{{remainingWisps}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Time</td>\r\n      <td class=\"value\">{{numberOfSeconds}}s</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Speed</td>\r\n      <td class=\"value\">{{currentSpeed}}%</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Power</td>\r\n      <td class=\"value\">{{currentRadius}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\nbody {\r\n  color: rgb(212, 0, 212);\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n  font-family: \"Caveat\", cursive;\r\n}\r\n.header {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 35%;\r\n  right: 35%;\r\n}\r\n.statistics {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.notification {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: 20%;\r\n  right: 20%;\r\n}\r\n.lavatextFields {\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.fullScreen {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  display: flex;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULE9BQU87QUFDVDtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG5ib2R5IHtcclxuICBjb2xvcjogcmdiKDIxMiwgMCwgMjEyKTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAzNSU7XHJcbiAgcmlnaHQ6IDM1JTtcclxufVxyXG5cclxuLnN0YXRpc3RpY3Mge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5sYXZhdGV4dEZpZWxkcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5mdWxsU2NyZWVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: LavaLandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function() { return LavaLandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lavacanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lavacanvas */ "./src/lavacanvas/index.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exit */ "./src/app/exit.ts");
/* harmony import */ var _isDebug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isDebug */ "./src/app/isDebug.ts");
/* harmony import */ var _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lava-game-finish/lava-game-finish.component */ "./src/app/lava-game-finish/lava-game-finish.component.ts");
/* harmony import */ var _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lava-leaderboard/lava-leaderboard.component */ "./src/app/lava-leaderboard/lava-leaderboard.component.ts");
/* harmony import */ var _lavastate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lavastate */ "./src/app/lavastate.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");
/* harmony import */ var _speedboost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./speedboost */ "./src/app/speedboost.ts");
/* harmony import */ var _speedbump__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./speedbump */ "./src/app/speedbump.ts");
/* harmony import */ var _turn_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./turn.service */ "./src/app/turn.service.ts");
/* harmony import */ var _turnevent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./turnevent */ "./src/app/turnevent.ts");
/* harmony import */ var _wisp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wisp */ "./src/app/wisp.ts");

















let LavaLandComponent = class LavaLandComponent {
    constructor(turnService, backendService, dialog) {
        this.turnService = turnService;
        this.backendService = backendService;
        this.dialog = dialog;
        // Map objects
        this.player = null;
        this.objects = [];
        this.mapWisps = [];
        this.mapSpeedBoosters = [];
        this.mapSpeedBumps = [];
        this.exitPortalsHidden = [];
        this.exitPortalsOpened = [];
        // This game's details
        this.gameState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Starting);
        this.startTime = new Date();
        this.secondsPassed = 0;
        // Player statistics
        this.totalNumberOfWisps = 20;
        this.numberOfWispsCaught = 0;
        this.playerInfluenceRadius = 1;
        // Notification text
        this.notificationText = [];
        this.player = new _player__WEBPACK_IMPORTED_MODULE_11__["PlayerObject"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/characters/ralph.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor, { x: 1, y: 2 }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //--------------------------------------------------------
            // ***                                                ***
            //
            //                  Connect to backend
            //
            // ***                                                ***
            //--------------------------------------------------------
            this.backendService.$map.subscribe(map => this.onMapReceived(map), exception => {
                if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                    console.warn("[LavaLandComponent] Map error!");
                    console.error(exception);
                }
            }, () => {
                if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                    console.warn("[LavaLandComponent] Map subscription completed!");
                }
            });
            this.backendService.$leaderboard.subscribe(leaderboard => this.showLeaderboard(leaderboard));
        });
    }
    onMapReceived(map) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //--------------------------------------------------------
            // ***                                                ***
            //
            //                  Populate map tiles
            //
            // ***                                                ***
            //--------------------------------------------------------
            this.mapSettings = {
                assets: [
                    new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/water.png"),
                    new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/land.png"),
                    new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/lava.png")
                ],
                map
            };
            //--------------------------------------------------------
            // ***                                                ***
            //
            //                  Populate map players and objects
            //
            // ***                                                ***
            //--------------------------------------------------------
            for (let i = 0; i < this.totalNumberOfWisps; i += 1) {
                this.mapWisps.push(new _wisp__WEBPACK_IMPORTED_MODULE_16__["Wisp"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/characters/wisp.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].RandomColor, { x: 1, y: 2 })));
            }
            for (let i = 0; i < 20; i += 1) {
                this.mapSpeedBoosters.push(new _speedboost__WEBPACK_IMPORTED_MODULE_12__["SpeedBoost"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/GoodMushroom.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor)));
            }
            for (let i = 0; i < 10; i += 1) {
                this.mapSpeedBumps.push(new _speedbump__WEBPACK_IMPORTED_MODULE_13__["SpeedBump"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/RedMushroom.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor)));
            }
            for (let i = 0; i < 10; i += 1) {
                const exitPortalObject = new _exit__WEBPACK_IMPORTED_MODULE_6__["ExitPortal"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/exitPortal.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor, { x: 1, y: 2 }));
                exitPortalObject.setHidden();
                this.exitPortalsHidden.push(exitPortalObject);
            }
            this.objects = [
                ...this.mapWisps,
                ...this.mapSpeedBoosters,
                ...this.mapSpeedBumps,
                ...this.exitPortalsHidden,
                ...this.exitPortalsOpened
            ];
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](20, () => {
                this.checkWispsCloseToRalph();
                this.checkSpeedBoostsCloseToRalph();
                this.checkSpeedBumpsCloseToRalph();
                this.checkExitPortalCloseToRalph();
            }));
            //--------------------------------------------------------
            // ***                                                ***
            //
            //  Update number of seconds passed
            //
            // ***                                                ***
            //--------------------------------------------------------
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1, event => {
                // Update the time if game hasn't finished
                if (this.gameState.getValue() !== _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps &&
                    this.gameState.getValue() !== _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps) {
                    this.secondsPassed = Math.round((new Date().getTime() - this.startTime.getTime()) / 1000);
                }
                else {
                    event.unsubscribe();
                }
            }));
            //--------------------------------------------------------
            // ***                                                ***
            //
            //  Set up notifications
            //
            // ***                                                ***
            //--------------------------------------------------------
            let previousState = this.gameState.getValue();
            this.gameState.subscribe((currentState) => {
                switch (currentState) {
                    case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Started:
                        this.addNotification([
                            "Touch forest wisps to gather their power. Use it to open a portal out of lava land.",
                            "Brown mushrooms give you swiftness while red mushrooms sap your speed."
                        ]);
                        break;
                    case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps:
                        if (previousState !== currentState) {
                            this.addNotification([
                                "You have opened the portal in an unknown location!",
                                "Find it to escape the lava land."
                            ]);
                        }
                        break;
                    case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps:
                        this.addNotification([
                            "Congratulations.",
                            "You have harnassed all the power of the lava land in " +
                                this.secondsPassed + " seconds."
                        ]);
                        this.gameOver("Wisps");
                        break;
                    case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps:
                        this.addNotification([
                            "Congratulations.",
                            "You have successfully escaped the lava land in " +
                                this.secondsPassed + " seconds."
                        ]);
                        this.gameOver("Gate");
                        break;
                }
                previousState = currentState;
            });
            //--------------------------------------------------------
            // ***                                                ***
            //
            //                  Move player with game engine
            //
            // ***                                                ***
            //--------------------------------------------------------
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1, (_subscriptionEvent) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.player.moveA();
            })));
            // this.playerSpeed.maxSpeed.subscribe((currentSpeed: number) => {
            //   if (currentSpeed > 0) {
            //     this.currentSpeed =
            //       Math.round(this.playerSpeed.maxSpeed.getValue() * 1000) / 10;
            //   }
            // });
            // Start the game!
            this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Started);
            if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                this.gameOver("Debug");
            }
        });
    }
    currentPlayerMovementRequest(event) {
        this.player.queueMoveTo(event);
    }
    startGame() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    addObjectToMap(TConstructor, url, assetColor = _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor, displaySize = { x: 1, y: 1 }) {
        return new TConstructor(new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"](url, assetColor, displaySize));
    }
    checkSpeedBoostsCloseToRalph() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let boost of this.mapSpeedBoosters) {
                if ((yield boost.checkIfCouldTouch(yield this.player.getCoordinate(), this.playerInfluenceRadius, this.playerInfluenceRadius)) === true) {
                    boost.performTouch();
                    this.player.playerSpeed.speedBoost();
                }
            }
        });
    }
    checkSpeedBumpsCloseToRalph() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let speedBump of this.mapSpeedBumps) {
                if ((yield speedBump.checkIfCouldTouch(yield this.player.getCoordinate(), 1, 1)) === true) {
                    // console.log(`Speed bump!`);
                    speedBump.performTouch();
                    this.player.playerSpeed.speedBump();
                }
            }
        });
    }
    checkExitPortalCloseToRalph() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.gameState.getValue() === _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps) {
                for (let exitPortal of this.exitPortalsOpened) {
                    if ((yield exitPortal.checkIfCouldTouch(yield this.player.getCoordinate(), 1, 1)) === true) {
                        this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps);
                    }
                }
            }
        });
    }
    checkWispsCloseToRalph() {
        for (let wisp of this.mapWisps) {
            this.checkWispCloseToRalph(wisp);
        }
    }
    checkWispCloseToRalph(wisp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield wisp.checkIfCouldCatch(this.player.getCoordinate(), this.playerInfluenceRadius, this.playerInfluenceRadius)) === true) {
                this.caughtWisp(wisp);
            }
        });
    }
    caughtWisp(wisp) {
        if (wisp.performCatch()) {
            if (this.gameState.getValue() === _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Started) {
                this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtWisp);
            }
            this.numberOfWispsCaught += 1;
            if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                if (this.numberOfWispsCaught > 1) {
                    this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps);
                }
                else if (true) {
                    this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps);
                    for (let i = 0; i < 5; i += 1) {
                        const exitPortal = this.exitPortalsHidden.pop();
                        exitPortal.setShown();
                        this.exitPortalsOpened.push(exitPortal);
                    }
                }
            }
            else if (this.numberOfWispsCaught === this.mapWisps.length) {
                this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps);
            }
            else if (this.numberOfWispsCaught > 0.6 * this.mapWisps.length) {
                this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps);
                const exitPortal = this.exitPortalsHidden.pop();
                exitPortal.setShown();
                this.exitPortalsOpened.push(exitPortal);
            }
        }
        if (this.playerInfluenceRadius < 5) {
            const newInfluenceRadius = Math.floor(100 * Math.min(this.playerInfluenceRadius * 1.1, 5)) / 100;
            const diff = newInfluenceRadius - this.playerInfluenceRadius;
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1000, sub => {
                sub.unsubscribe();
                if (this.playerInfluenceRadius >= 1) {
                    this.playerInfluenceRadius -= diff;
                }
            }));
            this.playerInfluenceRadius += diff;
        }
    }
    currentRadius() {
        return Math.floor(this.playerInfluenceRadius * 10) / 10;
    }
    addNotification(texts) {
        if (texts.length > 0) {
            this.notificationText.push(...texts);
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1000, event => {
                const i = this.notificationText.indexOf(texts[0]);
                this.notificationText.splice(i, texts.length);
                event.unsubscribe();
            }));
        }
    }
    gameOver(finishMethod) {
        let name;
        if (finishMethod !== "Debug") {
            this.player.playerSpeed.stop();
        }
        const dialogRef = this.dialog.open(_lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_8__["LavaGameFinishComponent"], { width: "600px", data: { name, time: this.secondsPassed } });
        dialogRef.afterClosed().subscribe(name => {
            this.backendService.gameOver(name, this.secondsPassed, finishMethod);
        });
    }
    showLeaderboard(leaderboard) {
        const dialogRef = this.dialog.open(_lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LavaLeaderboardComponent"], { width: "600px", data: leaderboard });
    }
};
LavaLandComponent.ctorParameters = () => [
    { type: _turn_service__WEBPACK_IMPORTED_MODULE_14__["TurnService"] },
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvasContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], LavaLandComponent.prototype, "screenCanvas", void 0);
LavaLandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], LavaLandComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lava_statistics_lava_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lava-statistics/lava-statistics.component */ "./src/app/lava-statistics/lava-statistics.component.ts");
/* harmony import */ var _lava_notification_lava_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lava-notification/lava-notification.component */ "./src/app/lava-notification/lava-notification.component.ts");
/* harmony import */ var _lava_header_lava_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lava-header/lava-header.component */ "./src/app/lava-header/lava-header.component.ts");
/* harmony import */ var _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lava-game-finish/lava-game-finish.component */ "./src/app/lava-game-finish/lava-game-finish.component.ts");
/* harmony import */ var _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lava-leaderboard/lava-leaderboard.component */ "./src/app/lava-leaderboard/lava-leaderboard.component.ts");
/* harmony import */ var _turn_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./turn.service */ "./src/app/turn.service.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _lavacanvas_lavacanvas_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lavacanvas/lavacanvas.module */ "./src/lavacanvas/lavacanvas.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");



// import { AppRoutingModule } from './app-routing.module';













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["LavaLandComponent"],
            _lava_statistics_lava_statistics_component__WEBPACK_IMPORTED_MODULE_4__["LavaStatisticsComponent"],
            _lava_notification_lava_notification_component__WEBPACK_IMPORTED_MODULE_5__["LavaNotificationComponent"],
            _lava_header_lava_header_component__WEBPACK_IMPORTED_MODULE_6__["LavaHeaderComponent"],
            _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__["LavaGameFinishComponent"],
            _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LavaLeaderboardComponent"]
        ],
        entryComponents: [_lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__["LavaGameFinishComponent"], _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LavaLeaderboardComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _lavacanvas_lavacanvas_module__WEBPACK_IMPORTED_MODULE_11__["LavaCanvasModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        ],
        providers: [_turn_service__WEBPACK_IMPORTED_MODULE_9__["TurnService"], _backend_service__WEBPACK_IMPORTED_MODULE_10__["BackendService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["LavaLandComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/backend.service.ts":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lavalandcommon */ "../lavalandcommon/index.ts");
/* harmony import */ var _isDebug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isDebug */ "./src/app/isDebug.ts");






const devModeApiPaths = {
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest]: "http://localhost:8080/api/gamesession/",
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].LeaderboardRequest]: "http://localhost:8080/api/leaderboard/",
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished]: "http://localhost:8080/api/mapfinished/",
};
const productionApiPaths = {
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest]: "/api/gamesession/",
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].LeaderboardRequest]: "/api/leaderboard/",
    [_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished]: "/api/mapfinished/",
};
const apiPaths = Object(_isDebug__WEBPACK_IMPORTED_MODULE_5__["isDebug"])() ? devModeApiPaths : productionApiPaths;
let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
        this.gameId = null;
        this.map = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.leaderboard = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$map = this.map.asObservable();
        this.$leaderboard = this.leaderboard.asObservable();
        this.initGameSession();
    }
    initGameSession() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(apiPaths[_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest]);
            const gameSessionRequestResponse = yield response.json();
            console.log('initGameSession', gameSessionRequestResponse);
            this.gameId = gameSessionRequestResponse.gameId;
            this.map.next(gameSessionRequestResponse.gameMap);
        });
    }
    gameOver(name, duration, finishMethod) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mapFinishedRequest = {
                duration,
                finishMethod,
                gameId: this.gameId,
                name
            };
            console.log(mapFinishedRequest);
            const mapFinishedResponse = yield this.http.post(apiPaths[_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished], mapFinishedRequest).toPromise();
            this.leaderboard.next(mapFinishedResponse.leaderboard);
        });
    }
};
BackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BackendService);



/***/ }),

/***/ "./src/app/exit.ts":
/*!*************************!*\
  !*** ./src/app/exit.ts ***!
  \*************************/
/*! exports provided: ExitPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitPortal", function() { return ExitPortal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _touchableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./touchableObject */ "./src/app/touchableObject.ts");


class ExitPortal extends _touchableObject__WEBPACK_IMPORTED_MODULE_1__["TouchableObject"] {
    constructor(asset) {
        super(asset);
        const oldInit = this.oninit;
        this.oninit = obj => {
            if (oldInit != null) {
                oldInit(obj);
            }
            obj.hidden = true;
        };
    }
    setShown() {
        this.onturn = obj => {
            obj.hidden = false;
            this.onturn = undefined;
        };
    }
    setHidden() {
        this.onturn = obj => {
            obj.hidden = true;
            this.onturn = undefined;
        };
    }
}


/***/ }),

/***/ "./src/app/isDebug.ts":
/*!****************************!*\
  !*** ./src/app/isDebug.ts ***!
  \****************************/
/*! exports provided: isDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDebug", function() { return isDebug; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function isDebug() {
    return false;
}


/***/ }),

/***/ "./src/app/lava-game-finish/lava-game-finish.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/lava-game-finish/lava-game-finish.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(75, 3, 75);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh3 {\r\n  font-size: 2vw;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\np {\r\n  color: darkred;\r\n  font-size: 1.5vw;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n  h3 {\r\n    font-size: 20px;\r\n  }\r\n  p {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1nYW1lLWZpbmlzaC9sYXZhLWdhbWUtZmluaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhdmEtZ2FtZS1maW5pc2gvbGF2YS1nYW1lLWZpbmlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhdmVhdCk7XHJcbjpob3N0IHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHJnYig3NSwgMywgNzUpO1xyXG4gIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogZGFya3JlZDtcclxuICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/lava-game-finish/lava-game-finish.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lava-game-finish/lava-game-finish.component.ts ***!
  \****************************************************************/
/*! exports provided: LavaGameFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaGameFinishComponent", function() { return LavaGameFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let LavaGameFinishComponent = class LavaGameFinishComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.invalidName = true;
        dialogRef.disableClose = true;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    checkName() {
        const inputElement = this.nameField.nativeElement;
        if (inputElement.value.length > 0) {
            this.invalidName = !this.nameField
                .nativeElement.checkValidity();
        }
        else {
            this.invalidName = true;
        }
    }
    ok() {
        this.dialogRef.close(this.data.name);
    }
};
LavaGameFinishComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nameField", { static: true })
], LavaGameFinishComponent.prototype, "nameField", void 0);
LavaGameFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lava-game-finish",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lava-game-finish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lava-game-finish.component.css */ "./src/app/lava-game-finish/lava-game-finish.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LavaGameFinishComponent);



/***/ }),

/***/ "./src/app/lava-header/lava-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lava-header/lava-header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 3.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\nh1,\r\n.h1 {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1oZWFkZXIvbGF2YS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF2YS1oZWFkZXIvbGF2YS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuaDEsXHJcbi5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/lava-header/lava-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lava-header/lava-header.component.ts ***!
  \******************************************************/
/*! exports provided: LavaHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaHeaderComponent", function() { return LavaHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LavaHeaderComponent = class LavaHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
LavaHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lavaheader",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lava-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lava-header.component.css */ "./src/app/lava-header/lava-header.component.css")).default]
    })
], LavaHeaderComponent);



/***/ }),

/***/ "./src/app/lava-leaderboard/lava-leaderboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/lava-leaderboard/lava-leaderboard.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 3.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\nol {\r\n  overflow: auto;\r\n  max-height: 600px;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  margin: 0;\r\n  font-family: \"Caveat\", cursive;\r\n  font-size: 3.5vw;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 35px;\r\n  }\r\n  h1 {\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1sZWFkZXJib2FyZC9sYXZhLWxlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXZhLWxlYWRlcmJvYXJkL2xhdmEtbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbm9sIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/lava-leaderboard/lava-leaderboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lava-leaderboard/lava-leaderboard.component.ts ***!
  \****************************************************************/
/*! exports provided: LavaLeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaLeaderboardComponent", function() { return LavaLeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let LavaLeaderboardComponent = class LavaLeaderboardComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
LavaLeaderboardComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
LavaLeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lava-leaderboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lava-leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lava-leaderboard.component.css */ "./src/app/lava-leaderboard/lava-leaderboard.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LavaLeaderboardComponent);



/***/ }),

/***/ "./src/app/lava-notification/lava-notification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/lava-notification/lava-notification.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-color: (0, 0, 0);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  margin: 0;\r\n  padding: 0 1em;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\np {\r\n  text-align: center;\r\n  margin: 0.5em;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1ub3RpZmljYXRpb24vbGF2YS1ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF2YS1ub3RpZmljYXRpb24vbGF2YS1ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/lava-notification/lava-notification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/lava-notification/lava-notification.component.ts ***!
  \******************************************************************/
/*! exports provided: LavaNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaNotificationComponent", function() { return LavaNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LavaNotificationComponent = class LavaNotificationComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaNotificationComponent.prototype, "notificationText", void 0);
LavaNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lavanotification",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lava-notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lava-notification.component.css */ "./src/app/lava-notification/lava-notification.component.css")).default]
    })
], LavaNotificationComponent);



/***/ }),

/***/ "./src/app/lava-statistics/lava-statistics.component.css":
/*!***************************************************************!*\
  !*** ./src/app/lava-statistics/lava-statistics.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-color: (0, 0, 0);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  margin: 0;\r\n  padding: 0.5em 0.5em;\r\n  color: rgb(223, 183, 223);\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh3,\r\n.h3 {\r\n  text-align: center;\r\n}\r\n.title {\r\n  padding-right: 1em;\r\n}\r\n.value {\r\n  min-width: 2em;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1zdGF0aXN0aWNzL2xhdmEtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDtBQUNyRDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhdmEtc3RhdGlzdGljcy9sYXZhLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuaDMsXHJcbi5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBtaW4td2lkdGg6IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/lava-statistics/lava-statistics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/lava-statistics/lava-statistics.component.ts ***!
  \**************************************************************/
/*! exports provided: LavaStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaStatisticsComponent", function() { return LavaStatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LavaStatisticsComponent = class LavaStatisticsComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaStatisticsComponent.prototype, "remainingWisps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaStatisticsComponent.prototype, "currentSpeed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaStatisticsComponent.prototype, "currentRadius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaStatisticsComponent.prototype, "numberOfSeconds", void 0);
LavaStatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lavastatistics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lava-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lava-statistics.component.css */ "./src/app/lava-statistics/lava-statistics.component.css")).default]
    })
], LavaStatisticsComponent);



/***/ }),

/***/ "./src/app/lavastate.ts":
/*!******************************!*\
  !*** ./src/app/lavastate.ts ***!
  \******************************/
/*! exports provided: LavaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaState", function() { return LavaState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LavaState;
(function (LavaState) {
    LavaState[LavaState["Starting"] = 0] = "Starting";
    LavaState[LavaState["Started"] = 1] = "Started";
    LavaState[LavaState["CaughtWisp"] = 2] = "CaughtWisp";
    LavaState[LavaState["CaughtMinRequiredWisps"] = 3] = "CaughtMinRequiredWisps";
    LavaState[LavaState["GotOutWithMinRequiredWisps"] = 4] = "GotOutWithMinRequiredWisps";
    LavaState[LavaState["CaughtAllWisps"] = 5] = "CaughtAllWisps";
})(LavaState || (LavaState = {}));


/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: PlayerObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerObject", function() { return PlayerObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lavacanvas */ "./src/lavacanvas/index.ts");
/* harmony import */ var _playerSpeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerSpeed */ "./src/app/playerSpeed.ts");



class PlayerObject extends _lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"] {
    constructor(asset) {
        super(asset);
        this.isInCooldown = false;
        this.nextTurnActions = [];
        this.movementQueued = { world: { x: 0, y: 0 }, canvas: { x: 0, y: 0 } };
        this.playerSpeed = new _playerSpeed__WEBPACK_IMPORTED_MODULE_2__["PlayerSpeed"](2.5, 0.8);
        this.currentSpeed = 0;
        this.lastMovementTime = new Date().getTime();
        this.oninit = obj => {
            obj.setRandomCoordinate();
            this.stolenObject = obj;
        };
        this.onturn = obj => this.turn(obj);
    }
    turn(obj) {
        for (let turnAction of this.nextTurnActions) {
            turnAction(obj);
        }
        this.nextTurnActions = [];
    }
    move(movement) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.stolenObject.move(movement, false);
        });
    }
    moveA() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currentTime = new Date().getTime();
            const dT = currentTime - this.lastMovementTime;
            this.lastMovementTime = currentTime;
            if (Math.abs(this.movementQueued.world.x) < 1e-10 &&
                Math.abs(this.movementQueued.world.y) < 1e-10) {
                this.movementQueued.canvas = { x: 0, y: 0 };
                this.movementQueued.world = { x: 0, y: 0 };
                this.asset.showOriginal();
                this.currentSpeed = 0;
                return;
            }
            let movementDirection = {
                x: this.movementQueued.world.x,
                y: this.movementQueued.world.y
            };
            const speedBoosterConstant = 0.01;
            movementDirection.x *= speedBoosterConstant;
            movementDirection.y *= speedBoosterConstant;
            const maxSpeedNormalizerConstant = 0.003 * dT;
            const maxSpeedNormalizer = maxSpeedNormalizerConstant * this.playerSpeed.maxSpeed.getValue();
            const totalSpeed = Math.sqrt(movementDirection.x * movementDirection.x +
                movementDirection.y * movementDirection.y);
            const maxSpeedFactor = maxSpeedNormalizer / totalSpeed;
            if (totalSpeed > maxSpeedNormalizer) {
                this.movementQueued.world.x -= this.movementQueued.world.x * speedBoosterConstant * maxSpeedFactor;
                this.movementQueued.world.y -= this.movementQueued.world.y * speedBoosterConstant * maxSpeedFactor;
                movementDirection.x *= maxSpeedFactor;
                movementDirection.y *= maxSpeedFactor;
            }
            else {
                this.movementQueued.world.x *= 1 - speedBoosterConstant;
                this.movementQueued.world.y *= 1 - speedBoosterConstant;
            }
            const movementSpeed = yield this.move(movementDirection);
            this.currentSpeed = Math.round((movementSpeed / maxSpeedNormalizerConstant) * 100);
        });
    }
    queueMoveTo(direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.movementQueued = direction;
        });
    }
}


/***/ }),

/***/ "./src/app/playerSpeed.ts":
/*!********************************!*\
  !*** ./src/app/playerSpeed.ts ***!
  \********************************/
/*! exports provided: PlayerSpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSpeed", function() { return PlayerSpeed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class PlayerSpeed {
    constructor(playerMaxSpeed = 2.5, playerMinSpeed = 0.75) {
        this.playerMaxSpeed = playerMaxSpeed;
        this.playerMinSpeed = playerMinSpeed;
        this.maxSpeed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
    }
    changeSpeedTo(newSpeed) {
        newSpeed = Math.min(newSpeed, this.playerMaxSpeed);
        newSpeed = Math.max(newSpeed, this.playerMinSpeed);
        this.maxSpeed.next(newSpeed);
    }
    speedBoost() {
        const currentSpeed = this.maxSpeed.getValue();
        if (currentSpeed < 1) {
            this.changeSpeedTo(1);
        }
        else if (currentSpeed < this.playerMaxSpeed) {
            this.changeSpeedTo(currentSpeed + 0.05);
        }
    }
    speedBump() {
        const currentSpeed = this.maxSpeed.getValue();
        if (currentSpeed < 1) {
            this.changeSpeedTo(currentSpeed - 0.05);
        }
        else {
            this.changeSpeedTo(currentSpeed - 0.1);
        }
    }
    stop() {
        this.maxSpeed.next(0);
    }
}


/***/ }),

/***/ "./src/app/speedboost.ts":
/*!*******************************!*\
  !*** ./src/app/speedboost.ts ***!
  \*******************************/
/*! exports provided: SpeedBoost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedBoost", function() { return SpeedBoost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _turnevent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnevent */ "./src/app/turnevent.ts");
/* harmony import */ var _touchableObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./touchableObject */ "./src/app/touchableObject.ts");



class SpeedBoost extends _touchableObject__WEBPACK_IMPORTED_MODULE_2__["TouchableObject"] {
    setTouch() {
        this.isInCooldown = true;
        this.asset.showDarkBlur(true);
        this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_1__["TurnEventSubscription"](1000, (sub) => {
            this.asset.showOriginal();
            this.isInCooldown = false;
            sub.unsubscribe();
        }));
    }
}


/***/ }),

/***/ "./src/app/speedbump.ts":
/*!******************************!*\
  !*** ./src/app/speedbump.ts ***!
  \******************************/
/*! exports provided: SpeedBump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedBump", function() { return SpeedBump; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _touchableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./touchableObject */ "./src/app/touchableObject.ts");


class SpeedBump extends _touchableObject__WEBPACK_IMPORTED_MODULE_1__["TouchableObject"] {
}


/***/ }),

/***/ "./src/app/touchableObject.ts":
/*!************************************!*\
  !*** ./src/app/touchableObject.ts ***!
  \************************************/
/*! exports provided: TouchableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchableObject", function() { return TouchableObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lavacanvas */ "./src/lavacanvas/index.ts");


class TouchableObject extends _lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"] {
    constructor(asset) {
        super(asset);
        this.isInCooldown = false;
        this.oninit = obj => { obj.setRandomCoordinate(); };
    }
    checkIfCouldTouch(targetCoordinate, xRadius = 3, yRadius = 3) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currentCoordinate = yield this.getCoordinate();
            if (this.isInCooldown) {
                return false;
            }
            else if (currentCoordinate.x - targetCoordinate.x > xRadius) {
                return false;
            }
            else if (currentCoordinate.x - targetCoordinate.x < -xRadius) {
                return false;
            }
            else if (currentCoordinate.y - targetCoordinate.y > yRadius) {
                return false;
            }
            else if (currentCoordinate.y - targetCoordinate.y < -yRadius) {
                return false;
            }
            return true;
        });
    }
    performTouch() { this.setTouch(); }
    setTouch() { }
}


/***/ }),

/***/ "./src/app/turn.service.ts":
/*!*********************************!*\
  !*** ./src/app/turn.service.ts ***!
  \*********************************/
/*! exports provided: TurnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnService", function() { return TurnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TurnService = class TurnService {
    constructor() {
        // priority to turn events
        this.turnEvents = new Map();
        // priority array
        this.allPriorities = [];
        this.heartbeatInterval = window.setInterval(() => {
            this.processEvent();
        }, 10);
    }
    register(turnEvent) {
        const turnEventObjectForThisService = new TurnEventForService(turnEvent);
        const prio = turnEvent.priority;
        if (this.turnEvents.has(prio)) {
            const prioEvents = this.turnEvents.get(prio);
            const idx = prioEvents.push(turnEventObjectForThisService) - 1;
            turnEventObjectForThisService.unsubscribe = () => {
                prioEvents[idx] = null;
            };
        }
        else {
            const prioEvents = [turnEventObjectForThisService];
            turnEventObjectForThisService.unsubscribe = () => {
                prioEvents[0] = null;
            };
            this.turnEvents.set(prio, prioEvents);
            this.allPriorities.push(prio);
            this.allPriorities.sort();
        }
    }
    ngOnDestroy() {
        window.clearInterval(this.heartbeatInterval);
    }
    processEvent() {
        this.allPriorities.forEach(priority => {
            const eventsForThisPriority = this.turnEvents.get(priority);
            if (Array.isArray(eventsForThisPriority)) {
                eventsForThisPriority.forEach(eventForThisPriority => {
                    if (eventForThisPriority != null) {
                        eventForThisPriority.process();
                    }
                });
            }
        });
    }
};
TurnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TurnService);

class TurnEventForService {
    constructor(ev) {
        this.ev = ev;
        this.currentStrength = 0;
        ev.unsubscribe = () => {
            this.unsubscribe();
        };
    }
    process() {
        this.currentStrength += 1 / this.ev.numberOfTurns;
        if (this.currentStrength >= 1) {
            this.currentStrength -= 1;
            this.ev.fncProcessOccurence(this.ev);
        }
    }
}


/***/ }),

/***/ "./src/app/turnevent.ts":
/*!******************************!*\
  !*** ./src/app/turnevent.ts ***!
  \******************************/
/*! exports provided: TurnEventSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnEventSubscription", function() { return TurnEventSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// readonly numberOfTurns : number; // executed every this many of turns
// readonly priority: number; // higher valued events will be considered first
// readonly fncProcessOccurence : Function; // Function that is called when cumulative strength is 1

class TurnEventSubscription {
    constructor(numberOfTurns, fncProcessOccurence, priority = 9) {
        this.numberOfTurns = numberOfTurns;
        this.fncProcessOccurence = fncProcessOccurence;
        this.priority = priority;
    }
}


/***/ }),

/***/ "./src/app/wisp.ts":
/*!*************************!*\
  !*** ./src/app/wisp.ts ***!
  \*************************/
/*! exports provided: Wisp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wisp", function() { return Wisp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lavacanvas */ "./src/lavacanvas/index.ts");
/* harmony import */ var _turnevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turnevent */ "./src/app/turnevent.ts");



class Wisp extends _lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"] {
    constructor(asset) {
        super(asset);
        this.moveAround = true;
        this.isGhost = false;
        this.caughtOnce = false;
        this.setHideLaterCounter = 0;
        this.oninit = obj => {
            obj.setRandomCoordinate();
        };
        this.onturn = obj => this.turn(obj);
    }
    startMoveAround() {
        this.moveAround = true;
    }
    stopMoveAround() {
        this.moveAround = false;
    }
    turn(obj) {
        if (this.setHideLaterCounter > 0) {
            this.setHideLaterCounter -= 1;
            if (this.setHideLaterCounter === 0) {
                obj.hidden = true;
            }
        }
        if (!this.moveAround) {
            return;
        }
        else {
            // Select a random direction
            const moveThisTime = Math.random() > 0.4;
            if (moveThisTime === true) {
                const rollX = Math.random() - 0.5;
                const rollY = Math.random() - 0.5;
                obj.move({ x: rollX, y: rollY });
            }
            else {
                // don't move
                obj.move();
            }
        }
    }
    checkIfCouldCatch(targetCoordinate, xRadius = 3, yRadius = 3) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const wispCoordinate = yield this.getCoordinate();
            if (this.isGhost) {
                return false;
            }
            else if (wispCoordinate.x - targetCoordinate.x > xRadius) {
                return false;
            }
            else if (wispCoordinate.x - targetCoordinate.x < -xRadius) {
                return false;
            }
            else if (wispCoordinate.y - targetCoordinate.y > yRadius) {
                return false;
            }
            else if (wispCoordinate.y - targetCoordinate.y < -yRadius) {
                return false;
            }
            return true;
        });
    }
    // Returns true if this is the first time this wisp is caught
    performCatch() {
        this.setCaught();
        this.setHideLaterCounter = 5;
        if (this.caughtOnce) {
            return false;
        }
        else {
            this.caughtOnce = true;
            return true;
        }
    }
    performCatchWithComeback() {
        this.setCaught();
        this.setComeback();
        if (this.caughtOnce) {
            return false;
        }
        else {
            this.caughtOnce = true;
            return true;
        }
    }
    setCaught() {
        this.isGhost = true;
        this.stopMoveAround();
        this.asset.showDarkBlur(true);
    }
    setComeback() {
        this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_2__["TurnEventSubscription"](1000, (sub) => {
            this.asset.showOriginal();
            this.startMoveAround();
            this.isGhost = false;
            sub.unsubscribe();
        }));
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/lavacanvas/asset.ts":
/*!*********************************!*\
  !*** ./src/lavacanvas/asset.ts ***!
  \*********************************/
/*! exports provided: AssetColor, Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetColor", function() { return AssetColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var canvas_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvas-filters */ "./node_modules/canvas-filters/imagefilters.js");
/* harmony import */ var canvas_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvas_filters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _world2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world2canvas */ "./src/lavacanvas/world2canvas.ts");



var AssetColor;
(function (AssetColor) {
    AssetColor[AssetColor["RandomColor"] = 0] = "RandomColor";
    AssetColor[AssetColor["OriginalColor"] = 1] = "OriginalColor";
})(AssetColor || (AssetColor = {}));
class Asset {
    constructor(imageUrl, assetColor = AssetColor.OriginalColor, displaySizeInTiles = { x: 1.1, y: 1.1 }) {
        this.imageUrl = imageUrl;
        this.assetColor = assetColor;
        this.displaySizeInTiles = displaySizeInTiles;
        this.displaySize = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_2__["world2Canvas"])(this.displaySizeInTiles);
        this.assetCanvas = document.createElement("canvas");
        this.imageSrc = this.init();
        this.drawOriginal();
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const im = yield loadImageAsync(this.imageUrl);
            const imageCanvas = document.createElement("canvas");
            const scaleRatio = Math.max(this.displaySize.x / im.width, this.displaySize.y / im.height);
            imageCanvas.width = this.displaySize.x * 2;
            imageCanvas.height = this.displaySize.y * 2;
            const ctx = imageCanvas.getContext("2d");
            ctx.scale(scaleRatio, scaleRatio);
            ctx.drawImage(im, 0, 0);
            if (this.assetColor === AssetColor.RandomColor) {
                // create an ImageData for the area you want to apply the filter.
                const imageData = ctx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
                // pass it to a filter and get the modified copy
                const filtered = canvas_filters__WEBPACK_IMPORTED_MODULE_1__["HSLAdjustment"](imageData, Math.random() * 360, 0, 0);
                // const blurred = ImageFilters.BoxBlur(filtered);
                // put it back into a context to view the results
                ctx.putImageData(filtered, 0, 0);
            }
            return imageCanvas;
        });
    }
    drawOriginal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { ctx, im } = yield this.getClearContext();
            ctx.drawImage(im, 0, 0);
            if (this.canvasFilter) {
                this.canvasFilter();
            }
        });
    }
    drawOriginalHelper(ctx, im) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            ctx.drawImage(im, 0, 0);
            // if (this.canvasFilter) {
            //   this.canvasFilter();
            // }
        });
    }
    image() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Wait for first image drawing to finish
            yield this.imageSrc;
            // Then return filled canvas
            return this.assetCanvas;
        });
    }
    offset() {
        return { x: this.displaySize.x / 2, y: this.displaySize.y / 2 };
    }
    showMotionBlur(x, y, strength = 2) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { ctx, im } = yield this.getClearContext();
            if (y !== 0) {
                ctx.globalAlpha = 1 / strength / 5;
                for (let yStep = 0; yStep < strength; yStep += 1) {
                    ctx.drawImage(im, 0, yStep);
                    if (this.canvasFilter) {
                        this.canvasFilter();
                    }
                }
                ctx.globalAlpha = 1;
            }
            else if (x !== 0) {
                ctx.globalAlpha = 1 / strength / 5;
                for (let xStep = 0; xStep < strength; xStep += 1) {
                    ctx.drawImage(im, xStep, 0);
                    if (this.canvasFilter) {
                        this.canvasFilter();
                    }
                }
                ctx.globalAlpha = 1;
            }
        });
    }
    showDarkBlur(isDarkAndBlurry = true) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.canvasFilter = () => {
                const ctx = this.assetCanvas.getContext("2d");
                // create an ImageData for the area you want to apply the filter.
                const imageData = ctx.getImageData(0, 0, this.assetCanvas.width, this.assetCanvas.height);
                // pass it to a filter and get the modified copy
                const filtered = canvas_filters__WEBPACK_IMPORTED_MODULE_1__["GrayScale"](imageData);
                // const blurred = ImageFilters.BoxBlur(filtered);
                // put it back into a context to view the results
                ctx.putImageData(filtered, 0, 0);
                return this.assetCanvas;
            };
            this.drawOriginal();
        });
    }
    showOriginal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.canvasFilter = null;
            this.drawOriginal();
        });
    }
    getClearContext() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const im = yield this.imageSrc;
            this.assetCanvas.width = im.width;
            this.assetCanvas.height = im.height;
            const ctx = this.assetCanvas.getContext("2d");
            ctx.clearRect(0, 0, this.assetCanvas.width, this.assetCanvas.height);
            return { ctx, im };
        });
    }
    filterCanvas() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
}
function loadImageAsync(src) {
    return new Promise((resolve, reject) => {
        const tileGraphic = new Image();
        tileGraphic.src = src;
        tileGraphic.onload = () => {
            resolve(tileGraphic);
        };
        tileGraphic.onerror = err => {
            reject(err);
        };
    });
}


/***/ }),

/***/ "./src/lavacanvas/canvaseventhandler.ts":
/*!**********************************************!*\
  !*** ./src/lavacanvas/canvaseventhandler.ts ***!
  \**********************************************/
/*! exports provided: CanvasEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasEventHandler", function() { return CanvasEventHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _world2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world2canvas */ "./src/lavacanvas/world2canvas.ts");



class CanvasEventHandler {
    constructor(canvas, lavacanvasInternal) {
        this.canvas = canvas;
        this.lavacanvasInternal = lavacanvasInternal;
        this.mapSizeInTiles = this.lavacanvasInternal.getMapSize().max;
        this.mapSizeInPixels = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_2__["world2Canvas"])(this.mapSizeInTiles);
        this.interactionDirection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            x: 0,
            y: 0
        });
        this.isTouch = false;
        let following = false;
        this.canvas.onmousedown = event => {
            if (!following) {
                this.fncStartFollowingMouse(event);
                following = true;
            }
            else {
                this.fncStopFollowingMouse(event);
                following = false;
            }
        };
        this.canvas.ontouchstart = event => {
            if (this.isTouch === false) {
                this.isTouch = true;
                this.canvas.onmousedown = () => { };
                this.canvas.onmousemove = () => { };
            }
            this.handleInteractLocation(event.touches[0].clientX, event.touches[0].clientY);
            this.canvas.ontouchmove = event => this.handleInteractLocation(event.touches[0].clientX, event.touches[0].clientY);
        };
        this.canvas.ontouchend = event => {
            this.canvas.ontouchmove = () => { };
        };
    }
    fncStartFollowingMouse(event) {
        // console.log("Started mouse");
        this.fncMouseMove(event);
        this.canvas.onmousemove = event => this.fncMouseMove(event);
    }
    fncStopFollowingMouse(event) {
        // console.log("Stopped mouse");
        this.canvas.onmousemove = () => { };
        this.interactionDirection.next({ x: 0, y: 0 });
    }
    fncMouseMove(event) {
        this.handleInteractLocation(event.clientX, event.clientY);
    }
    canvas2World(eventX, eventY) {
        // // canvas width: 1536
        // // height: 770
        // // map width: 200 => 6200
        // // map height: 100 => 3100
        // console.log(
        //   this.player.getCoordinates().x, // 50
        //   event.clientX, // 1020
        //   this.player.getCoordinates().y, // 85
        //   event.clientY // 510
        // );
        const rect = this.canvas.getBoundingClientRect();
        let x = eventX - rect.left;
        let y = eventY - rect.top;
        const translateCoords = this.lavacanvasInternal.getTranslateCoords();
        x -= translateCoords.x;
        y -= translateCoords.y;
        const eventWorld = {
            x: (x / this.mapSizeInPixels.x) * this.mapSizeInTiles.x,
            y: (y / this.mapSizeInPixels.y) * this.mapSizeInTiles.y
        };
        // console.log(
        //   this.player.getCoordinates().x,
        //   eventWorld.x,
        //   this.player.getCoordinates().y,
        //   eventWorld.y
        // );
        return eventWorld;
    }
    handleInteractLocation(eventX, eventY) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pos = this.canvas2World(eventX, eventY);
            const centerPos = yield this.lavacanvasInternal.centralObject.getCoordinate();
            const xDif = pos.x - centerPos.x;
            const yDif = pos.y - centerPos.y;
            // console.log(xDif, yDif);
            this.interactionDirection.next({ x: xDif, y: yDif });
        });
    }
}


/***/ }),

/***/ "./src/lavacanvas/index.ts":
/*!*********************************!*\
  !*** ./src/lavacanvas/index.ts ***!
  \*********************************/
/*! exports provided: WorldObject, Asset, AssetColor, LavaLandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lavacanvas.component */ "./src/lavacanvas/lavacanvas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorldObject", function() { return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["WorldObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["Asset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetColor", function() { return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["AssetColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function() { return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["LavaLandComponent"]; });





/***/ }),

/***/ "./src/lavacanvas/lavacanvas.component.ts":
/*!************************************************!*\
  !*** ./src/lavacanvas/lavacanvas.component.ts ***!
  \************************************************/
/*! exports provided: WorldObject, Asset, AssetColor, LavaLandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function() { return LavaLandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lavacanvasinternal.service */ "./src/lavacanvas/lavacanvasinternal.service.ts");
/* harmony import */ var _canvaseventhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvaseventhandler */ "./src/lavacanvas/canvaseventhandler.ts");
/* harmony import */ var _world2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world2canvas */ "./src/lavacanvas/world2canvas.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_turnevent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/turnevent */ "./src/app/turnevent.ts");
/* harmony import */ var _app_turn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/turn.service */ "./src/app/turn.service.ts");
/* harmony import */ var _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./worldobjectinternal */ "./src/lavacanvas/worldobjectinternal.ts");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/isDebug */ "./src/app/isDebug.ts");
/* harmony import */ var _worldobject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./worldobject */ "./src/lavacanvas/worldobject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorldObject", function() { return _worldobject__WEBPACK_IMPORTED_MODULE_11__["WorldObject"]; });

/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset */ "./src/lavacanvas/asset.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return _asset__WEBPACK_IMPORTED_MODULE_12__["Asset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetColor", function() { return _asset__WEBPACK_IMPORTED_MODULE_12__["AssetColor"]; });














let LavaLandComponent = class LavaLandComponent {
    constructor(lavacanvasInternal, turnService) {
        this.lavacanvasInternal = lavacanvasInternal;
        this.turnService = turnService;
        this.canvasObjects = [];
        this.mapDragSubject = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        this.mapDragRequest = this.mapDragSubject.asObservable();
    }
    ngOnInit() {
        this.canvas = this.screenCanvas.nativeElement;
        this.onResize();
    }
    ngOnChanges() {
        if (this.settings != null) {
            this.lavacanvasInternal.setSettings(this.settings).catch(ex => {
                if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__["isDebug"])()) {
                    console.warn("Error while constructing the map!");
                    console.error(ex);
                }
            });
            this.turnService.register(new _app_turnevent__WEBPACK_IMPORTED_MODULE_6__["TurnEventSubscription"](1, () => {
                const ctx = this.canvas.getContext("2d");
                ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                this.lavacanvasInternal.drawMap(ctx, this.canvasObjects);
            }, 1));
            this.canvasEventHandler = new _canvaseventhandler__WEBPACK_IMPORTED_MODULE_3__["CanvasEventHandler"](this.canvas, this.lavacanvasInternal);
            this.canvasEventHandler.interactionDirection
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(world => {
                const canvas = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["world2Canvas"])(world);
                return {
                    world,
                    canvas
                };
            }))
                .subscribe(next => this.mapDragSubject.next(next), error => this.mapDragSubject.error(error), () => this.mapDragSubject.complete);
            this.lavacanvasInternal.centralObject = new _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__["WorldObjectInternal"](this.turnService, this.lavacanvasInternal, this.player);
            for (let object of this.objects) {
                this.canvasObjects.push(new _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__["WorldObjectInternal"](this.turnService, this.lavacanvasInternal, object));
            }
        }
    }
    onResize() {
        if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__["isDebug"])()) {
            console.log(`LavaLandComponent::onResize(): Canvas resized. [${this.canvas.clientWidth}, ${this.canvas.clientHeight}]`);
        }
        const isPortrait = this.canvas.clientHeight > this.canvas.clientWidth;
        if (isPortrait) {
            // this.canvas.height = 560;
            // this.canvas.width = 320;
            Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["setAssetSize"])(30, 30);
        }
        else {
            // this.canvas.width = 1680;
            // this.canvas.height = 720;
            Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["setAssetSize"])(60, 60);
        }
        this.canvas.height = this.canvas.clientHeight;
        this.canvas.width = this.canvas.clientWidth;
        // const nMaxUnitsToDisplay = 30;
        // if (this.canvas.width > this.canvas.height) {
        //   // landscape mode
        //   const unitSize = this.canvas.width / nMaxUnitsToDisplay;
        //   setAssetSize(unitSize, unitSize);
        // } else {
        //   // portrait mode
        //   const unitSize = this.canvas.height / nMaxUnitsToDisplay;
        //   setAssetSize(unitSize, unitSize);
        // }
        this.lavacanvasInternal.clearDraw();
    }
};
LavaLandComponent.ctorParameters = () => [
    { type: _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_2__["LavaCanvasInternal"] },
    { type: _app_turn_service__WEBPACK_IMPORTED_MODULE_7__["TurnService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvasContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], LavaLandComponent.prototype, "screenCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaLandComponent.prototype, "settings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaLandComponent.prototype, "objects", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LavaLandComponent.prototype, "player", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LavaLandComponent.prototype, "mapDragRequest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"])
], LavaLandComponent.prototype, "onResize", null);
LavaLandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "lavaCanvas",
        template: "<canvas #canvasContainer></canvas>",
        styles: ["\n      canvas {\n        flex-grow: 1;\n      }\n    "]
    })
], LavaLandComponent);



/***/ }),

/***/ "./src/lavacanvas/lavacanvas.module.ts":
/*!*********************************************!*\
  !*** ./src/lavacanvas/lavacanvas.module.ts ***!
  \*********************************************/
/*! exports provided: LavaCanvasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaCanvasModule", function() { return LavaCanvasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lavacanvasinternal.service */ "./src/lavacanvas/lavacanvasinternal.service.ts");
/* harmony import */ var _lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lavacanvas.component */ "./src/lavacanvas/lavacanvas.component.ts");





let LavaCanvasModule = class LavaCanvasModule {
};
LavaCanvasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [_lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_3__["LavaCanvasInternal"]],
        exports: [_lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__["LavaLandComponent"]],
        declarations: [_lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__["LavaLandComponent"]]
    })
], LavaCanvasModule);



/***/ }),

/***/ "./src/lavacanvas/lavacanvasinternal.service.ts":
/*!******************************************************!*\
  !*** ./src/lavacanvas/lavacanvasinternal.service.ts ***!
  \******************************************************/
/*! exports provided: LavaCanvasInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaCanvasInternal", function() { return LavaCanvasInternal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lavalandcommon */ "../lavalandcommon/index.ts");
/* harmony import */ var _world2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world2canvas */ "./src/lavacanvas/world2canvas.ts");
/* harmony import */ var src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/isDebug */ "./src/app/isDebug.ts");





let LavaCanvasInternal = class LavaCanvasInternal {
    constructor() {
        this.screenContextCenterRect = {
            min: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            initialized: false
        };
        this.translateCoords = { x: 0, y: 0 };
    }
    getMapSize() {
        return {
            min: { x: 0, y: 0 },
            max: { x: this.settings.map.mapWidth, y: this.settings.map.mapHeight }
        };
    }
    genWorldCoords(filter) {
        const min = this.mapCoordsMin;
        const max = this.mapCoordsMax;
        const x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
        const y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
        const coords = { x, y };
        if (filter(coords)) {
            return coords;
        }
        else {
            return this.genWorldCoords(filter);
        }
    }
    genWorldPassableCoords() {
        const min = this.mapCoordsMin;
        const max = this.mapCoordsMax;
        const x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
        const y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
        const coords = { x, y };
        if (this.isPassable(coords)) {
            return coords;
        }
        else {
            return this.genWorldPassableCoords();
        }
    }
    constructMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                console.log("LavaCanvasInternal::constructMap(): Constructing map...");
            }
            this.mapCoordsMax = {
                x: this.settings.map.mapWidth,
                y: this.settings.map.mapHeight
            };
            this.mapCoordsMin = { x: 0, y: 0 };
            // Create background renderer
            this.backgroundCanvas = document.createElement("canvas");
            const canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(this.mapCoordsMax);
            this.backgroundCanvas.width = canvasCoords.x;
            this.backgroundCanvas.height = canvasCoords.y;
            this.rendererCanvas = document.createElement("canvas");
            this.rendererCanvas.width = canvasCoords.x;
            this.rendererCanvas.height = canvasCoords.y;
            // Draw assets
            // console.debug('[IsometricMapService] Drawing background...')
            const ctx = this.backgroundCanvas.getContext("2d");
            for (let x = this.mapCoordsMin.x; x < this.mapCoordsMax.x; x += 1) {
                for (let y = this.mapCoordsMin.y; y < this.mapCoordsMax.y; y += 1) {
                    const tileIdx = this.settings.map.background[y][x];
                    if (tileIdx != null && this.settings.assets.length > tileIdx) {
                        const asset = this.settings.assets[tileIdx];
                        const canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])({ x, y });
                        ctx.drawImage(yield asset.image(), canvasCoords.x, canvasCoords.y);
                    }
                }
            }
            if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                console.log("LavaCanvasInternal::constructMap(): Constructed!");
            }
        });
    }
    setSettings(settings) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                console.log(`LavaCanvasInternal::setSettings(): Settings received!`);
            }
            this.settings = settings;
            return this.constructMap();
        });
    }
    isPassable(coordinates) {
        const type = this.settings.map
            .background[Math.round(coordinates.y)][Math.round(coordinates.x)];
        if (type === _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__["TileType"].Water || type === _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__["TileType"].Lava) {
            return false;
        }
        else {
            return type != null;
        }
    }
    getCurrentMap() { return this.settings.map; }
    drawMap(ctx, extraObjects = []) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.settings == null) {
                if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                    console.error("LavaCanvasInternal::drawMap(): Background not ready to draw!");
                }
                return;
            }
            const renderingCtx = this.rendererCanvas.getContext("2d");
            renderingCtx.drawImage(this.backgroundCanvas, 0, 0);
            for (let extraObject of extraObjects) {
                if (extraObject.hidden === false) {
                    const extraCoordinate = yield extraObject.getCoordinate();
                    const canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(extraCoordinate);
                    const asset = extraObject.asset;
                    const assetOffset = asset.offset();
                    renderingCtx.drawImage(yield asset.image(), canvasCoords.x - assetOffset.x, canvasCoords.y - assetOffset.y);
                }
            }
            const centerCoordinate = yield this.centralObject.getCoordinate();
            this.centerCanvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(centerCoordinate);
            const assetCentralObject = this.centralObject.asset;
            const assetOffsetCentralObject = assetCentralObject.offset();
            renderingCtx.drawImage(yield assetCentralObject.image(), this.centerCanvasCoords.x - assetOffsetCentralObject.x, this.centerCanvasCoords.y - assetOffsetCentralObject.y);
            let drawAgain = false;
            if (!this.screenContextCenterRect.initialized) {
                this.screenContextCenterRect = {
                    min: { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 },
                    max: { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 },
                    initialized: true
                };
            }
            let translateCoordsThisTime = { x: 0, y: 0 };
            if (this.centerCanvasCoords.x < this.screenContextCenterRect.min.x) {
                translateCoordsThisTime.x =
                    this.screenContextCenterRect.min.x - this.centerCanvasCoords.x;
            }
            else if (this.centerCanvasCoords.x > this.screenContextCenterRect.max.x) {
                translateCoordsThisTime.x =
                    this.screenContextCenterRect.max.x - this.centerCanvasCoords.x;
            }
            if (this.centerCanvasCoords.y < this.screenContextCenterRect.min.y) {
                translateCoordsThisTime.y =
                    this.screenContextCenterRect.min.y - this.centerCanvasCoords.y;
            }
            else if (this.centerCanvasCoords.y > this.screenContextCenterRect.max.y) {
                translateCoordsThisTime.y =
                    this.screenContextCenterRect.max.y - this.centerCanvasCoords.y;
            }
            this.screenContextCenterRect.max.x -= translateCoordsThisTime.x;
            this.screenContextCenterRect.min.x -= translateCoordsThisTime.x;
            this.screenContextCenterRect.max.y -= translateCoordsThisTime.y;
            this.screenContextCenterRect.min.y -= translateCoordsThisTime.y;
            ctx.translate(translateCoordsThisTime.x, translateCoordsThisTime.y);
            this.translateCoords.x += translateCoordsThisTime.x;
            this.translateCoords.y += translateCoordsThisTime.y;
            const imageOffset = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])({ x: 0.5, y: 0.5 });
            ctx.drawImage(this.rendererCanvas, -imageOffset.x, -imageOffset.y);
        });
    }
    clearDraw() { this.screenContextCenterRect.initialized = undefined; }
    getTranslateCoords() { return this.translateCoords; }
};
LavaCanvasInternal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LavaCanvasInternal);



/***/ }),

/***/ "./src/lavacanvas/world2canvas.ts":
/*!****************************************!*\
  !*** ./src/lavacanvas/world2canvas.ts ***!
  \****************************************/
/*! exports provided: setAssetSize, world2Canvas, canvas2World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssetSize", function() { return setAssetSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "world2Canvas", function() { return world2Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas2World", function() { return canvas2World; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let unitAssetWidth = 31;
let unitAssetHeight = 31;
function setAssetSize(width, height) {
    unitAssetWidth = width;
    unitAssetHeight = height;
}
function world2Canvas(coords) {
    return {
        x: coords.x * unitAssetWidth,
        y: coords.y * unitAssetHeight
    };
}
function canvas2World(coords) {
    return {
        x: coords.x / unitAssetWidth,
        y: coords.y / unitAssetHeight
    };
}


/***/ }),

/***/ "./src/lavacanvas/worldobject.ts":
/*!***************************************!*\
  !*** ./src/lavacanvas/worldobject.ts ***!
  \***************************************/
/*! exports provided: WorldObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldObject", function() { return WorldObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WorldObject {
    constructor(asset) {
        this.asset = asset;
    }
    getCoordinate() { return this.coordinate; }
}


/***/ }),

/***/ "./src/lavacanvas/worldobjectinternal.ts":
/*!***********************************************!*\
  !*** ./src/lavacanvas/worldobjectinternal.ts ***!
  \***********************************************/
/*! exports provided: WorldObjectInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldObjectInternal", function() { return WorldObjectInternal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_turnevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/turnevent */ "./src/app/turnevent.ts");
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/take */ "./node_modules/rxjs/internal/operators/take.js");
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__);




class WorldObjectInternal {
    constructor(turnService, lavacanvasInternal, object) {
        this.turnService = turnService;
        this.lavacanvasInternal = lavacanvasInternal;
        this.object = object;
        this.unitCoordinates = { x: 1, y: 1 };
        this.coordinate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.coordinate$ = this.coordinate.asObservable();
        this.hidden = false;
        this.asset = this.object.asset;
        this.object.coordinate$ = this.coordinate$;
        this.coordinate$.subscribe(c => (object.coordinate = c));
        this.object.turnService = this.turnService;
        if (this.object.oninit) {
            this.object.oninit(this);
        }
        this.turnService.register(new _app_turnevent__WEBPACK_IMPORTED_MODULE_2__["TurnEventSubscription"](20, () => {
            this.turn();
        }, 8));
    }
    setCoordinate(coor) {
        if (this.lavacanvasInternal.isPassable(coor)) {
            this.coordinate.next(coor);
        }
    }
    setRandomCoordinate() {
        const coord = this.lavacanvasInternal.genWorldPassableCoords();
        this.setCoordinate(coord);
        return coord;
    }
    getCoordinate() {
        return this.coordinate$.pipe(Object(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).toPromise();
    }
    remove() { }
    turn() {
        if (this.object.onturn) {
            this.object.onturn(this);
        }
    }
    move(movement = { x: 0, y: 0 }, showBlur = true) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const coordinateCanvas = yield this.getCoordinate();
            const coordinate = coordinateCanvas;
            const fncShowBlur = (x, y) => {
                if (showBlur === true) {
                    this.object.asset.showMotionBlur(Math.abs(Math.round(movement.x * 2)), Math.abs(Math.round(movement.y * 2)));
                }
            };
            const fncMoveExact = () => {
                const nextCoordinates = {
                    x: coordinate.x + movement.x,
                    y: coordinate.y + movement.y
                };
                if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
                    this.setCoordinate(nextCoordinates);
                    fncShowBlur(movement.x, movement.y);
                    return Math.sqrt(movement.x * movement.x + movement.y * movement.y);
                }
                else {
                    return 0;
                }
            };
            const fncMoveY = () => {
                const nextCoordinates = {
                    x: coordinate.x,
                    y: coordinate.y + movement.y
                };
                if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
                    this.setCoordinate(nextCoordinates);
                    fncShowBlur(0, movement.y);
                    return Math.abs(movement.y);
                }
                else {
                    return 0;
                }
            };
            const fncMoveX = () => {
                const nextCoordinates = {
                    x: coordinate.x + movement.x,
                    y: coordinate.y
                };
                if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
                    this.setCoordinate(nextCoordinates);
                    fncShowBlur(movement.x, 0);
                    return Math.abs(movement.x);
                }
                else {
                    return 0;
                }
            };
            const exactMovement = fncMoveExact();
            if (exactMovement === 0) {
                const yMovement = fncMoveY();
                if (yMovement === 0) {
                    const xMovement = fncMoveX();
                    if (xMovement === 0) {
                        fncShowBlur(0, 0);
                        return 0;
                    }
                    else {
                        return xMovement;
                    }
                }
                else {
                    return yMovement;
                }
            }
            else {
                return exactMovement;
            }
        });
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\lavaland\lavaland-gui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map