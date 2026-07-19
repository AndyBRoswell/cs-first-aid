import { test, expect } from 'vitest';
import fast_cartesian from 'fast-cartesian';

test('fast-cartesian', { tags: [ 'fast-cartesian', ] }, () => {
  let sets: any[][], expected, actual

  // https://github.com/ehmicky/fast-cartesian/blob/main/README.md
  sets = [
    [ 'red', 'blue' ],
    [ 'circle', 'square' ],
  ]
  actual = fast_cartesian(sets)
  expected = [
    [ 'red', 'circle' ],
    [ 'red', 'square' ],
    [ 'blue', 'circle' ],
    [ 'blue', 'square' ],
  ]
  expect(actual).toEqual(expected)
  sets = [
    [ 'red', 'blue' ],
    [ 'circle', 'square' ],
  ].map(Object.entries)
  actual = fast_cartesian(sets)
  expected = [
    [ [ '0', 'red' ], [ '0', 'circle' ] ],
    [ [ '0', 'red' ], [ '1', 'square' ] ],
    [ [ '1', 'blue' ], [ '0', 'circle' ] ],
    [ [ '1', 'blue' ], [ '1', 'square' ] ],
  ]
  expect(actual).toEqual(expected)

  // examples from this project
  sets = [
    [
      [ 'G1C1c1', 'G1C1c2' ],
      [ 'G1C2c1', 'G1C2c2', 'G1C2c3', 'G1C2c4', ],
    ],
    [
      [ 'G2C1c1', ],
      [ 'G2C2c1', 'G2C2c2', 'G2C2c3' ],
      [ 'G2C3c1', 'G2C3c2' ],
    ],
    [
      [ 'G3C1c1' ],
    ],
  ]
  actual = fast_cartesian(sets)
  expect(actual).toHaveLength(2 * 3 * 1)
  expected = [
    [
      [ 'G1C1c1', 'G1C1c2' ], [ 'G2C1c1', ], [ 'G3C1c1' ],
    ],
    [
      [ 'G1C1c1', 'G1C1c2' ], [ 'G2C2c1', 'G2C2c2', 'G2C2c3' ], [ 'G3C1c1' ],
    ],
    [
      [ 'G1C1c1', 'G1C1c2' ], [ 'G2C3c1', 'G2C3c2' ], [ 'G3C1c1' ],
    ],
    [
      [ 'G1C2c1', 'G1C2c2', 'G1C2c3', 'G1C2c4', ], [ 'G2C1c1', ], [ 'G3C1c1' ],
    ],
    [
      [ 'G1C2c1', 'G1C2c2', 'G1C2c3', 'G1C2c4', ], [ 'G2C2c1', 'G2C2c2', 'G2C2c3' ], [ 'G3C1c1' ],
    ],
    [
      [ 'G1C2c1', 'G1C2c2', 'G1C2c3', 'G1C2c4', ], [ 'G2C3c1', 'G2C3c2' ], [ 'G3C1c1' ],
    ],
  ]
  expect(actual).toEqual(expected)

  sets = [
    [ [ 'unordered_author' ], [ 'ordered_author' ] ],
    [ [ 'title', 'subtitle' ] ],
    [ [ 'edition' ], [ 'date' ] ],
    [ [ 'volume', 'part' ] ]
  ]
  actual = fast_cartesian(sets)
  expected = [
    [
      [ 'unordered_author' ], [ 'title', 'subtitle' ], [ 'edition' ], [ 'volume', 'part' ]
    ],
    [
      [ 'unordered_author' ], [ 'title', 'subtitle' ], [ 'date' ], [ 'volume', 'part' ]
    ],
    [
      [ 'ordered_author' ], [ 'title', 'subtitle' ], [ 'edition' ], [ 'volume', 'part' ]
    ],
    [
      [ 'ordered_author' ], [ 'title', 'subtitle' ], [ 'date' ], [ 'volume', 'part' ]
    ],
  ]
  expect(actual).toEqual(expected)

  sets = [
    [ true ],
    [ true ],
    [ true, false ],
    [ true ],
  ]
  actual = fast_cartesian(sets)
  expected = [
    [ true, true, true, true ],
    [ true, true, false, true ]
  ]
  expect(actual).toEqual(expected)
})