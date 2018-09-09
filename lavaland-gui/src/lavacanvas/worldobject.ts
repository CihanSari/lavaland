import {WorldObjectInternal} from "./worldobjectinternal";
import {Asset} from "./asset";
import {Observable} from "rxjs/internal/Observable";
import {WorldCoordinates} from "../../../lavalandcommon";
import {TurnService} from "../app/turn.service";
import {take} from "rxjs/internal/operators/take";

export class WorldObject {
  public coordinate: WorldCoordinates;
  public coordinate$: Observable<WorldCoordinates>;
  public turnService: TurnService;
  constructor(public asset: Asset) {}
  public oninit: (object: WorldObjectInternal) => void;
  public onturn: (object: WorldObjectInternal) => void;
  public onturnSlow: (object: WorldObjectInternal) => void;
  public getCoordinate() { return this.coordinate; }
}
