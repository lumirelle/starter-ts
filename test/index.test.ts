import { describe, expect, it } from 'bun:test'
import { one } from 'pkg-placeholder'

describe('test', () => {
  it('should pass', () => {
    expect(one).toEqual(1)
  })
})
