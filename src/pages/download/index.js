import React from 'react'
import PrismCode from 'react-prism'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { FaDownload } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <Seo
      title="Download and Support"
      keywords={[
        `jQuery`,
        `Superfish`,
        `Menu`,
        `Plugin`,
        `Download`,
        `Support`,
      ]}
    />

    <section id="download" className="section  content">
      <h1>Download</h1>

      <h2>Download the Zip archive:</h2>
      <p>
        You can{' '}
        <strong>
          <a href="https://github.com/joeldbirch/superfish/archive/master.zip">
            <FaDownload style={{ marginRight: '.25em' }} />
            download a zip archive
          </a>
        </strong>{' '}
        of everything you need.
      </p>

      <h2>Download from GitHub:</h2>
      <p>
        The{' '}
        <a href="https://github.com/joeldbirch/superfish/" className="external">
          canonical version of Superfish lives on GitHub
        </a>
        . There you can browse the files, clone, fork and star the project,
        submit issues if you find them, and so on.
      </p>

      <h2>Install via Bower package manager:</h2>
      <p>
        If you have the{' '}
        <a href="https://bower.io" className="external">
          {' '}
          Bower package manager
        </a>{' '}
        installed, you can install Superfish into your project from the command
        line by running:{' '}
        <PrismCode className="language-markup">
          bower install superfish
        </PrismCode>
      </p>
      <p>
        If you install Superfish using this method only the files you really
        need are installed without the various project maintenance litter
        (package.json, etc).
      </p>

      <h2>Install via Node Package Manager (NPM):</h2>
      <p>
        If you prefer to use NPM, install via{' '}
        <PrismCode className="language-markup">npm install superfish</PrismCode>
      </p>
    </section>
    <section id="support" className="section  content">
      <h1>Support</h1>
      <p>
        I’ve wound back support for this plugin as my time is required
        elsewhere.
      </p>
      <p>
        If your issues are related to styling, try posting your questions to a
        dedicated CSS forum or Stack Exchange. CSS for Superfish is mainly just
        traditional Suckerfish-style dropdown menu code so there are plenty of
        resources out there to learn from.
      </p>
      <p>
        Demonstrable bugs with the JavaScript component of the Superfish plugin
        can be{' '}
        <a
          className="external"
          href="https://github.com/joeldbirch/superfish/issues/"
        >
          reported via GitHub
        </a>
        .
      </p>
    </section>
  </Layout>
)

export default IndexPage
