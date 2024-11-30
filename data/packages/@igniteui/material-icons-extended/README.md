## Material Icons Extended by Infragistics

[![npm version](https://badge.fury.io/js/%40igniteui%2Fmaterial-icons-extended.svg)](https://badge.fury.io/js/%40igniteui%2Fmaterial-icons-extended)

This is an unofficial subset of icons that extends the official [Material Design Icon set](https://github.com/google/material-design-icons) provided by Google.

### Purpose

We felt the Material Design Icon set is too limited and we wanted to extend it by designing additional icons that will fit well within the Material Design language.

### Scope

This package includes 260+ icons distributed in 7 categories:

- Content
- Editor
- Finance
- Health
- Logos
- Programming
- Social Media

We will be adding more icons and we will try to make the icon set available to as many platforms as possible. Right now we only provide SVG files/sprites so you can use them as you see fit. In addition to the SVG files, we've exported the icons as JavaScript objects so you can import and use them in your Angular/React/Vue app.

The initial target for this set is to work with our [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular?utm_source=GitHub%2C%20npm&utm_medium=readme&utm_campaign=backlink) UI framework by utilizing the `igx-icon` component and the Ignite UI for Angular Icon Service.

### Installation

```sh
npm install @igniteui/material-icons-extended
```

### Usage

#### With Ignite UI for Angular

In your component:

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular';
import { github } from '@igniteui/material-icons-extended';
// ...
export class SampleComponent implements OnInit {
  constructor(private iconService: IgxIconService) {}

  ngOnInit(): void {
    // Register a single icon
    this.iconService.addSvgIconFromText(github.name, github.value, 'imx-icons');
  }
}
```

Or to register multiple icons/categories:

```typescript
//...
import { github, health, programming } from '@igniteui/material-icons-extended';

export class SampleComponent implements OnInit {
  //...
  addIcons() {
    for (let icon of [...health, ...programming, github]) {
      this.iconService.addSvgIconFromText(icon.name, icon.value, 'imx-icons');
    }
  }

  ngOnInit(): void {
    this.addIcons();
  }
}
```

In your component template:

```html
<igx-icon family="imx-icons" name="github"></igx-icon>
```

#### In a React App

First, make sure there's a way to use inline SVGs in your application. One package that does the job is [svg-inline-react](https://github.com/sairion/svg-inline-react).

```sh
npm install svg-inline-react
```

```javascript
import InlineSVG from 'svg-inline-react';
import { github } from '@igniteui/material-icons-extended';

const App = () => (
  <InlineSVG src={github.value} style={{ width: '24px', height: '24px' }} />
);
```

#### With SVG sprites

##### CSS Sprite Maps

We include CSS that associate each icon with a CSS class. This file can be quite large and you may not use all icons included in it. If you want to cherry-pick only the icons that will ever be used in your project, we include Sass, Less, and Stylus mixins that allow you to only add one icon at a time to the compiled CSS.

To use the CSS classes, import the main the CSS sprite file in your app (verify the path to the stylesheet based on your project structure):

```html
<link
  href="../node_modules/@igniteui/material-icons-extended/styles/sprite.css"
  rel="stylesheet"
/>
```

Then you can simply use any of the icons in the following manner:

Include the GitHub icon.

```html
<i class="imx-icon imx-github"></i>
```

To take advantage of the included mixins, import the corresponding sprite.(scss|less|styl) file.

With Sass, in your main Sass file import:

```scss
@use '@igniteui/material-icons-extended/styles/sprite.scss' as *;

.github-icon {
  @include imx-icon('github');
}
```

With Less:

```less
@import '@igniteui/material-icons-extended/styles/sprite.less';

.github-icon {
  .imx-icon('github');
}
```

With Stylus:

```stylus
@import '@igniteui/material-icons-extended/styles/sprite.styl'

.github-icon
    imx-icon('github')
```

Then in an HTML file:

```html
<i class="github-icon"></i>
```

#### Symbols

The package also includes an SVG sprite with all icons listed as `<symbol>` elements. This sprite can be imported from `@igniteui/material-icons-extended/assets/sprite.symbol.svg`;
Once you add the image to your application, you can use the encapsulated symbols like this:

In your HTML:

```html
<svg class="imx-github">
  <use xlink:href="sprite.symbol.svg#imx-github"></use>
</svg>
```

In your CSS:

```css
.imx-github {
  fill: royalblue;
}
```

#### Standalone SVG images:

All SVG icons can be found in `@igniteui/material-icons-extended/assets/svgs`;

### Requests

Feel free to use the issue tracker to request new icons.

### Where is the web font?

After some internal discussions and research, we've decided not to include a web font.
There are various reasons for this decision, the main one being accessibility. SVG should be well supported across all modern browsers.
