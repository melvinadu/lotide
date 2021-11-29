// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findkey: findKey,
  lettersPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects
};