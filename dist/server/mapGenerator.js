"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldmatrix_1 = require("./worldmatrix");
const lavalandcommon_1 = require("../lavalandcommon");
class MapGenerator {
    constructor(mapWidth, mapHeight) {
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.transitionProbabilities = [
            [0.95, 0.05, 0],
            [0.01, 0.98, 0.01],
            [0, 1, 0]
        ]; // <= Lava (no transition)
        this.mapEdgesInLava = {
            lavaWidth: 30,
            lavaHeight: 15
        };
        this.totalNumberOfWisps = 20;
        this.totalNumberOfSpeedBoosts = 20;
        this.totalNumberOfSpeedBanes = 10;
        this.mapMatrix = new worldmatrix_1.WorldMatrix(this.mapWidth, this.mapHeight);
        const background = this.constructMap();
        this.map = {
            background,
            player: {
                coords: {
                    x: 15,
                    y: 20
                }
            },
            wisps: this.getPassableTiles(this.totalNumberOfWisps),
            mapHeight: this.mapHeight,
            mapWidth: this.mapWidth,
            speedBanes: this.getPassableTiles(this.totalNumberOfSpeedBanes),
            speedBoons: this.getPassableTiles(this.totalNumberOfSpeedBoosts)
        };
    }
    getMap() {
        return this.map;
    }
    getTileProbability(neighborType, destinationType) {
        return this.transitionProbabilities[neighborType][destinationType];
    }
    isPassable(coordinates) {
        const type = this.mapMatrix.getValue(coordinates.x, coordinates.y);
        if (type === lavalandcommon_1.TileType.Water || type === lavalandcommon_1.TileType.Lava) {
            return false;
        }
        else {
            return type != null;
        }
    }
    getPassableTile() {
        const x = Math.floor(Math.random() * this.mapWidth * 0.999);
        const y = Math.floor(Math.random() * this.mapHeight * 0.999);
        const coords = { x, y };
        if (this.isPassable(coords)) {
            return coords;
        }
        else {
            return this.getPassableTile();
        }
    }
    getPassableTiles(nPoints) {
        const res = [];
        for (let i = 0; i < nPoints; i += 1) {
            res.push(this.getPassableTile());
        }
        return res;
    }
    constructMap() {
        this.mapMatrix.forEachValue((x, y, value, neighbors) => {
            if (value != null) {
                // it is already set
                return null;
            }
            if (x < this.mapEdgesInLava.lavaWidth ||
                y < this.mapEdgesInLava.lavaHeight ||
                x > this.mapWidth - this.mapEdgesInLava.lavaWidth ||
                y > this.mapHeight - this.mapEdgesInLava.lavaHeight) {
                return lavalandcommon_1.TileType.Lava;
            }
            const destinationProbabilityDistribution = Array(lavalandcommon_1.TileType.Count).fill(0);
            for (let neighbor of neighbors.to4Array()) {
                if (neighbor != null) {
                    for (let destination = 0; destination < lavalandcommon_1.TileType.Count; destination += 1) {
                        const destinationProbability = this.getTileProbability(neighbor, destination);
                        destinationProbabilityDistribution[destination] += destinationProbability;
                    }
                }
            }
            const destinationCumProbabilityDistribution = Array(lavalandcommon_1.TileType.Count).fill(0);
            let totalProbabilityToNormalize = 0;
            for (let idxDestination = 0; idxDestination < lavalandcommon_1.TileType.Count; idxDestination += 1) {
                totalProbabilityToNormalize +=
                    destinationProbabilityDistribution[idxDestination];
                destinationCumProbabilityDistribution[idxDestination] = totalProbabilityToNormalize;
            }
            const probabilityRoll = Math.random() * totalProbabilityToNormalize;
            for (let idxDestination = 0; idxDestination < lavalandcommon_1.TileType.Count; idxDestination += 1) {
                if (destinationCumProbabilityDistribution[idxDestination] >
                    probabilityRoll) {
                    return idxDestination;
                }
            }
            return lavalandcommon_1.TileType.Lava;
        });
        return this.mapMatrix.content;
    }
}
exports.MapGenerator = MapGenerator;
//# sourceMappingURL=mapGenerator.js.map