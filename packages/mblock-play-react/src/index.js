import React from 'react'
import ReactDOM from 'react-dom'
import Root from './App'
import './assets/general.scss'
import {AppContainer} from 'react-hot-loader'

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

module.hot && module.hot.accept();
