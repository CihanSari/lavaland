import * as bodyParser from "body-parser";
import * as express from "express";
import { middlewareServeLavaland } from "./servelavaland";
import * as cors from "cors";
/**
 *
 *
 * @export
 * @class Webserver
 */
export class Webserver {
  private app: express.Application = express();

  /**
   *Creates an instance of Webserver.
   * @param {number} port
   * @param {string} servepath
   * @memberof Webserver
   */
  constructor(readonly port: number, readonly servepath: string) {
    //
    this.setup();
    this.app.listen(this.port);
  }

  /**
   *
   *
   * @private
   * @memberof Webserver
   */
  private setup() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(
      middlewareServeLavaland(this.servepath)
    );
  }
}
