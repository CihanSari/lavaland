import { TurnEventSubscription } from "./turnevent";
import { TouchableObject } from "./touchableObject";

export class SpeedBoost extends TouchableObject {
  protected setTouch() {
    this.isInCooldown = true;
    this.asset.showDarkBlur(true);
    this.turnService.register(
      new TurnEventSubscription(1000, (sub: TurnEventSubscription) => {
        this.asset.showOriginal();
        this.isInCooldown = false;
        sub.unsubscribe();
      })
    );
  }
}
