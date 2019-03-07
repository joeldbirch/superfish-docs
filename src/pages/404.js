import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content section">
      <h1 className="is-5">Not found</h1>
      <p>You just hit a route that doesn&#39;t exist… the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
