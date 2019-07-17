import numberIsNaN from 'is-nan-x';
import INFINITY from 'infinity-x';
/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var isFinite = function isFinite(number) {
  return typeof number === 'number' && numberIsNaN(number) === false && number !== INFINITY && number !== -INFINITY;
};

export default isFinite;

//# sourceMappingURL=is-finite-x.esm.js.map