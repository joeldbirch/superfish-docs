import React from "react"
window.jQuery = require("jquery")
const $ = window.jQuery

class JQueryCode extends React.Component {
  componentDidMount() {

      // initialise supersubs before it gets hidden by tabs or superfish. Need to measure widths while visible.
      $('#sample-menu-5').supersubs({
        minWidth:		12,
        maxWidth:		27,
        extraWidth:	1
      }).superfish();

      // initialise examples
      $('#sample-menu-1').superfish();

      $('#sample-menu-3').superfish({
        animation: {height:'show'},
        delay: 1200
      });

      $('#sample-menu-4').superfish({
        pathClass: 'current'
      });

  }

  render() {
    return (
      <>
        <script src="/assets/js/all.js"></script>
      </>
    )
  }
}

export default JQueryCode