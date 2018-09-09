import { Injectable } from "@angular/core";
import {
  Neighbors,
  WorldCoordinates,
  GameMap,
  TileType
} from "../../../lavalandcommon";
import { Asset } from "./asset";
import { world2Canvas } from "./world2canvas";
import { WorldObjectInternal } from "./worldobjectinternal";
import { isDebug } from 'src/app/isDebug';
export interface MapSettings {
  assets: Asset[];
  // transitionProbabilities: number[][],
  map: GameMap;
}

@Injectable()
export class LavaCanvasInternal {
  public mapCoordsMin: WorldCoordinates;
  public mapCoordsMax: WorldCoordinates;
  public centerCanvasCoords: WorldCoordinates;
  private backgroundCanvas: HTMLCanvasElement;
  private rendererCanvas: HTMLCanvasElement;
  private translateCoords: WorldCoordinates;
  private settings: MapSettings;
  public centralObject: WorldObjectInternal;
  private screenContextCenterRect = {
    min: { x: 0, y: 0 },
    max: { x: 0, y: 0 },
    initialized: false
  };
  public getMapSize(): {
    min: WorldCoordinates;
    max: WorldCoordinates
  } {
    return {
      min: { x: 0, y: 0 },
      max: { x: this.settings.map.mapWidth, y: this.settings.map.mapHeight }
    };
  }

  public genWorldCoords(filter: (coords: WorldCoordinates) => boolean):
    WorldCoordinates {
    const min = this.mapCoordsMin;
    const max = this.mapCoordsMax;
    const x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
    const y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
    const coords = { x, y };
    if (filter(coords)) {
      return coords;
    } else {
      return this.genWorldCoords(filter);
    }
  }

  public genWorldPassableCoords(): WorldCoordinates {
    const min = this.mapCoordsMin;
    const max = this.mapCoordsMax;
    const x = Math.floor(Math.random() * (max.x - min.x) * 0.999) + min.x;
    const y = Math.floor(Math.random() * (max.y - min.y) * 0.999) + min.y;
    const coords = { x, y };
    if (this.isPassable(coords)) {
      return coords;
    } else {
      return this.genWorldPassableCoords();
    }
  }

  constructor() { this.translateCoords = { x: 0, y: 0 }; }

  private async constructMap(): Promise<void> {
    if (isDebug()) {
      console.log("LavaCanvasInternal::constructMap(): Constructing map...");
    }
    this.mapCoordsMax = {
      x: this.settings.map.mapWidth,
      y: this.settings.map.mapHeight
    };
    this.mapCoordsMin = { x: 0, y: 0 };

    // Create background renderer
    this.backgroundCanvas = document.createElement("canvas");
    const canvasCoords = world2Canvas(this.mapCoordsMax);
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
          const canvasCoords = world2Canvas({ x, y });
          ctx.drawImage(await asset.image(), canvasCoords.x, canvasCoords.y);
        }
      }
    }
    if (isDebug()) {
      console.log("LavaCanvasInternal::constructMap(): Constructed!");
    }
  }

  public async setSettings(settings: MapSettings): Promise<void> {
    if (isDebug()) {
      console.log(`LavaCanvasInternal::setSettings(): Settings received!`);
    }
    this.settings = settings;
    return this.constructMap();
  }

  public isPassable(coordinates: WorldCoordinates): boolean {
    const type =
      this.settings.map
        .background[Math.round(coordinates.y)][Math.round(coordinates.x)];
    if (type === TileType.Water || type === TileType.Lava) {
      return false;
    } else {
      return type != null;
    }
  }

  private getCurrentMap(): GameMap { return this.settings.map; }

  async drawMap(ctx: CanvasRenderingContext2D,
    extraObjects: WorldObjectInternal[] = []) {
    if (this.settings == null) {
      if (isDebug()) {
        console.error(
          "LavaCanvasInternal::drawMap(): Background not ready to draw!");
      }
      return;
    }

    const renderingCtx = this.rendererCanvas.getContext("2d");

    renderingCtx.drawImage(this.backgroundCanvas, 0, 0);

    for (let extraObject of extraObjects) {
      if (extraObject.hidden === false) {
        const extraCoordinate = await extraObject.getCoordinate();
        const canvasCoords = world2Canvas(extraCoordinate);
        const asset = extraObject.asset;
        const assetOffset = asset.offset();
        renderingCtx.drawImage(await asset.image(),
          canvasCoords.x - assetOffset.x,
          canvasCoords.y - assetOffset.y);
      }
    }
    const centerCoordinate = await this.centralObject.getCoordinate();
    this.centerCanvasCoords = world2Canvas(centerCoordinate);
    const assetCentralObject = this.centralObject.asset;
    const assetOffsetCentralObject = assetCentralObject.offset();
    renderingCtx.drawImage(
      await assetCentralObject.image(),
      this.centerCanvasCoords.x - assetOffsetCentralObject.x,
      this.centerCanvasCoords.y - assetOffsetCentralObject.y);

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
    } else if (this.centerCanvasCoords.x > this.screenContextCenterRect.max.x) {
      translateCoordsThisTime.x =
        this.screenContextCenterRect.max.x - this.centerCanvasCoords.x;
    }

    if (this.centerCanvasCoords.y < this.screenContextCenterRect.min.y) {
      translateCoordsThisTime.y =
        this.screenContextCenterRect.min.y - this.centerCanvasCoords.y;
    } else if (this.centerCanvasCoords.y > this.screenContextCenterRect.max.y) {
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
    const imageOffset = world2Canvas({ x: 0.5, y: 0.5 });

    ctx.drawImage(this.rendererCanvas, -imageOffset.x, -imageOffset.y);
  }

  clearDraw() { this.screenContextCenterRect.initialized = undefined; }

  getTranslateCoords() { return this.translateCoords; }
}

export interface DrawObject {
  coordinate: WorldCoordinates;
  asset: Asset;
}
