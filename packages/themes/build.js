import esbuild from "esbuild";
import pkg from "./package.json" with { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;
const watch = process.argv.includes("--watch");
const external = Object.keys({
  ...pkg.devDependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  external,
};

const contexts = await Promise.all([
  esbuild.context({
    ...baseConfig,
    outdir: "dist",
    format: "esm",
  }),
  esbuild.context({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
]).catch(() => {
  console.error("build error");
  process.exit(1);
});

if (watch) {
  await Promise.all(contexts.map((ctx) => ctx.watch()));
} else {
  await Promise.all(contexts.map((ctx) => ctx.rebuild()));
  await Promise.all(contexts.map((ctx) => ctx.dispose()));
}
