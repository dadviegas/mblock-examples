import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Core from './Core'
import routes from './routes'

const App = () => (
  <BrowserRouter>
    <Core>
      {
        routes.map((route) => (
          <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
          />
        ))
      }
    </Core>
  </BrowserRouter>
)

export default App
