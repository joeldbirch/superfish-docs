/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router'
import classNames from 'classnames'

import {FaGithub, FaTwitter} from "react-icons/fa"
import Header from "./header"
import Hero from "./hero"
import "./site.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Location>
          {({ location }) => (
            <header className={classNames({
              'hero is-info is-bold': true,
              'is-medium': location.pathname === '/',
            }) }>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Hero compact={location.pathname !== '/'} />
            </header>
          )}

        </Location>

        <div className="main">
          <div className="container">

            {children}

					</div>
		      <a href="https://github.com/joeldbirch/superfish">
			      <img className="ribbon" style={{
                position: 'absolute',
                top: 0,
                right: 0,
                border: 0,
                width: 149,
                height: 149,
                zIndex: 1,
              }} src="/static/images/right-red@2x.png" alt="Fork me on GitHub"
            />
		      </a>
	      </div>

        <footer className="footer" role="contentinfo">
          <div className="container">
            <div className="content  has-text-centered  is-small">
              <p>Created for you by Joel Birch <a className="icon" href="https://github.com/joeldbirch" title="I build things">
                <FaGithub />
                </a><a className="icon" href="https://www.twitter.com/joel_birch/" title="I'm on the Twitter machine">
                  <FaTwitter />
                </a> xox
              </p>
              <p><a href="http://jquery.com/"><img src="/static/images/jQuery-alpha-trans.png" alt="jQuery" /></a></p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
