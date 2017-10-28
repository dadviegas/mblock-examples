import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, Route, Switch } from 'react-router-dom'

import HeaderWithRouter from './common/app/Header'
import Home from './views/Home'
import About from './views/About'
import { Segment } from 'semantic-ui-react'

const App = (<div>
  <HeaderWithRouter />

  <Segment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </Switch>
  </Segment>
</div>
)

export default App
