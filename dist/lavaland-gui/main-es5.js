function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../lavalandcommon/clientmessages.ts":
  /*!*******************************************!*\
    !*** ../lavalandcommon/clientmessages.ts ***!
    \*******************************************/

  /*! exports provided: ClientMessageReasons, apiPaths */

  /***/
  function lavalandcommonClientmessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _apiPaths;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientMessageReasons", function () {
      return ClientMessageReasons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiPaths", function () {
      return apiPaths;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ClientMessageReasons;

    (function (ClientMessageReasons) {
      ClientMessageReasons[ClientMessageReasons["GameSessionRequest"] = 0] = "GameSessionRequest";
      ClientMessageReasons[ClientMessageReasons["MapRequest"] = 1] = "MapRequest";
      ClientMessageReasons[ClientMessageReasons["MapFinished"] = 2] = "MapFinished";
      ClientMessageReasons[ClientMessageReasons["LeaderboardRequest"] = 3] = "LeaderboardRequest";
    })(ClientMessageReasons || (ClientMessageReasons = {}));

    var apiPaths = (_apiPaths = {}, _defineProperty(_apiPaths, ClientMessageReasons.GameSessionRequest, "api/gamesession"), _defineProperty(_apiPaths, ClientMessageReasons.LeaderboardRequest, "api/leaderboard"), _defineProperty(_apiPaths, ClientMessageReasons.MapFinished, "api/mapfinished"), _apiPaths);
    /***/
  },

  /***/
  "../lavalandcommon/hostmessages.ts":
  /*!*****************************************!*\
    !*** ../lavalandcommon/hostmessages.ts ***!
    \*****************************************/

  /*! exports provided: HostMessageReasons */

  /***/
  function lavalandcommonHostmessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostMessageReasons", function () {
      return HostMessageReasons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var HostMessageReasons;

    (function (HostMessageReasons) {
      HostMessageReasons[HostMessageReasons["GameSessionRequestResponse"] = 0] = "GameSessionRequestResponse";
      HostMessageReasons[HostMessageReasons["MapFinishedResponse"] = 1] = "MapFinishedResponse";
      HostMessageReasons[HostMessageReasons["GameNotFound"] = 2] = "GameNotFound";
      HostMessageReasons[HostMessageReasons["LeaderboardResponse"] = 3] = "LeaderboardResponse";
    })(HostMessageReasons || (HostMessageReasons = {}));
    /***/

  },

  /***/
  "../lavalandcommon/index.ts":
  /*!**********************************!*\
    !*** ../lavalandcommon/index.ts ***!
    \**********************************/

  /*! exports provided: ClientMessageReasons, apiPaths, HostMessageReasons, Neighbors, TileType */

  /***/
  function lavalandcommonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _clientmessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./clientmessages */
    "../lavalandcommon/clientmessages.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClientMessageReasons", function () {
      return _clientmessages__WEBPACK_IMPORTED_MODULE_1__["ClientMessageReasons"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "apiPaths", function () {
      return _clientmessages__WEBPACK_IMPORTED_MODULE_1__["apiPaths"];
    });
    /* harmony import */


    var _hostmessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hostmessages */
    "../lavalandcommon/hostmessages.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HostMessageReasons", function () {
      return _hostmessages__WEBPACK_IMPORTED_MODULE_2__["HostMessageReasons"];
    });
    /* harmony import */


    var _neighbors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./neighbors */
    "../lavalandcommon/neighbors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Neighbors", function () {
      return _neighbors__WEBPACK_IMPORTED_MODULE_3__["Neighbors"];
    });
    /* harmony import */


    var _tiletypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tiletypes */
    "../lavalandcommon/tiletypes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TileType", function () {
      return _tiletypes__WEBPACK_IMPORTED_MODULE_4__["TileType"];
    });
    /***/

  },

  /***/
  "../lavalandcommon/neighbors.ts":
  /*!**************************************!*\
    !*** ../lavalandcommon/neighbors.ts ***!
    \**************************************/

  /*! exports provided: Neighbors */

  /***/
  function lavalandcommonNeighborsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Neighbors", function () {
      return Neighbors;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Neighbors = /*#__PURE__*/function () {
      function Neighbors(north, northEast, east, southEast, south, southWest, west, northWest) {
        _classCallCheck(this, Neighbors);

        this.north = north;
        this.northEast = northEast;
        this.east = east;
        this.southEast = southEast;
        this.south = south;
        this.southWest = southWest;
        this.west = west;
        this.northWest = northWest;
      }

      _createClass(Neighbors, [{
        key: "compare",
        value: function compare(other) {
          if (other.north != this.north) {
            return false;
          } else if (other.northEast != this.northEast) {
            return false;
          } else if (other.east != this.east) {
            return false;
          } else if (other.southEast != this.southEast) {
            return false;
          } else if (other.south != this.south) {
            return false;
          } else if (other.southWest != this.southWest) {
            return false;
          } else if (other.west != this.west) {
            return false;
          } else if (other.northWest != this.northWest) {
            return false;
          }

          return true;
        }
      }, {
        key: "to8Array",
        value: function to8Array() {
          return [this.north, this.northEast, this.east, this.southEast, this.south, this.southWest, this.west, this.northWest];
        }
      }, {
        key: "to4Array",
        value: function to4Array() {
          return [this.north, this.east, this.south, this.west];
        }
      }]);

      return Neighbors;
    }();
    /***/

  },

  /***/
  "../lavalandcommon/tiletypes.ts":
  /*!**************************************!*\
    !*** ../lavalandcommon/tiletypes.ts ***!
    \**************************************/

  /*! exports provided: TileType */

  /***/
  function lavalandcommonTiletypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileType", function () {
      return TileType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TileType;

    (function (TileType) {
      TileType[TileType["Water"] = 0] = "Water";
      TileType[TileType["Land"] = 1] = "Land";
      TileType[TileType["Lava"] = 2] = "Lava";
      TileType[TileType["Count"] = 3] = "Count";
    })(TileType || (TileType = {}));
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lavaheader class=\"header lavatextFields\"></lavaheader>\r\n\r\n<lavastatistics class=\"statistics lavatextFields\" [remainingWisps]=\"totalNumberOfWisps-numberOfWispsCaught\" [currentSpeed]=\"player.currentSpeed\"\r\n  [currentRadius]=\"currentRadius()\" [numberOfSeconds]=\"secondsPassed\"></lavastatistics>\r\n<lavaCanvas class=\"fullScreen\" [settings]=\"mapSettings\" [player]=\"player\" [objects]=\"objects\" (mapDragRequest)=\"currentPlayerMovementRequest($event)\"></lavaCanvas>\r\n<lavanotification class=\"notification lavatextFields\" *ngIf=\"notificationText.length>0\" [notificationText]=\"notificationText\"></lavanotification>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLavaGameFinishLavaGameFinishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Congratulations</h1>\r\n<div mat-dialog-content>\r\n  <h3>You have won in {{data.time}} seconds!</h3>\r\n  <h3>Enter name for leaderboard?</h3>\r\n  <mat-form-field>\r\n    <input #nameField matInput [(ngModel)]=\"data.name\" placeholder=\"Name\" pattern=\"[A-Za-z0-9]{3,}\" (input)=\"checkName()\" required>\r\n  </mat-form-field>\r\n  <p *ngIf=\"invalidName\">At least three English characters.</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-flat-button color=\"warn\" (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-flat-button [disabled]=\"invalidName\" cdkFocusInitial (click)=\"ok()\">Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLavaHeaderLavaHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Lava Land</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLavaLeaderboardLavaLeaderboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Leaderboards</h1>\r\n<ol>\r\n  <li *ngFor=\"let entry of data\">\r\n    {{entry.name}} ({{entry.duration}} seconds)\r\n  </li>\r\n</ol>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLavaNotificationLavaNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p *ngFor=\"let text of notificationText\">{{text}}</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLavaStatisticsLavaStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidenav\">\r\n  <table>\r\n    <tr>\r\n      <td class=\"title\">Remaining</td>\r\n      <td class=\"value\">{{remainingWisps}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Time</td>\r\n      <td class=\"value\">{{numberOfSeconds}}s</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Speed</td>\r\n      <td class=\"value\">{{currentSpeed}}%</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"title\">Power</td>\r\n      <td class=\"value\">{{currentRadius}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\nbody {\r\n  color: rgb(212, 0, 212);\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n  font-family: \"Caveat\", cursive;\r\n}\r\n.header {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 35%;\r\n  right: 35%;\r\n}\r\n.statistics {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.notification {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: 20%;\r\n  right: 20%;\r\n}\r\n.lavatextFields {\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.fullScreen {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  display: flex;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULE9BQU87QUFDVDtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG5ib2R5IHtcclxuICBjb2xvcjogcmdiKDIxMiwgMCwgMjEyKTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAzNSU7XHJcbiAgcmlnaHQ6IDM1JTtcclxufVxyXG5cclxuLnN0YXRpc3RpY3Mge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5sYXZhdGV4dEZpZWxkcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5mdWxsU2NyZWVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: LavaLandComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function () {
      return LavaLandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _lavacanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lavacanvas */
    "./src/lavacanvas/index.ts");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./backend.service */
    "./src/app/backend.service.ts");
    /* harmony import */


    var _exit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exit */
    "./src/app/exit.ts");
    /* harmony import */


    var _isDebug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./isDebug */
    "./src/app/isDebug.ts");
    /* harmony import */


    var _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lava-game-finish/lava-game-finish.component */
    "./src/app/lava-game-finish/lava-game-finish.component.ts");
    /* harmony import */


    var _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lava-leaderboard/lava-leaderboard.component */
    "./src/app/lava-leaderboard/lava-leaderboard.component.ts");
    /* harmony import */


    var _lavastate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lavastate */
    "./src/app/lavastate.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./player */
    "./src/app/player.ts");
    /* harmony import */


    var _speedboost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./speedboost */
    "./src/app/speedboost.ts");
    /* harmony import */


    var _speedbump__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./speedbump */
    "./src/app/speedbump.ts");
    /* harmony import */


    var _turn_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./turn.service */
    "./src/app/turn.service.ts");
    /* harmony import */


    var _turnevent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./turnevent */
    "./src/app/turnevent.ts");
    /* harmony import */


    var _wisp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./wisp */
    "./src/app/wisp.ts");

    var LavaLandComponent = /*#__PURE__*/function () {
      function LavaLandComponent(turnService, backendService, dialog) {
        _classCallCheck(this, LavaLandComponent);

        this.turnService = turnService;
        this.backendService = backendService;
        this.dialog = dialog; // Map objects

        this.player = null;
        this.objects = [];
        this.mapWisps = [];
        this.mapSpeedBoosters = [];
        this.mapSpeedBumps = [];
        this.exitPortalsHidden = [];
        this.exitPortalsOpened = []; // This game's details

        this.gameState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Starting);
        this.startTime = new Date();
        this.secondsPassed = 0; // Player statistics

        this.totalNumberOfWisps = 20;
        this.numberOfWispsCaught = 0;
        this.playerInfluenceRadius = 1; // Notification text

        this.notificationText = [];
        this.player = new _player__WEBPACK_IMPORTED_MODULE_11__["PlayerObject"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/characters/ralph.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor, {
          x: 1,
          y: 2
        }));
      }

      _createClass(LavaLandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //                  Connect to backend
                    //
                    // ***                                                ***
                    //--------------------------------------------------------
                    this.backendService.$map.subscribe(function (map) {
                      return _this.onMapReceived(map);
                    }, function (exception) {
                      if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                        console.warn("[LavaLandComponent] Map error!");
                        console.error(exception);
                      }
                    }, function () {
                      if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
                        console.warn("[LavaLandComponent] Map subscription completed!");
                      }
                    });
                    this.backendService.$leaderboard.subscribe(function (leaderboard) {
                      return _this.showLeaderboard(leaderboard);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onMapReceived",
        value: function onMapReceived(map) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var i, _i, _i2, _i3, exitPortalObject, previousState;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //                  Populate map tiles
                    //
                    // ***                                                ***
                    //--------------------------------------------------------
                    this.mapSettings = {
                      assets: [new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/water.png"), new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/land.png"), new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/maptiles/lava.png")],
                      map: map
                    }; //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //                  Populate map players and objects
                    //
                    // ***                                                ***
                    //--------------------------------------------------------

                    for (i = 0; i < this.totalNumberOfWisps; i += 1) {
                      this.mapWisps.push(new _wisp__WEBPACK_IMPORTED_MODULE_16__["Wisp"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/characters/wisp.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].RandomColor, {
                        x: 1,
                        y: 2
                      })));
                    }

                    for (_i = 0; _i < 20; _i += 1) {
                      this.mapSpeedBoosters.push(new _speedboost__WEBPACK_IMPORTED_MODULE_12__["SpeedBoost"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/GoodMushroom.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor)));
                    }

                    for (_i2 = 0; _i2 < 10; _i2 += 1) {
                      this.mapSpeedBumps.push(new _speedbump__WEBPACK_IMPORTED_MODULE_13__["SpeedBump"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/RedMushroom.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor)));
                    }

                    for (_i3 = 0; _i3 < 10; _i3 += 1) {
                      exitPortalObject = new _exit__WEBPACK_IMPORTED_MODULE_6__["ExitPortal"](new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"]("/assets/resources/exitPortal.png", _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor, {
                        x: 1,
                        y: 2
                      }));
                      exitPortalObject.setHidden();
                      this.exitPortalsHidden.push(exitPortalObject);
                    }

                    this.objects = [].concat(_toConsumableArray(this.mapWisps), _toConsumableArray(this.mapSpeedBoosters), _toConsumableArray(this.mapSpeedBumps), _toConsumableArray(this.exitPortalsHidden), _toConsumableArray(this.exitPortalsOpened));
                    this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](20, function () {
                      _this2.checkWispsCloseToRalph();

                      _this2.checkSpeedBoostsCloseToRalph();

                      _this2.checkSpeedBumpsCloseToRalph();

                      _this2.checkExitPortalCloseToRalph();
                    })); //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //  Update number of seconds passed
                    //
                    // ***                                                ***
                    //--------------------------------------------------------

                    this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1, function (event) {
                      // Update the time if game hasn't finished
                      if (_this2.gameState.getValue() !== _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps && _this2.gameState.getValue() !== _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps) {
                        _this2.secondsPassed = Math.round((new Date().getTime() - _this2.startTime.getTime()) / 1000);
                      } else {
                        event.unsubscribe();
                      }
                    })); //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //  Set up notifications
                    //
                    // ***                                                ***
                    //--------------------------------------------------------

                    previousState = this.gameState.getValue();
                    this.gameState.subscribe(function (currentState) {
                      switch (currentState) {
                        case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Started:
                          _this2.addNotification(["Touch forest wisps to gather their power. Use it to open a portal out of lava land.", "Brown mushrooms give you swiftness while red mushrooms sap your speed."]);

                          break;

                        case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps:
                          if (previousState !== currentState) {
                            _this2.addNotification(["You have opened the portal in an unknown location!", "Find it to escape the lava land."]);
                          }

                          break;

                        case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps:
                          _this2.addNotification(["Congratulations.", "You have harnassed all the power of the lava land in " + _this2.secondsPassed + " seconds."]);

                          _this2.gameOver("Wisps");

                          break;

                        case _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps:
                          _this2.addNotification(["Congratulations.", "You have successfully escaped the lava land in " + _this2.secondsPassed + " seconds."]);

                          _this2.gameOver("Gate");

                          break;
                      }

                      previousState = currentState;
                    }); //--------------------------------------------------------
                    // ***                                                ***
                    //
                    //                  Move player with game engine
                    //
                    // ***                                                ***
                    //--------------------------------------------------------

                    this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1, function (_subscriptionEvent) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.player.moveA();

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    })); // this.playerSpeed.maxSpeed.subscribe((currentSpeed: number) => {
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

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "currentPlayerMovementRequest",
        value: function currentPlayerMovementRequest(event) {
          this.player.queueMoveTo(event);
        }
      }, {
        key: "startGame",
        value: function startGame() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "addObjectToMap",
        value: function addObjectToMap(TConstructor, url) {
          var assetColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["AssetColor"].OriginalColor;
          var displaySize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
            x: 1,
            y: 1
          };
          return new TConstructor(new _lavacanvas__WEBPACK_IMPORTED_MODULE_4__["Asset"](url, assetColor, displaySize));
        }
      }, {
        key: "checkSpeedBoostsCloseToRalph",
        value: function checkSpeedBoostsCloseToRalph() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _iterator, _step, boost;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelper(this.mapSpeedBoosters);
                    _context5.prev = 1;

                    _iterator.s();

                  case 3:
                    if ((_step = _iterator.n()).done) {
                      _context5.next = 19;
                      break;
                    }

                    boost = _step.value;
                    _context5.t0 = boost;
                    _context5.next = 8;
                    return this.player.getCoordinate();

                  case 8:
                    _context5.t1 = _context5.sent;
                    _context5.t2 = this.playerInfluenceRadius;
                    _context5.t3 = this.playerInfluenceRadius;
                    _context5.next = 13;
                    return _context5.t0.checkIfCouldTouch.call(_context5.t0, _context5.t1, _context5.t2, _context5.t3);

                  case 13:
                    _context5.t4 = _context5.sent;

                    if (!(_context5.t4 === true)) {
                      _context5.next = 17;
                      break;
                    }

                    boost.performTouch();
                    this.player.playerSpeed.speedBoost();

                  case 17:
                    _context5.next = 3;
                    break;

                  case 19:
                    _context5.next = 24;
                    break;

                  case 21:
                    _context5.prev = 21;
                    _context5.t5 = _context5["catch"](1);

                    _iterator.e(_context5.t5);

                  case 24:
                    _context5.prev = 24;

                    _iterator.f();

                    return _context5.finish(24);

                  case 27:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[1, 21, 24, 27]]);
          }));
        }
      }, {
        key: "checkSpeedBumpsCloseToRalph",
        value: function checkSpeedBumpsCloseToRalph() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _iterator2, _step2, speedBump;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _iterator2 = _createForOfIteratorHelper(this.mapSpeedBumps);
                    _context6.prev = 1;

                    _iterator2.s();

                  case 3:
                    if ((_step2 = _iterator2.n()).done) {
                      _context6.next = 17;
                      break;
                    }

                    speedBump = _step2.value;
                    _context6.t0 = speedBump;
                    _context6.next = 8;
                    return this.player.getCoordinate();

                  case 8:
                    _context6.t1 = _context6.sent;
                    _context6.next = 11;
                    return _context6.t0.checkIfCouldTouch.call(_context6.t0, _context6.t1, 1, 1);

                  case 11:
                    _context6.t2 = _context6.sent;

                    if (!(_context6.t2 === true)) {
                      _context6.next = 15;
                      break;
                    }

                    // console.log(`Speed bump!`);
                    speedBump.performTouch();
                    this.player.playerSpeed.speedBump();

                  case 15:
                    _context6.next = 3;
                    break;

                  case 17:
                    _context6.next = 22;
                    break;

                  case 19:
                    _context6.prev = 19;
                    _context6.t3 = _context6["catch"](1);

                    _iterator2.e(_context6.t3);

                  case 22:
                    _context6.prev = 22;

                    _iterator2.f();

                    return _context6.finish(22);

                  case 25:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[1, 19, 22, 25]]);
          }));
        }
      }, {
        key: "checkExitPortalCloseToRalph",
        value: function checkExitPortalCloseToRalph() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _iterator3, _step3, exitPortal;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(this.gameState.getValue() === _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps)) {
                      _context7.next = 25;
                      break;
                    }

                    _iterator3 = _createForOfIteratorHelper(this.exitPortalsOpened);
                    _context7.prev = 2;

                    _iterator3.s();

                  case 4:
                    if ((_step3 = _iterator3.n()).done) {
                      _context7.next = 17;
                      break;
                    }

                    exitPortal = _step3.value;
                    _context7.t0 = exitPortal;
                    _context7.next = 9;
                    return this.player.getCoordinate();

                  case 9:
                    _context7.t1 = _context7.sent;
                    _context7.next = 12;
                    return _context7.t0.checkIfCouldTouch.call(_context7.t0, _context7.t1, 1, 1);

                  case 12:
                    _context7.t2 = _context7.sent;

                    if (!(_context7.t2 === true)) {
                      _context7.next = 15;
                      break;
                    }

                    this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].GotOutWithMinRequiredWisps);

                  case 15:
                    _context7.next = 4;
                    break;

                  case 17:
                    _context7.next = 22;
                    break;

                  case 19:
                    _context7.prev = 19;
                    _context7.t3 = _context7["catch"](2);

                    _iterator3.e(_context7.t3);

                  case 22:
                    _context7.prev = 22;

                    _iterator3.f();

                    return _context7.finish(22);

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[2, 19, 22, 25]]);
          }));
        }
      }, {
        key: "checkWispsCloseToRalph",
        value: function checkWispsCloseToRalph() {
          var _iterator4 = _createForOfIteratorHelper(this.mapWisps),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var wisp = _step4.value;
              this.checkWispCloseToRalph(wisp);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "checkWispCloseToRalph",
        value: function checkWispCloseToRalph(wisp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return wisp.checkIfCouldCatch(this.player.getCoordinate(), this.playerInfluenceRadius, this.playerInfluenceRadius);

                  case 2:
                    _context8.t0 = _context8.sent;

                    if (!(_context8.t0 === true)) {
                      _context8.next = 5;
                      break;
                    }

                    this.caughtWisp(wisp);

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "caughtWisp",
        value: function caughtWisp(wisp) {
          var _this3 = this;

          if (wisp.performCatch()) {
            if (this.gameState.getValue() === _lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].Started) {
              this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtWisp);
            }

            this.numberOfWispsCaught += 1;

            if (Object(_isDebug__WEBPACK_IMPORTED_MODULE_7__["isDebug"])()) {
              if (this.numberOfWispsCaught > 1) {
                this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps);
              } else if (true) {
                this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps);

                for (var i = 0; i < 5; i += 1) {
                  var exitPortal = this.exitPortalsHidden.pop();
                  exitPortal.setShown();
                  this.exitPortalsOpened.push(exitPortal);
                }
              }
            } else if (this.numberOfWispsCaught === this.mapWisps.length) {
              this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtAllWisps);
            } else if (this.numberOfWispsCaught > 0.6 * this.mapWisps.length) {
              this.gameState.next(_lavastate__WEBPACK_IMPORTED_MODULE_10__["LavaState"].CaughtMinRequiredWisps);

              var _exitPortal = this.exitPortalsHidden.pop();

              _exitPortal.setShown();

              this.exitPortalsOpened.push(_exitPortal);
            }
          }

          if (this.playerInfluenceRadius < 5) {
            var newInfluenceRadius = Math.floor(100 * Math.min(this.playerInfluenceRadius * 1.1, 5)) / 100;
            var diff = newInfluenceRadius - this.playerInfluenceRadius;
            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1000, function (sub) {
              sub.unsubscribe();

              if (_this3.playerInfluenceRadius >= 1) {
                _this3.playerInfluenceRadius -= diff;
              }
            }));
            this.playerInfluenceRadius += diff;
          }
        }
      }, {
        key: "currentRadius",
        value: function currentRadius() {
          return Math.floor(this.playerInfluenceRadius * 10) / 10;
        }
      }, {
        key: "addNotification",
        value: function addNotification(texts) {
          var _this4 = this;

          if (texts.length > 0) {
            var _this$notificationTex;

            (_this$notificationTex = this.notificationText).push.apply(_this$notificationTex, _toConsumableArray(texts));

            this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_15__["TurnEventSubscription"](1000, function (event) {
              var i = _this4.notificationText.indexOf(texts[0]);

              _this4.notificationText.splice(i, texts.length);

              event.unsubscribe();
            }));
          }
        }
      }, {
        key: "gameOver",
        value: function gameOver(finishMethod) {
          var _this5 = this;

          var name;

          if (finishMethod !== "Debug") {
            this.player.playerSpeed.stop();
          }

          var dialogRef = this.dialog.open(_lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_8__["LavaGameFinishComponent"], {
            width: "600px",
            data: {
              name: name,
              time: this.secondsPassed
            }
          });
          dialogRef.afterClosed().subscribe(function (name) {
            _this5.backendService.gameOver(name, _this5.secondsPassed, finishMethod);
          });
        }
      }, {
        key: "showLeaderboard",
        value: function showLeaderboard(leaderboard) {
          var dialogRef = this.dialog.open(_lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LavaLeaderboardComponent"], {
            width: "600px",
            data: leaderboard
          });
        }
      }]);

      return LavaLandComponent;
    }();

    LavaLandComponent.ctorParameters = function () {
      return [{
        type: _turn_service__WEBPACK_IMPORTED_MODULE_14__["TurnService"]
      }, {
        type: _backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]
      }, {
        type: _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvasContainer", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], LavaLandComponent.prototype, "screenCanvas", void 0);
    LavaLandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], LavaLandComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _lava_statistics_lava_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lava-statistics/lava-statistics.component */
    "./src/app/lava-statistics/lava-statistics.component.ts");
    /* harmony import */


    var _lava_notification_lava_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lava-notification/lava-notification.component */
    "./src/app/lava-notification/lava-notification.component.ts");
    /* harmony import */


    var _lava_header_lava_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lava-header/lava-header.component */
    "./src/app/lava-header/lava-header.component.ts");
    /* harmony import */


    var _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lava-game-finish/lava-game-finish.component */
    "./src/app/lava-game-finish/lava-game-finish.component.ts");
    /* harmony import */


    var _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lava-leaderboard/lava-leaderboard.component */
    "./src/app/lava-leaderboard/lava-leaderboard.component.ts");
    /* harmony import */


    var _turn_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./turn.service */
    "./src/app/turn.service.ts");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./backend.service */
    "./src/app/backend.service.ts");
    /* harmony import */


    var _lavacanvas_lavacanvas_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../lavacanvas/lavacanvas.module */
    "./src/lavacanvas/lavacanvas.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js"); // import { AppRoutingModule } from './app-routing.module';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["LavaLandComponent"], _lava_statistics_lava_statistics_component__WEBPACK_IMPORTED_MODULE_4__["LavaStatisticsComponent"], _lava_notification_lava_notification_component__WEBPACK_IMPORTED_MODULE_5__["LavaNotificationComponent"], _lava_header_lava_header_component__WEBPACK_IMPORTED_MODULE_6__["LavaHeaderComponent"], _lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__["LavaGameFinishComponent"], _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LavaLeaderboardComponent"]],
      entryComponents: [_lava_game_finish_lava_game_finish_component__WEBPACK_IMPORTED_MODULE_7__["LavaGameFinishComponent"], _lava_leaderboard_lava_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LavaLeaderboardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _lavacanvas_lavacanvas_module__WEBPACK_IMPORTED_MODULE_11__["LavaCanvasModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]],
      providers: [_turn_service__WEBPACK_IMPORTED_MODULE_9__["TurnService"], _backend_service__WEBPACK_IMPORTED_MODULE_10__["BackendService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["LavaLandComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/backend.service.ts":
  /*!************************************!*\
    !*** ./src/app/backend.service.ts ***!
    \************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _devModeApiPaths, _productionApiPaths;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../lavalandcommon */
    "../lavalandcommon/index.ts");
    /* harmony import */


    var _isDebug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./isDebug */
    "./src/app/isDebug.ts");

    var devModeApiPaths = (_devModeApiPaths = {}, _defineProperty(_devModeApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest, "http://localhost:8080/api/gamesession/"), _defineProperty(_devModeApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].LeaderboardRequest, "http://localhost:8080/api/leaderboard/"), _defineProperty(_devModeApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished, "http://localhost:8080/api/mapfinished/"), _devModeApiPaths);
    var productionApiPaths = (_productionApiPaths = {}, _defineProperty(_productionApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest, "/api/gamesession/"), _defineProperty(_productionApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].LeaderboardRequest, "/api/leaderboard/"), _defineProperty(_productionApiPaths, _lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished, "/api/mapfinished/"), _productionApiPaths);
    var apiPaths = Object(_isDebug__WEBPACK_IMPORTED_MODULE_5__["isDebug"])() ? devModeApiPaths : productionApiPaths;

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.gameId = null;
        this.map = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.leaderboard = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$map = this.map.asObservable();
        this.$leaderboard = this.leaderboard.asObservable();
        this.initGameSession();
      }

      _createClass(BackendService, [{
        key: "initGameSession",
        value: function initGameSession() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var response, gameSessionRequestResponse;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return fetch(apiPaths[_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].GameSessionRequest]);

                  case 2:
                    response = _context9.sent;
                    _context9.next = 5;
                    return response.json();

                  case 5:
                    gameSessionRequestResponse = _context9.sent;
                    console.log('initGameSession', gameSessionRequestResponse);
                    this.gameId = gameSessionRequestResponse.gameId;
                    this.map.next(gameSessionRequestResponse.gameMap);

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "gameOver",
        value: function gameOver(name, duration, finishMethod) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var mapFinishedRequest, mapFinishedResponse;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    mapFinishedRequest = {
                      duration: duration,
                      finishMethod: finishMethod,
                      gameId: this.gameId,
                      name: name
                    };
                    console.log(mapFinishedRequest);
                    _context10.next = 4;
                    return this.http.post(apiPaths[_lavalandcommon__WEBPACK_IMPORTED_MODULE_4__["ClientMessageReasons"].MapFinished], mapFinishedRequest).toPromise();

                  case 4:
                    mapFinishedResponse = _context10.sent;
                    this.leaderboard.next(mapFinishedResponse.leaderboard);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return BackendService;
    }();

    BackendService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], BackendService);
    /***/
  },

  /***/
  "./src/app/exit.ts":
  /*!*************************!*\
    !*** ./src/app/exit.ts ***!
    \*************************/

  /*! exports provided: ExitPortal */

  /***/
  function srcAppExitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExitPortal", function () {
      return ExitPortal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _touchableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./touchableObject */
    "./src/app/touchableObject.ts");

    var ExitPortal = /*#__PURE__*/function (_touchableObject__WEB) {
      _inherits(ExitPortal, _touchableObject__WEB);

      var _super = _createSuper(ExitPortal);

      function ExitPortal(asset) {
        var _this6;

        _classCallCheck(this, ExitPortal);

        _this6 = _super.call(this, asset);
        var oldInit = _this6.oninit;

        _this6.oninit = function (obj) {
          if (oldInit != null) {
            oldInit(obj);
          }

          obj.hidden = true;
        };

        return _this6;
      }

      _createClass(ExitPortal, [{
        key: "setShown",
        value: function setShown() {
          var _this7 = this;

          this.onturn = function (obj) {
            obj.hidden = false;
            _this7.onturn = undefined;
          };
        }
      }, {
        key: "setHidden",
        value: function setHidden() {
          var _this8 = this;

          this.onturn = function (obj) {
            obj.hidden = true;
            _this8.onturn = undefined;
          };
        }
      }]);

      return ExitPortal;
    }(_touchableObject__WEBPACK_IMPORTED_MODULE_1__["TouchableObject"]);
    /***/

  },

  /***/
  "./src/app/isDebug.ts":
  /*!****************************!*\
    !*** ./src/app/isDebug.ts ***!
    \****************************/

  /*! exports provided: isDebug */

  /***/
  function srcAppIsDebugTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDebug", function () {
      return isDebug;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function isDebug() {
      return false;
    }
    /***/

  },

  /***/
  "./src/app/lava-game-finish/lava-game-finish.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/lava-game-finish/lava-game-finish.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLavaGameFinishLavaGameFinishComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(75, 3, 75);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh3 {\r\n  font-size: 2vw;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\np {\r\n  color: darkred;\r\n  font-size: 1.5vw;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n  h3 {\r\n    font-size: 20px;\r\n  }\r\n  p {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1nYW1lLWZpbmlzaC9sYXZhLWdhbWUtZmluaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhdmEtZ2FtZS1maW5pc2gvbGF2YS1nYW1lLWZpbmlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhdmVhdCk7XHJcbjpob3N0IHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHJnYig3NSwgMywgNzUpO1xyXG4gIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogZGFya3JlZDtcclxuICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/lava-game-finish/lava-game-finish.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lava-game-finish/lava-game-finish.component.ts ***!
    \****************************************************************/

  /*! exports provided: LavaGameFinishComponent */

  /***/
  function srcAppLavaGameFinishLavaGameFinishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaGameFinishComponent", function () {
      return LavaGameFinishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var LavaGameFinishComponent = /*#__PURE__*/function () {
      function LavaGameFinishComponent(dialogRef, data) {
        _classCallCheck(this, LavaGameFinishComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.invalidName = true;
        dialogRef.disableClose = true;
      }

      _createClass(LavaGameFinishComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "checkName",
        value: function checkName() {
          var inputElement = this.nameField.nativeElement;

          if (inputElement.value.length > 0) {
            this.invalidName = !this.nameField.nativeElement.checkValidity();
          } else {
            this.invalidName = true;
          }
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close(this.data.name);
        }
      }]);

      return LavaGameFinishComponent;
    }();

    LavaGameFinishComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nameField", {
      "static": true
    })], LavaGameFinishComponent.prototype, "nameField", void 0);
    LavaGameFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lava-game-finish",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lava-game-finish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-game-finish/lava-game-finish.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lava-game-finish.component.css */
      "./src/app/lava-game-finish/lava-game-finish.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], LavaGameFinishComponent);
    /***/
  },

  /***/
  "./src/app/lava-header/lava-header.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/lava-header/lava-header.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLavaHeaderLavaHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 3.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\nh1,\r\n.h1 {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1oZWFkZXIvbGF2YS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF2YS1oZWFkZXIvbGF2YS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuaDEsXHJcbi5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/lava-header/lava-header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/lava-header/lava-header.component.ts ***!
    \******************************************************/

  /*! exports provided: LavaHeaderComponent */

  /***/
  function srcAppLavaHeaderLavaHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaHeaderComponent", function () {
      return LavaHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LavaHeaderComponent = /*#__PURE__*/function () {
      function LavaHeaderComponent() {
        _classCallCheck(this, LavaHeaderComponent);
      }

      _createClass(LavaHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LavaHeaderComponent;
    }();

    LavaHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lavaheader",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lava-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-header/lava-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lava-header.component.css */
      "./src/app/lava-header/lava-header.component.css"))["default"]]
    })], LavaHeaderComponent);
    /***/
  },

  /***/
  "./src/app/lava-leaderboard/lava-leaderboard.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/lava-leaderboard/lava-leaderboard.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLavaLeaderboardLavaLeaderboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-width: 1px;\r\n  margin: 0;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 3.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\nol {\r\n  overflow: auto;\r\n  max-height: 600px;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  margin: 0;\r\n  font-family: \"Caveat\", cursive;\r\n  font-size: 3.5vw;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 35px;\r\n  }\r\n  h1 {\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1sZWFkZXJib2FyZC9sYXZhLWxlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXZhLWxlYWRlcmJvYXJkL2xhdmEtbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbm9sIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/lava-leaderboard/lava-leaderboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lava-leaderboard/lava-leaderboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: LavaLeaderboardComponent */

  /***/
  function srcAppLavaLeaderboardLavaLeaderboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaLeaderboardComponent", function () {
      return LavaLeaderboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var LavaLeaderboardComponent = function LavaLeaderboardComponent(dialogRef, data) {
      _classCallCheck(this, LavaLeaderboardComponent);

      this.dialogRef = dialogRef;
      this.data = data;
    };

    LavaLeaderboardComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    LavaLeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lava-leaderboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lava-leaderboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-leaderboard/lava-leaderboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lava-leaderboard.component.css */
      "./src/app/lava-leaderboard/lava-leaderboard.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], LavaLeaderboardComponent);
    /***/
  },

  /***/
  "./src/app/lava-notification/lava-notification.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/lava-notification/lava-notification.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLavaNotificationLavaNotificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-color: (0, 0, 0);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  margin: 0;\r\n  padding: 0 1em;\r\n  color: rgb(223, 183, 223);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n}\r\np {\r\n  text-align: center;\r\n  margin: 0.5em;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1ub3RpZmljYXRpb24vbGF2YS1ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF2YS1ub3RpZmljYXRpb24vbGF2YS1ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMCwgMCwgMCk7XHJcbn1cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/lava-notification/lava-notification.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/lava-notification/lava-notification.component.ts ***!
    \******************************************************************/

  /*! exports provided: LavaNotificationComponent */

  /***/
  function srcAppLavaNotificationLavaNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaNotificationComponent", function () {
      return LavaNotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LavaNotificationComponent = function LavaNotificationComponent() {
      _classCallCheck(this, LavaNotificationComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaNotificationComponent.prototype, "notificationText", void 0);
    LavaNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lavanotification",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lava-notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-notification/lava-notification.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lava-notification.component.css */
      "./src/app/lava-notification/lava-notification.component.css"))["default"]]
    })], LavaNotificationComponent);
    /***/
  },

  /***/
  "./src/app/lava-statistics/lava-statistics.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/lava-statistics/lava-statistics.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLavaStatisticsLavaStatisticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(//fonts.googleapis.com/css?family=Caveat);\r\n:host {\r\n  border-color: (0, 0, 0);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  margin: 0;\r\n  padding: 0.5em 0.5em;\r\n  color: rgb(223, 183, 223);\r\n  text-shadow: 2px 2px rgb(0, 0, 0);\r\n  font-size: 2.5vw;\r\n  font-family: \"Caveat\", cursive;\r\n}\r\nh3,\r\n.h3 {\r\n  text-align: center;\r\n}\r\n.title {\r\n  padding-right: 1em;\r\n}\r\n.value {\r\n  min-width: 2em;\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  :host {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF2YS1zdGF0aXN0aWNzL2xhdmEtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDtBQUNyRDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhdmEtc3RhdGlzdGljcy9sYXZhLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXZlYXQpO1xyXG46aG9zdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xyXG4gIGNvbG9yOiByZ2IoMjIzLCAxODMsIDIyMyk7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XHJcbn1cclxuaDMsXHJcbi5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBtaW4td2lkdGg6IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/lava-statistics/lava-statistics.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/lava-statistics/lava-statistics.component.ts ***!
    \**************************************************************/

  /*! exports provided: LavaStatisticsComponent */

  /***/
  function srcAppLavaStatisticsLavaStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaStatisticsComponent", function () {
      return LavaStatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LavaStatisticsComponent = /*#__PURE__*/function () {
      function LavaStatisticsComponent() {
        _classCallCheck(this, LavaStatisticsComponent);
      }

      _createClass(LavaStatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LavaStatisticsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaStatisticsComponent.prototype, "remainingWisps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaStatisticsComponent.prototype, "currentSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaStatisticsComponent.prototype, "currentRadius", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaStatisticsComponent.prototype, "numberOfSeconds", void 0);
    LavaStatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lavastatistics",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lava-statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lava-statistics/lava-statistics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lava-statistics.component.css */
      "./src/app/lava-statistics/lava-statistics.component.css"))["default"]]
    })], LavaStatisticsComponent);
    /***/
  },

  /***/
  "./src/app/lavastate.ts":
  /*!******************************!*\
    !*** ./src/app/lavastate.ts ***!
    \******************************/

  /*! exports provided: LavaState */

  /***/
  function srcAppLavastateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaState", function () {
      return LavaState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LavaState;

    (function (LavaState) {
      LavaState[LavaState["Starting"] = 0] = "Starting";
      LavaState[LavaState["Started"] = 1] = "Started";
      LavaState[LavaState["CaughtWisp"] = 2] = "CaughtWisp";
      LavaState[LavaState["CaughtMinRequiredWisps"] = 3] = "CaughtMinRequiredWisps";
      LavaState[LavaState["GotOutWithMinRequiredWisps"] = 4] = "GotOutWithMinRequiredWisps";
      LavaState[LavaState["CaughtAllWisps"] = 5] = "CaughtAllWisps";
    })(LavaState || (LavaState = {}));
    /***/

  },

  /***/
  "./src/app/player.ts":
  /*!***************************!*\
    !*** ./src/app/player.ts ***!
    \***************************/

  /*! exports provided: PlayerObject */

  /***/
  function srcAppPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerObject", function () {
      return PlayerObject;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lavacanvas */
    "./src/lavacanvas/index.ts");
    /* harmony import */


    var _playerSpeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./playerSpeed */
    "./src/app/playerSpeed.ts");

    var PlayerObject = /*#__PURE__*/function (_lavacanvas__WEBPACK_) {
      _inherits(PlayerObject, _lavacanvas__WEBPACK_);

      var _super2 = _createSuper(PlayerObject);

      function PlayerObject(asset) {
        var _this9;

        _classCallCheck(this, PlayerObject);

        _this9 = _super2.call(this, asset);
        _this9.isInCooldown = false;
        _this9.nextTurnActions = [];
        _this9.movementQueued = {
          world: {
            x: 0,
            y: 0
          },
          canvas: {
            x: 0,
            y: 0
          }
        };
        _this9.playerSpeed = new _playerSpeed__WEBPACK_IMPORTED_MODULE_2__["PlayerSpeed"](2.5, 0.8);
        _this9.currentSpeed = 0;
        _this9.lastMovementTime = new Date().getTime();

        _this9.oninit = function (obj) {
          obj.setRandomCoordinate();
          _this9.stolenObject = obj;
        };

        _this9.onturn = function (obj) {
          return _this9.turn(obj);
        };

        return _this9;
      }

      _createClass(PlayerObject, [{
        key: "turn",
        value: function turn(obj) {
          var _iterator5 = _createForOfIteratorHelper(this.nextTurnActions),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var turnAction = _step5.value;
              turnAction(obj);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this.nextTurnActions = [];
        }
      }, {
        key: "move",
        value: function move(movement) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", this.stolenObject.move(movement, false));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "moveA",
        value: function moveA() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var currentTime, dT, movementDirection, speedBoosterConstant, maxSpeedNormalizerConstant, maxSpeedNormalizer, totalSpeed, maxSpeedFactor, movementSpeed;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    currentTime = new Date().getTime();
                    dT = currentTime - this.lastMovementTime;
                    this.lastMovementTime = currentTime;

                    if (!(Math.abs(this.movementQueued.world.x) < 1e-10 && Math.abs(this.movementQueued.world.y) < 1e-10)) {
                      _context12.next = 9;
                      break;
                    }

                    this.movementQueued.canvas = {
                      x: 0,
                      y: 0
                    };
                    this.movementQueued.world = {
                      x: 0,
                      y: 0
                    };
                    this.asset.showOriginal();
                    this.currentSpeed = 0;
                    return _context12.abrupt("return");

                  case 9:
                    movementDirection = {
                      x: this.movementQueued.world.x,
                      y: this.movementQueued.world.y
                    };
                    speedBoosterConstant = 0.01;
                    movementDirection.x *= speedBoosterConstant;
                    movementDirection.y *= speedBoosterConstant;
                    maxSpeedNormalizerConstant = 0.003 * dT;
                    maxSpeedNormalizer = maxSpeedNormalizerConstant * this.playerSpeed.maxSpeed.getValue();
                    totalSpeed = Math.sqrt(movementDirection.x * movementDirection.x + movementDirection.y * movementDirection.y);
                    maxSpeedFactor = maxSpeedNormalizer / totalSpeed;

                    if (totalSpeed > maxSpeedNormalizer) {
                      this.movementQueued.world.x -= this.movementQueued.world.x * speedBoosterConstant * maxSpeedFactor;
                      this.movementQueued.world.y -= this.movementQueued.world.y * speedBoosterConstant * maxSpeedFactor;
                      movementDirection.x *= maxSpeedFactor;
                      movementDirection.y *= maxSpeedFactor;
                    } else {
                      this.movementQueued.world.x *= 1 - speedBoosterConstant;
                      this.movementQueued.world.y *= 1 - speedBoosterConstant;
                    }

                    _context12.next = 20;
                    return this.move(movementDirection);

                  case 20:
                    movementSpeed = _context12.sent;
                    this.currentSpeed = Math.round(movementSpeed / maxSpeedNormalizerConstant * 100);

                  case 22:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "queueMoveTo",
        value: function queueMoveTo(direction) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.movementQueued = direction;

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return PlayerObject;
    }(_lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"]);
    /***/

  },

  /***/
  "./src/app/playerSpeed.ts":
  /*!********************************!*\
    !*** ./src/app/playerSpeed.ts ***!
    \********************************/

  /*! exports provided: PlayerSpeed */

  /***/
  function srcAppPlayerSpeedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerSpeed", function () {
      return PlayerSpeed;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PlayerSpeed = /*#__PURE__*/function () {
      function PlayerSpeed() {
        var playerMaxSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2.5;
        var playerMinSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.75;

        _classCallCheck(this, PlayerSpeed);

        this.playerMaxSpeed = playerMaxSpeed;
        this.playerMinSpeed = playerMinSpeed;
        this.maxSpeed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
      }

      _createClass(PlayerSpeed, [{
        key: "changeSpeedTo",
        value: function changeSpeedTo(newSpeed) {
          newSpeed = Math.min(newSpeed, this.playerMaxSpeed);
          newSpeed = Math.max(newSpeed, this.playerMinSpeed);
          this.maxSpeed.next(newSpeed);
        }
      }, {
        key: "speedBoost",
        value: function speedBoost() {
          var currentSpeed = this.maxSpeed.getValue();

          if (currentSpeed < 1) {
            this.changeSpeedTo(1);
          } else if (currentSpeed < this.playerMaxSpeed) {
            this.changeSpeedTo(currentSpeed + 0.05);
          }
        }
      }, {
        key: "speedBump",
        value: function speedBump() {
          var currentSpeed = this.maxSpeed.getValue();

          if (currentSpeed < 1) {
            this.changeSpeedTo(currentSpeed - 0.05);
          } else {
            this.changeSpeedTo(currentSpeed - 0.1);
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          this.maxSpeed.next(0);
        }
      }]);

      return PlayerSpeed;
    }();
    /***/

  },

  /***/
  "./src/app/speedboost.ts":
  /*!*******************************!*\
    !*** ./src/app/speedboost.ts ***!
    \*******************************/

  /*! exports provided: SpeedBoost */

  /***/
  function srcAppSpeedboostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedBoost", function () {
      return SpeedBoost;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _turnevent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./turnevent */
    "./src/app/turnevent.ts");
    /* harmony import */


    var _touchableObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./touchableObject */
    "./src/app/touchableObject.ts");

    var SpeedBoost = /*#__PURE__*/function (_touchableObject__WEB2) {
      _inherits(SpeedBoost, _touchableObject__WEB2);

      var _super3 = _createSuper(SpeedBoost);

      function SpeedBoost() {
        _classCallCheck(this, SpeedBoost);

        return _super3.apply(this, arguments);
      }

      _createClass(SpeedBoost, [{
        key: "setTouch",
        value: function setTouch() {
          var _this10 = this;

          this.isInCooldown = true;
          this.asset.showDarkBlur(true);
          this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_1__["TurnEventSubscription"](1000, function (sub) {
            _this10.asset.showOriginal();

            _this10.isInCooldown = false;
            sub.unsubscribe();
          }));
        }
      }]);

      return SpeedBoost;
    }(_touchableObject__WEBPACK_IMPORTED_MODULE_2__["TouchableObject"]);
    /***/

  },

  /***/
  "./src/app/speedbump.ts":
  /*!******************************!*\
    !*** ./src/app/speedbump.ts ***!
    \******************************/

  /*! exports provided: SpeedBump */

  /***/
  function srcAppSpeedbumpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedBump", function () {
      return SpeedBump;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _touchableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./touchableObject */
    "./src/app/touchableObject.ts");

    var SpeedBump = /*#__PURE__*/function (_touchableObject__WEB3) {
      _inherits(SpeedBump, _touchableObject__WEB3);

      var _super4 = _createSuper(SpeedBump);

      function SpeedBump() {
        _classCallCheck(this, SpeedBump);

        return _super4.apply(this, arguments);
      }

      return SpeedBump;
    }(_touchableObject__WEBPACK_IMPORTED_MODULE_1__["TouchableObject"]);
    /***/

  },

  /***/
  "./src/app/touchableObject.ts":
  /*!************************************!*\
    !*** ./src/app/touchableObject.ts ***!
    \************************************/

  /*! exports provided: TouchableObject */

  /***/
  function srcAppTouchableObjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TouchableObject", function () {
      return TouchableObject;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lavacanvas */
    "./src/lavacanvas/index.ts");

    var TouchableObject = /*#__PURE__*/function (_lavacanvas__WEBPACK_2) {
      _inherits(TouchableObject, _lavacanvas__WEBPACK_2);

      var _super5 = _createSuper(TouchableObject);

      function TouchableObject(asset) {
        var _this11;

        _classCallCheck(this, TouchableObject);

        _this11 = _super5.call(this, asset);
        _this11.isInCooldown = false;

        _this11.oninit = function (obj) {
          obj.setRandomCoordinate();
        };

        return _this11;
      }

      _createClass(TouchableObject, [{
        key: "checkIfCouldTouch",
        value: function checkIfCouldTouch(targetCoordinate) {
          var xRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
          var yRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var currentCoordinate;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.getCoordinate();

                  case 2:
                    currentCoordinate = _context14.sent;

                    if (!this.isInCooldown) {
                      _context14.next = 7;
                      break;
                    }

                    return _context14.abrupt("return", false);

                  case 7:
                    if (!(currentCoordinate.x - targetCoordinate.x > xRadius)) {
                      _context14.next = 11;
                      break;
                    }

                    return _context14.abrupt("return", false);

                  case 11:
                    if (!(currentCoordinate.x - targetCoordinate.x < -xRadius)) {
                      _context14.next = 15;
                      break;
                    }

                    return _context14.abrupt("return", false);

                  case 15:
                    if (!(currentCoordinate.y - targetCoordinate.y > yRadius)) {
                      _context14.next = 19;
                      break;
                    }

                    return _context14.abrupt("return", false);

                  case 19:
                    if (!(currentCoordinate.y - targetCoordinate.y < -yRadius)) {
                      _context14.next = 21;
                      break;
                    }

                    return _context14.abrupt("return", false);

                  case 21:
                    return _context14.abrupt("return", true);

                  case 22:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "performTouch",
        value: function performTouch() {
          this.setTouch();
        }
      }, {
        key: "setTouch",
        value: function setTouch() {}
      }]);

      return TouchableObject;
    }(_lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"]);
    /***/

  },

  /***/
  "./src/app/turn.service.ts":
  /*!*********************************!*\
    !*** ./src/app/turn.service.ts ***!
    \*********************************/

  /*! exports provided: TurnService */

  /***/
  function srcAppTurnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnService", function () {
      return TurnService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TurnService = /*#__PURE__*/function () {
      function TurnService() {
        var _this12 = this;

        _classCallCheck(this, TurnService);

        // priority to turn events
        this.turnEvents = new Map(); // priority array

        this.allPriorities = [];
        this.heartbeatInterval = window.setInterval(function () {
          _this12.processEvent();
        }, 10);
      }

      _createClass(TurnService, [{
        key: "register",
        value: function register(turnEvent) {
          var turnEventObjectForThisService = new TurnEventForService(turnEvent);
          var prio = turnEvent.priority;

          if (this.turnEvents.has(prio)) {
            var prioEvents = this.turnEvents.get(prio);
            var idx = prioEvents.push(turnEventObjectForThisService) - 1;

            turnEventObjectForThisService.unsubscribe = function () {
              prioEvents[idx] = null;
            };
          } else {
            var _prioEvents = [turnEventObjectForThisService];

            turnEventObjectForThisService.unsubscribe = function () {
              _prioEvents[0] = null;
            };

            this.turnEvents.set(prio, _prioEvents);
            this.allPriorities.push(prio);
            this.allPriorities.sort();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.clearInterval(this.heartbeatInterval);
        }
      }, {
        key: "processEvent",
        value: function processEvent() {
          var _this13 = this;

          this.allPriorities.forEach(function (priority) {
            var eventsForThisPriority = _this13.turnEvents.get(priority);

            if (Array.isArray(eventsForThisPriority)) {
              eventsForThisPriority.forEach(function (eventForThisPriority) {
                if (eventForThisPriority != null) {
                  eventForThisPriority.process();
                }
              });
            }
          });
        }
      }]);

      return TurnService;
    }();

    TurnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TurnService);

    var TurnEventForService = /*#__PURE__*/function () {
      function TurnEventForService(ev) {
        var _this14 = this;

        _classCallCheck(this, TurnEventForService);

        this.ev = ev;
        this.currentStrength = 0;

        ev.unsubscribe = function () {
          _this14.unsubscribe();
        };
      }

      _createClass(TurnEventForService, [{
        key: "process",
        value: function process() {
          this.currentStrength += 1 / this.ev.numberOfTurns;

          if (this.currentStrength >= 1) {
            this.currentStrength -= 1;
            this.ev.fncProcessOccurence(this.ev);
          }
        }
      }]);

      return TurnEventForService;
    }();
    /***/

  },

  /***/
  "./src/app/turnevent.ts":
  /*!******************************!*\
    !*** ./src/app/turnevent.ts ***!
    \******************************/

  /*! exports provided: TurnEventSubscription */

  /***/
  function srcAppTurneventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnEventSubscription", function () {
      return TurnEventSubscription;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // readonly numberOfTurns : number; // executed every this many of turns
    // readonly priority: number; // higher valued events will be considered first
    // readonly fncProcessOccurence : Function; // Function that is called when cumulative strength is 1


    var TurnEventSubscription = function TurnEventSubscription(numberOfTurns, fncProcessOccurence) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9;

      _classCallCheck(this, TurnEventSubscription);

      this.numberOfTurns = numberOfTurns;
      this.fncProcessOccurence = fncProcessOccurence;
      this.priority = priority;
    };
    /***/

  },

  /***/
  "./src/app/wisp.ts":
  /*!*************************!*\
    !*** ./src/app/wisp.ts ***!
    \*************************/

  /*! exports provided: Wisp */

  /***/
  function srcAppWispTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Wisp", function () {
      return Wisp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lavacanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lavacanvas */
    "./src/lavacanvas/index.ts");
    /* harmony import */


    var _turnevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./turnevent */
    "./src/app/turnevent.ts");

    var Wisp = /*#__PURE__*/function (_lavacanvas__WEBPACK_3) {
      _inherits(Wisp, _lavacanvas__WEBPACK_3);

      var _super6 = _createSuper(Wisp);

      function Wisp(asset) {
        var _this15;

        _classCallCheck(this, Wisp);

        _this15 = _super6.call(this, asset);
        _this15.moveAround = true;
        _this15.isGhost = false;
        _this15.caughtOnce = false;
        _this15.setHideLaterCounter = 0;

        _this15.oninit = function (obj) {
          obj.setRandomCoordinate();
        };

        _this15.onturn = function (obj) {
          return _this15.turn(obj);
        };

        return _this15;
      }

      _createClass(Wisp, [{
        key: "startMoveAround",
        value: function startMoveAround() {
          this.moveAround = true;
        }
      }, {
        key: "stopMoveAround",
        value: function stopMoveAround() {
          this.moveAround = false;
        }
      }, {
        key: "turn",
        value: function turn(obj) {
          if (this.setHideLaterCounter > 0) {
            this.setHideLaterCounter -= 1;

            if (this.setHideLaterCounter === 0) {
              obj.hidden = true;
            }
          }

          if (!this.moveAround) {
            return;
          } else {
            // Select a random direction
            var moveThisTime = Math.random() > 0.4;

            if (moveThisTime === true) {
              var rollX = Math.random() - 0.5;
              var rollY = Math.random() - 0.5;
              obj.move({
                x: rollX,
                y: rollY
              });
            } else {
              // don't move
              obj.move();
            }
          }
        }
      }, {
        key: "checkIfCouldCatch",
        value: function checkIfCouldCatch(targetCoordinate) {
          var xRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
          var yRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var wispCoordinate;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.getCoordinate();

                  case 2:
                    wispCoordinate = _context15.sent;

                    if (!this.isGhost) {
                      _context15.next = 7;
                      break;
                    }

                    return _context15.abrupt("return", false);

                  case 7:
                    if (!(wispCoordinate.x - targetCoordinate.x > xRadius)) {
                      _context15.next = 11;
                      break;
                    }

                    return _context15.abrupt("return", false);

                  case 11:
                    if (!(wispCoordinate.x - targetCoordinate.x < -xRadius)) {
                      _context15.next = 15;
                      break;
                    }

                    return _context15.abrupt("return", false);

                  case 15:
                    if (!(wispCoordinate.y - targetCoordinate.y > yRadius)) {
                      _context15.next = 19;
                      break;
                    }

                    return _context15.abrupt("return", false);

                  case 19:
                    if (!(wispCoordinate.y - targetCoordinate.y < -yRadius)) {
                      _context15.next = 21;
                      break;
                    }

                    return _context15.abrupt("return", false);

                  case 21:
                    return _context15.abrupt("return", true);

                  case 22:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        } // Returns true if this is the first time this wisp is caught

      }, {
        key: "performCatch",
        value: function performCatch() {
          this.setCaught();
          this.setHideLaterCounter = 5;

          if (this.caughtOnce) {
            return false;
          } else {
            this.caughtOnce = true;
            return true;
          }
        }
      }, {
        key: "performCatchWithComeback",
        value: function performCatchWithComeback() {
          this.setCaught();
          this.setComeback();

          if (this.caughtOnce) {
            return false;
          } else {
            this.caughtOnce = true;
            return true;
          }
        }
      }, {
        key: "setCaught",
        value: function setCaught() {
          this.isGhost = true;
          this.stopMoveAround();
          this.asset.showDarkBlur(true);
        }
      }, {
        key: "setComeback",
        value: function setComeback() {
          var _this16 = this;

          this.turnService.register(new _turnevent__WEBPACK_IMPORTED_MODULE_2__["TurnEventSubscription"](1000, function (sub) {
            _this16.asset.showOriginal();

            _this16.startMoveAround();

            _this16.isGhost = false;
            sub.unsubscribe();
          }));
        }
      }]);

      return Wisp;
    }(_lavacanvas__WEBPACK_IMPORTED_MODULE_1__["WorldObject"]);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/lavacanvas/asset.ts":
  /*!*********************************!*\
    !*** ./src/lavacanvas/asset.ts ***!
    \*********************************/

  /*! exports provided: AssetColor, Asset */

  /***/
  function srcLavacanvasAssetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetColor", function () {
      return AssetColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Asset", function () {
      return Asset;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var canvas_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! canvas-filters */
    "./node_modules/canvas-filters/imagefilters.js");
    /* harmony import */


    var canvas_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvas_filters__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _world2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./world2canvas */
    "./src/lavacanvas/world2canvas.ts");

    var AssetColor;

    (function (AssetColor) {
      AssetColor[AssetColor["RandomColor"] = 0] = "RandomColor";
      AssetColor[AssetColor["OriginalColor"] = 1] = "OriginalColor";
    })(AssetColor || (AssetColor = {}));

    var Asset = /*#__PURE__*/function () {
      function Asset(imageUrl) {
        var assetColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AssetColor.OriginalColor;
        var displaySizeInTiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          x: 1.1,
          y: 1.1
        };

        _classCallCheck(this, Asset);

        this.imageUrl = imageUrl;
        this.assetColor = assetColor;
        this.displaySizeInTiles = displaySizeInTiles;
        this.displaySize = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_2__["world2Canvas"])(this.displaySizeInTiles);
        this.assetCanvas = document.createElement("canvas");
        this.imageSrc = this.init();
        this.drawOriginal();
      }

      _createClass(Asset, [{
        key: "init",
        value: function init() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var im, imageCanvas, scaleRatio, ctx, imageData, filtered;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return loadImageAsync(this.imageUrl);

                  case 2:
                    im = _context16.sent;
                    imageCanvas = document.createElement("canvas");
                    scaleRatio = Math.max(this.displaySize.x / im.width, this.displaySize.y / im.height);
                    imageCanvas.width = this.displaySize.x * 2;
                    imageCanvas.height = this.displaySize.y * 2;
                    ctx = imageCanvas.getContext("2d");
                    ctx.scale(scaleRatio, scaleRatio);
                    ctx.drawImage(im, 0, 0);

                    if (this.assetColor === AssetColor.RandomColor) {
                      // create an ImageData for the area you want to apply the filter.
                      imageData = ctx.getImageData(0, 0, imageCanvas.width, imageCanvas.height); // pass it to a filter and get the modified copy

                      filtered = canvas_filters__WEBPACK_IMPORTED_MODULE_1__["HSLAdjustment"](imageData, Math.random() * 360, 0, 0); // const blurred = ImageFilters.BoxBlur(filtered);
                      // put it back into a context to view the results

                      ctx.putImageData(filtered, 0, 0);
                    }

                    return _context16.abrupt("return", imageCanvas);

                  case 12:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "drawOriginal",
        value: function drawOriginal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _yield$this$getClearC, ctx, im;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.getClearContext();

                  case 2:
                    _yield$this$getClearC = _context17.sent;
                    ctx = _yield$this$getClearC.ctx;
                    im = _yield$this$getClearC.im;
                    ctx.drawImage(im, 0, 0);

                    if (this.canvasFilter) {
                      this.canvasFilter();
                    }

                  case 7:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "drawOriginalHelper",
        value: function drawOriginalHelper(ctx, im) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    ctx.drawImage(im, 0, 0); // if (this.canvasFilter) {
                    //   this.canvasFilter();
                    // }

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
        }
      }, {
        key: "image",
        value: function image() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.imageSrc;

                  case 2:
                    return _context19.abrupt("return", this.assetCanvas);

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "offset",
        value: function offset() {
          return {
            x: this.displaySize.x / 2,
            y: this.displaySize.y / 2
          };
        }
      }, {
        key: "showMotionBlur",
        value: function showMotionBlur(x, y) {
          var strength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _yield$this$getClearC2, ctx, im, yStep, xStep;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.getClearContext();

                  case 2:
                    _yield$this$getClearC2 = _context20.sent;
                    ctx = _yield$this$getClearC2.ctx;
                    im = _yield$this$getClearC2.im;

                    if (y !== 0) {
                      ctx.globalAlpha = 1 / strength / 5;

                      for (yStep = 0; yStep < strength; yStep += 1) {
                        ctx.drawImage(im, 0, yStep);

                        if (this.canvasFilter) {
                          this.canvasFilter();
                        }
                      }

                      ctx.globalAlpha = 1;
                    } else if (x !== 0) {
                      ctx.globalAlpha = 1 / strength / 5;

                      for (xStep = 0; xStep < strength; xStep += 1) {
                        ctx.drawImage(im, xStep, 0);

                        if (this.canvasFilter) {
                          this.canvasFilter();
                        }
                      }

                      ctx.globalAlpha = 1;
                    }

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "showDarkBlur",
        value: function showDarkBlur() {
          var isDarkAndBlurry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.canvasFilter = function () {
                      var ctx = _this17.assetCanvas.getContext("2d"); // create an ImageData for the area you want to apply the filter.


                      var imageData = ctx.getImageData(0, 0, _this17.assetCanvas.width, _this17.assetCanvas.height); // pass it to a filter and get the modified copy

                      var filtered = canvas_filters__WEBPACK_IMPORTED_MODULE_1__["GrayScale"](imageData); // const blurred = ImageFilters.BoxBlur(filtered);
                      // put it back into a context to view the results

                      ctx.putImageData(filtered, 0, 0);
                      return _this17.assetCanvas;
                    };

                    this.drawOriginal();

                  case 2:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "showOriginal",
        value: function showOriginal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.canvasFilter = null;
                    this.drawOriginal();

                  case 2:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "getClearContext",
        value: function getClearContext() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var im, ctx;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.imageSrc;

                  case 2:
                    im = _context23.sent;
                    this.assetCanvas.width = im.width;
                    this.assetCanvas.height = im.height;
                    ctx = this.assetCanvas.getContext("2d");
                    ctx.clearRect(0, 0, this.assetCanvas.width, this.assetCanvas.height);
                    return _context23.abrupt("return", {
                      ctx: ctx,
                      im: im
                    });

                  case 8:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "filterCanvas",
        value: function filterCanvas() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));
        }
      }]);

      return Asset;
    }();

    function loadImageAsync(src) {
      return new Promise(function (resolve, reject) {
        var tileGraphic = new Image();
        tileGraphic.src = src;

        tileGraphic.onload = function () {
          resolve(tileGraphic);
        };

        tileGraphic.onerror = function (err) {
          reject(err);
        };
      });
    }
    /***/

  },

  /***/
  "./src/lavacanvas/canvaseventhandler.ts":
  /*!**********************************************!*\
    !*** ./src/lavacanvas/canvaseventhandler.ts ***!
    \**********************************************/

  /*! exports provided: CanvasEventHandler */

  /***/
  function srcLavacanvasCanvaseventhandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasEventHandler", function () {
      return CanvasEventHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _world2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./world2canvas */
    "./src/lavacanvas/world2canvas.ts");

    var CanvasEventHandler = /*#__PURE__*/function () {
      function CanvasEventHandler(canvas, lavacanvasInternal) {
        var _this18 = this;

        _classCallCheck(this, CanvasEventHandler);

        this.canvas = canvas;
        this.lavacanvasInternal = lavacanvasInternal;
        this.mapSizeInTiles = this.lavacanvasInternal.getMapSize().max;
        this.mapSizeInPixels = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_2__["world2Canvas"])(this.mapSizeInTiles);
        this.interactionDirection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          x: 0,
          y: 0
        });
        this.isTouch = false;
        var following = false;

        this.canvas.onmousedown = function (event) {
          if (!following) {
            _this18.fncStartFollowingMouse(event);

            following = true;
          } else {
            _this18.fncStopFollowingMouse(event);

            following = false;
          }
        };

        this.canvas.ontouchstart = function (event) {
          if (_this18.isTouch === false) {
            _this18.isTouch = true;

            _this18.canvas.onmousedown = function () {};

            _this18.canvas.onmousemove = function () {};
          }

          _this18.handleInteractLocation(event.touches[0].clientX, event.touches[0].clientY);

          _this18.canvas.ontouchmove = function (event) {
            return _this18.handleInteractLocation(event.touches[0].clientX, event.touches[0].clientY);
          };
        };

        this.canvas.ontouchend = function (event) {
          _this18.canvas.ontouchmove = function () {};
        };
      }

      _createClass(CanvasEventHandler, [{
        key: "fncStartFollowingMouse",
        value: function fncStartFollowingMouse(event) {
          var _this19 = this;

          // console.log("Started mouse");
          this.fncMouseMove(event);

          this.canvas.onmousemove = function (event) {
            return _this19.fncMouseMove(event);
          };
        }
      }, {
        key: "fncStopFollowingMouse",
        value: function fncStopFollowingMouse(event) {
          // console.log("Stopped mouse");
          this.canvas.onmousemove = function () {};

          this.interactionDirection.next({
            x: 0,
            y: 0
          });
        }
      }, {
        key: "fncMouseMove",
        value: function fncMouseMove(event) {
          this.handleInteractLocation(event.clientX, event.clientY);
        }
      }, {
        key: "canvas2World",
        value: function canvas2World(eventX, eventY) {
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
          var rect = this.canvas.getBoundingClientRect();
          var x = eventX - rect.left;
          var y = eventY - rect.top;
          var translateCoords = this.lavacanvasInternal.getTranslateCoords();
          x -= translateCoords.x;
          y -= translateCoords.y;
          var eventWorld = {
            x: x / this.mapSizeInPixels.x * this.mapSizeInTiles.x,
            y: y / this.mapSizeInPixels.y * this.mapSizeInTiles.y
          }; // console.log(
          //   this.player.getCoordinates().x,
          //   eventWorld.x,
          //   this.player.getCoordinates().y,
          //   eventWorld.y
          // );

          return eventWorld;
        }
      }, {
        key: "handleInteractLocation",
        value: function handleInteractLocation(eventX, eventY) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var pos, centerPos, xDif, yDif;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    pos = this.canvas2World(eventX, eventY);
                    _context25.next = 3;
                    return this.lavacanvasInternal.centralObject.getCoordinate();

                  case 3:
                    centerPos = _context25.sent;
                    xDif = pos.x - centerPos.x;
                    yDif = pos.y - centerPos.y; // console.log(xDif, yDif);

                    this.interactionDirection.next({
                      x: xDif,
                      y: yDif
                    });

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }]);

      return CanvasEventHandler;
    }();
    /***/

  },

  /***/
  "./src/lavacanvas/index.ts":
  /*!*********************************!*\
    !*** ./src/lavacanvas/index.ts ***!
    \*********************************/

  /*! exports provided: WorldObject, Asset, AssetColor, LavaLandComponent */

  /***/
  function srcLavacanvasIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lavacanvas.component */
    "./src/lavacanvas/lavacanvas.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorldObject", function () {
      return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["WorldObject"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Asset", function () {
      return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["Asset"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AssetColor", function () {
      return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["AssetColor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function () {
      return _lavacanvas_component__WEBPACK_IMPORTED_MODULE_1__["LavaLandComponent"];
    });
    /***/

  },

  /***/
  "./src/lavacanvas/lavacanvas.component.ts":
  /*!************************************************!*\
    !*** ./src/lavacanvas/lavacanvas.component.ts ***!
    \************************************************/

  /*! exports provided: WorldObject, Asset, AssetColor, LavaLandComponent */

  /***/
  function srcLavacanvasLavacanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaLandComponent", function () {
      return LavaLandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lavacanvasinternal.service */
    "./src/lavacanvas/lavacanvasinternal.service.ts");
    /* harmony import */


    var _canvaseventhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./canvaseventhandler */
    "./src/lavacanvas/canvaseventhandler.ts");
    /* harmony import */


    var _world2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./world2canvas */
    "./src/lavacanvas/world2canvas.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_turnevent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app/turnevent */
    "./src/app/turnevent.ts");
    /* harmony import */


    var _app_turn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app/turn.service */
    "./src/app/turn.service.ts");
    /* harmony import */


    var _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./worldobjectinternal */
    "./src/lavacanvas/worldobjectinternal.ts");
    /* harmony import */


    var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/internal/ReplaySubject */
    "./node_modules/rxjs/internal/ReplaySubject.js");
    /* harmony import */


    var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/isDebug */
    "./src/app/isDebug.ts");
    /* harmony import */


    var _worldobject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./worldobject */
    "./src/lavacanvas/worldobject.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WorldObject", function () {
      return _worldobject__WEBPACK_IMPORTED_MODULE_11__["WorldObject"];
    });
    /* harmony import */


    var _asset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./asset */
    "./src/lavacanvas/asset.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Asset", function () {
      return _asset__WEBPACK_IMPORTED_MODULE_12__["Asset"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AssetColor", function () {
      return _asset__WEBPACK_IMPORTED_MODULE_12__["AssetColor"];
    });

    var LavaLandComponent = /*#__PURE__*/function () {
      function LavaLandComponent(lavacanvasInternal, turnService) {
        _classCallCheck(this, LavaLandComponent);

        this.lavacanvasInternal = lavacanvasInternal;
        this.turnService = turnService;
        this.canvasObjects = [];
        this.mapDragSubject = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        this.mapDragRequest = this.mapDragSubject.asObservable();
      }

      _createClass(LavaLandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.canvas = this.screenCanvas.nativeElement;
          this.onResize();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this20 = this;

          if (this.settings != null) {
            this.lavacanvasInternal.setSettings(this.settings)["catch"](function (ex) {
              if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__["isDebug"])()) {
                console.warn("Error while constructing the map!");
                console.error(ex);
              }
            });
            this.turnService.register(new _app_turnevent__WEBPACK_IMPORTED_MODULE_6__["TurnEventSubscription"](1, function () {
              var ctx = _this20.canvas.getContext("2d");

              ctx.fillRect(0, 0, _this20.canvas.width, _this20.canvas.height);

              _this20.lavacanvasInternal.drawMap(ctx, _this20.canvasObjects);
            }, 1));
            this.canvasEventHandler = new _canvaseventhandler__WEBPACK_IMPORTED_MODULE_3__["CanvasEventHandler"](this.canvas, this.lavacanvasInternal);
            this.canvasEventHandler.interactionDirection.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (world) {
              var canvas = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["world2Canvas"])(world);
              return {
                world: world,
                canvas: canvas
              };
            })).subscribe(function (next) {
              return _this20.mapDragSubject.next(next);
            }, function (error) {
              return _this20.mapDragSubject.error(error);
            }, function () {
              return _this20.mapDragSubject.complete;
            });
            this.lavacanvasInternal.centralObject = new _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__["WorldObjectInternal"](this.turnService, this.lavacanvasInternal, this.player);

            var _iterator6 = _createForOfIteratorHelper(this.objects),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var object = _step6.value;
                this.canvasObjects.push(new _worldobjectinternal__WEBPACK_IMPORTED_MODULE_8__["WorldObjectInternal"](this.turnService, this.lavacanvasInternal, object));
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
      }, {
        key: "onResize",
        value: function onResize() {
          if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_10__["isDebug"])()) {
            console.log("LavaLandComponent::onResize(): Canvas resized. [".concat(this.canvas.clientWidth, ", ").concat(this.canvas.clientHeight, "]"));
          }

          var isPortrait = this.canvas.clientHeight > this.canvas.clientWidth;

          if (isPortrait) {
            // this.canvas.height = 560;
            // this.canvas.width = 320;
            Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["setAssetSize"])(30, 30);
          } else {
            // this.canvas.width = 1680;
            // this.canvas.height = 720;
            Object(_world2canvas__WEBPACK_IMPORTED_MODULE_4__["setAssetSize"])(60, 60);
          }

          this.canvas.height = this.canvas.clientHeight;
          this.canvas.width = this.canvas.clientWidth; // const nMaxUnitsToDisplay = 30;
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
      }]);

      return LavaLandComponent;
    }();

    LavaLandComponent.ctorParameters = function () {
      return [{
        type: _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_2__["LavaCanvasInternal"]
      }, {
        type: _app_turn_service__WEBPACK_IMPORTED_MODULE_7__["TurnService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvasContainer", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": true
    })], LavaLandComponent.prototype, "screenCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaLandComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaLandComponent.prototype, "objects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LavaLandComponent.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LavaLandComponent.prototype, "mapDragRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"])], LavaLandComponent.prototype, "onResize", null);
    LavaLandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "lavaCanvas",
      template: "<canvas #canvasContainer></canvas>",
      styles: ["\n      canvas {\n        flex-grow: 1;\n      }\n    "]
    })], LavaLandComponent);
    /***/
  },

  /***/
  "./src/lavacanvas/lavacanvas.module.ts":
  /*!*********************************************!*\
    !*** ./src/lavacanvas/lavacanvas.module.ts ***!
    \*********************************************/

  /*! exports provided: LavaCanvasModule */

  /***/
  function srcLavacanvasLavacanvasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaCanvasModule", function () {
      return LavaCanvasModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lavacanvasinternal.service */
    "./src/lavacanvas/lavacanvasinternal.service.ts");
    /* harmony import */


    var _lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lavacanvas.component */
    "./src/lavacanvas/lavacanvas.component.ts");

    var LavaCanvasModule = function LavaCanvasModule() {
      _classCallCheck(this, LavaCanvasModule);
    };

    LavaCanvasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      providers: [_lavacanvasinternal_service__WEBPACK_IMPORTED_MODULE_3__["LavaCanvasInternal"]],
      exports: [_lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__["LavaLandComponent"]],
      declarations: [_lavacanvas_component__WEBPACK_IMPORTED_MODULE_4__["LavaLandComponent"]]
    })], LavaCanvasModule);
    /***/
  },

  /***/
  "./src/lavacanvas/lavacanvasinternal.service.ts":
  /*!******************************************************!*\
    !*** ./src/lavacanvas/lavacanvasinternal.service.ts ***!
    \******************************************************/

  /*! exports provided: LavaCanvasInternal */

  /***/
  function srcLavacanvasLavacanvasinternalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LavaCanvasInternal", function () {
      return LavaCanvasInternal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../lavalandcommon */
    "../lavalandcommon/index.ts");
    /* harmony import */


    var _world2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./world2canvas */
    "./src/lavacanvas/world2canvas.ts");
    /* harmony import */


    var src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/isDebug */
    "./src/app/isDebug.ts");

    var LavaCanvasInternal = /*#__PURE__*/function () {
      function LavaCanvasInternal() {
        _classCallCheck(this, LavaCanvasInternal);

        this.screenContextCenterRect = {
          min: {
            x: 0,
            y: 0
          },
          max: {
            x: 0,
            y: 0
          },
          initialized: false
        };
        this.translateCoords = {
          x: 0,
          y: 0
        };
      }

      _createClass(LavaCanvasInternal, [{
        key: "getMapSize",
        value: function getMapSize() {
          return {
            min: {
              x: 0,
              y: 0
            },
            max: {
              x: this.settings.map.mapWidth,
              y: this.settings.map.mapHeight
            }
          };
        }
      }, {
        key: "genWorldCoords",
        value: function genWorldCoords(filter) {
          var min = this.mapCoordsMin;
          var max = this.mapCoordsMax;
          var x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
          var y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
          var coords = {
            x: x,
            y: y
          };

          if (filter(coords)) {
            return coords;
          } else {
            return this.genWorldCoords(filter);
          }
        }
      }, {
        key: "genWorldPassableCoords",
        value: function genWorldPassableCoords() {
          var min = this.mapCoordsMin;
          var max = this.mapCoordsMax;
          var x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
          var y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
          var coords = {
            x: x,
            y: y
          };

          if (this.isPassable(coords)) {
            return coords;
          } else {
            return this.genWorldPassableCoords();
          }
        }
      }, {
        key: "constructMap",
        value: function constructMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var canvasCoords, ctx, x, y, tileIdx, asset, _canvasCoords;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                      console.log("LavaCanvasInternal::constructMap(): Constructing map...");
                    }

                    this.mapCoordsMax = {
                      x: this.settings.map.mapWidth,
                      y: this.settings.map.mapHeight
                    };
                    this.mapCoordsMin = {
                      x: 0,
                      y: 0
                    }; // Create background renderer

                    this.backgroundCanvas = document.createElement("canvas");
                    canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(this.mapCoordsMax);
                    this.backgroundCanvas.width = canvasCoords.x;
                    this.backgroundCanvas.height = canvasCoords.y;
                    this.rendererCanvas = document.createElement("canvas");
                    this.rendererCanvas.width = canvasCoords.x;
                    this.rendererCanvas.height = canvasCoords.y; // Draw assets
                    // console.debug('[IsometricMapService] Drawing background...')

                    ctx = this.backgroundCanvas.getContext("2d");
                    x = this.mapCoordsMin.x;

                  case 12:
                    if (!(x < this.mapCoordsMax.x)) {
                      _context26.next = 32;
                      break;
                    }

                    y = this.mapCoordsMin.y;

                  case 14:
                    if (!(y < this.mapCoordsMax.y)) {
                      _context26.next = 29;
                      break;
                    }

                    tileIdx = this.settings.map.background[y][x];

                    if (!(tileIdx != null && this.settings.assets.length > tileIdx)) {
                      _context26.next = 26;
                      break;
                    }

                    asset = this.settings.assets[tileIdx];
                    _canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])({
                      x: x,
                      y: y
                    });
                    _context26.t0 = ctx;
                    _context26.next = 22;
                    return asset.image();

                  case 22:
                    _context26.t1 = _context26.sent;
                    _context26.t2 = _canvasCoords.x;
                    _context26.t3 = _canvasCoords.y;

                    _context26.t0.drawImage.call(_context26.t0, _context26.t1, _context26.t2, _context26.t3);

                  case 26:
                    y += 1;
                    _context26.next = 14;
                    break;

                  case 29:
                    x += 1;
                    _context26.next = 12;
                    break;

                  case 32:
                    if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                      console.log("LavaCanvasInternal::constructMap(): Constructed!");
                    }

                  case 33:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "setSettings",
        value: function setSettings(settings) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                      console.log("LavaCanvasInternal::setSettings(): Settings received!");
                    }

                    this.settings = settings;
                    return _context27.abrupt("return", this.constructMap());

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "isPassable",
        value: function isPassable(coordinates) {
          var type = this.settings.map.background[Math.round(coordinates.y)][Math.round(coordinates.x)];

          if (type === _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__["TileType"].Water || type === _lavalandcommon__WEBPACK_IMPORTED_MODULE_2__["TileType"].Lava) {
            return false;
          } else {
            return type != null;
          }
        }
      }, {
        key: "getCurrentMap",
        value: function getCurrentMap() {
          return this.settings.map;
        }
      }, {
        key: "drawMap",
        value: function drawMap(ctx) {
          var extraObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var renderingCtx, _iterator7, _step7, extraObject, extraCoordinate, canvasCoords, asset, assetOffset, centerCoordinate, assetCentralObject, assetOffsetCentralObject, drawAgain, translateCoordsThisTime, imageOffset;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    if (!(this.settings == null)) {
                      _context28.next = 3;
                      break;
                    }

                    if (Object(src_app_isDebug__WEBPACK_IMPORTED_MODULE_4__["isDebug"])()) {
                      console.error("LavaCanvasInternal::drawMap(): Background not ready to draw!");
                    }

                    return _context28.abrupt("return");

                  case 3:
                    renderingCtx = this.rendererCanvas.getContext("2d");
                    renderingCtx.drawImage(this.backgroundCanvas, 0, 0);
                    _iterator7 = _createForOfIteratorHelper(extraObjects);
                    _context28.prev = 6;

                    _iterator7.s();

                  case 8:
                    if ((_step7 = _iterator7.n()).done) {
                      _context28.next = 26;
                      break;
                    }

                    extraObject = _step7.value;

                    if (!(extraObject.hidden === false)) {
                      _context28.next = 24;
                      break;
                    }

                    _context28.next = 13;
                    return extraObject.getCoordinate();

                  case 13:
                    extraCoordinate = _context28.sent;
                    canvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(extraCoordinate);
                    asset = extraObject.asset;
                    assetOffset = asset.offset();
                    _context28.t0 = renderingCtx;
                    _context28.next = 20;
                    return asset.image();

                  case 20:
                    _context28.t1 = _context28.sent;
                    _context28.t2 = canvasCoords.x - assetOffset.x;
                    _context28.t3 = canvasCoords.y - assetOffset.y;

                    _context28.t0.drawImage.call(_context28.t0, _context28.t1, _context28.t2, _context28.t3);

                  case 24:
                    _context28.next = 8;
                    break;

                  case 26:
                    _context28.next = 31;
                    break;

                  case 28:
                    _context28.prev = 28;
                    _context28.t4 = _context28["catch"](6);

                    _iterator7.e(_context28.t4);

                  case 31:
                    _context28.prev = 31;

                    _iterator7.f();

                    return _context28.finish(31);

                  case 34:
                    _context28.next = 36;
                    return this.centralObject.getCoordinate();

                  case 36:
                    centerCoordinate = _context28.sent;
                    this.centerCanvasCoords = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])(centerCoordinate);
                    assetCentralObject = this.centralObject.asset;
                    assetOffsetCentralObject = assetCentralObject.offset();
                    _context28.t5 = renderingCtx;
                    _context28.next = 43;
                    return assetCentralObject.image();

                  case 43:
                    _context28.t6 = _context28.sent;
                    _context28.t7 = this.centerCanvasCoords.x - assetOffsetCentralObject.x;
                    _context28.t8 = this.centerCanvasCoords.y - assetOffsetCentralObject.y;

                    _context28.t5.drawImage.call(_context28.t5, _context28.t6, _context28.t7, _context28.t8);

                    drawAgain = false;

                    if (!this.screenContextCenterRect.initialized) {
                      this.screenContextCenterRect = {
                        min: {
                          x: ctx.canvas.width / 2,
                          y: ctx.canvas.height / 2
                        },
                        max: {
                          x: ctx.canvas.width / 2,
                          y: ctx.canvas.height / 2
                        },
                        initialized: true
                      };
                    }

                    translateCoordsThisTime = {
                      x: 0,
                      y: 0
                    };

                    if (this.centerCanvasCoords.x < this.screenContextCenterRect.min.x) {
                      translateCoordsThisTime.x = this.screenContextCenterRect.min.x - this.centerCanvasCoords.x;
                    } else if (this.centerCanvasCoords.x > this.screenContextCenterRect.max.x) {
                      translateCoordsThisTime.x = this.screenContextCenterRect.max.x - this.centerCanvasCoords.x;
                    }

                    if (this.centerCanvasCoords.y < this.screenContextCenterRect.min.y) {
                      translateCoordsThisTime.y = this.screenContextCenterRect.min.y - this.centerCanvasCoords.y;
                    } else if (this.centerCanvasCoords.y > this.screenContextCenterRect.max.y) {
                      translateCoordsThisTime.y = this.screenContextCenterRect.max.y - this.centerCanvasCoords.y;
                    }

                    this.screenContextCenterRect.max.x -= translateCoordsThisTime.x;
                    this.screenContextCenterRect.min.x -= translateCoordsThisTime.x;
                    this.screenContextCenterRect.max.y -= translateCoordsThisTime.y;
                    this.screenContextCenterRect.min.y -= translateCoordsThisTime.y;
                    ctx.translate(translateCoordsThisTime.x, translateCoordsThisTime.y);
                    this.translateCoords.x += translateCoordsThisTime.x;
                    this.translateCoords.y += translateCoordsThisTime.y;
                    imageOffset = Object(_world2canvas__WEBPACK_IMPORTED_MODULE_3__["world2Canvas"])({
                      x: 0.5,
                      y: 0.5
                    });
                    ctx.drawImage(this.rendererCanvas, -imageOffset.x, -imageOffset.y);

                  case 61:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this, [[6, 28, 31, 34]]);
          }));
        }
      }, {
        key: "clearDraw",
        value: function clearDraw() {
          this.screenContextCenterRect.initialized = undefined;
        }
      }, {
        key: "getTranslateCoords",
        value: function getTranslateCoords() {
          return this.translateCoords;
        }
      }]);

      return LavaCanvasInternal;
    }();

    LavaCanvasInternal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LavaCanvasInternal);
    /***/
  },

  /***/
  "./src/lavacanvas/world2canvas.ts":
  /*!****************************************!*\
    !*** ./src/lavacanvas/world2canvas.ts ***!
    \****************************************/

  /*! exports provided: setAssetSize, world2Canvas, canvas2World */

  /***/
  function srcLavacanvasWorld2canvasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setAssetSize", function () {
      return setAssetSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "world2Canvas", function () {
      return world2Canvas;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "canvas2World", function () {
      return canvas2World;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var unitAssetWidth = 31;
    var unitAssetHeight = 31;

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
    /***/

  },

  /***/
  "./src/lavacanvas/worldobject.ts":
  /*!***************************************!*\
    !*** ./src/lavacanvas/worldobject.ts ***!
    \***************************************/

  /*! exports provided: WorldObject */

  /***/
  function srcLavacanvasWorldobjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldObject", function () {
      return WorldObject;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WorldObject = /*#__PURE__*/function () {
      function WorldObject(asset) {
        _classCallCheck(this, WorldObject);

        this.asset = asset;
      }

      _createClass(WorldObject, [{
        key: "getCoordinate",
        value: function getCoordinate() {
          return this.coordinate;
        }
      }]);

      return WorldObject;
    }();
    /***/

  },

  /***/
  "./src/lavacanvas/worldobjectinternal.ts":
  /*!***********************************************!*\
    !*** ./src/lavacanvas/worldobjectinternal.ts ***!
    \***********************************************/

  /*! exports provided: WorldObjectInternal */

  /***/
  function srcLavacanvasWorldobjectinternalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldObjectInternal", function () {
      return WorldObjectInternal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_turnevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/turnevent */
    "./src/app/turnevent.ts");
    /* harmony import */


    var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators/take */
    "./node_modules/rxjs/internal/operators/take.js");
    /* harmony import */


    var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__);

    var WorldObjectInternal = /*#__PURE__*/function () {
      function WorldObjectInternal(turnService, lavacanvasInternal, object) {
        var _this21 = this;

        _classCallCheck(this, WorldObjectInternal);

        this.turnService = turnService;
        this.lavacanvasInternal = lavacanvasInternal;
        this.object = object;
        this.unitCoordinates = {
          x: 1,
          y: 1
        };
        this.coordinate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.coordinate$ = this.coordinate.asObservable();
        this.hidden = false;
        this.asset = this.object.asset;
        this.object.coordinate$ = this.coordinate$;
        this.coordinate$.subscribe(function (c) {
          return object.coordinate = c;
        });
        this.object.turnService = this.turnService;

        if (this.object.oninit) {
          this.object.oninit(this);
        }

        this.turnService.register(new _app_turnevent__WEBPACK_IMPORTED_MODULE_2__["TurnEventSubscription"](20, function () {
          _this21.turn();
        }, 8));
      }

      _createClass(WorldObjectInternal, [{
        key: "setCoordinate",
        value: function setCoordinate(coor) {
          if (this.lavacanvasInternal.isPassable(coor)) {
            this.coordinate.next(coor);
          }
        }
      }, {
        key: "setRandomCoordinate",
        value: function setRandomCoordinate() {
          var coord = this.lavacanvasInternal.genWorldPassableCoords();
          this.setCoordinate(coord);
          return coord;
        }
      }, {
        key: "getCoordinate",
        value: function getCoordinate() {
          return this.coordinate$.pipe(Object(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).toPromise();
        }
      }, {
        key: "remove",
        value: function remove() {}
      }, {
        key: "turn",
        value: function turn() {
          if (this.object.onturn) {
            this.object.onturn(this);
          }
        }
      }, {
        key: "move",
        value: function move() {
          var movement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            x: 0,
            y: 0
          };
          var showBlur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _this22 = this;

            var coordinateCanvas, coordinate, fncShowBlur, fncMoveExact, fncMoveY, fncMoveX, exactMovement, yMovement, xMovement;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.getCoordinate();

                  case 2:
                    coordinateCanvas = _context29.sent;
                    coordinate = coordinateCanvas;

                    fncShowBlur = function fncShowBlur(x, y) {
                      if (showBlur === true) {
                        _this22.object.asset.showMotionBlur(Math.abs(Math.round(movement.x * 2)), Math.abs(Math.round(movement.y * 2)));
                      }
                    };

                    fncMoveExact = function fncMoveExact() {
                      var nextCoordinates = {
                        x: coordinate.x + movement.x,
                        y: coordinate.y + movement.y
                      };

                      if (_this22.lavacanvasInternal.isPassable(nextCoordinates)) {
                        _this22.setCoordinate(nextCoordinates);

                        fncShowBlur(movement.x, movement.y);
                        return Math.sqrt(movement.x * movement.x + movement.y * movement.y);
                      } else {
                        return 0;
                      }
                    };

                    fncMoveY = function fncMoveY() {
                      var nextCoordinates = {
                        x: coordinate.x,
                        y: coordinate.y + movement.y
                      };

                      if (_this22.lavacanvasInternal.isPassable(nextCoordinates)) {
                        _this22.setCoordinate(nextCoordinates);

                        fncShowBlur(0, movement.y);
                        return Math.abs(movement.y);
                      } else {
                        return 0;
                      }
                    };

                    fncMoveX = function fncMoveX() {
                      var nextCoordinates = {
                        x: coordinate.x + movement.x,
                        y: coordinate.y
                      };

                      if (_this22.lavacanvasInternal.isPassable(nextCoordinates)) {
                        _this22.setCoordinate(nextCoordinates);

                        fncShowBlur(movement.x, 0);
                        return Math.abs(movement.x);
                      } else {
                        return 0;
                      }
                    };

                    exactMovement = fncMoveExact();

                    if (!(exactMovement === 0)) {
                      _context29.next = 24;
                      break;
                    }

                    yMovement = fncMoveY();

                    if (!(yMovement === 0)) {
                      _context29.next = 21;
                      break;
                    }

                    xMovement = fncMoveX();

                    if (!(xMovement === 0)) {
                      _context29.next = 18;
                      break;
                    }

                    fncShowBlur(0, 0);
                    return _context29.abrupt("return", 0);

                  case 18:
                    return _context29.abrupt("return", xMovement);

                  case 19:
                    _context29.next = 22;
                    break;

                  case 21:
                    return _context29.abrupt("return", yMovement);

                  case 22:
                    _context29.next = 25;
                    break;

                  case 24:
                    return _context29.abrupt("return", exactMovement);

                  case 25:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }]);

      return WorldObjectInternal;
    }();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\code\lavaland\lavaland-gui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map