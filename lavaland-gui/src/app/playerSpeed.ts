import { BehaviorSubject } from "rxjs";

export class PlayerSpeed {
  public maxSpeed = new BehaviorSubject<number>(1);
  constructor(private playerMaxSpeed = 2.5, private playerMinSpeed = 0.75) {}

  changeSpeedTo(newSpeed: number) {
    newSpeed = Math.min(newSpeed, this.playerMaxSpeed);
    newSpeed = Math.max(newSpeed, this.playerMinSpeed);
    this.maxSpeed.next(newSpeed);
  }

  public speedBoost() {
    const currentSpeed = this.maxSpeed.getValue();
    if (currentSpeed < 1) {
      this.changeSpeedTo(1);
    } else if (currentSpeed < this.playerMaxSpeed) {
      this.changeSpeedTo(currentSpeed + 0.05);
    }
  }

  public speedBump() {
    const currentSpeed = this.maxSpeed.getValue();
    if (currentSpeed < 1) {
      this.changeSpeedTo(currentSpeed - 0.05);
    } else {
      this.changeSpeedTo(currentSpeed - 0.1);
    }
  }

  public stop() {
    this.maxSpeed.next(0);
  }
}
