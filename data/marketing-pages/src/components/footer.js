import React from "react"

const Footer = () => (
  <footer className="Footer Footer-with-top-separator">
    <div className="Footer--columns">
      <div className="Footer--column Footer--column-logo">
        <a href="https://pages.cloudflare.com" className="Footer--logo-link Link Link-without-underline">
          <img className="Footer--logo-link-image" style={{ width: "64px" }} alt="Pages logo" src="./resources/logo/logo.svg" />
        </a>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Product</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item">
            <a href="https://pages.cloudflare.com" className="Link Link-without-underline Link-is-juicy">Cloudflare Pages</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://blog.cloudflare.com/cloudflare-pages" className="Link Link-without-underline Link-is-juicy">Announcement</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://pages.cloudflare.com/#pricing" className="Link Link-without-underline Link-is-juicy">Pricing</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://workers.cloudflare.com" className="Link Link-without-underline Link-is-juicy">Cloudflare Workers</a>
          </li>
        </ul>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Docs</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item">
            <a href="https://developers.cloudflare.com/pages/getting-started" className="Link Link-without-underline Link-is-juicy">Getting started</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://developers.cloudflare.com/pages/how-to" className="Link Link-without-underline Link-is-juicy">Deployment setup</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://developers.cloudflare.com/pages/tutorials" className="Link Link-without-underline Link-is-juicy">Tutorials</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://developers.cloudflare.com/pages/migrations" className="Link Link-without-underline Link-is-juicy">Migrations</a>
          </li>
        </ul>
      </div>
      <div className="Footer--column">
        <h2 className="Footer--column-title">Help</h2>
        <ul className="Footer--column-list">
          <li className="Footer--column-list-item">
            <a href="https://www.cloudflarestatus.com/" className="Link Link-without-underline Link-is-juicy">Status</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://discord.gg/cloudflaredev" className="Link Link-without-underline Link-is-juicy">Discord</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://support.cloudflare.com/hc/en-us/articles/200172476-Contacting-Cloudflare-Support" className="Link Link-without-underline Link-is-juicy">Support</a>
          </li>
          <li className="Footer--column-list-item">
            <a href="https://twitter.com/CloudflareDev" className="Link Link-without-underline Link-is-juicy">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="Footer--column" />
    </div>

    <div className="Footer--legal">© 2022 Cloudflare, Inc. · <a className="Link Link-without-underline" href="https://www.cloudflare.com/privacypolicy/">Privacy</a> · <a className="Link Link-without-underline" href="https://www.cloudflare.com/website-terms/">Terms</a></div>
  </footer>
)

export default Footer
