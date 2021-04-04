import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Web3ContextProvider from './context/Web3Context'
import './index.css'
import Dashboard from './views/Dashboard'
import HomePage from './views/HomePage'

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

const root = document.querySelector('#root')

render(
  <Web3ContextProvider>
    <App />
  </Web3ContextProvider>,
  root
)