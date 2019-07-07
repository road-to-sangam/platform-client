import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { historyPush } from '../../redux/reducers/authentication'

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const generateMobileMenu = () => { // eslint-disable-line consistent-return
    if (mobileMenu) {
      return (
        <div className="common-header-mobileMenu">
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Home
          </div>
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/shop/sign-up')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Sign Up
          </div>
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/shop/cart')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Cart
          </div>
          <div
            className="common-header-mobileMenu-item"
            onClick={() => {
              props.historyPush('/shop/login')
              setMobileMenu(false)
            }}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Login
          </div>
        </div>
      )
    }
  }

  return (
    <div className="common-header">
      <div className="common-header-centering">
        <div
          className="common-header-icon icon-globe"
          onClick={() => props.historyPush('/shop')}
          onKeyDown={() => {}}
          tabIndex={0}
          role="button"
        />
        {/* desktop links lg/xl breakpoints */}
        <div className="common-header-links">
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Home
          </div>
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/shop/sign-up')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Sign Up
          </div>
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/shop/cart')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Cart
          </div>
          <div
            className="common-header-links-item"
            onClick={() => props.historyPush('/shop/login')}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            Login
          </div>
        </div>
        {/* mobile links xs/sm/md breakpoints */}
        <div
          className="common-header-mobilelinks icon-menu"
          onClick={() => { setMobileMenu(!mobileMenu) }}
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
        />
      </div>
      {/* mobile links xs/sm/md breakpoints */}
      {generateMobileMenu()}
    </div>
  )
}

Header.propTypes = {
  historyPush: PropTypes.func.isRequired
}
const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ historyPush }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
