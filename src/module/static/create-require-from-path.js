// Based on `Module.createRequireFromPath()`.
// Copyright Node.js contributors. Released under MIT license:
// https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js

import Module from "../../module.js"

import { dirname } from "../../safe/path.js"
import makeRequireFunction from "../internal/make-require-function.js"

function createRequireFromPath(filename) {
  const parent = new Module(filename)

  parent.filename = filename
  parent.paths = Module._nodeModulePaths(dirname(filename))
  return makeRequireFunction(parent)
}

export default createRequireFromPath
