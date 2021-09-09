import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { AppHead } from 'mvp-common-components/src/app-head'
import { createAppTheme } from 'mvp-common-components/src/app-theme'
import { useOrientationEffect } from 'mvp-common-components/src/window-hooks'

const appTheme = createAppTheme({
  background: 'gray',
  primary: 'blue',
})

const useAppPage = () => {
  useOrientationEffect()
}

export const AppPage = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAppPage()

  return (
    <ChakraProvider theme={appTheme}>
      <AppHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
