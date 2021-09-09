import { extendTheme, theme, withDefaultColorScheme } from '@chakra-ui/react'

export type ColorToken = keyof typeof theme.colors

export interface CreateAppThemeOptions {
  readonly background: ColorToken
  readonly primary: ColorToken
  readonly secondary?: ColorToken
}

export const createAppTheme = (options: CreateAppThemeOptions) => {
  return extendTheme(
    {
      colors: {
        background: theme.colors[options.background],
        primary: theme.colors[options.primary],
        ...(options.secondary ? { secondary: theme.colors[options.secondary] } : {}),
      },
      shadows: {
        outline: `0 0 0 1px ${theme.colors[options.background][700]}`,
      },
    },
    withDefaultColorScheme({ colorScheme: 'background' }),
  )
}
