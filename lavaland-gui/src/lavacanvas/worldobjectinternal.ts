import { WorldCoordinates } from "../../../lavalandcommon";
import { BehaviorSubject, Observable } from "rxjs";
import { Asset } from "./asset";
import { LavaCanvasInternal } from "./lavacanvasinternal.service";
import { WorldObject } from "./worldobject";
import { ReplaySubject } from "rxjs";
import { TurnEventSubscription } from "../app/turnevent";
import { TurnService } from "../app/turn.service";
import { take } from "rxjs/internal/operators/take";
import { canvas2World, world2Canvas } from "./world2canvas";

export class WorldObjectInternal {
  private unitCoordinates: WorldCoordinates = { x: 1, y: 1 };
  private coordinate = new ReplaySubject<WorldCoordinates>(1);
  public coordinate$ = this.coordinate.asObservable();
  public hidden: boolean = false;
  readonly asset = this.object.asset;

  constructor(
    readonly turnService: TurnService,
    private lavacanvasInternal: LavaCanvasInternal,
    private object: WorldObject
  ) {
    this.object.coordinate$ = this.coordinate$;
    this.coordinate$.subscribe(c => (object.coordinate = c));
    this.object.turnService = this.turnService;
    if (this.object.oninit) {
      this.object.oninit(this);
    }
    this.turnService.register(
      new TurnEventSubscription(
        20,
        () => {
          this.turn();
        },
        8
      )
    );
  }

  public setCoordinate(coor: WorldCoordinates): void {
    if (this.lavacanvasInternal.isPassable(coor)) {
      this.coordinate.next(coor);
    }
  }

  public setRandomCoordinate(): WorldCoordinates {
    const coord = this.lavacanvasInternal.genWorldPassableCoords();
    this.setCoordinate(coord);
    return coord;
  }

  public getCoordinate(): Promise<WorldCoordinates> {
    return this.coordinate$.pipe(take(1)).toPromise();
  }

  public remove(): void {}

  public turn() {
    if (this.object.onturn) {
      this.object.onturn(this);
    }
  }

  public async move(
    movement: WorldCoordinates = { x: 0, y: 0 },
    showBlur = true
  ): Promise<number> {
    const coordinateCanvas = await this.getCoordinate();
    const coordinate = coordinateCanvas;
    const fncShowBlur = (x, y) => {
      if (showBlur === true) {
        this.object.asset.showMotionBlur(
          Math.abs(Math.round(movement.x * 2)),
          Math.abs(Math.round(movement.y * 2))
        );
      }
    };
    const fncMoveExact = () => {
      const nextCoordinates = {
        x: coordinate.x + movement.x,
        y: coordinate.y + movement.y
      };
      if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
        this.setCoordinate(nextCoordinates);
        fncShowBlur(movement.x, movement.y);
        return Math.sqrt(movement.x * movement.x + movement.y * movement.y);
      } else {
        return 0;
      }
    };
    const fncMoveY = () => {
      const nextCoordinates = {
        x: coordinate.x,
        y: coordinate.y + movement.y
      };
      if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
        this.setCoordinate(nextCoordinates);
        fncShowBlur(0, movement.y);
        return Math.abs(movement.y);
      } else {
        return 0;
      }
    };
    const fncMoveX = () => {
      const nextCoordinates = {
        x: coordinate.x + movement.x,
        y: coordinate.y
      };
      if (this.lavacanvasInternal.isPassable(nextCoordinates)) {
        this.setCoordinate(nextCoordinates);
        fncShowBlur(movement.x, 0);
        return Math.abs(movement.x);
      } else {
        return 0;
      }
    };

    const exactMovement = fncMoveExact();
    if (exactMovement === 0) {
      const yMovement = fncMoveY();
      if (yMovement === 0) {
        const xMovement = fncMoveX();
        if (xMovement === 0) {
          fncShowBlur(0, 0);
          return 0;
        } else {
          return xMovement;
        }
      } else {
        return yMovement;
      }
    } else {
      return exactMovement;
    }
  }
}
