import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import Header from '../common/header'
import Footer from '../common/footer'
import ShopLogin from './login'
import RootShop from './root-shop'

const Shop = () => {
  return (
    <div className="main-shop">
      <Header />
      <div className="main-shop-body">
        <Switch>
          <Route exact path="/shop" component={RootShop} />
          <Route exact path="/shop/login" component={ShopLogin} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
