import { TouchableObject } from "./touchableObject";
import { WorldObjectInternal } from "../lavacanvas/worldobjectinternal";
import * as LavaCanvas from "../lavacanvas";

export class ExitPortal extends TouchableObject {
  constructor(asset: LavaCanvas.Asset) {
    super(asset);
    const oldInit = this.oninit;
    this.oninit = obj => {
      if (oldInit != null) {
        oldInit(obj);
      }
      obj.hidden = true;
    };
  }

  public setShown() {
    this.onturn = obj => {
      obj.hidden = false;
      this.onturn = undefined;
    };
  }
  public setHidden() {
    this.onturn = obj => {
      obj.hidden = true;
      this.onturn = undefined;
    };
  }
}
