import { TileType, Neighbors } from "../../../lavalandcommon";

// One of the assets is randomly picked to represent the tile.
export type TileAsset = string[];

export class MyStupidMap<K, V> {
  fncKeyComparator: (key1: K, key2: K) => boolean = (k1, k2) => {
    return k1 === k2;
  };
  private keyArray: K[] = [];
  private valueArray: V[] = [];
  constructor() {}
  set(key: K, value: V) {
    for (let idx = 0; idx < this.keyArray.length; idx += 1) {
      if (this.fncKeyComparator(key, this.keyArray[idx])) {
        this.valueArray[idx] = value;
        return;
      }
    }
    this.keyArray.push(key);
    this.valueArray.push(value);
  }

  has(key: K) {
    for (let myKey of this.keyArray) {
      if (this.fncKeyComparator(key, myKey)) {
        return true;
      }
    }
    return false;
  }

  get(key: K) {
    for (let idx = 0; idx < this.keyArray.length; idx += 1) {
      if (this.fncKeyComparator(key, this.keyArray[idx])) {
        return this.valueArray[idx];
      }
    }
    return null;
  }
}

// Contains assigned tile assets (see TileAsset type) index for given coordinates
const tileAssetAssignments = new MyStupidMap<Coordinates, string>();

export class Tile {
  // tileAssets are indiced by TileTypes
  // constructor(private myStupidNeighborhoodMap : MyStupidMap<Neighbors<TileType>, TileAsset>) {}
  constructor(
    private myStupidNeighborhoodMap: MyStupidMap<Neighbors<TileType>, TileAsset>
  ) {}

  getAsset(coord: Coordinates, neighbors: Neighbors<TileType>) {
    if (!tileAssetAssignments.has(coord)) {
      const assetsAvailable = this.myStupidNeighborhoodMap.get(neighbors);
      const idx = Math.floor(Math.random() * assetsAvailable.length * 0.999);
      const src = assetsAvailable[idx];
      tileAssetAssignments.set(coord, src);
    }
    return tileAssetAssignments.get(coord);
  }
}
