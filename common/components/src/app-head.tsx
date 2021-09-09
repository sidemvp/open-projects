import NextHead from 'next/head'
import { FunctionComponent } from 'react'

export const AppHead: FunctionComponent = () => {
  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />
    </NextHead>
  )
}
