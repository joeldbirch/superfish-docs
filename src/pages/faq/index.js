import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import GeneralSupport from '../../components/general-support'

const IndexPage = () => (
  <Layout>
    <Seo
      title="FAQ"
      keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`, `FAQ`]}
    />

    <div id="faq" className="section  content">
      <h1>Frequently Asked Questions</h1>
      <GeneralSupport />
      <dl>
        <dt>
          Which version of jQuery is the Superfish plugin compatible with?
        </dt>
        <dd>The Superfish plugin is compatible with jQuery v1.7 and later.</dd>

        <dt>
          Does the Superfish plugin have any dependencies on other plugins?
        </dt>
        <dd>Nope.</dd>

        <dt>What about touch device support?</dt>
        <dd>
          Superfish has robust support for all Android browsers, iOS browsers
          and IE10 on touch devices. Be aware that you need to include{' '}
          <a href="https://github.com/briancherne/jquery-hoverIntent">
            hoverIntent
          </a>{' '}
          to support IE10 and certain Android browsers (although this may
          change).
        </dd>

        <dt>Does the Superfish plugin work with any other plugins?</dt>
        <dd>
          Yes. The nicest thing you can do for your menu is include Brian
          Cherne&#8217;s <strong>HoverIntent</strong> plugin in your page and
          Superfish will automatically use it to make the user interaction more
          pleasing.
        </dd>

        <dt>How can I make the menu look better?</dt>
        <dd>
          The demo style is very basic by design &#8211; you should use it as a
          base to build upon and skin it to suit your project. I strongly
          recommend testing in the earliest version of Internet Explorer you
          dare support in addition to modern browsers at every step of the way
          so that when IE bugs occur you can tell which CSS rules trigger them
          and work around them before moving on.
        </dd>

        <dt>What if something goes wrong?</dt>
        <dd>
          Please do not use GitHub issues to get help with your menu
          implementation. The cause of 99.9% of all Superfish problems are basic
          CSS issues. Disable JavaScript and concentrate on getting the menu
          working in pure CSS. If you are not a CSS expert then I advise that
          you follow the method described in the previous question&#8217;s
          answer, ie. begin with the demo CSS file and make small incremental
          changes, checking in a variety of browsers at every step.
        </dd>

        <dt>What if I still need help?</dt>
        <dd>
          Check out the{' '}
          <strong>
            <a href="/download/#support">Support options</a>
          </strong>{' '}
          available to you.
        </dd>

        <dt>Can I count on Superfish being supported into the future?</dt>
        <dd>
          Yes, it&#8217;s here for the long haul &#8211; or at least as long as
          it&#8217;s relevant. I will also be adding further features in the
          form of modular optional add-on plugins.
        </dd>

        <dt>Have you made any other plugins?</dt>
        <dd>
          I&#8217;m thrilled you asked. Check out my{' '}
          <a href="https://nofollowr.com/">
            WordPress plugin &#8220;NoFollowr&#8221;
          </a>{' '}
          for making judicious application of nofollow attributes a breeze. It
          is also powered by the mighty jQuery.
        </dd>
      </dl>
    </div>
  </Layout>
)

export default IndexPage
