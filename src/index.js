import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

/** Store */
import createStore from './store'

/** Routing */
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/** Pages */
import Application from 'app'
import { LandingPage } from 'pages'

document.startApp = function (container) {
  const store = createStore()
  const history = syncHistoryWithStore(hashHistory, store)

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Redirect from='/' to='landingpage' />
        <Route path='/' component={Application}>
          <Route path='/landingpage' component={LandingPage} />
        </Route>
      </Router>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
