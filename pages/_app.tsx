import type { AppProps } from 'next/app'
import { FormyBoneUI } from '@bone-ui/formy-bone-ui'
import { FormyTeable } from '@common/fields'
import { injectGlobalStyle, setConfig } from '@fower/core'
import { devtools } from 'stook-devtools'
import { Formy } from '@formy/core'
import { Fragment } from 'react'
import { ModalContainer } from '@generated/ModalContainer'
import { ToastContainer } from '@bone-ui/toast'

import 'simplebar/dist/simplebar.min.css'
import '../config'
import '../styles/globals.css'

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

devtools.init()

Formy.use(FormyBoneUI)
Formy.use(FormyTeable)

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

injectGlobalStyle({
  a: {
    color: 'brand500',
    textDecoration: 'none',
    cursor: 'pointer',
  },
})

export default function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  return (
    <Layout>
      <ToastContainer></ToastContainer>
      <ModalContainer></ModalContainer>
      <Component {...pageProps} />
    </Layout>
  )
}
