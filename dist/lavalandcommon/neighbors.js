"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Neighbors = Neighbors;
//# sourceMappingURL=neighbors.js.map