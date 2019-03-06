import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GeneralSupport from "../../components/general-support"

const IndexPage = () => (
  <Layout>
    <SEO title="Options" keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`, `Options`]} />

    <div id="options" className="section  content">
			<h1>Options</h1>
			<p>Superfish&#8217;s default options:</p>
			<pre><code className="language-javascript">{`$.fn.superfish.defaults = {
  popUpSelector: 'ul,.sf-mega',      // selector within menu context to define the submenu element to be revealed
  hoverClass:    'sfHover',          // the class applied to hovered list items
  pathClass:     'overideThisToUse', // the class you have applied to list items that lead to the current page
  pathLevels:    1,                  // the number of levels of submenus that remain open or are restored using pathClass
  delay:         800,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing
  animation:     {opacity:'show'},   // an object equivalent to first parameter of jQuery&#8217;s .animate() method. Used to animate the submenu open
  animationOut:  {opacity:'hide'},   // an object equivalent to first parameter of jQuery&#8217;s .animate() method Used to animate the submenu closed
  speed:         'normal',           // speed of the opening animation. Equivalent to second parameter of jQuery&#8217;s .animate() method
  speedOut:      'fast',             // speed of the closing animation. Equivalent to second parameter of jQuery&#8217;s .animate() method
  cssArrows:     true,               // set to false if you want to remove the CSS-based arrow triangles
  disableHI:     false,              // set to true to disable hoverIntent detection
  onInit:        $.noop,             // callback function fires once Superfish is initialised &#8211; 'this' is the containing ul
  onBeforeShow:  $.noop,             // callback function fires just before reveal animation begins &#8211; 'this' is the ul about to open
  onShow:        $.noop,             // callback function fires once reveal animation completed &#8211; 'this' is the opened ul
  onBeforeHide:  $.noop,             // callback function fires just before closing animation &#8211; 'this' is the ul about to close
  onHide:        $.noop,             // callback function fires after a submenu has closed &#8211; 'this' is the ul that just closed
  onIdle:        $.noop,             // callback function fires when the 'current' submenu is restored (if using pathClass functionality)
  onDestroy:     $.noop              // callback function fires after the 'destroy' method is called on the menu container
  onHandleTouch: $.noop              // callback function. Use this to handle touch events if the default behaviour is getting in your way
};`}</code></pre>
			<p>You can override any of these options by passing an object into the Superfish method upon initialisation. For example:</p>
			<pre><code className="language-markup">{`//link to the CSS files for this menu type`}
&lt;link rel="stylesheet" media="screen" href="superfish.css"&gt;

{`// link to the JavaScript files (hoverIntent is optional)
// if you use hoverIntent, use the updated r7 version (see FAQ)`}
&lt;script src="hoverIntent.js"&gt;&lt;/script&gt;
&lt;script src="superfish.js"&gt;&lt;/script&gt;

{`// initialise Superfish`}
&lt;script&gt;{`

	jQuery(document).ready(function() {
		jQuery('ul.sf-menu').superfish({
			delay:       1000,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
		});
	});

`}&lt;/script&gt;</code></pre>
    <GeneralSupport />
    </div>

  </Layout>
)

export default IndexPage
