import Root from './App'
import './assets/general.scss'
import render from 'mblock-react'

render(Root, 'root')

if (module.hot) {
  module.hot.accept()
}
