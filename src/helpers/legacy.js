window.jQuery = require("jquery")
require("hoverintent-jqplugin")(window.jQuery)
require("superfish")
require("../../node_modules/superfish/src/js/supersubs")

export default function() {
  window.jQuery(function() {

    // initialise supersubs before it gets hidden by tabs or superfish. Need to measure widths while visible.
    window.jQuery('#sample-menu-5').supersubs({
      minWidth:		12,
      maxWidth:		27,
      extraWidth:	1,
    }).superfish()

    // initialise examples
    window.jQuery('#sample-menu-1').superfish()

    window.jQuery('#sample-menu-3').superfish({
      animation: {height:'show'},
      delay: 1200,
    })

    window.jQuery('#sample-menu-4').superfish({
      pathClass: 'current',
    })

  })
}