import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import NavBarMenuExample from "../../components/nav-bar-menu-example"
import GeneralSupport from "../../components/general-support"

const IndexPage = () => (
  <Layout>
    <SEO title="Nav-bar Example" description="Superfish nav-bar example." keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`, `Example`, `Nav-bar`]} />

    <div id="examples"  className="section">
			<h1 className="title">Example / Nav-bar</h1>

			<div id="samples" className="samples">
			  <div id="sample4">
          <NavBarMenuExample />
				</div>
			</div>

			<GeneralSupport />
		</div>

  </Layout>
)

export default IndexPage
