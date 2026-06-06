import { describe, expect, it } from 'vitest'
import { one, two } from '../src'

describe('test', () => {
  it('should pass', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
