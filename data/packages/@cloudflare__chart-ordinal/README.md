# @cloudflare/chart-ordinal

> Cloudflare ordinal (pie gauge etc) interactive charts

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/chart-ordinal

```

## Usage

```jsx
import React from 'react';

import { Box } from '@cloudflare/component-box';
import { PieChart, StackedBarChart, GaugeChart, RatioChart } from '../../src';

const randomCategoryData = [];
const N_CATEGORIES = 10;
[...Array(N_CATEGORIES).keys()].forEach(cat => {
  randomCategoryData.push({
    cat: `cat${cat}`,
    val: Math.round(Math.random() * 100)
  });
});

class ViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gaugeVal: Math.random() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ gaugeVal: Math.random() });
    }, 5000);
  }

  render() {
    const { gaugeVal } = this.state;

    return (
      <div>
        <Box display="inline-block" width="50%" verticalAlign="middle">
          <StackedBarChart
            data={randomCategoryData}
            categoryDimension="cat"
            valueDimension="val"
          />
        </Box>
        <Box
          display="inline-block"
          width="50%"
          verticalAlign="middle"
          paddingLeft="20"
        >
          <RatioChart value={gaugeVal} total={1} />
        </Box>
        <Box display="inline-block" width="50%" verticalAlign="middle">
          <PieChart
            data={randomCategoryData}
            categoryDimension="cat"
            valueDimension="val"
          />
        </Box>
        <Box display="inline-block" width="50%" verticalAlign="middle">
          <GaugeChart value={gaugeVal} total={1} />
        </Box>
      </div>
    );
  }
}

export default ViewComponent;

```


