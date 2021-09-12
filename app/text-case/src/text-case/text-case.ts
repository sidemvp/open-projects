export interface TextCase {
  readonly name: string
  readonly transform: (text: string) => string
}
