# Cloudflare Developer brand assets

## Note about the project name

This project currently lives at [@cloudflare/workers-brand-assets](https://github.com/cloudflare/workers-brand-assets) (and is published to an NPM package of the same name) as it originally included only the brand assets for Cloudflare Workers. As of version `v3.0.0` its use has expanded to beyond that of just Workers, so the project should be renamed to `@cloudflare/developer-brand-assets`. This is not something that is currently technically possible, so for now, please disregard the “workers”-portion of the name.

## Overview

This repo contains CSS components, illustrations, and other SVG assets for use on the ecosystem of Cloudflare Developer sites, including:

- [Cloudflare Developers](https://developers.cloudflare.com)
- [Cloudflare Workers](https://workers.cloudflare.com)
- Documentation sites published using the Cloudflare Docs engine
  - [Cloudflare Workers docs](https://developers.cloudflare.com/workers)

## CSS

### Global CSS

While some of them are not strictly necessary (like the selection color styles, for example), to achieve consistency it’s best to include them all, and in this order:

- [box-sizing.css](css/global/box-sizing.css)
- [element-normalization.css](css/global/element-normalization.css)
- [sizes-variables.css](css/global/sizes-variables.css)
- [font-variables.css](css/global/font-variables.css)
- [brand-color-variables.css](css/global/brand-color-variables.css)
- [theme-color-variables.css](css/global/theme-color-variables.css)
- [theme-helpers.css](css/global/theme-helpers.css)
- [selection-color.css](css/global/selection-color.css)
- [html.css](css/global/html.css)

See this [example of including them in a Gatsby site](https://github.com/cloudflare/workers-docs-engine/blob/00e11586e38d1ef19650ca11de3eb06e6454f3df/gatsby-browser.js#L7-L15).

### CSS Components

Once you have the global CSS included, you’re ready to start pulling in components.

- __Components for all Cloudflare Developers sites:__
  - [AspectRatio](css/components/aspect-ratio.css)
  - [Breadcrumbs](css/components/breadcrumbs.css)
  - [Button](css/components/button.css)
  - [CodeBlock](css/components/code-block.css)
  - [DefinitionList](css/components/definition-list.css)
  - [Dropdown](css/components/dropdown.css)
  - [ErrorPage](css/components/error-page.css)
  - [Footer](css/components/footer.css)
  - [InlineCode](css/components/inline-code.css)
  - [Link](css/components/link.css)
  - [MarkdownLite](css/components/markdown-lite.css)
  - [NetworkMap](css/components/network-map.css)
  - [Number](css/components/number.css)
  - [RadioTabs](css/components/radio-tabs.css)
  - [StreamVideo](css/components/stream-video.css)
  - [Superscript](css/components/superscript.css)
  - [ThemeToggle](css/components/theme-toggle.css)
  - [Tooltip](css/components/tooltip.css)

- __Components for Cloudflare Workers-specific sites:__
  - [UnorderedListWorkersThemed](css/components/unordered-list-workers-themed.css)

- __Logos:__
  - [CloudflareLogo](css/components/cloudflare-logo.css)
  - [CloudflareWorkersLogo](css/components/cloudflare-workers-logo.css)

### Helper CSS

There are additional CSS “helpers” that “just work” in most situations when applied to elements by a data attribute.

- [desktop-and-mobile-only.css](css/helpers/desktop-and-mobile-only.css)
- [is-smooth-scrolling.css](css/helpers/is-smooth-scrolling.css)
- [is-visually-hidden.css](css/helpers/is-visually-hidden.css)
- [with-styled-webkit-scrollbars.css](css/helpers/is-visually-hidden.css)

## Resources

The resources folder contains favicons and SVGs used across the Cloudflare Developers sites.

## Developing

See [DEVELOPING.md](DEVELOPING.md).

