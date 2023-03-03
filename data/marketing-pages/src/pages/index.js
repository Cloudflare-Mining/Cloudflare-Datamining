import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />

      <section className="HeroSection">
        <div className="HeroSection--column">
          <div className="HeroSection--content">
            <h1 className="HeroSection--title">Build <em>fast</em> sites.<br />In record time.</h1>
            <div className="HeroSection--description">
              <p>Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.</p>
            </div>
            <div className="HeroSection--actions">
              <div className="HeroSection--actions-item">
                <a className="Button Button-is-primary" href="https://dash.cloudflare.com/sign-up/pages">Sign Up</a>
              </div>
              <div className="HeroSection--actions-item">
                <a className="Button Button-is-secondary" href="https://developers.cloudflare.com/pages">Read docs</a>
              </div>
            </div>
            <div className="HeroSection--key-points">
              <ul className="UnorderedListPagesThemed">
                <li><strong>Developer-focused</strong> with effortless Git integration.</li>
                <li><strong>Advanced collaboration</strong> built-in with unlimited seats.</li>
                <li><strong>Unmatched performance</strong> on Cloudflare’s edge network.</li>
                <li><strong>Dynamic functionality</strong> through <a className="Link" href="https://developers.cloudflare.com/pages/platform/functions" target="_blank" rel="noreferrer">integration with Cloudflare Workers</a>.</li>
              </ul>
            </div>
          </div>

          <div className="HeroSection--illustration" data-track-if-in-viewport="hero">
            <div className="HeroSection--illustration-content">
              <div className="HeroAnimation">
                <div className="HeroAnimation--browser">
                  {/* The closest browser is hidden */}
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h362V70H23zm-3-3h368v89H20V67zM23 179v83h362v-83H23zm-3-3h368v89H20v-89zM23 288v83h362v-83H23zm-3-3h368v89H20v-89z" /><path fill="#bdc2c7" d="M168 20h20v20h-20zM204 18.69L215.31 30 204 41.31 192.69 30z" /><circle cx="230" cy="30" r="10" fill="#bdc2c7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71zM227 189h41v3h-41zM33 189h71v3H33z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71zM168 20h20v20h-20zM204 18.69L215.31 30 204 41.31 192.69 30z" /><circle cx="230" cy="30" r="10" fill="#bdc2c7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 179v83h168v-83H23zm-3-3h174v89H20v-89z" /><path fill="#bdc2c7" d="M227 189h41v3h-41zM33 189h71v3H33zM20 20h20v20H20zM56 18.69L67.31 30 56 41.31 44.69 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zM368 29h20v3h-20zM368 36h20v3h-20z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#bdc2c7" d="M20 20h20v20H20zM56 18.69L67.31 30 56 41.31 44.69 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zM368 29h20v3h-20zM368 36h20v3h-20z" /><rect width="94" height="14" x="112" y="23" fill="#d8dbdd" rx="7" /><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 179v83h168v-83H23zm-3-3h174v89H20v-89z" /><path fill="#bdc2c7" d="M227 189h41v3h-41zM33 189h71v3H33z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#bdc2c7" d="M20 20h20v20H20zm36-1.3L67.3 30 56 41.3 44.7 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><rect width="94" height="14" x="112" y="23" fill="#d8dbdd" rx="7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zm0 7h20v3h-20zm0 7h20v3h-20zM33 80h41v3H33zM227 80h41v3h-41zM33 189h41v3H33zM227 189h41v3h-41zM33 298h41v3H33zM227 298h41v3h-41z" /><path fill="#eaebeb" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM33 96h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zM58 96h11v3H58zM217 70v83h168V70H217zm-3-3h174v89H214V67zM227 96h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM33 205h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 179v83h168v-83H217zm-3-3h174v89H214v-89zM227 205h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM33 314h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 288v83h168v-83H217zm-3-3h174v89H214v-89zM227 314h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="HeroAnimation--browser">
                  <div className="Browser">
                    <div className="Browser--chrome">
                      <div className="Browser--window-management"><b></b><b></b><b></b></div>
                      <div className="Browser--omnibox"></div>
                    </div>
                    <div className="Browser--viewport">
                      <div className="Browser--site">
                        <svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#bdc2c7" d="M20 20h20v20H20zm36-1.3L67.3 30 56 41.3 44.7 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><rect width="94" height="14" x="112" y="23" fill="#d8dbdd" rx="7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zm0 7h20v3h-20zm0 7h20v3h-20zM33 80h41v3H33zM227 80h41v3h-41zM33 189h41v3H33zM227 189h41v3h-41zM33 298h41v3H33zM227 298h41v3h-41z" /><path fill="#eaebeb" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM33 96h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zM58 96h11v3H58zM217 70v83h168V70H217zm-3-3h174v89H214V67zM227 96h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM33 205h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 179v83h168v-83H217zm-3-3h174v89H214v-89zM227 205h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM33 314h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 288v83h168v-83H217zm-3-3h174v89H214v-89zM227 314h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="HeroSection--illustration-captions">
              <div className="HeroSection--illustration-caption" data-is-active>
                <code className="InlineCode"><span data-part="sha">4847bcf</span> initial commit</code>
              </div>
              <div className="HeroSection--illustration-caption">
                <code className="InlineCode"><span data-part="sha">d7f7106</span> two-column layout</code>
              </div>
              <div className="HeroSection--illustration-caption">
                <code className="InlineCode"><span data-part="sha">6da7c6f</span> add navigation menu</code>
              </div>
              <div className="HeroSection--illustration-caption">
                <code className="InlineCode"><span data-part="sha">218f7de</span> add search</code>
              </div>
              <div className="HeroSection--illustration-caption">
                <code className="InlineCode"><span data-part="sha">ab27e9d</span> release 1.0.0</code>
              </div>
            </div>

            <div className="HeroSection--replay-button">
              <button className="Button"><span data-part="icon">↻</span> Replay</button>
            </div>
          </div>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="Section">
        <h2 className="Section--title" data-js-balance-text>Grab your repo, and go.</h2>

        <div className="BrowserColumn">
          <div className="BrowserColumn--illustration" data-track-if-in-viewport>
            <div className="Browser---3d-wrapper">
              <div className="Browser Browser-is-3d Browser-is-dark-theme Browser-is-github-theme">
                <div className="Browser--chrome">
                  <div className="Browser--window-management"><b></b><b></b><b></b></div>
                  <div className="Browser--omnibox"></div>
                </div>
                <div className="Browser--viewport">
                  <div className="Browser--site">
                    <svg viewBox="0 0 408 368" fontFamily="system-ui">
                      <defs>
                        <linearGradient id="CFPGHAppInstall--g" x1="118.%" x2="10%" y1="-2%" y2="101%">
                          <stop offset="0%" stopColor="#fbb743" />
                          <stop offset="100%" stopColor="#f28333" />
                          <stop offset="100%" stopColor="#ea6b00" />
                        </linearGradient>
                        <filter id="CFPGHAppInstall--f" width="129%" height="129%" x="-14%" y="-11%" filterUnits="objectBoundingBox">
                          <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="4.5" />
                          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.475165651 0 0 0 0 0.570006322 0 0 0 0 0.617426658 0 0 0 0.16516644 0" />
                        </filter>
                        <circle id="CFPGHAppInstall--c" cx="204.5" cy="131.5" r="51.5" />
                      </defs>
                      <path fill="#f6f8fa" d="M0-1h408v348H0z" />
                      <use fill="#000" filter="url(#CFPGHAppInstall--f)" xlinkHref="#CFPGHAppInstall--c" />
                      <use fill="#fff" xlinkHref="#CFPGHAppInstall--c" />
                      <path fill="#24292e" d="M0 0h408v60H0z" />
                      <path fill="#fff" d="M32 11a17.94 17.94 0 00-5.7 34.97c.9.15 1.25-.39 1.25-.86 0-.42-.03-1.84-.03-3.34-4.52.83-5.69-1.1-6.05-2.1-.2-.52-1.08-2.11-1.84-2.54-.63-.34-1.54-1.17-.03-1.19 1.42-.02 2.43 1.3 2.77 1.84 1.62 2.71 4.2 1.95 5.24 1.48a3.77 3.77 0 011.15-2.4c-4-.45-8.19-2-8.19-8.86 0-1.95.7-3.57 1.84-4.82a6.43 6.43 0 01.18-4.76s1.51-.47 4.96 1.84a16.75 16.75 0 019 0c3.44-2.33 4.95-1.84 4.95-1.84.98 2.47.35 4.31.17 4.76A6.93 6.93 0 0143.52 28c0 6.89-4.2 8.41-8.21 8.86.65.56 1.21 1.64 1.21 3.32l-.02 4.93c0 .47.34 1.04 1.24.86A17.98 17.98 0 0050 28.94C50 19.03 41.95 11 32 11z" />
                      <path fill="#fff" d="M377.25 26.65h13.54l-6.77 6.76-6.77-6.76zM350 47a18 18 0 110-36 18 18 0 010 36z" />
                      <path fill="#b6babe" d="M342 37a8 8 0 1116 0h-16zm8-9a4 4 0 110-8 4 4 0 010 8z" />
                      <path fill="#b7bbbd" d="M213.94 107H228l2 2v44l-2 2h-19.16l.97-1.5h17.57l1.12-1.12v-42.76l-1.12-1.12h-12.12l-1.43 7.39h-1.54l1.37-7.46.28-1.43zM180 155l-2-2v-44l2-2h19.9l-1.01 1.5h-18.27l-1.12 1.12v42.76l1.12 1.12h14.48l-.24 1.5H180zm3-5h8.5l-.3 1.5H182l-.5-.5v-9l1.5 3v5zm34 0l1.5 1.5H211l1-1.5h5z" />
                      <path fill="url(#CFPGHAppInstall--g)" d="M200.67 137H187l-1.66-3.12 23-34 3.62 1.5-4.54 23.62H221l1.68 3.09-22 34-3.66-1.4 3.65-23.69zm-15.17-21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                      <g className="CFPGHAppInstall--page-1">
                        <text fill="#24292e" fontSize="23">
                          <tspan x="50%" textAnchor="middle" y="214">Install Cloudflare Pages</tspan>
                        </text>
                        <text fill="#586069" fontSize="14">
                          <tspan x="50%" textAnchor="middle" y="239">Where do you want to install Cloudflare Pages?</tspan>
                        </text>
                        <rect className="CFPGHAppInstall--button-1" width="366.5" height="60.5" x="20.75" y="266.75" fill="#fff" stroke="#e1e4e8" strokeWidth="1.5" rx="10" />
                        <path fill="#f0f0f0" d="M51 315a18 18 0 110-36 18 18 0 010 36z" />
                        <path fill="#b6babe" d="M43 305a8 8 0 1116 0H43zm8-9a4 4 0 110-8 4 4 0 010 8z" />
                        <text fill="#24292e" fontSize="20" fontWeight="500">
                          <tspan x="80" y="303">github-username</tspan>
                        </text>
                        <path fill="none" stroke="#586069" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01" d="M358 290l7 7-7 7" />
                      </g>
                      <g className="CFPGHAppInstall--page-2">
                        <text fill="#24292e" fontSize="23">
                          <tspan x="50%" textAnchor="middle" y="214">Install &amp; Authorize Cloudflare Pages</tspan>
                        </text>
                        <rect width="366.5" height="93.5" x="20.75" y="233.75" fill="#fff" stroke="#e1e4e8" strokeWidth="1.5" rx="10" />
                        <rect className="CFPGHAppInstall--button-2" width="149" height="28" x="34.5" y="285.5" fill="#35a353" stroke="#31904c" rx="5" />
                        <text fill="#fff" fontSize="13" fontWeight="500">
                          <tspan x="109" textAnchor="middle" y="303">Install &amp; Authorize</tspan>
                        </text>
                        <text fill="#0366d6" fontSize="13" fontWeight="500">
                          <tspan x="204" y="303">Cancel</tspan>
                        </text>
                        <path fill="#e1e4e8" d="M34 248h49v4H34zM94 248h49v4H94zM34 258h329v4H34zM34 268h329v4H34z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BrowserColumn--content">
            <div className="HeroSection--GitLogos">
              <a href="https://developers.cloudflare.com/pages/get-started" title="GitHub">
                <svg viewBox="0 0 256 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#161614" /></svg>
              </a>

              <a href="https://developers.cloudflare.com/pages/get-started" title="GitLab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path></svg>
              </a>
            </div>

            <div className="MarkdownLite">
              <p>Frontend developers want to build fast and beautiful sites, not play system integrator: bogged down by configuring build systems, setting up environments, and keeping production up to date.</p>

              <p>With Pages, you can connect your GitHub or GitLab account. After that, it’s just <strong>git push</strong> — we’ll build and deploy for you.</p>
            </div>
          </div>
        </div>

        <div className="BrowserColumn">
          <div className="BrowserColumn--content">
            <div className="MarkdownLite">
              <p>With deep Git integration, Cloudflare Pages works the way developers work. Just tell us your build command (e.g. <strong>npm run build</strong>) and we’ll take care of the rest, logs included.</p>

              <p>Check out our 3-minute guides for common frameworks including React, Vue, Gatsby, and Hugo:</p>

              <div className="FrameworksLinks">
                <a href="https://developers.cloudflare.com/pages/how-to/deploy-a-react-application" className="FrameworksLinks--link">
                  <svg viewBox="0 0 24 22" fill="none" stroke="currentColor"><path d="M12 12.807a2.05 2.05 0 100-4.1 2.05 2.05 0 000 4.1z" /><path d="M12 14.957c6.075 0 11-1.88 11-4.2 0-2.32-4.925-4.2-11-4.2s-11 1.88-11 4.2c0 2.32 4.925 4.2 11 4.2z" /><path d="M8.363 12.857c3.037 5.261 7.128 8.586 9.137 7.426 2.009-1.16 1.175-6.365-1.863-11.626C12.6 3.396 8.51.071 6.5 1.231 4.491 2.39 5.325 7.596 8.363 12.857z" /><path d="M8.363 8.657C5.325 13.918 4.49 19.124 6.5 20.283c2.009 1.16 6.1-2.165 9.137-7.426C18.675 7.596 19.51 2.391 17.5 1.231 15.491.07 11.4 3.396 8.363 8.657z" /></svg>
                  <span>React</span>
                </a>

                <a href="https://developers.cloudflare.com/pages/how-to/deploy-a-vue-application" className="FrameworksLinks--link">
                  <svg viewBox="0 0 262 227" fill="currentColor"><path d="M161.101 7.33846e-05L130.877 52.3508L100.652 7.33846e-05H0L130.877 226.688L261.753 7.33846e-05H161.101Z" fillOpacity=".65" /><path d="M161.101 7.44816e-05L130.877 52.3508L100.652 7.44816e-05H52.3507L130.877 136.01L209.403 7.44816e-05H161.101Z" /></svg>
                  <span>Vue</span>
                </a>

                <a href="https://developers.cloudflare.com/pages/how-to/deploy-a-gatsby-site" className="FrameworksLinks--link">
                  <svg viewBox="0 0 28 28" fill="currentColor"><path d="M14 28a14 14 0 110-28 14 14 0 010 28zm-7.8-6.2c2.1 2.1 4.9 3.1 7.7 3.2L3 14.2c0 2.7 1.1 5.5 3.2 7.6zm10.2 2.9C21.3 23.6 25 19.2 25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.3-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.1 13.1z" /></svg>
                  <span>Gatsby</span>
                </a>

                <a href="https://developers.cloudflare.com/pages/how-to/deploy-a-hugo-site" className="FrameworksLinks--link">
                  <svg viewBox="0 0 363 411" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M363 128.301V267.812L362.976 267.811V284.175C362.976 303.506 352.497 321.319 335.583 330.734C299.928 350.566 238.034 384.983 203.087 404.424C186.985 413.378 167.34 413.177 151.432 403.888L31.7583 334.035C12.0908 322.554 0 301.514 0 278.761V135.921C0 112.983 11.9082 91.6899 31.4614 79.6504C63.8823 59.6836 114.108 28.7583 146.301 8.93653C165.26 -2.7373 189.122 -2.99072 208.333 8.27491C244.706 29.6167 304.097 64.4619 337.714 84.1846C353.377 93.375 363 110.159 363 128.301ZM102.11 101.02V308.24H145.464V217.634H217.38V308.24H260.86V101.02H217.38V176.5H145.464V101.02H102.11Z" /></svg>
                  <span>Hugo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="BrowserColumn--illustration" data-track-if-in-viewport>
            <div className="Browser---3d-wrapper">
              <div className="Browser Browser-is-3d Browser-is-3d-right Browser-is-dark-theme Browser-is-github-theme">
                <div className="Browser--chrome">
                  <div className="Browser--window-management"><b></b><b></b><b></b></div>
                  <div className="Browser--omnibox"></div>
                </div>
                <div className="Browser--viewport">
                  <div className="Browser--site">
                    <svg viewBox="0 0 408 368" fontFamily="system-ui">
                      <defs>
                        <linearGradient id="CFPGHAppInstall--g" x1="118.%" x2="10%" y1="-2%" y2="101%">
                          <stop offset="0%" stopColor="#fbb743" />
                          <stop offset="100%" stopColor="#f28333" />
                          <stop offset="100%" stopColor="#ea6b00" />
                        </linearGradient>
                        <filter id="CFPGHRepoIntegration--f" width="110.1%" height="135.6%" x="-5%" y="-10.1%" filterUnits="objectBoundingBox">
                          <feMorphology in="SourceAlpha" radius=".5" result="shadowSpreadOuter1" />
                          <feOffset dy="8" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5" />
                          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.0934071957 0 0 0 0 0.157088377 0 0 0 0 0.220769558 0 0 0 0.381736866 0" />
                        </filter>
                        <path id="CFPGHRepoIntegration--p" d="M30 120h247.84l10-9 10 9H378a10 10 0 0110 10v75a10 10 0 01-10 10H30a10 10 0 01-10-10v-75a10 10 0 0110-10z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path fill="#f6f8fa" d="M0-1h408v348H0z" />
                        <path fill="#fff" d="M0 196h408v248H0z" />
                        <path fill="#eaecef" d="M0 196h408v1H0z" />
                        <path fill="#24292e" d="M0 0h408v60H0z" />
                        <path fill="#fff" fillRule="nonzero" d="M32 11a17.94 17.94 0 00-5.7 34.97c.9.15 1.25-.39 1.25-.86 0-.42-.03-1.84-.03-3.34-4.52.83-5.69-1.1-6.05-2.1-.2-.52-1.08-2.11-1.84-2.54-.63-.34-1.54-1.17-.03-1.19 1.42-.02 2.43 1.3 2.77 1.84 1.62 2.71 4.2 1.95 5.24 1.48a3.77 3.77 0 011.15-2.4c-4-.45-8.19-2-8.19-8.86 0-1.95.7-3.57 1.84-4.82a6.43 6.43 0 01.18-4.76s1.51-.47 4.96 1.84a16.75 16.75 0 019 0c3.44-2.33 4.95-1.84 4.95-1.84.98 2.47.35 4.31.17 4.76A6.93 6.93 0 0143.52 28c0 6.89-4.2 8.41-8.21 8.86.65.56 1.21 1.64 1.21 3.32l-.02 4.93c0 .47.34 1.04 1.24.86A17.98 17.98 0 0050 28.94C50 19.03 41.95 11 32 11z" />
                        <path fill="#fff" d="M377.25 26.65h13.54l-6.77 6.76-6.77-6.76zM350 47a18 18 0 110-36 18 18 0 010 36z" />
                        <path fill="#b6babe" d="M342 37a8 8 0 1116 0h-16zm8-9a4 4 0 110-8 4 4 0 010 8z" />
                        <use fill="#000" filter="url(#CFPGHRepoIntegration--f)" xlinkHref="#CFPGHRepoIntegration--p" />
                        <path fill="#fff" stroke="#243955" strokeOpacity=".11" d="M277.64 119.5l10.2-9.17 10.19 9.17H378c5.8 0 10.5 4.7 10.5 10.5v75c0 5.8-4.7 10.5-10.5 10.5H30c-5.8 0-10.5-4.7-10.5-10.5v-75c0-5.8 4.7-10.5 10.5-10.5h247.64z" />
                        <path fill="#f6f8fa" d="M20 173h368v32a10 10 0 01-10 10H30a10 10 0 01-10-10v-32z" />
                        <text fill="#0366d6" fontSize="13" fontWeight="500">
                          <tspan x="328" y="197">Details</tspan>
                        </text>
                        <text fill="#24292e" fontSize="13" fontWeight="500">
                          <tspan x="91" y="197">Cloudflare Pages</tspan>
                        </text>
                        <text fill="#24292e" fontSize="13" fontWeight="500">
                          <tspan x="35" y="143">All checks have passed</tspan>
                        </text>
                        <text fill="#69717a" fontSize="13" fontWeight="400">
                          <tspan x="196" y="197">Deploy completed</tspan>
                        </text>
                        <text fill="#69717a" fontSize="13" fontWeight="400">
                          <tspan x="36" y="160">1 successful check</tspan>
                        </text>
                        <rect width="368" height="1" x="20" y="173" fill="#e1e4e8" rx=".5" />
                        <text fill="#0366d6" fontSize="16" fontWeight="500">
                          <tspan x="50" y="96">github-username</tspan>
                        </text>
                        <text fill="#0366d6" fontSize="16" fontWeight="bold">
                          <tspan x="192" y="96">repo-name</tspan>
                        </text>
                        <path fill="#586069" d="M182.14 100H180l4.86-16H187z" />
                        <path fill="#586069" fillRule="nonzero" d="M27 87.5a2.5 2.5 0 012.5-2.5h8.75c.41 0 .75.34.75.75v12.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.71 1.7.75.75 0 01-1.08 1.05A2.5 2.5 0 0127 96.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.7c.3-.13.64-.2 1-.2h8v-7.5zM30 97.25v3.25a.25.25 0 00.4.2l1.45-1.09a.25.25 0 01.3 0l1.45 1.09a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                        <path stroke="#35a353" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M282 91.45l4.38 4.55L295 86M38 192.45l4.38 4.55L51 187" />
                        <rect width="57" height="28" x="34.5" y="245.5" fill="#fafbfc" stroke="#dbdddd" rx="5" />
                        <rect width="35" height="28" x="259.5" y="245.5" fill="#fafbfc" stroke="#dbdddd" rx="5" />
                        <text fill="#24292e" fontSize="13" fontWeight="500">
                          <tspan x="47.5" y="263">main</tspan>
                        </text>
                        <text fill="#24292e" fontSize="16" fontWeight="500">
                          <tspan x="272.45" y="263">+</tspan>
                        </text>
                        <path fill="#f1f8ff" stroke="#c9e2fe" d="M33.5 333.5h351V289a4.5 4.5 0 00-4.5-4.5H38a4.5 4.5 0 00-4.5 4.5v44.5z" />
                        <text fill="#24292e" fontSize="16" fontWeight="500">
                          <tspan x="82" y="313">github-username</tspan>
                        </text>
                        <text fill="#69717a" fontSize="16" fontWeight="400">
                          <tspan x="212" y="313">Initial commit</tspan>
                        </text>
                        <path fill="#fff" d="M57.5 324a14.5 14.5 0 110-29 14.5 14.5 0 010 29z" />
                        <path fill="#b6babe" d="M51 316a6.54 6.54 0 016.5-6.59c3.59 0 6.5 2.95 6.5 6.59H51zm6.5-7.41a3.27 3.27 0 01-3.25-3.3c0-1.82 1.46-3.29 3.25-3.29 1.8 0 3.25 1.47 3.25 3.3 0 1.81-1.46 3.29-3.25 3.29z" />
                        <path fill="#fff" stroke="#eaecef" d="M33.5 333.5h351v80h-351z" />
                        <rect width="78" height="28" x="305.5" y="245.5" fill="#35a353" stroke="#31904c" rx="5" />
                        <text fill="#fff" fontSize="13" fontWeight="500">
                          <tspan x="315.48" y="263">Download</tspan>
                        </text>
                        <rect width="22" height="22" x="61.5" y="181.5" fill="#fff" stroke="#c5c7c9" rx="4" />
                        <path fill="url(#CFPGHAppInstall--g)" fillRule="nonzero" d="M71.52 193.74h-4.03l-.49-.9 6.78-9.84 1.06.43-1.34 6.84h4.01l.49.89-6.48 9.84-1.08-.4z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="QuoteSection">
        <div className="QuoteSection--column">
          <blockquote className="QuoteSection--quote">
            <p>Cloudflare Pages supporting Git integration for automated deployments is exciting. I love spending more time on product and less time setting up and fighting infrastructure.</p>
          </blockquote>

          <cite className="QuoteSection--cite">
            <figure className="QuoteSection--cite-company-logo">
              <svg viewBox="0 0 114 88"><title>Outsmartly</title><ellipse cx="204.58" cy="275.48" fill="#f15b49" rx="6.93" ry="5.66" transform="rotate(-49.87 -167.02 362.16)" /><path d="M104.38 34.79l-.36-.84-.2-.48A70.14 70.14 0 0087.93 10.8 72.14 72.14 0 0073.64.12a.94.94 0 00-.82 0 .9.9 0 00-.55.59c-1.79 5.75.36 12.69 5.35 17.27a41.61 41.61 0 007.24 5.15c4.09 2.46 8 4.8 12.29 12.18-5.74 2.63-9.45 7.69-9 13.14a12.58 12.58 0 004.7 8.48 18.14 18.14 0 0011.75 4 21.17 21.17 0 002.37-.13 2.18 2.18 0 001.93-2.09 58.42 58.42 0 00-4.52-23.92z" fill="#54c8e9" /><path d="M59 51.19s-8.51-18.06-11.77-22.66c-10.35-14.61-24.93-10.7-32.07-2.71l-.23.26-.22.26c-6.95 8.14-8.86 23.12 7 31.41 13.28 6.93 16.16 4.37 39.85 20.27l25.3 6.29s3.47-3.89-2.44-6.87C78.77 74.6 71.83 72.48 59 51.19z" fill="#f15b49" /><path d="M85.45 49.86c-43-32.1-52.38-30.88-53.86-31.12 3.36 1.05 11.22 3.81 23.91 34.24L32.31 83.42a2.9 2.9 0 00.22 3.8 2.9 2.9 0 003.78.46l48.92-31.66a3.75 3.75 0 00.22-6.16z" fill="#ffe41d" /><path d="M55.49 52.98l14 13.22-13.06 8.46-12.07-7.07 11.13-14.61z" fill="#faaf43" /><ellipse cx="204.58" cy="275.48" fill="#f15b49" rx="6.93" ry="5.66" transform="rotate(-49.87 -167.02 362.16)" /><path d="M104.38 34.79l-.36-.84-.2-.48A70.14 70.14 0 0087.93 10.8 72.14 72.14 0 0073.64.12a.94.94 0 00-.82 0 .9.9 0 00-.55.59c-1.79 5.75.36 12.69 5.35 17.27a41.61 41.61 0 007.24 5.15c4.09 2.46 8 4.8 12.29 12.18-5.74 2.63-9.45 7.69-9 13.14a12.58 12.58 0 004.7 8.48 18.14 18.14 0 0011.75 4 21.17 21.17 0 002.37-.13 2.18 2.18 0 001.93-2.09 58.42 58.42 0 00-4.52-23.92z" fill="#54c8e9" /><path d="M59 51.19s-8.51-18.06-11.77-22.66c-10.35-14.61-24.93-10.7-32.07-2.71l-.23.26-.22.26c-6.95 8.14-8.86 23.12 7 31.41 13.28 6.93 16.16 4.37 39.85 20.27l25.3 6.29s3.47-3.89-2.44-6.87C78.77 74.6 71.83 72.48 59 51.19z" fill="#f15b49" /><path d="M85.45 49.86c-43-32.1-52.38-30.88-53.86-31.12 3.36 1.05 11.22 3.81 23.91 34.24L32.31 83.42a2.9 2.9 0 00.22 3.8 2.9 2.9 0 003.78.46l48.92-31.66a3.75 3.75 0 00.22-6.16z" fill="#ffe41d" /><path d="M55.49 52.98l14 13.22-13.06 8.46-12.07-7.07 11.13-14.61z" fill="#faaf43" /></svg>
            </figure>
            <div className="QuoteSection--cite-details">
              <div className="QuoteSection--cite-name">Jay Phelps</div>
              <div className="QuoteSection--cite-title">Co-founder, Outsmartly</div>
            </div>
          </cite>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="Section">
        <h2 className="Section--title" data-js-balance-text>Building a site is a team sport.</h2>

        <div className="BrowserColumn">
          <div className="BrowserColumn--illustration" data-track-if-in-viewport="collaboration">
            <div className="BrowserColumn--illustration-left-sidebar">
              <div className="GitTree">
                <div className="GitTree--commits" style={{ "--commits": 5 }}>
                  <div className="GitTree--commit"></div>
                </div>
              </div>
            </div>

            <div className="Browser---3d-wrapper">
              <div className="Browser Browser-is-3d">
                <div className="Browser--chrome">
                  <div className="Browser--window-management"><b></b><b></b><b></b></div>
                  <div className="Browser--omnibox"></div>
                </div>
                <div className="Browser--viewport Browser--viewport-with-multiple-sites">
                  <div className="Browser--site" data-is-active><svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h362V70H23zm-3-3h368v89H20V67zM23 179v83h362v-83H23zm-3-3h368v89H20v-89zM23 288v83h362v-83H23zm-3-3h368v89H20v-89z" /><path fill="#bdc2c7" d="M168 20h20v20h-20zM204 18.69L215.31 30 204 41.31 192.69 30z" /><circle cx="230" cy="30" r="10" fill="#bdc2c7" /></svg></div>
                  <div className="Browser--site"><svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71zM227 189h41v3h-41zM33 189h71v3H33z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71zM168 20h20v20h-20zM204 18.69L215.31 30 204 41.31 192.69 30z" /><circle cx="230" cy="30" r="10" fill="#bdc2c7" /></svg></div>
                  <div className="Browser--site"><svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 179v83h168v-83H23zm-3-3h174v89H20v-89z" /><path fill="#bdc2c7" d="M227 189h41v3h-41zM33 189h71v3H33zM20 20h20v20H20zM56 18.69L67.31 30 56 41.31 44.69 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zM368 29h20v3h-20zM368 36h20v3h-20z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71z" /></svg></div>
                  <div className="Browser--site"><svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#bdc2c7" d="M20 20h20v20H20zM56 18.69L67.31 30 56 41.31 44.69 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zM368 29h20v3h-20zM368 36h20v3h-20z" /><rect width="94" height="14" x="112" y="23" fill="#d8dbdd" rx="7" /><path fill="#eaebeb" fillRule="nonzero" d="M217 179v83h168v-83H217zm-3-3h174v89H214v-89zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM217 288v83h168v-83H217zm-3-3h174v89H214v-89z" /><path fill="#bdc2c7" d="M33 298h41v3H33zM227 298h71v3h-71z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 179v83h168v-83H23zm-3-3h174v89H20v-89z" /><path fill="#bdc2c7" d="M227 189h41v3h-41zM33 189h71v3H33z" /><path fill="#eaebeb" fillRule="nonzero" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM217 70v83h168V70H217zm-3-3h174v89H214V67z" /><path fill="#bdc2c7" d="M33 80h41v3H33zM227 80h71v3h-71z" /></svg></div>
                  <div className="Browser--site"><svg className="Browser--site-content-space-above" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348"><path fill="#bdc2c7" d="M20 20h20v20H20zm36-1.3L67.3 30 56 41.3 44.7 30z" /><circle cx="82" cy="30" r="10" fill="#bdc2c7" /><rect width="94" height="14" x="112" y="23" fill="#d8dbdd" rx="7" /><path fill="#bdc2c7" d="M368 22h20v3h-20zm0 7h20v3h-20zm0 7h20v3h-20zM33 80h41v3H33zM227 80h41v3h-41zM33 189h41v3H33zM227 189h41v3h-41zM33 298h41v3H33zM227 298h41v3h-41z" /><path fill="#eaebeb" d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM33 96h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zM58 96h11v3H58zM217 70v83h168V70H217zm-3-3h174v89H214V67zM227 96h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM33 205h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 179v83h168v-83H217zm-3-3h174v89H214v-89zM227 205h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM33 314h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 288v83h168v-83H217zm-3-3h174v89H214v-89zM227 314h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11z" /></svg></div>
                </div>
              </div>
            </div>

            <div className="BrowserColumn--replay-button">
              <button className="Button"><span data-part="icon">↻</span> Replay</button>
            </div>

            <div className="CollaborationAnimationMessages">
              <div className="CollaborationAnimationMessages--bubble">
                I’ll add a nav in the next version.
              </div>
              <div className="CollaborationAnimationMessages--bubble">
                Maybe we should add search?
              </div>
              <div className="CollaborationAnimationMessages--bubble">
                Looks great! Love the layout.
              </div>
            </div>
          </div>

          <div className="BrowserColumn--content">
            <div className="MarkdownLite">
              <p>Websites are built through collaboration between designers, engineers, writers, and more. Cloudflare Pages makes it effortless to satisfy each group, so you can iterate quickly, and save time on coordination.</p>

              <ul className="UnorderedListPagesThemed">
                <li><strong>Preview early, preview often:</strong> automatically generated links for every commit make it easy to get feedback on the final result.</li>
                <li><strong>Unlimited seats for free:</strong> additional collaborators shouldn’t break the bank. With Pages, you can add them all for free.</li>
                <li><strong>Preview control:</strong> don’t post your drafts to the web. With Cloudflare Access integration, you have granular control over who’s accessing your previews.</li>
                <li><strong>Built-in, free web analytics:</strong> Get real-time insight into your page with privacy-first analytics that you can share with your team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="QuoteSection">
        <div className="QuoteSection--column">
          <blockquote className="QuoteSection--quote">
            <p>Cloudflare Pages makes it dead simple to deploy our static websites and to collaborate within our team as we do so. Features such as shareable preview links with every commit and pull request, along with the Git integration, fit in seamlessly with our dev workflow.</p>
          </blockquote>

          <cite className="QuoteSection--cite">
            <figure className="QuoteSection--cite-company-logo">
              <svg fill="#fa4338" viewBox="0 0 45 54"><title>Envoy</title><path d="M16.35 15.61H28.5a1.9 1.9 0 000-3.79H16.35a1.9 1.9 0 000 3.8" /><path d="M40.45 0H4.8A4.8 4.8 0 000 4.8v44.04a4.8 4.8 0 004.8 4.81h35.65a4.8 4.8 0 004.8-4.8V4.8a4.8 4.8 0 00-4.8-4.8zm1.02 47.74c0 1.17-.96 2.12-2.13 2.12H5.91a2.13 2.13 0 01-2.12-2.12V5.9c0-1.17.95-2.12 2.12-2.12h33.43c1.17 0 2.13.95 2.13 2.12v41.83z" /><path d="M28.86 38.04H18.24v-4.87h6.03a1.9 1.9 0 000-3.8h-6.03v-4.53H28.4a1.9 1.9 0 000-3.79H16.35a1.9 1.9 0 00-1.9 1.9v16.99a1.9 1.9 0 001.9 1.89h12.5a1.9 1.9 0 000-3.79" /></svg>
            </figure>
            <div className="QuoteSection--cite-details">
              <div className="QuoteSection--cite-name">Matt Harris</div>
              <div className="QuoteSection--cite-title">Head of Workplace and Technology, Envoy</div>
            </div>
          </cite>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="Section">
        <h2 className="Section--title" data-js-balance-text>Speed, security, and scalability?<br />Our job, not yours.</h2>
        <div className="CloudflareBenefitsSection--illustrations">
          <img alt="Global network" src="https://workers.cloudflare.com/resources/illustrations/global-network.svg" />
          <img alt="Infinite scaling" src="https://workers.cloudflare.com/resources/illustrations/scaling.svg" />
        </div>

        <div className="CloudflareBenefitsSection--content">
          <div className="MarkdownLite">
            <p>Making a beautiful well designed site is only half a web developer’s job. You also want it to be secure, fast, and scalable. Cloudflare Pages makes it easy to check those boxes. We’ll take care of the infrastructure, so you can focus on design and content.</p>

            <ul className="UnorderedListPagesThemed">
              <li><strong>Fastest network:</strong> run your site on the Cloudflare edge, milliseconds from end users – up to 115% faster than competing platforms.</li>
              <li><strong>Incredibly scalable:</strong> with one of the world’s largest networks, Cloudflare can absorb traffic from the most visited sites.</li>
              <li><strong>Always secure:</strong> SSL works out of the box, so you never have to worry about provisioning certificates.</li>
              <li><strong>Stay ahead of the curve:</strong> support for the latest web standards with HTTP/3, QUIC, image compression out of the box, and more.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="SectionSpacer"></div>

      <section className="QuoteSection">
        <div className="QuoteSection--column">
          <blockquote className="QuoteSection--quote">
            <p>Because the new Dig Inn ordering experience runs on Cloudflare Workers, we never have to worry about a large spike in traffic or orders bringing down the system and causing a revenue loss. Since all of our code lives on the distributed Cloudflare network, customers can load the site and order without latency. We no longer worry about a lunch or dinner rush causing issues.</p>
          </blockquote>

          <cite className="QuoteSection--cite">
            <figure className="QuoteSection--cite-company-logo">
              <svg viewBox="0 0 53 30" fill="currentColor"><title>DIG</title><path d="M9.84 24.6c.8 0 1.49-.13 2.06-.4a4.04 4.04 0 002.2-2.44c.17-.53.26-1.07.26-1.6V9.68c0-1.28-.38-2.33-1.14-3.16-.76-.83-1.9-1.24-3.42-1.24H5.72V24.6h4.12zM0 .68h10.44c1.36 0 2.63.17 3.8.5a9 9 0 013.08 1.52 6.96 6.96 0 012.06 2.6c.5 1.05.74 2.3.74 3.74v11.28c0 1.52-.25 2.84-.74 3.96a7.48 7.48 0 01-2.06 2.78 8.52 8.52 0 01-3.08 1.62c-1.17.35-2.44.52-3.8.52H0V.68zm23.48 0h5.72V29.2h-5.72V.68zm19.44 29c-1.41 0-2.75-.18-4-.54a9.48 9.48 0 01-3.28-1.64 7.97 7.97 0 01-2.24-2.82 9.3 9.3 0 01-.84-4.12V9.32a8.4 8.4 0 013.04-6.76A9.67 9.67 0 0138.9.8a14.08 14.08 0 017.74-.12c1.17.32 2.21.81 3.12 1.48a7.12 7.12 0 012.96 5.92v1.88h-5.24V8.72c0-1.2-.41-2.17-1.24-2.9a4.64 4.64 0 00-3.2-1.1c-1.5 0-2.66.43-3.5 1.28a4.64 4.64 0 00-1.26 3.4v11c0 1.44.4 2.59 1.22 3.44.81.85 1.98 1.28 3.5 1.28 1.6 0 2.73-.36 3.4-1.08.67-.72 1-1.7 1-2.92v-3.28h-4.76v-4.12h10.12v7.84a7.6 7.6 0 01-.78 3.52 7.39 7.39 0 01-2.12 2.54c-.9.68-1.94 1.2-3.14 1.54-1.2.35-2.47.52-3.8.52z" /></svg>
            </figure>
            <div className="QuoteSection--cite-details">
              <div className="QuoteSection--cite-name">Matt Weinberg</div>
              <div className="QuoteSection--cite-title">Co-founder & President of Technology, Happy Cog, developers of Dig</div>
            </div>
          </cite>
        </div>
      </section>

      <section className="PlansSection" id="pricing">
        <div className="PlansSection--column">
          <div className="PlansSection--plans">
            <div className="PlansSection--plan PlansSection--plan-is-free">
              <div className="PlansSection--plan-header">
                <h2 className="PlansSection--plan-title">Free</h2>
                <div className="PlansSection--plan-price"><span className="Number"><span className="Number--dollars">$</span><span className="Number--number">0</span></span></div>
              </div>
              <div className="PlansSection--plan-details">
                <ul className="UnorderedListPagesThemed">
                  <li><span className="Number Number-is-strong"><span className="Number--number">1</span></span> build at a time</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">500</span></span> builds per month</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">100</span></span> custom domains per project</li>
                  <li>Unlimited sites</li>
                  <li>Unlimited static requests</li>
                  <li>Unlimited bandwidth</li>
                </ul>
              </div>
              <div className="PlansSection--plan-cta">
                <a className="Button Button-is-primary" href="https://dash.cloudflare.com/sign-up/pages">Sign Up</a>
              </div>
            </div>

            <div className="PlansSection--plan">
              <div className="PlansSection--plan-header">
                <h2 className="PlansSection--plan-title">Pro</h2>
                <div className="PlansSection--plan-price">
                  <span className="Number">
                    <span className="Number--dollars">$</span>
                    <span className="Number--number">20</span>
                    <span className="Number--per">/</span>
                    <span className="Number--per-unit">mo</span>
                    <span className="Number--bill-rate">&nbsp;billed annually</span>
                  </span>
                </div>
                <div className="PlansSection--plan-price deemphasize">
                  <span className="Number">
                    <span className="Number--dollars">$</span>
                    <span className="Number--number">25</span>
                    <span className="Number--per">/</span>
                    <span className="Number--per-unit">mo</span>
                    <span className="Number--bill-rate">&nbsp;billed monthly</span>
                  </span>
                </div>
              </div>
              <div className="PlansSection--plan-details">
                <ul className="UnorderedListPagesThemed">
                  <li><span className="Number Number-is-strong"><span className="Number--number">5</span></span> concurrent builds</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">5,000</span></span> builds per month</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">250</span></span> custom domains per project</li>
                  <li>Unlimited sites</li>
                  <li>Unlimited static requests</li>
                  <li>Unlimited bandwidth</li>
                </ul>
              </div>
              <div className="PlansSection--plan-cta">
                <a className="Button Button-is-secondary-orange" href="https://dash.cloudflare.com/sign-up/pages/">Sign Up</a>
              </div>
            </div>

            <div className="PlansSection--plan">
              <div className="PlansSection--plan-header">
                <h2 className="PlansSection--plan-title">Business</h2>
                <div className="PlansSection--plan-price">
                  <span className="Number">
                    <span className="Number--dollars">$</span>
                    <span className="Number--number">200</span>
                    <span className="Number--per">/</span>
                    <span className="Number--per-unit">mo</span>
                    <span className="Number--bill-rate">&nbsp;billed annually</span>
                  </span>
                </div>
                <div className="PlansSection--plan-price deemphasize">
                  <span className="Number">
                    <span className="Number--dollars">$</span>
                    <span className="Number--number">250</span>
                    <span className="Number--per">/</span>
                    <span className="Number--per-unit">mo</span>
                    <span className="Number--bill-rate">&nbsp;billed monthly</span>
                  </span>
                </div>
              </div>
              <div className="PlansSection--plan-details">
                <ul className="UnorderedListPagesThemed">
                  <li><span className="Number Number-is-strong"><span className="Number--number">20</span></span> concurrent builds</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">20,000</span></span> builds per month</li>
                  <li><span className="Number Number-is-strong"><span className="Number--number">500</span></span> custom domains per project</li>
                  <li>Unlimited sites</li>
                  <li>Unlimited static requests</li>
                  <li>Unlimited bandwidth</li>
                </ul>
              </div>
              <div className="PlansSection--plan-cta">
                <a className="Button Button-is-secondary-orange" href="https://dash.cloudflare.com/sign-up/pages">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
