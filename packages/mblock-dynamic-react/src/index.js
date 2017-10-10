import React from 'react'
import ReactDOM from 'react-dom'
import Root from './App/index'
import './assets/general.scss'

const render = Component => {
  const AppContainer = require('react-hot-loader').AppContainer
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./App', () => { render(require('./App').default) })
}
