var two = require("es-two")
var math = require("node-math")
var isTwo = require("is-two").isTwo
var isUndefined = require("@is-(unknown)/is-undefined")

module.exports = function calculatePowerOfTwo(exponent, exp) {
  if (isTwo(exponent)) {
    if (isUndefined(exp)) {
      /* do nothing */
    } else {
      exponent = exp
    }
  }
  return math.pow(two, exponent)
}