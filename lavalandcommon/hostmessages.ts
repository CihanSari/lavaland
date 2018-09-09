import { WorldCoordinates, GameMap } from "./worldcoordinates";

export enum HostMessageReasons {
  GameSessionRequestResponse,
  MapFinishedResponse,
  GameNotFound,
  LeaderboardResponse
}

export interface LavalandHostMessageBase {
  messageType: HostMessageReasons;
}

export interface GameSessionRequestResponse extends LavalandHostMessageBase {
  messageType: HostMessageReasons.GameSessionRequestResponse;
  gameId: string;
  gameMap: GameMap;
}

export interface GameNotFound extends LavalandHostMessageBase {
  messageType: HostMessageReasons.GameNotFound;
  gameId: string;
}

export interface MapFinishedResponse extends LavalandHostMessageBase {
  messageType: HostMessageReasons.MapFinishedResponse;
  gameId: string;
  leaderboard: {name:string, duration: number}[];
  rank: number,
  finishMethod: "Gate" | "Wisps" | "Debug";
}

export interface LeaderboardResponse extends LavalandHostMessageBase {
  messageType: HostMessageReasons.LeaderboardResponse;
  leaderboard: {name:string, duration: number}[];
  duration: number;
  finishMethod: "Gate" | "Wisps" | "Debug";
}

export type LavalandHostMessage =
  | GameSessionRequestResponse
  | MapFinishedResponse
  | GameNotFound
  | LeaderboardResponse;
