<a
  href="https://travis-ci.org/Xotic750/is-finite-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-finite-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-finite-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-finite-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-finite-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-finite-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-finite-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-finite-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-finite-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-finite-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-finite-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-finite-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-finite-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-finite-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-finite-x"></a>

## is-finite-x

ES6-compliant shim for Number.isFinite.

**See**: [20.1.2.2 Number.isFinite ( number )](http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite)

<a name="exp_module_is-finite-x--module.exports"></a>

### `module.exports(number)` ⇒ <code>boolean</code> ⏏

This method determines whether the passed value is a finite number.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the given value is a finite number.

| Param  | Type            | Description                            |
| ------ | --------------- | -------------------------------------- |
| number | <code>\*</code> | The value to be tested for finiteness. |

**Example**

```js
import numIsFinite from 'is-finite-x';

console.log(numIsFinite(Infinity)); // false
console.log(numIsFinite(NaN)); // false
console.log(numIsFinite(-Infinity)); // false

console.log(numIsFinite(0)); // true
console.log(numIsFinite(2e64)); // true

console.log(numIsFinite('0')); // false, would've been true with
// global isFinite('0')
console.log(numIsFinite(null)); // false, would've been true with
```
