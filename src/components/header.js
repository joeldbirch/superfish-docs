import React from 'react'
import { Link } from 'gatsby'
import TheMenu from './the-menu'
import { FaSuperpowers } from 'react-icons/fa'
import classNames from 'classnames'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({
      isMenuOpen: !state.isMenuOpen,
    }))
  }

  render() {
    const menuClass = classNames({
      'nav-right nav-menu': true,
      'is-open': this.state.isMenuOpen,
    })

    return (
      <div className="hero-head">
        <nav className="nav">
          <div className="container  container--wide">
            <div className="nav-left">
              <h1 className="nav-item">
                <Link className="sitelogo" to="/" activeClassName="is-active">
                  <span
                    className="icon"
                    style={{
                      verticalAlign: 'middle',
                      marginRight: '.2em',
                      fontSize: '23px',
                    }}
                  >
                    <FaSuperpowers />
                  </span>
                  <strong>Superfish</strong>
                </Link>
              </h1>
            </div>
            <button
              type="button"
              id="NavToggle"
              className="nav-toggle"
              onClick={this.handleClick}
              aria-label="Toggle Menu"
              style={{
                backgroundColor: '#256ada',
                border: 'none',
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button
              style={{
                backgroundColor: '#256ada',
                border: 'none',
              }}
              type="button"
              id="NavItems"
              className={menuClass}
              onClick={this.handleClick}
              aria-label="Undo toggle Menu"
            >
              <TheMenu />

              <span className="nav-item  nav-item--paypal">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  className="paypalbutton"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="2006952"
                  />
                  <input
                    title="Support Superfish development!"
                    type="image"
                    src="https://www.paypal.com/en_AU/i/btn/btn_donate_LG.gif"
                    border="0"
                    name="submit"
                    alt="Donate"
                  />
                </form>
              </span>
            </button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
