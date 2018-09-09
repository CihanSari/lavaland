export class Neighbors<T> {
  constructor(
    readonly north: T,
    readonly northEast: T,
    readonly east: T,
    readonly southEast: T,
    readonly south: T,
    readonly southWest: T,
    readonly west: T,
    readonly northWest: T
  ) {}

  compare(other: Neighbors<T>) {
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
