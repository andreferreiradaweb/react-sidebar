import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={() => <>Hello router</>}/>
      </Switch>
    </BrowserRouter>
  )
}


export default Router