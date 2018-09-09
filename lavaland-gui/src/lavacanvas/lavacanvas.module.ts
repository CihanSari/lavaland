import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LavaCanvasInternal } from "./lavacanvasinternal.service";
import { LavaLandComponent } from "./lavacanvas.component";
@NgModule({
  imports: [CommonModule],
  providers: [LavaCanvasInternal],
  exports: [LavaLandComponent],
  declarations: [LavaLandComponent]
})
export class LavaCanvasModule {}
