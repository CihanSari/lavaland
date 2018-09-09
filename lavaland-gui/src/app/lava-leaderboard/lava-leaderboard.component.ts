import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
export type LeaderboardData = { name: string; duration: number }[];
@Component({
  selector: "lava-leaderboard",
  templateUrl: "./lava-leaderboard.component.html",
  styleUrls: ["./lava-leaderboard.component.css"]
})
export class LavaLeaderboardComponent {
  constructor(
    public dialogRef: MatDialogRef<LavaLeaderboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LeaderboardData
  ) {}
}
