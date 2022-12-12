/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, image, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            socialImage
          }
        }
      }
    `
  )

  const formattedTitle = title
    ? `${title} · ${site.siteMetadata.title}`
    : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={formattedTitle}
      meta={[
        {
          name: `description`,
          content: description ? description : site.siteMetadata.description,
        },
        {
          name: `image`,
          content: image ? image : site.siteMetadata.socialImage,
        },
        {
          property: `og:description`,
          content: description ? description : site.siteMetadata.description,
        },
        {
          name: `og:image`,
          content: image ? image : site.siteMetadata.socialImage,
        },
        {
          property: `og:title`,
          content: formattedTitle,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:description`,
          content: description ? description : site.siteMetadata.description,
        },
        {
          name: `twitter:image:src`,
          content: image ? image : site.siteMetadata.socialImage,
        },
        {
          name: `twitter:title`,
          content: formattedTitle,
        },
      ].concat(meta)}
    >
      <link rel="icon" type="image/png" href="/favicon.ico" sizes="48x48" />
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0e4e2cbcce704d70ae3734c3c001ebca"}'></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
