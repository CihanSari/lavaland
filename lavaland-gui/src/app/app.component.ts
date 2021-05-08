import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { GameMap, WorldCoordinates } from '../../../lavalandcommon';
import { MatDialog } from '../../node_modules/@angular/material';
import * as LavaCanvas from '../lavacanvas';
import { WorldObject } from '../lavacanvas/worldobject';
import { BackendService } from './backend.service';
import { ExitPortal } from './exit';
import { isDebug } from './isDebug';
import { LavaGameFinishComponent } from './lava-game-finish/lava-game-finish.component';
import { LavaLeaderboardComponent, LeaderboardData } from './lava-leaderboard/lava-leaderboard.component';
import { LavaState } from './lavastate';
import { PlayerObject } from './player';
import { SpeedBoost } from './speedboost';
import { SpeedBump } from './speedbump';
import { TurnService } from './turn.service';
import { TurnEventSubscription } from './turnevent';
import { Wisp } from './wisp';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LavaLandComponent implements OnInit {
  // Map objects
  public player: PlayerObject = null;
  public objects: WorldObject[] = [];

  private mapWisps: Wisp[] = [];
  private mapSpeedBoosters: SpeedBoost[] = [];
  private mapSpeedBumps: SpeedBump[] = [];
  private exitPortalsHidden: ExitPortal[] = [];
  private exitPortalsOpened: ExitPortal[] = [];
  // This game's details
  public gameState = new BehaviorSubject<LavaState>(LavaState.Starting);
  public startTime = new Date();
  public secondsPassed = 0;

  // Player statistics
  public totalNumberOfWisps = 20;
  public numberOfWispsCaught = 0;
  private playerInfluenceRadius = 1;
  // Notification text
  public notificationText: string[] = [];

  public mapSettings: LavaCanvas.MapSettings;
  @ViewChild("canvasContainer", { read: ElementRef, static: false }) screenCanvas: ElementRef;

  constructor(private turnService: TurnService,
    private backendService: BackendService,
    public dialog: MatDialog) {
    this.player = new PlayerObject(new LavaCanvas.Asset(
      "/assets/characters/ralph.png", LavaCanvas.AssetColor.OriginalColor,
      { x: 1, y: 2 }));
  }
  public async ngOnInit() {
    //--------------------------------------------------------
    // ***                                                ***
    //
    //                  Connect to backend
    //
    // ***                                                ***
    //--------------------------------------------------------
    this.backendService.$map.subscribe(
      map => this.onMapReceived(map),
      exception => {
        if (isDebug()) {
          console.warn("[LavaLandComponent] Map error!");
          console.error(exception);
        }
      },
      () => {
        if (isDebug()) {
          console.warn("[LavaLandComponent] Map subscription completed!");
        }
      });

    this.backendService.$leaderboard.subscribe(
      leaderboard => this.showLeaderboard(leaderboard));
  }

  private async onMapReceived(map: GameMap) {
    //--------------------------------------------------------
    // ***                                                ***
    //
    //                  Populate map tiles
    //
    // ***                                                ***
    //--------------------------------------------------------

    this.mapSettings = {
      assets: [
        new LavaCanvas.Asset("/assets/maptiles/water.png"),
        new LavaCanvas.Asset("/assets/maptiles/land.png"),
        new LavaCanvas.Asset("/assets/maptiles/lava.png")
      ],
      map
    };

    //--------------------------------------------------------
    // ***                                                ***
    //
    //                  Populate map players and objects
    //
    // ***                                                ***
    //--------------------------------------------------------

    for (let i = 0; i < this.totalNumberOfWisps; i += 1) {
      this.mapWisps.push(new Wisp(new LavaCanvas.Asset(
        "/assets/characters/wisp.png", LavaCanvas.AssetColor.RandomColor,
        { x: 1, y: 2 })));
    }
    for (let i = 0; i < 20; i += 1) {
      this.mapSpeedBoosters.push(new SpeedBoost(
        new LavaCanvas.Asset("/assets/resources/GoodMushroom.png",
          LavaCanvas.AssetColor.OriginalColor)));
    }
    for (let i = 0; i < 10; i += 1) {
      this.mapSpeedBumps.push(new SpeedBump(
        new LavaCanvas.Asset("/assets/resources/RedMushroom.png",
          LavaCanvas.AssetColor.OriginalColor)));
    }
    for (let i = 0; i < 10; i += 1) {
      const exitPortalObject = new ExitPortal(new LavaCanvas.Asset(
        "/assets/resources/exitPortal.png",
        LavaCanvas.AssetColor.OriginalColor, { x: 1, y: 2 }));
      exitPortalObject.setHidden();
      this.exitPortalsHidden.push(exitPortalObject);
    }

    this.objects = [
      ...this.mapWisps,
      ...this.mapSpeedBoosters,
      ...this.mapSpeedBumps,
      ...this.exitPortalsHidden,
      ...this.exitPortalsOpened
    ];

    this.turnService.register(new TurnEventSubscription(20, () => {
      this.checkWispsCloseToRalph();
      this.checkSpeedBoostsCloseToRalph();
      this.checkSpeedBumpsCloseToRalph();
      this.checkExitPortalCloseToRalph();
    }));

    //--------------------------------------------------------
    // ***                                                ***
    //
    //  Update number of seconds passed
    //
    // ***                                                ***
    //--------------------------------------------------------
    this.turnService.register(new TurnEventSubscription(1, event => {
      // Update the time if game hasn't finished
      if (this.gameState.getValue() !== LavaState.CaughtAllWisps &&
        this.gameState.getValue() !== LavaState.GotOutWithMinRequiredWisps) {
        this.secondsPassed = Math.round(
          (new Date().getTime() - this.startTime.getTime()) / 1000);
      } else {
        event.unsubscribe();
      }
    }));

    //--------------------------------------------------------
    // ***                                                ***
    //
    //  Set up notifications
    //
    // ***                                                ***
    //--------------------------------------------------------
    let previousState = this.gameState.getValue();
    this.gameState.subscribe((currentState: LavaState) => {
      switch (currentState) {
        case LavaState.Started:
          this.addNotification([
            "Touch forest wisps to gather their power. Use it to open a portal out of lava land.",
            "Brown mushrooms give you swiftness while red mushrooms sap your speed."
          ]);
          break;
        case LavaState.CaughtMinRequiredWisps:
          if (previousState !== currentState) {
            this.addNotification([
              "You have opened the portal in an unknown location!",
              "Find it to escape the lava land."
            ]);
          }
          break;
        case LavaState.CaughtAllWisps:
          this.addNotification([
            "Congratulations.",
            "You have harnassed all the power of the lava land in " +
            this.secondsPassed + " seconds."
          ]);
          this.gameOver("Wisps");
          break;
        case LavaState.GotOutWithMinRequiredWisps:
          this.addNotification([
            "Congratulations.",
            "You have successfully escaped the lava land in " +
            this.secondsPassed + " seconds."
          ]);
          this.gameOver("Gate");
          break;
      }
      previousState = currentState;
    });

    //--------------------------------------------------------
    // ***                                                ***
    //
    //                  Move player with game engine
    //
    // ***                                                ***
    //--------------------------------------------------------
    this.turnService.register(new TurnEventSubscription(
      1, async (_subscriptionEvent: TurnEventSubscription) => {
        this.player.moveA();
      }));
    // this.playerSpeed.maxSpeed.subscribe((currentSpeed: number) => {
    //   if (currentSpeed > 0) {
    //     this.currentSpeed =
    //       Math.round(this.playerSpeed.maxSpeed.getValue() * 1000) / 10;
    //   }
    // });

    // Start the game!
    this.gameState.next(LavaState.Started);

    if (isDebug()) {
      this.gameOver("Debug");
    }
  }

  public currentPlayerMovementRequest(event: {
    world: WorldCoordinates;
    canvas: WorldCoordinates;
  }): void {
    this.player.queueMoveTo(event);
  }

  private async startGame() { }

  private addObjectToMap<T>(TConstructor: { new(ass: LavaCanvas.Asset): T; },
    url: string,
    assetColor = LavaCanvas.AssetColor.OriginalColor,
    displaySize: WorldCoordinates = { x: 1, y: 1 }): T {
    return new TConstructor(new LavaCanvas.Asset(url, assetColor, displaySize));
  }

  private async checkSpeedBoostsCloseToRalph() {
    for (let boost of this.mapSpeedBoosters) {
      if ((await boost.checkIfCouldTouch(
        await this.player.getCoordinate(), this.playerInfluenceRadius,
        this.playerInfluenceRadius)) === true) {
        boost.performTouch();
        this.player.playerSpeed.speedBoost();
      }
    }
  }

  private async checkSpeedBumpsCloseToRalph() {
    for (let speedBump of this.mapSpeedBumps) {
      if ((await speedBump.checkIfCouldTouch(await this.player.getCoordinate(),
        1, 1)) === true) {
        // console.log(`Speed bump!`);
        speedBump.performTouch();
        this.player.playerSpeed.speedBump();
      }
    }
  }

  private async checkExitPortalCloseToRalph() {
    if (this.gameState.getValue() === LavaState.CaughtMinRequiredWisps) {
      for (let exitPortal of this.exitPortalsOpened) {
        if ((await exitPortal.checkIfCouldTouch(
          await this.player.getCoordinate(), 1, 1)) === true) {
          this.gameState.next(LavaState.GotOutWithMinRequiredWisps);
        }
      }
    }
  }

  private checkWispsCloseToRalph() {
    for (let wisp of this.mapWisps) {
      this.checkWispCloseToRalph(wisp);
    }
  }

  private async checkWispCloseToRalph(wisp: Wisp) {
    if ((await wisp.checkIfCouldCatch(this.player.getCoordinate(),
      this.playerInfluenceRadius,
      this.playerInfluenceRadius)) === true) {
      this.caughtWisp(wisp);
    }
  }

  private caughtWisp(wisp: Wisp) {
    if (wisp.performCatch()) {
      if (this.gameState.getValue() === LavaState.Started) {
        this.gameState.next(LavaState.CaughtWisp);
      }
      this.numberOfWispsCaught += 1;
      if (isDebug()) {
        if (this.numberOfWispsCaught > 1) {
          this.gameState.next(LavaState.CaughtAllWisps);
        } else if (true) {
          this.gameState.next(LavaState.CaughtMinRequiredWisps);
          for (let i = 0; i < 5; i += 1) {
            const exitPortal = this.exitPortalsHidden.pop();
            exitPortal.setShown();
            this.exitPortalsOpened.push(exitPortal);
          }
        }
      } else if (this.numberOfWispsCaught === this.mapWisps.length) {
        this.gameState.next(LavaState.CaughtAllWisps);
      } else if (this.numberOfWispsCaught > 0.6 * this.mapWisps.length) {
        this.gameState.next(LavaState.CaughtMinRequiredWisps);
        const exitPortal = this.exitPortalsHidden.pop();
        exitPortal.setShown();
        this.exitPortalsOpened.push(exitPortal);
      }
    }
    if (this.playerInfluenceRadius < 5) {
      const newInfluenceRadius =
        Math.floor(100 * Math.min(this.playerInfluenceRadius * 1.1, 5)) / 100;
      const diff = newInfluenceRadius - this.playerInfluenceRadius;
      this.turnService.register(new TurnEventSubscription(1000, sub => {
        sub.unsubscribe();
        if (this.playerInfluenceRadius >= 1) {
          this.playerInfluenceRadius -= diff;
        }
      }));
      this.playerInfluenceRadius += diff;
    }
  }

  public currentRadius() {
    return Math.floor(this.playerInfluenceRadius * 10) / 10;
  }

  public addNotification(texts: string[]) {
    if (texts.length > 0) {
      this.notificationText.push(...texts);
      this.turnService.register(new TurnEventSubscription(1000, event => {
        const i = this.notificationText.indexOf(texts[0]);
        this.notificationText.splice(i, texts.length);
        event.unsubscribe();
      }));
    }
  }

  private gameOver(finishMethod: "Gate" | "Wisps" | "Debug") {
    let name: string;
    if (finishMethod !== "Debug") {
      this.player.playerSpeed.stop();
    }
    const dialogRef = this.dialog.open(
      LavaGameFinishComponent,
      { width: "600px", data: { name, time: this.secondsPassed } });

    dialogRef.afterClosed().subscribe(name => {
      this.backendService.gameOver(name, this.secondsPassed, finishMethod);
    });
  }

  public showLeaderboard(leaderboard: LeaderboardData) {
    const dialogRef = this.dialog.open(LavaLeaderboardComponent,
      { width: "600px", data: leaderboard });
  }
}
