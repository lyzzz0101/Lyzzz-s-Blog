const path = require("path")
const { override, babelInclude } = require("customize-cra")

module.exports = override(
  babelInclude([
    path.resolve("src"),
    path.resolve("node_modules/@babel/runtime"),
  ])
)
