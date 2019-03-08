/* eslint-disable */
// links are invalid as they are merely examples

import React from "react"
import "../helpers/legacy"
import PrismCode from "react-prism"

import "../../node_modules/superfish/src/css/superfish.css"
import "../../node_modules/superfish/src/css/superfish-navbar.css"

export default class VerticalMenuExample extends React.Component {
  componentDidMount() {
    // jQuery was added to window in "../helpers/legacy"
    window.jQuery('#sample-menu-4').superfish({
      pathClass: 'current',
    })
  }

  render() {
    return (
      <>
        <h2 className="subtitle  is-4">The result:</h2>
        <ul id="sample-menu-4" className="sf-menu sf-navbar">
          <li>
            <a href="#">menu item</a>
            <ul>
              <li><a href="#">subitem 1a</a></li>
              <li><a href="#">subitem 1b</a></li>
              <li><a href="#">subitem 1c</a></li>
              <li><a href="#">subitem 1d</a></li>
            </ul>
          </li>
          <li className="current">
            <a href="#">menu item</a>
            <ul>
              <li>
                <a href="#">subitem 2a</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#aba">menu item</a></li>
                  <li><a href="#abb">menu item</a></li>
                  <li><a href="#abc">menu item</a></li>
                  <li><a href="#abd">menu item</a></li>
                </ul>
              </li>
              <li className="current">
                <a href="#">path to current</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#aba">menu item</a></li>
                  <li><a href="#abb">menu item</a></li>
                  <li className="current"><a href="#abc">current page</a></li>
                  <li><a href="#abd">menu item</a></li>
                </ul>
              </li>
              <li>
                <a href="#">subitem 2c</a>
                <ul>
                  <li><a href="#">menu item</a></li>
                  <li><a href="#aba">menu item</a></li>
                  <li><a href="#abb">menu item</a></li>
                  <li><a href="#abc">menu item</a></li>
                  <li><a href="#abd">menu item</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">menu item</a>
            <ul>
              <li><a href="#">if no subitems, duplicate parent item href and add descriptive text</a></li>
            </ul>
          </li>
          <li>
            <a href="#">menu item</a>
            <ul>
              <li><a href="#">subitem 4a</a></li>
              <li><a href="#">subitem 4b</a></li>
              <li><a href="#">subitem 4c</a></li>
              <li><a href="#">subitem 4d</a></li>
            </ul>
          </li>
        </ul>
        <br style={{ clear: 'left' }} />
        <p className="notification box">Notice that if you disable JavaScript this menu degrades very nicely &#8211; as do all the other examples.</p>
					<div className="content">
					<h2>The code:</h2>
					<p>To create a horizontal nav-bar with a horizontal second tier and optional vertical third tier, simply include the superfish-navbar.css file after the main superfish.css file and add the class <PrismCode>sf-navbar</PrismCode> to the parent ul along with the usual <PrismCode>sf-menu</PrismCode> class (space-separated, eg. <PrismCode>class="sf-menu sf-navbar"</PrismCode>), and initialise as normal.</p>
					<p>A nice option to add to this types of menu is restoring the relevant submenu when the user is not exploring other submenus. This can be done by telling Superfish the name of the class you are adding to the relevant <PrismCode>&lt;li&gt;</PrismCode> elements to indicate the path to the current page. I often have the server add the class name 'current' for this purpose, so I would initialise this menu thusly:</p>
					</div>
        <pre>
          <PrismCode className="language-markup">
{`<!-- link to the CSS files for this menu type -->
<link rel="stylesheet" media="screen" href="superfish.css">
<link rel="stylesheet" media="screen" href="superfish-navbar.css">

<!-- link to the JavaScript files (hoverIntent is optional) -->
<script src="hoverIntent.js"></script>
<script src="superfish.js"></script>

<!-- initialise Superfish -->
<script>
	jQuery(document).ready(function(){
		jQuery('ul.sf-menu').superfish({
			pathClass:	'current'
		});
	});
</script>`}
          </PrismCode>
        </pre>
      </>
    )
  }
}
