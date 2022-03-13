import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider } from 'react-apollo'
import theme from './theme'
import { App } from './containers'
import { client } from './apollo'

const history = createBrowserHistory()

const createRouter = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
)

export default createRouter
