import {WorldCoordinates} from "../../../lavalandcommon";
import {TurnEventSubscription} from "./turnevent";
import {TurnService} from "./turn.service";
import * as LavaCanvas from "../lavacanvas";

export class TouchableObject extends LavaCanvas.WorldObject {
  protected isInCooldown = false;
  constructor(asset: LavaCanvas.Asset) {
    super(asset);
    this.oninit = obj => { obj.setRandomCoordinate(); };
  }

  public async checkIfCouldTouch(targetCoordinate: WorldCoordinates,
                                 xRadius = 3, yRadius = 3) {
    const currentCoordinate = await this.getCoordinate();
    if (this.isInCooldown) {
      return false;
    } else if (currentCoordinate.x - targetCoordinate.x > xRadius) {
      return false;
    } else if (currentCoordinate.x - targetCoordinate.x < -xRadius) {
      return false;
    } else if (currentCoordinate.y - targetCoordinate.y > yRadius) {
      return false;
    } else if (currentCoordinate.y - targetCoordinate.y < -yRadius) {
      return false;
    }
    return true;
  }

  public performTouch() { this.setTouch(); }

  protected setTouch() {}
}
