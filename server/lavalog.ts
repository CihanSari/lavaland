import * as winston from "winston";
const mkdirp = require("mkdirp");

function makeServerLogger() {
  mkdirp("./log/server");
  const serverLogger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    ),
    level: "silly",
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({
        filename: "./log/server/error.log",
        level: "error"
      }),
      new winston.transports.File({ filename: "./log/server/combined.log" })
    ]
  });

  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== "production") {
    serverLogger.add(
      new winston.transports.Console({
        format: winston.format.simple()
      })
    );
  }

  return serverLogger;
}

export const serverLogger = makeServerLogger();

export function makeBrowserLogger(browserUID: string) {
  const browserPath = `./log/browser/${(new Date()).toISOString().split(':').join('-') + browserUID}/`;
  mkdirp(browserPath);
  const browserLogger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    ),
    level: "silly",
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({
        filename: `${browserPath}/error.log`,
        level: "error"
      }),
      new winston.transports.File({ filename: `${browserPath}combined.log` })
    ]
  });
  return browserLogger;
}
