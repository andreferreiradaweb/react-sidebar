import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route  exact path="/" />
      </Switch>
    </BrowserRouter>
  )
}


export default Router