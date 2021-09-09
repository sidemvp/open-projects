import { invertCase } from 'mvp-app-text-case/src/text-case/invert-case'

describe('invertCase', () => {
  it('should transform text to invert case', () => {
    expect(invertCase.transform('test STRING')).toBe('TEST string')
  })
})
