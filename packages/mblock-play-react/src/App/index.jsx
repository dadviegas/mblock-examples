import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Core from './Core'

import Home from '../views/Home'
import About from '../views/About'

const App = () => (
  <BrowserRouter>
    <Core>
      <Route key={'home'} path={'/'} exact={true} component={Home} />
      <Route key={'about'} path={'/about'} exact={true} component={About} />
    </Core>
  </BrowserRouter>
)

export default App
