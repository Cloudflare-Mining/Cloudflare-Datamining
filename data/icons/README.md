# @cloudflare/component-icon

> Cloudflare Icon Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-icon

```

## Usage

```jsx
import React from 'react';
import { Icon } from '../../src';
import iconTypes from '../../src/iconTypes';

import { createComponent } from '@cloudflare/style-container';

const ColorWrapper = createComponent(
  () => ({
    backgroundColor: '#f1f1f1',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '15px',
    maxWidth: 750,
    display: 'block'
  }),
  'span'
);

const TextWrapper = createComponent(
  () => ({
    paddingRight: '20px',
    paddingLeft: '5px'
  }),
  'span'
);

const IconComponent = () => (
  <div>
    <p>Types:</p>
    <Icons>
      {iconTypes.map(iconType => (
        <IconWrapper key={iconType}>
          <Icon label={iconType} type={iconType} size="3x" />
          <pre>{iconType}</pre>
        </IconWrapper>
      ))}
    </Icons>

    <p>Sizes:</p>
    <p>
      <Icon label="2x" size="2x" type="gear" />
      <TextWrapper>2x</TextWrapper>
      <Icon label="2.5x" size="2.5x" type="gear" />
      <TextWrapper>2.5x</TextWrapper>
      <Icon label="3x" size="3x" type="gear" />
      <TextWrapper>3x</TextWrapper>
      <Icon label="3.5x" size="3.5x" type="gear" />
      <TextWrapper>3.5x</TextWrapper>
      <Icon label="4x" size="4x" type="gear" />
      <TextWrapper>4x</TextWrapper>
    </p>

    <p>Colors:</p>
    <p>
      <ColorWrapper>
        <Icon label="default" size="2x" type="search" color="default" />
        <TextWrapper>Default</TextWrapper>
        <Icon label="primary" size="2x" type="caret-right" color="primary" />
        <TextWrapper>Primary</TextWrapper>
        <Icon label="success" size="2x" type="ok" color="success" />
        <TextWrapper>Success</TextWrapper>
        <Icon label="warning" size="2x" type="info-sign" color="warning" />
        <TextWrapper>Warning</TextWrapper>
        <Icon label="danger" size="2x" type="exclamation-sign" color="danger" />
        <TextWrapper>Danger</TextWrapper>
        <Icon label="black" size="2x" type="remove" color="black" />
        <TextWrapper>Black</TextWrapper>
        <Icon label="white" size="2x" type="shield" color="white" />
        <TextWrapper>White</TextWrapper>
      </ColorWrapper>
    </p>
  </div>
);

const gutterSize = '0.5em';
const Icons = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
  gridAutoRows: '1fr',
  margin: `0 -${gutterSize}`,
  '&::before': {
    content: `''`,
    width: '0',
    paddingBottom: '100%',
    gridRow: '1 / 1',
    gridColumn: '1 / 1'
  }
}));

const IconWrapper = createComponent(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: gutterSize,
  background: theme.colors.gray[9],
  '& svg': {
    flex: 1,
    marginTop: '1.5em'
  },
  '&:first-child': {
    gridRow: '1 / 1',
    gridColumn: '1 / 1'
  }
}));

export default IconComponent;

```

## Updating Icons
If you would like to add new icons to the component library/design system please follow the procedures below to help ensure the icons remain consistent.

### Product Design
Follow the link to the `product-design` repository where you will find the original SVG's. Follow the [Icon Guidelines](https://wiki.cfops.it/x/QLcvCQ) for details on how to create, export, and add new icons to [product-design](https://bitbucket.cfdata.org/projects/DESIGN/repos/product-design/browse) and stratus repositories.

### component-library
Once your icon is added to the `product-design` repo under the `/icons/icons-exports/` folder and all instructions are followed it is ready to be converted to our React format in this `component-library` repo. 

1. `yarn install` from the root of `component-library`. 
- This should install the `svgo` dependency which is required in order to clean and compile the SVG's
    - If `svgo` does not install, you can install it globally on your machine with `npm install -g svgo`

2. Create a new branch

3. Navigate to the top of the `component-library` repository and run `yarn update-icons`. 

- The `product-design` repo will be pulled in using the `svgtoreact.sh` script
- The list of SVG's will be extracted and converted into React components based on the file names provided. They will be added under `../component-icon/src/reactsvgs/`. 
- Additional files touched may include `iconTypes.js` and `/reactsvgs/index.js`

4. Push up the changes and create a PR to `main`. Your new icon will be merged into the repository and be available for use shortly!

**Note**: Stratus repository [README](https://bitbucket.cfdata.org/projects/FE/repos/stratus/browse) may also be valuable.


