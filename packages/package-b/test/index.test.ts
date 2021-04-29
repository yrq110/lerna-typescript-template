import { multiply } from '../src'

describe('test functions', () => {
  test('test multiply', () => {
    const product = multiply(2, 3)

    expect(product).toEqual(6)
  })
})
