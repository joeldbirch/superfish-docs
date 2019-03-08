/* eslint-disable */
// links are invalid as they are merely examples

import React from "react"
import "../helpers/legacy"
import PrismCode from "react-prism"

import "../../node_modules/superfish/src/css/superfish.css"

export default class SupersubsMenuExample extends React.Component {
  componentDidMount() {
    // jQuery was added to window in "../helpers/legacy"
    window.jQuery('#sample-menu-5').supersubs({
      minWidth:		12,
      maxWidth:		27,
      extraWidth:	1,
    }).superfish()
  }

  render() {
    return (
      <>
        <h2 className="subtitle  is-4">The result:</h2>
        <ul id="sample-menu-5" className="sf-menu">
          <li className="current">
            <a href="#a">menu item</a>
            <ul>
              <li>
                <a href="#aa">menu item that is quite long</a>
              </li>
              <li className="current">
                <a href="#ab">menu item</a>
                <ul>
                  <li className="current"><a href="#">menu item that is even longer still!</a></li>
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
                  <li><a href="#">short</a></li>
                  <li><a href="#">short</a></li>
                  <li><a href="#">short</a></li>
                  <li><a href="#">short</a></li>
                  <li><a href="#">short</a></li>
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
						<p>This menu uses the optional (deprecated) Supersubs plugin to make the submenu widths variable. The fixed width set in the CSS is overridden and all menu items within a submenu are altered to match the width of their widest sibling. This is most commonly used to make all menu items fit on one line so that they are all of equal height.</p>
						<p className="notification"><strong>Important note:</strong> Unless you really need the submenus to have a max-width, this plugin is no longer needed. The CSS that comes with v1.6.0+ includes a couple of lines that emulate this behaviour. But if you’re sure you need the Supersubs plugin, read on.</p>
						<p>Note that Supersubs needs to be called <strong>before</strong> Superfish in the initialisation chain, as shown below:</p>
					</div>
        <pre>
          <PrismCode className="language-markup">
{`<!-- link to the CSS files for this menu type -->
<link rel="stylesheet" media="screen" href="superfish.css">

<!-- link to the JavaScript files (hoverIntent is optional) -->
<!-- if you use hoverIntent, use the updated r7 version (see FAQ) -->
<script src="hoverIntent.js"></script>
<script src="superfish.js"></script>
<script src="supersubs.js"></script>

<!-- initialise Superfish -->
<script>
	jQuery(document).ready(function(){
		jQuery('ul.sf-menu').supersubs({
			minWidth:	12,	 // minimum width of submenus in em units
			maxWidth:	27,	 // maximum width of submenus in em units
			extraWidth:	1	 // extra width can ensure lines don't sometimes turn over
							 // due to slight rounding differences and font-family
		}).superfish();		 // call supersubs first, then superfish, so that subs are
							 // not display:none when measuring. Call before initialising
							 // containing tabs for same reason.
	});
</script>`}
          </PrismCode>
        </pre>
      </>
    )
  }
}
