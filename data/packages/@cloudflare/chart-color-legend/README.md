# @cloudflare/chart-color-legend

> Cloudflare color legend presentational component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/chart-color-legend

```

## Usage

```jsx
import React from 'react';
import { Box } from '@cloudflare/component-box';
import {
  SingleColorLegend,
  ContinuousColorLegend,
  SeriesToggleLegend
} from '../../src';

class ViewComponent extends React.Component {
  state = {
    disabledSeries: []
  };

  render() {
    return (
      <div>
        <div>Series Toggles:</div>
        <SeriesToggleLegend
          series={[
            {
              name: 'dog',
              color: 'red',
              enabled: this.state.disabledSeries.indexOf('dog') === -1
            },
            {
              name: 'cat',
              color: 'green',
              enabled: this.state.disabledSeries.indexOf('cat') === -1
            },
            {
              name: 'pig',
              color: 'blue',
              enabled: this.state.disabledSeries.indexOf('pig') === -1
            }
          ]}
          onToggle={disabledSeries => this.setState({ disabledSeries })}
        />
        <div>Single Colors:</div>
        <Box display="flex">
          <Box margin="5px">
            <SingleColorLegend label="Cat" color="lightblue" />
          </Box>
          <Box margin="5px">
            <SingleColorLegend label="Dog" color="brown" highlight={true} />
          </Box>
        </Box>
        <div>Continuous Color Scale:</div>
        <ContinuousColorLegend
          minVal={0}
          maxVal={12345}
          highlightVal={5678}
          valueFormatter={n => `${Math.round(n / 1e2) / 10}k`}
          colors={['green', 'yellow', 'red']}
          label="Units"
          colorScaleExp={1 / 2}
          enableAxis={true}
        />
      </div>
    );
  }
}

export default ViewComponent;

```


