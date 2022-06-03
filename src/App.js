import React from 'react'
import { Header } from './components/Styles/Header.style'
import { Footer } from './components/Styles/Footer.style'
import Main from './components/Main'
import GlobalStyles from './components/Styles/Global'
import { ThemeProvider } from 'styled-components'
import Theme from './components/Styles/Theme'

function App () {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header>Memory Card</Header>
      <Main />
      <Footer>Made in BCN by santipu_</Footer>
    </ThemeProvider>
  )
}

export default App
