require("esbuild").build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    outfile: "docs/js/main.js",
}).catch(() => process.exit(1))
