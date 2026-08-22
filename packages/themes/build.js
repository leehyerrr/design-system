import run from "@foundation/esbuild-config";
// import pkg from './package.json' assert { type: 'json' };
import pkg from "./package.json" with { type: "json" };

run({
  pkg,
});
