/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1, no-magic-numbers: 1, id-length: 1 */

/* global JSON:true, expect, module, require, describe, it, xit, returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var numIsFinite;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    numIsFinite = require('../../index.js');
  } else {
    numIsFinite = returnExports;
  }

  var ifFunctionsHaveNamesIt = function foo() {}.name === 'foo' ? it : xit;

  var integers = [5295, -5295, -9007199254740991, 9007199254740991, 0, -0];
  var infinities = [Infinity, -Infinity];

  var valueOfThree = {
    valueOf: function () {
      return 3;
    }
  };

  var valueOfNaN = {
    valueOf: function () {
      return NaN;
    }
  };

  var valueOfThrows = {
    valueOf: function () {
      throw Object(17);
    }
  };

  var toStringThrows = {
    toString: function () {
      throw Object(42);
    }
  };

  var toPrimitiveThrows = {
    toString: function () {
      throw Object(42);
    },
    valueOf: function () {
      throw Object(17);
    }
  };

  var nonNumbers = [
    undefined,
    true,
    false,
    null,
    {},
    [],
    'str',
    '',
    valueOfThree,
    valueOfNaN,
    valueOfThrows,
    toStringThrows,
    toPrimitiveThrows,
    /a/g
  ];

  var expectFalse = function (item) {
    expect(item).toBe(false);
  };

  var expectTrue = function (item) {
    expect(item).toBe(true);
  };

  describe('numIsFinite', function () {
    ifFunctionsHaveNamesIt('has the right name', function () {
      expect(numIsFinite.name).toBe('isFinite');
    });

    it('has the right arity', function () {
      expect(numIsFinite.length).toBe(1);
    });

    it('should work', function () {
      integers.map(numIsFinite).forEach(expectTrue);
      infinities.map(numIsFinite).forEach(expectFalse);
      expect(numIsFinite(Infinity)).toBe(false);
      expect(numIsFinite(-Infinity)).toBe(false);
      expect(numIsFinite(NaN)).toBe(false);
      expect(numIsFinite(4)).toBe(true);
      expect(numIsFinite(4.5)).toBe(true);
      expect(numIsFinite('hi')).toBe(false);
      expect(numIsFinite('1.3')).toBe(false);
      expect(numIsFinite('51')).toBe(false);
      expect(numIsFinite(0)).toBe(true);
      expect(numIsFinite(-0)).toBe(true);
      expect(numIsFinite(valueOfThree)).toBe(false);
      expect(numIsFinite(valueOfNaN)).toBe(false);
      expect(numIsFinite(valueOfThrows)).toBe(false);
      expect(numIsFinite(toStringThrows)).toBe(false);
      expect(numIsFinite(toPrimitiveThrows)).toBe(false);
    });

    it('should not be confused by type coercion', function () {
      nonNumbers.map(numIsFinite).forEach(expectFalse);
    });
  });
}());
