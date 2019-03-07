import React from 'react'
import { Link } from "gatsby"

const partiallyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ' is-active' : ''),
})

// component to also highlight when children are active
const PartiallyActiveLink = ({ className, ...rest }) => (
  <Link getProps={partiallyActive(className)} {...rest} />
)

const TheMenu = (props) => {

  return (
    <>
      <Link to="/" className="nav-item" activeClassName="is-active">Get Started</Link>
      <Link to="/options/" className="nav-item" activeClassName="is-active">Options</Link>
      <PartiallyActiveLink to="/examples/" className="nav-item" activeClassName="is-active">Examples</PartiallyActiveLink>
      <Link to="/faq/" className="nav-item" activeClassName="is-active">FAQ</Link>
      <Link to="/download/" className="nav-item" activeClassName="is-active">Support</Link>
    </>
  )
}

export default TheMenu