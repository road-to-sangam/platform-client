import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import Shop from './shop/shop'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/shop/*" component={Shop} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default Main
