import { promises as fsp } from "fs";
import * as chokidar from 'chokidar';
import { dirname, normalize, join } from 'path';
import { serverLogger as logger } from './lavalog'
const { stat, readFile, writeFile, mkdir } = fsp;

export async function initOrReadFile<T>(filePath: string, v?: T) {
  try {
    await stat(filePath);
  } catch (err) {
    logger.info(`initOrReadFile()::Creating file to read: ${filePath}`);
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(v));
  }
  logger.silly(`initOrReadFile()::File model read: ${filePath}`);
  const fileContent = await readFile(filePath);
  return JSON.parse(fileContent.toString()) as T;
}
export class FoolsWatcherSubscription<T> {
  constructor(public set: (data: T) => Promise<void>, public unsubscribe: () => Promise<void>) { }
}
class FoolsFileWatcher<T> {
  private myWatcher!: chokidar.FSWatcher;
  private filePath!: string;

  public onchange: ((data: T) => void)[] = [];
  constructor(private fallbackValue?: T) { }
  public async init(filePath: string) {
    try {
      this.filePath = filePath;
      try {
        await stat(this.filePath);
      } catch (err) {
        logger.info(
          `FoolsFileWatcher::init()::Creating file to watch: ${this.filePath}`
        );
        await mkdir(dirname(this.filePath), { recursive: true });
        await writeFile(this.filePath, JSON.stringify(this.fallbackValue));
      }
      logger.silly(
        `FoolsFileWatcher::init()::File watch initializing: ${this.filePath}`
      );
      if (this.myWatcher != null) {
        this.myWatcher.close();
      }
      this.myWatcher = chokidar.watch(this.filePath, {
        persistent: true,
        depth: 0,
      });
      this.myWatcher.on('change', () => this.onFileChange());
      this.onFileChange();
      return new FoolsWatcherSubscription(
        async (nextValue) => {
          await writeFile(this.filePath, JSON.stringify(nextValue));
        },
        async () => {
          if (this.myWatcher != null) {
            await this.myWatcher.close()
          }
        });
    } catch (err) {
      logger.error(
        `FoolsFileWatcher::init()::Failed to watch file!: ${err}`
      );
    }
  }
  private async onFileChange() {
    logger.silly(
      `FoolsFileWatcher::onFileChange()::File changed: ${this.filePath}`
    );
    try {
      const fileContent = await readFile(this.filePath);
      const data = JSON.parse(fileContent.toString()) as T;
      try {
        logger.silly(
          `FoolsFileWatcher::onFileChange()::File changes sending: ${this.filePath}`
        );
        this.onchange.forEach((f) => f(data));
        logger.silly(
          `FoolsFileWatcher::onFileChange()::File changes sent: ${this.filePath}`
        );
      } catch (err) {
        logger.error(
          `FoolsFileWatcher::onFileChange()::Failed to send data from ${this.filePath}: ${err}`
        );
      }
    } catch (err) {
      logger.error(
        `FoolsFileWatcher::onFileChange()::Failed to parse data from ${this.filePath}: ${err}`
      );
    }
  }
}
function initAndWatchModel<T>(
  filePathUnnormalized: string,
  callback: (data: T) => void,
  fallbackValue?: T
) {
  const filePathNormalized = normalize(filePathUnnormalized);
  const watcher = new FoolsFileWatcher<T>(fallbackValue);
  watcher.onchange.push(callback);
  return watcher.init(filePathNormalized);
}

class GameInterface {
  constructor(public name: string, public duration: number, public ip: string, public method: string) { }
}

class LavaDBInterface {
  constructor(public games: { [id: string]: GameInterface; }) { }
}

export class lavaDB {
  private subscription!: FoolsWatcherSubscription<LavaDBInterface>;
  private dbContent!: LavaDBInterface;
  constructor(private dbpath: string = join(__dirname, "../lavalanddata.json")) {
    initAndWatchModel<LavaDBInterface>(this.dbpath, (data) => {
      this.dbContent = data;
    }, { games: {} }).then(sub => {
      if (sub) {
        this.subscription = sub;
      }
    });
  }

  async addGame(name: string, duration: number, ip: string, method: string, gameId: string) {
    const dbContentNext = this.dbContent;
    dbContentNext.games[gameId] = ({ name, duration, ip, method });
    await this.subscription.set(dbContentNext);
  }

  public getGames(method: string) {
    const dbContentRes = this.dbContent;
    const gameIds = Object.keys(dbContentRes.games);
    const gameIdsFiltered = gameIds.filter((idStr) => {
      return dbContentRes.games[idStr].method == method;
    });
    const gameIdsSorted = gameIdsFiltered.sort((idStrA, idStrB) => {
      const durA = dbContentRes.games[idStrA].duration;
      const durB = dbContentRes.games[idStrB].duration;
      return durA - durB;
    });
    return gameIdsSorted.map((idStr) => {
      const { name, duration } = dbContentRes.games[idStr];
      return { name, duration };
    }) as { name: string; duration: number }[];
  }
}

const db = new lavaDB();
export function getLavalandDatabase() {
  return db;
}