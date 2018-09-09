export const appArguments = require("minimist")(process.argv.slice(2)) as {
  _: string[];
  port?: number;
  servePath?: string;
};
