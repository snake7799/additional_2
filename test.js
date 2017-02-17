const assert = require('assert');
const flatten = require('./src/index.js');

it('should check not correct params and return correct result (null)', () => {
  assert.deepEqual(flatten(null), []);
});

it('should check not correct params and return correct result (empty)', () => {
  assert.deepEqual(flatten(), []);
});

it('should check not correct params and return correct result (undefined)', () => {
  assert.deepEqual(flatten(undefined), []);
});

it('should check not correct params and return correct result (false)', () => {
  assert.deepEqual(flatten(false), []);
});

it('should check not correct params and return correct result (number)', () => {
  assert.deepEqual(flatten(5), []);
});

it('should return the same array if flat is not needed (empty)', () => {
  assert.deepEqual(flatten([]), []);
});

it('should return the same array if flat is not needed (easy)', () => {
  assert.deepEqual(flatten([123, 'hello']), [123, 'hello']);
});

it('should flatten array 1', () => {
  assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
});

it('should flatten array 2', () => {
  assert.deepEqual(flatten([[1,2, [3]], 4]), [1, 2, 3, 4]);
});

it('should flatten array 3', () => {
  assert.deepEqual(flatten([1, [2, [3, [4], [5]], ]]), [1, 2, 3, 4, 5]);
});

it('should flatten array 4', () => {
  assert.deepEqual(flatten(['a', [], [[[5]]], [6]]), ['a', 5, 6]);
});

it('should flatten array 5', () => {
  assert.deepEqual(flatten([[[[undefined]]]]), [undefined]);
});

it('should flatten array 6', () => {
  assert.deepEqual(flatten([[[[[[[[[null]]], false]]]]]]), [null, false]);
});

it('should flatten array 7', () => {
  assert.deepEqual(flatten([[[[['']], [[[[[[[null]]]]], 3]]]]]), ['', null, 3]);
});

it('should flatten array 8', () => {
  assert.deepEqual(flatten([[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), []);
});
