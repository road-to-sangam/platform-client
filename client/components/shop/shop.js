import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../common/header'
import Footer from '../common/footer'
import ShopLogin from './login'
import ShopSignUp from './sign-up'
import RootShop from './root-shop'
import { tryGetUserInfo } from '../../redux/reducers/authentication'

const Shop = (props) => {
  useEffect(() => {
    const getUserInfoAsync = props.tryGetUserInfo
    getUserInfoAsync()
  }, [])
  return (
    <div className="main-shop">
      <Header />
      <div className="main-shop-body">
        <Switch>
          <Route exact path="/shop" component={RootShop} />
          <Route exact path="/shop/login" component={ShopLogin} />
          <Route exact path="/shop/sign-up" component={ShopSignUp} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

Shop.propTypes = {
  tryGetUserInfo: PropTypes.func.isRequired
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ tryGetUserInfo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Shop)
