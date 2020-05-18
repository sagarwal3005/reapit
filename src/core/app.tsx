import * as React from 'react'
import Router from './router'

import store from './store'
import { Provider } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import '@reapit/elements/dist/index.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: unset;
  }
`

const App = () => {
  return (
    <Provider store={store.reduxStore}>
      <Router />

      <GlobalStyle />
    </Provider>
  )
}

export default App
