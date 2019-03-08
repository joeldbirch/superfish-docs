/* eslint-disable */
// links are invalid as they are merely examples

import React from "react"
import "../helpers/legacy"
import PrismCode from "react-prism"

import "../../node_modules/superfish/src/css/superfish.css"


export default class BasicMenuExample extends React.Component {
  componentDidMount() {
    // jQuery was added to window in "../helpers/legacy"
    window.jQuery('#sample-menu-1').superfish()
  }

  render() {
    return (
      <>
        <h2 className="subtitle  is-4">The result:</h2>
        <ul id="sample-menu-1" className="sf-menu">
          <li className="current">
            <a href="#a">menu item</a>
            <ul>
              <li>
                <a href="#aa">menu item</a>
              </li>
              <li className="current">
                <a href="#ab">menu item</a>
                <ul>
                  <li className="current"><a href="#">menu item</a></li>
                  <li><a href="#aba">menu item</a></li>
                  <li><a href="#abb">menu item</a></li>
                  <li><a href="#abc">menu item</a></li>
                  <li><a href="#abd">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">menu item</a>
          </li>
          <li>
            <a href="#">menu item</a>
            <ul>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">menu item</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#">menu item</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">menu item</a>
          </li>
        </ul>
        <br style={{ clear: 'left' }} />
        <br style={{ clear: 'left' }} />
        <div className="content">
          <h2>The code:</h2>
          <p>The simplest use, and a good starting point for new users:</p>
        </div>
        <pre>
          <PrismCode className="language-markup">
{`<!-- link to the CSS files for this menu type -->
<link rel="stylesheet" media="screen" href="superfish.css">

<!-- link to the JavaScript files (hoverIntent is optional) -->
<script src="hoverIntent.js"></script>
<script src="superfish.js"></script>

<!-- initialise Superfish -->
<script>
  jQuery(document).ready(function(){
    jQuery('ul.sf-menu').superfish();
  });
</script>`}
          </PrismCode>
        </pre>
      </>
    )
  }
}
