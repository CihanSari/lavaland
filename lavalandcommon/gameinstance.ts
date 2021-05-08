import { GameMap } from ".";
import { v4 as uuidv4 } from 'uuid';

export class GameInstance {
  readonly id = uuidv4();
  public onclose: Function = () => { };
  constructor(readonly map: GameMap) { }
  public gameSessionSent = false;
  public container: Record<string, any> = {};
}

export const activeGames: Map<string, GameInstance> = new Map();