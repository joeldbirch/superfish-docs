import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaSuperpowers } from "react-icons/fa"


const Header = ({ siteTitle }) => (

    <div className="hero-head">
      <nav className="nav">
        <div className="container  container--wide">
          <div className="nav-left">
            <h1 className="nav-item">
              <a className="sitelogo  is-active" href="/">
                <span className="icon" style={{
                  verticalAlign: 'middle',
                  marginRight: '.2em',
                  fontSize: '24px',
                }} ><FaSuperpowers /></span><strong>Superfish</strong>
              </a>
            </h1>
          </div>
          <span id="NavToggle" className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div id="NavItems" className="nav-right  nav-menu">

            <Link to="/" className="nav-item" activeClassName="is-active">Get Started</Link>
            <Link to="/options/" className="nav-item" activeClassName="is-active">Options</Link>
            <Link to="/examples/" className="nav-item" activeClassName="is-active">Examples</Link>
            <Link to="/faq/" className="nav-item" activeClassName="is-active">FAQ</Link>
            <Link to="/download/" className="nav-item" activeClassName="is-active">Support</Link>

            <span className="nav-item  nav-item--paypal">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" className="paypalbutton">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="2006952" />
                <input title="Support Superfish development!" type="image" src="https://www.paypal.com/en_AU/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="Donate" />
              </form>
            </span>
          </div>
        </div>
      </nav>
    </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
