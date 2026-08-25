import run from "@foundation/esbuild-config";
// import pkg from './package.json' assert { type: 'json' };
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import pkg from "./package.json" with { type: "json" };

const config = {
  plugins: [vanillaExtractPlugin()],
};

run({
  pkg,
  config,
});
