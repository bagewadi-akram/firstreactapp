import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">{props.title}</a>
    <button className="btn btn-dark" type="submit">Log in</button>
  </div>
</nav>
  )
}
