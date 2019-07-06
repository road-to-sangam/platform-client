import React, { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
/* eslint-disable */

const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [filteredList, setFilteredList] = useState([])
  const inputRef = useRef(null)
  useEffect(() => setFilteredList(props.list), [])
  const handleChange = () => (e) => {
    props.setValue({ name: e.target.value })
    setFilteredList(props.list.filter((listItem) => {
      const nameCheck = listItem.name && listItem.name.toLowerCase().includes(e.target.value.toLowerCase())
      const secondCheck = listItem.secondCheck && listItem.secondCheck.toLowerCase().includes(e.target.value.toLowerCase())
      return secondCheck || nameCheck
    }))
  }
  const generateDropdown = () => filteredList.map((listItem) => {
    return (
      <div
        key={listItem.numeric}
        className="common-dropdown-list-item"
        onClick={() => props.setValue(listItem)}
        onKeyDown={() => {}}
        tabIndex={0}
        role="button"
      >
        {listItem.name}
      </div>
    )
  })
  return (
    <div className={cx('common-dropdown', { 'common-dropdown-error': props.validation })}>
      <div className={cx('common-dropdown-list', { 'd-none': !dropdownOpen })}>{generateDropdown()}</div>
      <div className="common-dropdown-icon icon-globe" />
      <input
        className="common-dropdown-input"
        value={props.value.name}
        onChange={handleChange()}
        ref={inputRef}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setTimeout(() => setDropdownOpen(false), 300)}
        onKeyDown={(e) => {
          if (e.keyCode === 9) return props.setValue(filteredList[0] ? filteredList[0] : props.value)
          return undefined
        }}
        placeholder={props.placeholder}
      />
      <div
        className="common-dropdown-icon icon-arrow-down"
        onClick={() => inputRef.current.focus()}
        onKeyDown={() => {}}
        tabIndex={0}
        role="button"
      />
    </div>
  )
}

Dropdown.propTypes = {
  value: PropTypes.shape({ name: PropTypes.string }).isRequired,
  placeholder: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })).isRequired,
  setValue: PropTypes.func.isRequired,
  validation: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.bool])
}

Dropdown.propTypes = {
  validation: false
}
export default Dropdown
