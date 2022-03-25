import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import BasicMenuExample from '../../components/basic-menu-example'
import GeneralSupport from '../../components/general-support'

const IndexPage = () => (
  <Layout>
    <Seo
      title="Menu Examples"
      description="Superfish menu examples."
      keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`, `Examples`]}
    />

    <div id="examples" className="section">
      <h1 className="title">Example / Basic</h1>

      <div id="samples" className="samples">
        <div id="sample1">
          <BasicMenuExample />
        </div>
      </div>

      <GeneralSupport />
    </div>
  </Layout>
)

export default IndexPage
