"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lavalandcommon_1 = require("../lavalandcommon");
class WorldMatrix {
    constructor(width, height) {
        this.content = [];
        this.width = 0;
        this.height = 0;
        this.setSize(width, height);
    }
    setWidth(newWidth, value = null) {
        if (this.height === 0) {
            this.content.push(new Array(newWidth));
            this.height = 1;
        }
        for (let contentRow of this.content) {
            if (contentRow.length < newWidth) {
                contentRow.length = newWidth;
            }
            contentRow.fill(value, this.width, newWidth);
        }
        this.width = this.content[0].length;
        return this.width;
    }
    setHeight(newHeight, value = null) {
        for (let currentHeight = this.height; currentHeight < newHeight; currentHeight += 1) {
            const row = new Array(this.width).fill(value, 0, this.width);
            this.content.push(row);
        }
        this.height = this.content.length;
        return this.height;
    }
    setSize(width, height, value = null) {
        this.setWidth(width, value);
        this.setHeight(height, value);
    }
    setValue(x, y, value = null) {
        if (this.width > x && this.height > y) {
            this.content[y][x] = value;
        }
    }
    getValue(x, y) {
        if (this.width > x && this.height > y && x >= 0 && y >= 0) {
            return this.content[y][x];
        }
        else {
            return null;
        }
    }
    forEachValue(each) {
        for (let x = 0; x < this.width; x += 1) {
            for (let y = 0; y < this.height; y += 1) {
                const neighbors = new lavalandcommon_1.Neighbors(this.getValue(x, y - 1), this.getValue(x + 1, y - 1), this.getValue(x + 1, y), this.getValue(x + 1, y + 1), this.getValue(x, y + 1), this.getValue(x - 1, y + 1), this.getValue(x - 1, y), this.getValue(x - 1, y - 1));
                const value = this.getValue(x, y);
                const response = each(x, y, value, neighbors);
                if (response != null) {
                    this.setValue(x, y, response);
                }
            }
        }
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
exports.WorldMatrix = WorldMatrix;
//# sourceMappingURL=worldmatrix.js.map