import * as path from "path";
import * as sqlite3 from "sqlite3";

export class lavaDB {
  private db: sqlite3.Database;
  constructor(dbpath: string = path.join(__dirname, "../lavaland.sqlite3")) {
    this.db = new sqlite3.Database(dbpath);
    this.db.serialize(() => {
      this.db.run(
        "CREATE TABLE IF NOT EXISTS games_table (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, ip TEXT, method TEXT, duration INTEGER)"
      );
    });
  }

  async addGame(name: string, duration: number, ip: string, method: string) {
    const idPromise = new Promise<number>((resolve, reject) => {
      this.db.run(
        `INSERT INTO games_table (name, duration, ip, method) VALUES ('${name}', '${duration}', '${ip}', '${method}')`,
        function(err: any) {
          if (err == null) {
            resolve(this.lastID);
          } else {
            reject(err);
          }
        }
      );
    });
    return await idPromise;
  }

  public getGames(method: string) {
    const res: { name: string; duration: number }[] = [];
    const query = `SELECT * FROM games_table WHERE method='${method}' ORDER BY duration;`;
    return new Promise<{ name: string; duration: number }[]>(
      (resolve, reject) => {
        this.db.each(
          query,
          (err, row) => {
            if (err != null) {
              console.error(err);
              reject(err);
            } else {
              const { name, duration } = row;
              res.push({ name, duration });
            }
          },
          () => {
            resolve(res);
          }
        );
      }
    );
  }

  // getRank(id: number) {
  //   this.db.run(`select  p1.*
  //   ,       (
  //           select  count(*)
  //           from    duration as p2
  //           where   p2.age > p1.age
  //           ) as AgeRank
  //   from    People as p1
  //   where   p1.Name = 'Juju bear'`);

  //   this.db.each(
  //     "SELECT duration, name, ip, method FROM games_table ORDER BY duration",
  //     (err, row) => {
  //       console.log(
  //         row.name +
  //           ": " +
  //           row.duration +
  //           " with ip: " +
  //           row.ip +
  //           " using method " +
  //           row.method
  //       );
  //     }
  //   );
  // }
}

const db = new lavaDB();
export function getLavalandDatabase() {
  return db;
}