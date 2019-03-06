import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="/static/site.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/static/js/all.js"></script>
        <script
          dangerouslySetInnerHTML={{ __html: `
            jQuery(function() {

              // initialise supersubs before it gets hidden by tabs or superfish. Need to measure widths while visible.
              jQuery('#sample-menu-5').supersubs({
                minWidth:		12,
                maxWidth:		27,
                extraWidth:	1
              }).superfish()

              // initialise examples
              jQuery('#sample-menu-1').superfish()

              jQuery('#sample-menu-3').superfish({
                animation: {height:'show'},
                delay: 1200
              })

              jQuery('#sample-menu-4').superfish({
                pathClass: 'current'
              })

            });
          ` }}>

        </script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
