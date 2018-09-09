import * as LavaCanvas from "../lavacanvas";
import { WorldCoordinates } from "../../../lavalandcommon";
import { TurnService } from "./turn.service";
import { TurnEventSubscription } from "./turnevent";
import { WorldObjectInternal } from "../lavacanvas/worldobjectinternal";
import { Observable } from "rxjs/internal/Observable";

export class Wisp extends LavaCanvas.WorldObject {
  private moveAround = true;
  private isGhost = false;
  private caughtOnce = false;
  private setHideLaterCounter = 0;
  constructor(asset: LavaCanvas.Asset) {
    super(asset);
    this.oninit = obj => {
      obj.setRandomCoordinate();
    };
    this.onturn = obj => this.turn(obj);
  }

  public startMoveAround() {
    this.moveAround = true;
  }

  public stopMoveAround() {
    this.moveAround = false;
  }

  private turn(obj: WorldObjectInternal) {
    if (this.setHideLaterCounter > 0 ) {
      this.setHideLaterCounter -= 1;
      if (this.setHideLaterCounter === 0) {
        obj.hidden = true;
      }
    }
    if (!this.moveAround) {
      return;
    } else {
      // Select a random direction
      const moveThisTime = Math.random() > 0.4;
      if (moveThisTime === true) {
        const rollX = Math.random() - 0.5;
        const rollY = Math.random() - 0.5;
        obj.move({ x: rollX, y: rollY });
      } else {
        // don't move
        obj.move();
      }
    }
  }

  public async checkIfCouldCatch(
    targetCoordinate: WorldCoordinates,
    xRadius = 3,
    yRadius = 3
  ) {
    const wispCoordinate = await this.getCoordinate();
    if (this.isGhost) {
      return false;
    } else if (wispCoordinate.x - targetCoordinate.x > xRadius) {
      return false;
    } else if (wispCoordinate.x - targetCoordinate.x < -xRadius) {
      return false;
    } else if (wispCoordinate.y - targetCoordinate.y > yRadius) {
      return false;
    } else if (wispCoordinate.y - targetCoordinate.y < -yRadius) {
      return false;
    }
    return true;
  }

  // Returns true if this is the first time this wisp is caught
  public performCatch() {
    this.setCaught();
    this.setHideLaterCounter = 5;
    if (this.caughtOnce) {
      return false;
    } else {
      this.caughtOnce = true;
      return true;
    }
  }

  public performCatchWithComeback() {
    this.setCaught();
    this.setComeback();
    if (this.caughtOnce) {
      return false;
    } else {
      this.caughtOnce = true;
      return true;
    }
  }

  private setCaught() {
    this.isGhost = true;
    this.stopMoveAround();
    this.asset.showDarkBlur(true);
  }

  private setComeback() {
    this.turnService.register(
      new TurnEventSubscription(1000, (sub: TurnEventSubscription) => {
        this.asset.showOriginal();
        this.startMoveAround();
        this.isGhost = false;
        sub.unsubscribe();
      })
    );
  }
}
