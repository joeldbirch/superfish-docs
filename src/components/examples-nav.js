import React from 'react'
import { Link } from 'gatsby'

const activeStyle = {
  backgroundColor: 'white',
  color: '#3273dc',
  opacity: 1,
  fontWeight: '600',
}

const ExamplesNav = () => (
  <div className="hero-foot">
    <div className="container">
      <nav className="tabs  is-centered  is-boxed">
        <ul role="navigation" aria-label="Links to Superfish examples">
          <li aria-labelledby="nav-ex-basic">
            <Link to="/examples/" activeStyle={activeStyle} id="nav-ex-basic">
              Basic
            </Link>
          </li>
          <li aria-labelledby="nav-ex-vertical">
            <Link
              to="/examples/vertical/"
              activeStyle={activeStyle}
              id="nav-ex-vertical"
            >
              Vertical
            </Link>
          </li>
          <li aria-labelledby="nav-ex-nav-bar">
            <Link
              to="/examples/nav-bar/"
              activeStyle={activeStyle}
              id="nav-ex-nav-bar"
            >
              Nav-bar
            </Link>
          </li>
          <li aria-labelledby="nav-ex-supersubs">
            <Link
              to="/examples/supersubs/"
              activeStyle={activeStyle}
              id="nav-ex-supersubs"
            >
              Supersubs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default ExamplesNav
