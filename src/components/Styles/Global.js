import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

`

export default GlobalStyles
