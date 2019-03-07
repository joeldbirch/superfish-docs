import React from "react"
import { Link } from "gatsby"
import PrismCode from 'react-prism'

import Layout from "../components/layout"
import SEO from "../components/seo"
import GeneralSupport from "../components/general-support"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`]} />

    <div className="section content">
      <h1>Overview</h1>
      <p>Superfish is an enhanced <a className="external" href="http://alistapart.com/articles/dropdowns">Suckerfish</a>-style menu jQuery plugin that takes an existing pure CSS drop-down menu (so it degrades gracefully without JavaScript) and adds the following much-sought-after enhancements:</p>
      <ul>
        <li><strong>Supports touch devices</strong>. On Android, iOS, Windows Phone 7 and IE10 (with touchscreen), first touch will open an associated submenu, second will follow the link. Mouse and keyboard accessibility works as normal. Note that you currently need to include Brian Cherne&#8217;s <a className="external" href="https://github.com/briancherne/jquery-hoverIntent">hoverIntent plugin</a> to support certain Android browsers' and IE10's touch interaction. This may change.</li>
        <li><del><strong>Optionally require click</strong> to open and close submenus. Added in version 1.5.2, perfected in 1.5.4.</del> <ins><a className="external" href="https://github.com/joeldbirch/superfish/issues/47">Removed in v1.7. See issue 47 for details</a></ins>.</li>
        <li><strong>Timed delay on mouseout</strong> to be more forgiving of mouse-piloting errors. Default is 800 milliseconds but can be changed via the options object</li>
        <li><strong>Animations</strong> when showing submenus (and when hiding them, as of version 1.5.2). uses a fade by default but can be given custom objects to be used by the animate functions. The animation speed is also customisable.</li>
        <li><strong>Keyboard accessibility</strong>. Tab through the links and the relevant submenus are revealed and hidden as needed</li>
        <li>Supports the <strong>hoverIntent plugin</strong>. Superfish automatically detects the presence of Brian Cherne&#8217;s <a className="external" href="https://github.com/briancherne/jquery-hoverIntent" title="visit the home of hoverIntent">hoverIntent plugin</a> and uses its advanced hover behaviour for the mouseovers (mouseout delays are handled by Superfish regardless of the presence of hoverIntent). Using this is only an option, but a nice one. The examples on this page <em>are</em> using hoverIntent. If for some reason you want to use hoverIntent on your page for other plugins but do not want Superfish to use it you can set the option <code className="language-javascript">disableHI</code> to <code className="language-javascript">true</code>. <strong>Important note:</strong> As of v1.5.1 you must use the <a href="https://github.com/briancherne/jquery-hoverIntent">updated version (r7) of hoverIntent</a> which supports event delegation.</li>
        <li><strong>Indicates the presence of submenus</strong> by adding CSS-based arrows to relevant anchors. You can turn off the arrows via the &#8220;cssArrows&#8221; option, if required.</li>
        <li>Can <strong>show the path to your current page</strong> while the menu is idle. The easiest way to understand this is to view the nav-bar example. Note that you need to add 'current' (or similar) classes to the relevant list item elements yourself, ideally server-side.</li>
        <li>Optional <strong>callback functions</strong>. These callbacks allow for further enhancements and functionality to be added without needing to alter the core Superfish code.</li>
        <li>Provides <strong>public methods</strong> <code className="language-javascript">hide</code> and <code className="language-javascript">show</code> that you can call on list items that have submenu children. Also provides a <code className="language-javascript">destroy</code> method for uninitialising Superfish. Here is an <a href="example.html">example page demonstrating the methods in action</a></li>
        <li>Uses <strong>event delegation</strong> as of v1.5.1 for greater performance and flexibility.</li>
      </ul>

      <GeneralSupport />
      <hr />

			<h1>Quick Start Guide</h1>
			<ol className="steps">
				<li className="step-one">
					Begin with a working pure CSS dropdown menu based on nested unordered lists. For each li:hover selector in your CSS, add an equivalent li.sfHover selector. Use <code className="language-css">display:none</code> to hide submenus. To make this step easy, there are cross-browser CSS files for a variety of menu types included in the Superfish download.
					<pre><PrismCode className="language-markup">{`<link href="superfish.css" rel="stylesheet" media="screen">`}</PrismCode></pre>
				</li>
				<li className="step-two">
					Link to the superfish.js file (after including jQuery) using a script tag in the head of your document.
							<pre><PrismCode className="language-markup">{
`<script src="jQuery.js"></script>
<script src="superfish.js"></script>`
}</PrismCode></pre>
				</li>
				<li className="step-three">
			Call <code>superfish()</code> on the containing <abbr title="unordered list"><code>ul</code></abbr> element.
			<pre><PrismCode className="language-markup">{
`<script>
	jQuery(document).ready(function() {
		jQuery('ul.sf-menu').superfish();
	});
</script>`
      }</PrismCode></pre>
		There are many options available to customise your menu. You can find out about them on the <Link to="/options/">Options</Link> page of this site.
				</li>
			</ol>
    </div>

  </Layout>
)

export default IndexPage
