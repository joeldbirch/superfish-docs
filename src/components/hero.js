import PropTypes from "prop-types"
import React from "react"
import { FaSuperpowers, FaDownload } from "react-icons/fa"

const Hero = ({ siteTitle }) => (
  <section className="hero-body">
    <div className="container has-text-centered">
        <h1 className="title">
          <span className="icon  logoicon  is-medium"><FaSuperpowers /></span><strong>Superfish</strong> v1.7.10
        </h1>
        <h2 className="subtitle  is-5">jQuery menu plugin by Joel&nbsp;Birch.</h2>

      <p className="hero__detail">
        <code className="hero__code">npm install superfish</code>&nbsp; <span className="nobreak"><span className="hero__label">or</span>&nbsp; <a href="/download/" className="hero__button  button  is-info  is-inverted  is-small  qa-download">
          <span className="icon is-small">
            <FaDownload />
          </span>
          <span>Download</span>
        </a></span>
      </p>

    </div>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
