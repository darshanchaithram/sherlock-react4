import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Challenge1 from './views/challenge-1'
import Vicious7 from './views/vicious-7'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Challenge1} exact path="/challenge-1" />
        <Route component={Vicious7} exact path="/vicious-7" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
