import render from 'mblock-react'
import App from './App'

render(App, 'root')

if (module.hot) {
  module.hot.accept()
}
