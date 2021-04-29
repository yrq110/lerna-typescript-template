import { add } from '../src'

describe('test functions', () => {
  test('test add', () => {
    const sum = add(1, 1)

    expect(sum).toEqual(2)
  })
})
