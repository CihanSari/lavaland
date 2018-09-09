import { WorldCoordinates } from "../../../lavalandcommon";
import * as LavaCanvas from "../lavacanvas";
import { WorldObjectInternal } from "../lavacanvas/worldobjectinternal";
import { PlayerSpeed } from "./playerSpeed";

export class PlayerObject extends LavaCanvas.WorldObject {
  protected isInCooldown = false;
  private stolenObject: WorldObjectInternal;
  private nextTurnActions: ((obj: WorldObjectInternal) => void)[] = [];
  private movementQueued: {
    world: WorldCoordinates;
    canvas: WorldCoordinates;
  } = { world: { x: 0, y: 0 }, canvas: { x: 0, y: 0 } };
  readonly playerSpeed = new PlayerSpeed(2.5, 0.8);
  public currentSpeed: number = 0;
  private lastMovementTime = new Date().getTime();

  constructor(asset: LavaCanvas.Asset) {
    super(asset);
    this.oninit = obj => {
      obj.setRandomCoordinate();
      this.stolenObject = obj;
    };
    this.onturn = obj => this.turn(obj);
  }

  private turn(obj: WorldObjectInternal) {
    for (let turnAction of this.nextTurnActions) {
      turnAction(obj);
    }
    this.nextTurnActions = [];
  }

  private async move(movement: WorldCoordinates): Promise<number> {
    return this.stolenObject.move(movement, false);
  }

  public async moveA() {
    const currentTime = new Date().getTime();
    const dT = currentTime - this.lastMovementTime;
    this.lastMovementTime = currentTime;
    if (
      Math.abs(this.movementQueued.world.x) < 1e-10 &&
      Math.abs(this.movementQueued.world.y) < 1e-10
    ) {
      this.movementQueued.canvas = { x: 0, y: 0 };
      this.movementQueued.world = { x: 0, y: 0 };
      this.asset.showOriginal();
      this.currentSpeed = 0;
      return;
    }
    let movementDirection = {
      x: this.movementQueued.world.x,
      y: this.movementQueued.world.y
    };
    const speedBoosterConstant = 0.01;
    movementDirection.x *= speedBoosterConstant;
    movementDirection.y *= speedBoosterConstant;

    const maxSpeedNormalizerConstant = 0.003 * dT;
    const maxSpeedNormalizer =
      maxSpeedNormalizerConstant * this.playerSpeed.maxSpeed.getValue();

    const totalSpeed = Math.sqrt(
      movementDirection.x * movementDirection.x +
      movementDirection.y * movementDirection.y
    );
    const maxSpeedFactor = maxSpeedNormalizer / totalSpeed;
    if (totalSpeed > maxSpeedNormalizer) {
      this.movementQueued.world.x -= this.movementQueued.world.x * speedBoosterConstant * maxSpeedFactor;
      this.movementQueued.world.y -= this.movementQueued.world.y * speedBoosterConstant * maxSpeedFactor;
      movementDirection.x *= maxSpeedFactor;
      movementDirection.y *= maxSpeedFactor;
    }
    else {
      this.movementQueued.world.x *= 1 - speedBoosterConstant;
      this.movementQueued.world.y *= 1 - speedBoosterConstant;
    }
    const movementSpeed = await this.move(movementDirection);
    this.currentSpeed = Math.round(
      (movementSpeed / maxSpeedNormalizerConstant) * 100
    );
  }

  public async queueMoveTo(direction: {
    world: WorldCoordinates;
    canvas: WorldCoordinates;
  }) {
    this.movementQueued = direction;
  }
}
