import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { AppMeta } from 'mvp-common-components/src/app-meta'
import { createAppTheme } from 'mvp-common-components/src/app-theme'
import { useOrientationEffect } from 'mvp-common-components/src/window-hooks'

const appTheme = createAppTheme({
  background: 'gray',
  primary: 'purple',
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
