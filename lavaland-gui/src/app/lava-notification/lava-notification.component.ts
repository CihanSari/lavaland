import { Component, OnInit, OnChanges, Input } from "@angular/core";

@Component({
  selector: "lavanotification",
  templateUrl: "./lava-notification.component.html",
  styleUrls: ["./lava-notification.component.css"]
})
export class LavaNotificationComponent {
  @Input() notificationText: string;
  constructor() {}
}
