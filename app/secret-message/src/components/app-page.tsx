import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { AppMeta } from 'mvp-common-layout/src/app-meta'
import { createAppTheme } from 'mvp-common-layout/src/app-theme'
import { useOrientationEffect } from 'mvp-common-layout/src/window-hooks'

const appTheme = createAppTheme({
  background: 'gray',
  primary: 'green',
})

const useAppPage = () => {
  useOrientationEffect()
}

export const AppPage = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAppPage()

  return (
    <ChakraProvider theme={appTheme}>
      <AppMeta />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
