import * as path from "path";
import { serverLogger } from "./lavalog";
import { Webserver } from "./webserver";
import { appArguments } from "./arguments";

export function main() {
  serverLogger.info("Application started");
  const servePath = appArguments.servePath
    ? path.join(__dirname, "../..", appArguments.servePath)
    : path.join(__dirname, "../lavaland-gui");
  const port = Number(process.env.PORT) || appArguments.port || 8080;
  console.log(`Serving: ${servePath}`)
  const webserver = new Webserver(port, servePath);
  serverLogger.info("Server started");
  return webserver;
}
