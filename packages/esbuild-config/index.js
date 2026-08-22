const { build, context } = require("esbuild");

const run = async ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  const dev = process.argv.includes("--dev");
  const watch = process.argv.includes("--watch");
  const minify = !dev;

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    external,
    ...config,
  };

  const configs = [
    {
      ...baseConfig,
      format: "esm",
    },
    {
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    },
  ];

  try {
    if (watch) {
      const contexts = await Promise.all(
        configs.map((config) => context(config)),
      );

      await Promise.all(contexts.map((ctx) => ctx.watch()));

      console.log("Watching for changes...");
      return;
    }

    await Promise.all(configs.map((config) => build(config)));

    console.log("Build completed.");
  } catch (error) {
    console.error("Build failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = run;
