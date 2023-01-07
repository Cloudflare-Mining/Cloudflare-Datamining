# Sable Components

A collection of React components for Cloudflare App developers.

__This project is in active development and may experience frequent changes.__


## Installation

```bash
yarn add @cloudflare-apps/sable
```

```javascript
import React from 'react'
import RelatedAppsBanner from '@cloudflare-apps/sable/related-apps-banner'

class MyReactApp extends React.Component {
  render () {
    return <div>
      <RelatedAppsBanner categories={['analytics', 'make-money-on-your-site']} />
    </div>
  }
}
```

## Development Setup

```bash
yarn install
yarn start
```

Testable pages will be logged to the console.

### Publishing new React components

Manually bump package.json version number. Then run the publish command:

```bash
yarn run publish-package
```

### Deploying the static pages

```bash
yarn add @cloudflare-apps/components
```

Static pages are present at node_modules/@cloudflare-apps/sable/pages
You can test these via:

```bash
yarn add @cloudflare-apps/sable
cd node_modules/@cloudflare-apps/sable
python -m SimpleHTTPServer 8000
```

http://localhost:8000/pages/related-apps-banner/?app-category=analytics
