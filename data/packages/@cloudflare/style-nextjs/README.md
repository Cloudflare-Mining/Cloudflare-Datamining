# cf-style-nextjs

> Cloudflare Style Next.js integration

This package provides a simple integration of Cloudflare styles (based on Fela)
into Next.js framework.

## Usage

```sh
$ npm install cf-style-nextjs
```

Your `/pages/_document.js` should look similar to this:

```jsx
import Document, { Head, Main, NextScript } from 'next/document';
import { getInitialProps, getStyles } from 'cf-style-nextjs';

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps();
  render() {
    return (
      <html>
        <Head>{getStyles(this.props)}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```

and all your pages should be wrapped by `<StyleProvider />`:

```jsx
import { StyleProvider } from 'cf-style-nextjs';
import { Button } from 'cf-component-button';

export default () => (
  <StyleProvider>
    <Button type="primary" onClick={() => console.log('Hai!')}>
      Welcome!
    </Button>
  </StyleProvider>
);
```

## Tips

`getInitialProps` accepts arbitrary callback, so you can still hook into
getInitialProps lifecycle.

```jsx
import Document, { Head, Main, NextScript } from 'next/document';
import { getInitialProps, getStyles } from 'cf-style-nextjs';

const MyInitialThing = ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps(MyInitialThing);
  render() {
    return (
      <html>
        <Head>{getStyles(this.props)}</Head>
        <body>
          User Agent: {this.props.userAgent}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```
