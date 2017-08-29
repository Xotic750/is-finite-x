/**
 * @file ES6-compliant shim for Number.isFinite.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite|20.1.2.2 Number.isFinite ( number )}
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-finite-x
 */

'use strict';

var nativeNumberIsFinite = typeof Number.isFinite === 'function' && Number.isFinite;

var $isFinite;
if (nativeNumberIsFinite) {
  try {
    if (nativeNumberIsFinite(require('max-safe-integer')) && nativeNumberIsFinite(Infinity) === false) {
      $isFinite = Number.isFinite;
    }
  } catch (ignore) {}
}

if (Boolean($isFinite) === false) {
  var $isNaN = require('is-nan');
  $isFinite = function isFinite(number) {
    return typeof number === 'number' && $isNaN(number) === false && number !== Infinity && number !== -Infinity;
  };
}

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 * @example
 * var numIsFinite = require('is-finite-x');
 *
 * numIsFinite(Infinity);  // false
 * numIsFinite(NaN);       // false
 * numIsFinite(-Infinity); // false
 *
 * numIsFinite(0);         // true
 * numIsFinite(2e64);      // true
 *
 * numIsFinite('0');       // false, would've been true with
 *                         // global isFinite('0')
 * numIsFinite(null);      // false, would've been true with
 */
module.exports = $isFinite;
