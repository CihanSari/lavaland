import { Component, Inject, ElementRef, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
export interface GameFinishedData {
  name: string;
  time: number;
}
@Component({
  selector: "lava-game-finish",
  templateUrl: "./lava-game-finish.component.html",
  styleUrls: ["./lava-game-finish.component.css"]
})
export class LavaGameFinishComponent {
  public invalidName = true;
  @ViewChild("nameField", { static: true }) nameField: ElementRef;
  constructor(
    public dialogRef: MatDialogRef<LavaGameFinishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameFinishedData
  ) {
    dialogRef.disableClose = true;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public checkName(): void {
    const inputElement = this.nameField.nativeElement as HTMLInputElement;
    if (inputElement.value.length > 0) {
      this.invalidName = !(this.nameField
        .nativeElement as HTMLInputElement).checkValidity();
    } else {
      this.invalidName = true;
    }
  }

  public ok(): void {
    this.dialogRef.close(this.data.name);
  }
}
