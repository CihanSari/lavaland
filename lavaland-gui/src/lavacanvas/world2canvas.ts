import { WorldCoordinates } from "../../../lavalandcommon";

let unitAssetWidth = 31;
let unitAssetHeight = 31;

export function setAssetSize(width: number, height: number) {
  unitAssetWidth = width;
  unitAssetHeight = height;
}

export function world2Canvas(coords: WorldCoordinates) {
  return {
    x: coords.x * unitAssetWidth,
    y: coords.y * unitAssetHeight
  };
}

export function canvas2World(coords: WorldCoordinates) {
  return {
    x: coords.x / unitAssetWidth,
    y: coords.y / unitAssetHeight
  };
}
