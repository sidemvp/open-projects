import { customAlphabet } from 'nanoid'

export interface GenerateIdOptions {
  readonly hasLetters: boolean
  readonly hasNumbers: boolean
  readonly length: number
}

export const getDefaultOptions = (): GenerateIdOptions => ({
  hasLetters: true,
  hasNumbers: true,
  length: 24,
})

const getAlphabet = (options: GenerateIdOptions): string => {
  const { hasLetters, hasNumbers } = options

  return [
    hasLetters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : '',
    hasNumbers ? '0123456789' : '',
  ].join('')
}

export const generateId = (options: GenerateIdOptions): string | undefined => {
  const alphabet = getAlphabet(options)

  if (!alphabet) {
    return
  }

  return customAlphabet(alphabet, options.length)()
}
