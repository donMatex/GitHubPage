const build = require("./config/esbuild.defaults.js")

/**
 * @typedef { import("esbuild").BuildOptions } BuildOptions
 * @type {BuildOptions}
 */
const esbuildOptions = {
  publicPath: "/GitHubPage/_bridgetown/static", // <- dodano publicPath
  plugins: [
    // add new plugins here...
  ],
  globOptions: {
    excludeFilter: /\.(dsd|lit)\.css$/
  }
}

build(esbuildOptions)
