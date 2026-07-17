import { test, expect } from '@playwright/test';
import fast_cartesian from 'fast-cartesian';

test('fast-cartesian', { tag: [ '@fast-cartesian', ] }, () => {
  // https://github.com/ehmicky/fast-cartesian/blob/main/README.md
  let sets: any[][], expected, actual
  test.step('Examples from README', () => {
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
  })
  test.step('More examples', () => {
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
  })
})