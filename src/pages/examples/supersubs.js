import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import SupersubsMenuExample from '../../components/supersubs-menu-example'
import GeneralSupport from '../../components/general-support'

const IndexPage = () => (
  <Layout>
    <Seo
      title="Supersubs Menu Example"
      description="Superfish menu example with Supersubs to control submenu width."
      keywords={[
        `jQuery`,
        `Superfish`,
        `Menu`,
        `Plugin`,
        `Example`,
        `Supersubs`,
      ]}
    />

    <div id="examples" className="section">
      <h1 className="title">Example / Supersubs</h1>

      <div id="samples" className="samples">
        <div id="sample5">
          <SupersubsMenuExample />
        </div>
      </div>

      <GeneralSupport />
    </div>
  </Layout>
)

export default IndexPage
