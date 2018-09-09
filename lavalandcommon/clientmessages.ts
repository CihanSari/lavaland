export enum ClientMessageReasons {
  GameSessionRequest,
  MapRequest,
  MapFinished,
  LeaderboardRequest
}

export interface LavalandClientMessageBase {
  gameId?: string;
}

export interface GameSessionRequest extends LavalandClientMessageBase {
  gameId?: never;
}

export interface MapFinished extends LavalandClientMessageBase {
  gameId: string;
  duration: number;
  name: string;
  finishMethod: "Gate" | "Wisps" | "Debug";
}

export interface LeaderboardRequest extends LavalandClientMessageBase {
  gameId?: never;
  finishMethod: "Gate" | "Wisps" | "Debug";
}

export type LavalandClientMessage =
  | GameSessionRequest
  | MapFinished
  | LeaderboardRequest;


export const apiPaths = {
  [ClientMessageReasons.GameSessionRequest]: "api/gamesession",
  [ClientMessageReasons.LeaderboardRequest]: "api/leaderboard",
  [ClientMessageReasons.MapFinished]: "api/mapfinished"
};