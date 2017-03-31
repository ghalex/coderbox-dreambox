import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

/** Store */
import createStore from './store'

/** Routing */
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/** Pages */
import { HomePage } from 'pages'

document.startApp = function (container) {
  const store = createStore()
  const history = syncHistoryWithStore(hashHistory, store)

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={HomePage} />
      </Router>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
