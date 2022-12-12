import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@cloudflare/cloudflare-brand-assets/css/components/error-page.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="ErrorPage">
      <div className="ErrorPage--content">
        <h1 className="ErrorPage--title">Not found</h1>
        <p className="ErrorPage--description">Unfortunately, the page you requested cannot be found.</p>
        <div className="ErrorPage--action">
          <a className="Button Button-is-primary" href="/">Home</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
