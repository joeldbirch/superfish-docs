import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const ThankYou = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`]}
      meta="{[
      {
        name: `robots`,
        content: 'noindex',
      },
    ]}"
    />
    <div id="thankyou" class="section  content">
      <h1>Thank you for your kind donation</h1>
      <p>
        Your transaction has been completed and a receipt for your purchase has
        been emailed to you. You may log into your account at www.paypal.com to
        view details of this transaction.
      </p>
      <h2 style={{ color: 'green' }}>You’re awesome!</h2>
    </div>
  </Layout>
)

export default ThankYou
