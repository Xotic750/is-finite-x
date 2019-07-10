import numIsFinite from 'src/is-finite-x';

const integers = [5295, -5295, -9007199254740991, 9007199254740991, 0, -0];
const infinities = [Infinity, -Infinity];

const valueOfThree = {
  valueOf() {
    return 3;
  },
};

const valueOfNaN = {
  valueOf() {
    return NaN;
  },
};

const valueOfThrows = {
  valueOf() {
    throw Object(17);
  },
};

const toStringThrows = {
  toString() {
    throw Object(42);
  },
};

const toPrimitiveThrows = {
  toString() {
    throw Object(42);
  },
  valueOf() {
    throw Object(17);
  },
};

const nonNumbers = [
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
  /a/g,
];

describe('numIsFinite', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof numIsFinite).toBe('function');
  });

  it('should work', function() {
    expect.assertions(24);
    integers.map(numIsFinite).forEach(function(item) {
      expect(item).toBe(true);
    });

    infinities.map(numIsFinite).forEach(function(item) {
      expect(item).toBe(false);
    });

    expect(numIsFinite()).toBe(false);
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

  it('should not be confused by type coercion', function() {
    expect.assertions(14);
    nonNumbers.map(numIsFinite).forEach((item) => expect(item).toBe(false));
  });
});
