import { WorldCoordinates } from "../../../lavalandcommon";
import { BehaviorSubject } from "rxjs";
import { world2Canvas } from "./world2canvas";
import { LavaCanvasInternal } from "./lavacanvasinternal.service";

export class CanvasEventHandler {
  private mapSizeInTiles = this.lavacanvasInternal.getMapSize().max;
  private mapSizeInPixels = world2Canvas(this.mapSizeInTiles);
  public interactionDirection = new BehaviorSubject<WorldCoordinates>({
    x: 0,
    y: 0
  });

  private isTouch = false;

  constructor(
    private canvas: HTMLCanvasElement,
    private lavacanvasInternal: LavaCanvasInternal
  ) {
    let following = false;
    this.canvas.onmousedown = event => {
      if (!following) {
        this.fncStartFollowingMouse(event);
        following = true;
      } else {
        this.fncStopFollowingMouse(event);
        following = false;
      }
    };

    this.canvas.ontouchstart = event => {
      if (this.isTouch === false) {
        this.isTouch = true;
        this.canvas.onmousedown = () => {};
        this.canvas.onmousemove = () => {};
      }
      this.handleInteractLocation(
        event.touches[0].clientX,
        event.touches[0].clientY
      );
      this.canvas.ontouchmove = event =>
        this.handleInteractLocation(
          event.touches[0].clientX,
          event.touches[0].clientY
        );
    };
    this.canvas.ontouchend = event => {
      this.canvas.ontouchmove = () => {};
    };
  }

  private fncStartFollowingMouse(event: MouseEvent) {
    // console.log("Started mouse");
    this.fncMouseMove(event);
    this.canvas.onmousemove = event => this.fncMouseMove(event);
  }

  private fncStopFollowingMouse(event: MouseEvent) {
    // console.log("Stopped mouse");
    this.canvas.onmousemove = () => {};
    this.interactionDirection.next({ x: 0, y: 0 });
  }

  private fncMouseMove(event: MouseEvent) {
    this.handleInteractLocation(event.clientX, event.clientY);
  }

  private canvas2World(eventX: number, eventY: number) {
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
    const rect = this.canvas.getBoundingClientRect();

    let x = eventX - rect.left;
    let y = eventY - rect.top;

    const translateCoords = this.lavacanvasInternal.getTranslateCoords();

    x -= translateCoords.x;
    y -= translateCoords.y;

    const eventWorld: WorldCoordinates = {
      x: (x / this.mapSizeInPixels.x) * this.mapSizeInTiles.x,
      y: (y / this.mapSizeInPixels.y) * this.mapSizeInTiles.y
    };

    // console.log(
    //   this.player.getCoordinates().x,
    //   eventWorld.x,
    //   this.player.getCoordinates().y,
    //   eventWorld.y
    // );

    return eventWorld;
  }

  private async handleInteractLocation(eventX: number, eventY: number) {
    const pos = this.canvas2World(eventX, eventY);
    const centerPos = await this.lavacanvasInternal.centralObject.getCoordinate();
    const xDif = pos.x - centerPos.x;
    const yDif = pos.y - centerPos.y;
    // console.log(xDif, yDif);
    this.interactionDirection.next({ x: xDif, y: yDif });
  }
}
