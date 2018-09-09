import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { LavaLandComponent } from './app.component';
import { LavaStatisticsComponent } from './lava-statistics/lava-statistics.component';
import { LavaNotificationComponent } from './lava-notification/lava-notification.component';
import { LavaHeaderComponent } from './lava-header/lava-header.component';
import { LavaGameFinishComponent } from './lava-game-finish/lava-game-finish.component';
import { LavaLeaderboardComponent } from './lava-leaderboard/lava-leaderboard.component';
import { TurnService } from './turn.service';
import { BackendService } from './backend.service';
import { LavaCanvasModule } from "../lavacanvas/lavacanvas.module";
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LavaLandComponent,
    LavaStatisticsComponent,
    LavaNotificationComponent,
    LavaHeaderComponent,
    LavaGameFinishComponent,
    LavaLeaderboardComponent
  ],
  entryComponents: [LavaGameFinishComponent, LavaLeaderboardComponent],
  imports: [
    BrowserModule,
    LavaCanvasModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [TurnService, BackendService],
  bootstrap: [LavaLandComponent]
})
export class AppModule { }
