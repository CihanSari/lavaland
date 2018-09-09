import * as ImageFilters from "canvas-filters";
import { WorldCoordinates } from "../../../lavalandcommon";
import { world2Canvas } from "./world2canvas";

export enum AssetColor {
  RandomColor,
  OriginalColor
}
export class Asset {
  private imageSrc: Promise<HTMLCanvasElement | HTMLImageElement>;
  private imageCur: HTMLImageElement;
  private assetCanvas: HTMLCanvasElement;
  private canvasFilter: Function;
  private displaySize = world2Canvas(this.displaySizeInTiles);
  constructor(
    private imageUrl: string,
    private assetColor = AssetColor.OriginalColor,
    private displaySizeInTiles: WorldCoordinates = { x: 1.1, y: 1.1 }
  ) {
    this.assetCanvas = document.createElement("canvas");
    this.imageSrc = this.init();
    this.drawOriginal();
  }

  private async init() {
    const im = await loadImageAsync(this.imageUrl);
    const imageCanvas = document.createElement("canvas");
    const scaleRatio = Math.max(
      this.displaySize.x / im.width,
      this.displaySize.y / im.height
    );
    imageCanvas.width = this.displaySize.x * 2;
    imageCanvas.height = this.displaySize.y * 2;
    const ctx = imageCanvas.getContext("2d");
    ctx.scale(scaleRatio, scaleRatio);

    ctx.drawImage(im, 0, 0);
    if (this.assetColor === AssetColor.RandomColor) {
      // create an ImageData for the area you want to apply the filter.
      const imageData = ctx.getImageData(
        0,
        0,
        imageCanvas.width,
        imageCanvas.height
      );
      // pass it to a filter and get the modified copy
      const filtered = ImageFilters.HSLAdjustment(
        imageData,
        Math.random() * 360,
        0,
        0
      );
      // const blurred = ImageFilters.BoxBlur(filtered);
      // put it back into a context to view the results
      ctx.putImageData(filtered, 0, 0);
    }
    return imageCanvas;
  }

  private async drawOriginal() {
    const { ctx, im } = await this.getClearContext();
    ctx.drawImage(im, 0, 0);
    if (this.canvasFilter) {
      this.canvasFilter();
    }
  }

  private async drawOriginalHelper(
    ctx: CanvasRenderingContext2D,
    im: HTMLCanvasElement | HTMLImageElement
  ) {
    ctx.drawImage(im, 0, 0);
    // if (this.canvasFilter) {
    //   this.canvasFilter();
    // }
  }

  public async image() {
    // Wait for first image drawing to finish
    await this.imageSrc;
    // Then return filled canvas
    return this.assetCanvas;
  }

  public offset() {
    return { x: this.displaySize.x / 2, y: this.displaySize.y / 2 };
  }

  public async showMotionBlur(x: number, y: number, strength = 2) {
    const { ctx, im } = await this.getClearContext();
    if (y !== 0) {
      ctx.globalAlpha = 1 / strength / 5;
      for (let yStep = 0; yStep < strength; yStep += 1) {
        ctx.drawImage(im, 0, yStep);
        if (this.canvasFilter) {
          this.canvasFilter();
        }
      }
      ctx.globalAlpha = 1;
    } else if (x !== 0) {
      ctx.globalAlpha = 1 / strength / 5;
      for (let xStep = 0; xStep < strength; xStep += 1) {
        ctx.drawImage(im, xStep, 0);
        if (this.canvasFilter) {
          this.canvasFilter();
        }
      }
      ctx.globalAlpha = 1;
    }
  }

  public async showDarkBlur(isDarkAndBlurry = true) {
    this.canvasFilter = () => {
      const ctx = this.assetCanvas.getContext("2d");
      // create an ImageData for the area you want to apply the filter.
      const imageData = ctx.getImageData(
        0,
        0,
        this.assetCanvas.width,
        this.assetCanvas.height
      );
      // pass it to a filter and get the modified copy
      const filtered = ImageFilters.GrayScale(imageData);
      // const blurred = ImageFilters.BoxBlur(filtered);
      // put it back into a context to view the results
      ctx.putImageData(filtered, 0, 0);
      return this.assetCanvas;
    };
    this.drawOriginal();
  }

  public async showOriginal() {
    this.canvasFilter = null;
    this.drawOriginal();
  }

  private async getClearContext() {
    const im = await this.imageSrc;
    this.assetCanvas.width = im.width;
    this.assetCanvas.height = im.height;
    const ctx = this.assetCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.assetCanvas.width, this.assetCanvas.height);
    return { ctx, im };
  }

  private async filterCanvas() {}
}

function loadImageAsync(src: string): Promise<HTMLImageElement> {
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
