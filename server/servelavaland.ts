import * as express from "express";
import {getRouter} from "./routes"


export function middlewareServeLavaland(pathToServe: string): express.Router {
  const res = express.Router();
  res.use((req, _, next) => {
    console.info(`Express: [${req.url}]`);
    next();
  });
  res.use(express.static(pathToServe));
  res.use(getRouter());
  res.use((req, res) => {
    console.error(`Express: [${req.url}] not found!`);
    res.sendStatus(404).send("Not found!");
  });
  return res;
}
