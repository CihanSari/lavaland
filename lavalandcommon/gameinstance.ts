import { GameMap } from ".";
import uuid = require("uuid");

export class GameInstance {
  readonly id = uuid();
  public onclose: Function = () => { };
  constructor(readonly map: GameMap) { }
  public gameSessionSent = false;
  public mapSent = false;
  public container: Record<string, any> = {};
}

export const activeGames: Map<string, GameInstance> = new Map();