import React from "react"

import "./notice.css"

export default () => (
  <div className="HeroSection--notice-wrap">
    <div className="Notice">
      <div className="Notice--inner">
        <div className="Notice--content">
          <p style={{marginBottom: "0.5rem"}}><strong>Looking to build with Cloudflare?</strong></p>
          <p>Start with <strong>Workers</strong>, which now supports nearly all of Pages' features — plus extra tools and integrations not found in Pages. </p>
          <p>If you have an existing Pages project, our <a href="https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/">migration guide</a> and <a href="https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix">compatibility matrix</a> will help you make the switch.</p>
        </div>
      </div>
    </div>
  </div>
)
