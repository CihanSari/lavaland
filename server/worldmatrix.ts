import { Neighbors } from "../lavalandcommon";

export type fncEach<T> = (
  x: number,
  y: number,
  value: T,
  neighbors: Neighbors<T>
) => T | null;

export class WorldMatrix<T> {
  content: (T | null)[][] = [];
  private width: number = 0;
  private height: number = 0;
  setWidth(newWidth: number, value: T | null = null) {
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

  setHeight(newHeight: number, value: T | null = null) {
    for (
      let currentHeight = this.height;
      currentHeight < newHeight;
      currentHeight += 1
    ) {
      const row: T[] = new Array(this.width).fill(value, 0, this.width);
      this.content.push(row);
    }
    this.height = this.content.length;
    return this.height;
  }

  setSize(width: number, height: number, value: T | null = null) {
    this.setWidth(width, value);
    this.setHeight(height, value);
  }

  setValue(x: number, y: number, value: T | null = null) {
    if (this.width > x && this.height > y) {
      this.content[y][x] = value;
    }
  }

  getValue(x: number, y: number) {
    if (this.width > x && this.height > y && x >= 0 && y >= 0) {
      return this.content[y][x];
    } else {
      return null;
    }
  }

  forEachValue(each: fncEach<T | null>) {
    for (let x = 0; x < this.width; x += 1) {
      for (let y = 0; y < this.height; y += 1) {
        const neighbors = new Neighbors<T | null>(
          this.getValue(x, y - 1),
          this.getValue(x + 1, y - 1),
          this.getValue(x + 1, y),
          this.getValue(x + 1, y + 1),
          this.getValue(x, y + 1),
          this.getValue(x - 1, y + 1),
          this.getValue(x - 1, y),
          this.getValue(x - 1, y - 1)
        );
        const value = this.getValue(x, y);
        const response = each(x, y, value, neighbors);
        if (response != null) {
          this.setValue(x, y, response);
        }
      }
    }
  }

  constructor(width: number, height: number) {
    this.setSize(width, height);
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
