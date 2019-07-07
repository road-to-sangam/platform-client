import React from 'react'
import PropTypes from 'prop-types'

const RootShop = (props) => {
  return (
    <div className="root-shop">
      {/* WELCOME PAGE */}
      <div className="root-shop-welcome">
        <div className="root-shop-welcome-links">
          <div
            className="root-shop-welcome-link"
            onClick={() => props.history.push('/shop/sign-up')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Sign Up
          </div>
          <div
            className="root-shop-welcome-link"
            onClick={() => props.history.push('/shop/login')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Login
          </div>
        </div>
      </div>
      {/* PAGINATION */}
    </div>
  )
}

RootShop.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
export default RootShop
