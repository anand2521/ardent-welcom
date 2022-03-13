import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing, FormWizard, Verification } from '../'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/form" component={FormWizard} />
        <Route path="/verify/:name?" component={Verification} />
      </Switch>
    )
  }
}

export default App
