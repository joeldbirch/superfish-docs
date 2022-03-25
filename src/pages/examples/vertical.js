import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import VerticalMenuExample from '../../components/vertical-menu-example'
import GeneralSupport from '../../components/general-support'

const IndexPage = () => (
  <Layout>
    <Seo
      title="Vertical Menu Example"
      description="Superfish vertical menu example."
      keywords={[
        `jQuery`,
        `Superfish`,
        `Menu`,
        `Plugin`,
        `Example`,
        `Vertical`,
      ]}
    />

    <div id="examples" className="section">
      <h1 className="title">Example / Vertical</h1>

      <div id="samples" className="samples">
        <div id="sample3">
          <VerticalMenuExample />
        </div>
      </div>

      <GeneralSupport />
    </div>
  </Layout>
)

export default IndexPage
