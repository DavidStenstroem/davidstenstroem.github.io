import GlobalStyle from '~/style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import React, { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import theme from '~/style/theme'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
