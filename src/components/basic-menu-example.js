/* eslint-disable */
// links are invalid as they are merely examples

import React from "react"

import initSuperfishDemos from "../helpers/legacy"

class BasicMenuExample extends React.Component {
  componentDidMount() {
    initSuperfishDemos()
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
        <pre><code className="language-markup">&lt;!-- link to the CSS files for this menu type --&gt;
        &lt;link rel="stylesheet" media="screen" href="superfish.css"&gt;

        &lt;!-- link to the JavaScript files (hoverIntent is optional) --&gt;
        &lt;!-- if you use hoverIntent, use the updated r7 version (see FAQ) --&gt;
        &lt;script src="hoverIntent.js"&gt;&lt;/script&gt;
        &lt;script src="superfish.js"&gt;&lt;/script&gt;

        &lt;!-- initialise Superfish --&gt;
        &lt;script&gt;{`

        jQuery(document).ready(function(){
        jQuery('ul.sf-menu').superfish();
        });

        `}&lt;/script&gt;</code></pre>
      </>
    )
  }
}

export default BasicMenuExample