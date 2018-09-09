import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  Input,
  Output,
  HostListener
} from "@angular/core";
import { LavaCanvasInternal, MapSettings } from "./lavacanvasinternal.service";
import { CanvasEventHandler } from "./canvaseventhandler";
import { setAssetSize, canvas2World, world2Canvas } from "./world2canvas";
import { WorldObject } from "./worldobject";
import { WorldCoordinates } from "../../../lavalandcommon";
import { map } from "rxjs/operators";
import { TurnEventSubscription } from "../app/turnevent";
import { TurnService } from "../app/turn.service";
import { WorldObjectInternal } from "./worldobjectinternal";
import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { isDebug } from 'src/app/isDebug';
export { WorldObject } from "./worldobject";
export { MapSettings } from "./lavacanvasinternal.service";
export { Asset, AssetColor } from "./asset";
@Component({
  selector: "lavaCanvas",
  template: "<canvas #canvasContainer></canvas>",
  styles: [
    `
      canvas {
        flex-grow: 1;
      }
    `
  ]
})
export class LavaLandComponent implements OnInit, OnChanges {
  @ViewChild("canvasContainer", { read: ElementRef, static: true })
  public screenCanvas: ElementRef;
  @Input() public settings: MapSettings;
  @Input() public objects: WorldObject[];
  @Input() public player: WorldObject;
  private canvasObjects: WorldObjectInternal[] = [];
  private canvas: HTMLCanvasElement;
  private canvasEventHandler: CanvasEventHandler;
  private mapDragSubject = new ReplaySubject<{
    world: WorldCoordinates;
    canvas: WorldCoordinates;
  }>(1);
  @Output() public mapDragRequest = this.mapDragSubject.asObservable();
  constructor(
    private lavacanvasInternal: LavaCanvasInternal,
    private turnService: TurnService
  ) { }

  ngOnInit() {
    this.canvas = this.screenCanvas.nativeElement as HTMLCanvasElement;
    this.onResize();
  }

  ngOnChanges() {
    if (this.settings != null) {
      this.lavacanvasInternal.setSettings(this.settings).catch(ex => {
        if (isDebug()) {
          console.warn("Error while constructing the map!");
          console.error(ex);
        }
      });
      this.turnService.register(
        new TurnEventSubscription(
          1,
          () => {
            const ctx = this.canvas.getContext("2d");
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.lavacanvasInternal.drawMap(ctx, this.canvasObjects);
          },
          1
        )
      );

      this.canvasEventHandler = new CanvasEventHandler(
        this.canvas,
        this.lavacanvasInternal
      );
      this.canvasEventHandler.interactionDirection
        .pipe(
          map(world => {
            const canvas = world2Canvas(world);
            return {
              world,
              canvas
            };
          })
        )
        .subscribe(
          next => this.mapDragSubject.next(next),
          error => this.mapDragSubject.error(error),
          () => this.mapDragSubject.complete
        );
      this.lavacanvasInternal.centralObject = new WorldObjectInternal(
        this.turnService,
        this.lavacanvasInternal,
        this.player
      );
      for (let object of this.objects) {
        this.canvasObjects.push(
          new WorldObjectInternal(
            this.turnService,
            this.lavacanvasInternal,
            object
          )
        );
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (isDebug()) {
      console.log(
        `LavaLandComponent::onResize(): Canvas resized. [${
        this.canvas.clientWidth
        }, ${this.canvas.clientHeight}]`
      );
    }
    const isPortrait: boolean = this.canvas.clientHeight > this.canvas.clientWidth;
    if (isPortrait) {
      // this.canvas.height = 560;
      // this.canvas.width = 320;
      setAssetSize(30, 30);
    }
    else {
      // this.canvas.width = 1680;
      // this.canvas.height = 720;
      setAssetSize(60, 60);
    }
    this.canvas.height = this.canvas.clientHeight;
    this.canvas.width = this.canvas.clientWidth;
    // const nMaxUnitsToDisplay = 30;
    // if (this.canvas.width > this.canvas.height) {
    //   // landscape mode
    //   const unitSize = this.canvas.width / nMaxUnitsToDisplay;
    //   setAssetSize(unitSize, unitSize);
    // } else {
    //   // portrait mode
    //   const unitSize = this.canvas.height / nMaxUnitsToDisplay;
    //   setAssetSize(unitSize, unitSize);
    // }
    this.lavacanvasInternal.clearDraw();
  }
}
