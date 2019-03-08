/* eslint-disable */
// links are invalid as they are merely examples

import React from "react"
import "../helpers/legacy"
import PrismCode from "react-prism"

import "../../node_modules/superfish/src/css/superfish.css"
import "../../node_modules/superfish/src/css/superfish-vertical.css"

export default class VerticalMenuExample extends React.Component {
  componentDidMount() {
    // jQuery was added to window in "../helpers/legacy"
    window.jQuery('#sample-menu-3').superfish({
      animation: {height:'show'},
      delay: 1200,
    })
  }

  render() {
    return (
      <>
        <h2 className="subtitle  is-4">The result:</h2>
        <ul id="sample-menu-3" className="sf-menu sf-vertical">
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
          <p>To create an all-vertical menu, simply add the class <PrismCode>sf-vertical</PrismCode> to the parent ul along with the usual <PrismCode>sf-menu</PrismCode> class (space-separated, eg. className="sf-menu sf-vertical"), and initialise as normal. For this example I will also demonstrate altering some of the options in order to create a slide-down animation and a longer delay on mouseout:</p>
        </div>
        <pre>
          <PrismCode className="language-markup">
{`<!-- link to the CSS files for this menu type -->
<link rel="stylesheet" media="screen" href="superfish.css">
<link rel="stylesheet" media="screen" href="superfish-vertical.css">

<!-- link to the JavaScript files (hoverIntent is optional) -->
<script src="hoverIntent.js"></script>
<script src="superfish.js"></script>

<!-- initialise Superfish -->
<script>
	jQuery(document).ready(function(){
		jQuery('ul.sf-menu').superfish({
			animation: {height:'show'},	// slide-down effect without fade-in
			delay:		 1200			// 1.2 second delay on mouseout
		});
	});
</script>`}
          </PrismCode>
        </pre>
      </>
    )
  }
}
