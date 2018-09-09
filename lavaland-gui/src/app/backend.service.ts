import { Injectable } from "@angular/core";
import {
  ClientMessageReasons,
  GameMap,
  GameSessionRequestResponse,
  MapFinished,
  MapFinishedResponse
} from "../../../lavalandcommon";
import { Subject } from "rxjs";
import { LeaderboardData } from "./lava-leaderboard/lava-leaderboard.component";
import { isDebug } from './isDebug';

const devModeApiPaths = {
  [ClientMessageReasons.GameSessionRequest]: "http://localhost:8080/api/gamesession/",
  [ClientMessageReasons.LeaderboardRequest]: "http://localhost:8080/api/leaderboard/",
  [ClientMessageReasons.MapFinished]: "http://localhost:8080/api/mapfinished/",
};
const productionApiPaths = {
  [ClientMessageReasons.GameSessionRequest]: "/api/gamesession/",
  [ClientMessageReasons.LeaderboardRequest]: "/api/leaderboard/",
  [ClientMessageReasons.MapFinished]: "/api/mapfinished/",
}
const apiPaths = isDebug() ? devModeApiPaths : productionApiPaths;

@Injectable()
export class BackendService {
  private gameId: string = null;
  private map: Subject<GameMap> = new Subject();
  private leaderboard: Subject<LeaderboardData> = new Subject();
  readonly $map = this.map.asObservable();
  readonly $leaderboard = this.leaderboard.asObservable();
  constructor() {
    this.initGameSession();
  }

  private async initGameSession() {
    const response = await fetch(apiPaths[ClientMessageReasons.GameSessionRequest]);
    const gameSessionRequestResponse: GameSessionRequestResponse = await response.json();
    this.gameId = gameSessionRequestResponse.gameId;
    this.map.next(gameSessionRequestResponse.gameMap);
  }

  public async gameOver(
    name: string,
    duration: number,
    finishMethod: "Gate" | "Wisps" | "Debug"
  ) {
    const mapFinishedRequest: MapFinished = {
      duration,
      finishMethod,
      gameId: this.gameId,
      name
    };
    const response = await fetch(apiPaths[ClientMessageReasons.MapFinished], {
      method: 'post',
      body: JSON.stringify(mapFinishedRequest)
    });
    const mapFinishedResponse: MapFinishedResponse = await response.json();
    this.leaderboard.next(mapFinishedResponse.leaderboard);
  }
}
