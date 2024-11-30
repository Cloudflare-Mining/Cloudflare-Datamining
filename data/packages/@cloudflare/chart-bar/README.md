# @cloudflare/chart-bar

> Cloudflare bar chart presentational components

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/chart-bar

```

## Usage

```jsx
import React from 'react';
import { TopBarChart } from '../../src';

const randomData = [];
const N_CATEGORIES = 20,
  N_SERIES = 10;
[...Array(N_CATEGORIES).keys()].forEach(cat => {
  [...Array(N_SERIES).keys()].forEach(ser => {
    randomData.push({
      cat: `cat${cat}`,
      ser: `ser${ser}`,
      val: Math.round(Math.random() * 100)
    });
  });
});

const ViewComponent = () => (
  <TopBarChart
    height={420}
    data={randomData}
    categoryDimension="cat"
    stackDimension="ser"
    valueDimension="val"
    topN={20}
    valueLabel="Units"
  />
);

export default ViewComponent;

```


