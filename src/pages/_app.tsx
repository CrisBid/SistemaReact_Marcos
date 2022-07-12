import React ,{ ReactElement, ReactNode } from 'react'
import{ NextPage } from 'next'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from "next-auth/client"
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

import Head from 'next/head'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const TopProgressBar: any = dynamic(
  () => {
    return import("../components/LoadingBar");
  },
  { ssr: false },
);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeProvider theme={theme}>
      <TopProgressBar />
      <Head>
        <title>Sistema Novo Mundo</title>
      </Head>
      <Provider session={pageProps.session}>
        {
        getLayout(
          <Component {...pageProps} />)
        }  
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
