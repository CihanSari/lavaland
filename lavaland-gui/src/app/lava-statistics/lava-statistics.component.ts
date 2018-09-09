import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lavastatistics",
  templateUrl: "./lava-statistics.component.html",
  styleUrls: ["./lava-statistics.component.css"]
})
export class LavaStatisticsComponent implements OnInit {
  @Input() remainingWisps: number;
  @Input() currentSpeed: number;
  @Input() currentRadius: number;
  @Input() numberOfSeconds: number;
  constructor() {}

  ngOnInit() {}
}
