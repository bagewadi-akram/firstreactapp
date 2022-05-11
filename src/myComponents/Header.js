import React from 'react'


export default function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>{props.title}</a>
    <button className="btn btn-dark" type="submit">Log in</button>
  </div>
</nav>
  )
}
