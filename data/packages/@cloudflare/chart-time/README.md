# @cloudflare/chart-time

> Cloudflare time-based chart presentational components

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/chart-time

```

## Usage

```jsx
import React from 'react';
import { Box } from '@cloudflare/component-box';
import { TimeseriesChart } from '../../src';

const randomData = [];
const N_SERIES = 5;
const VAL_MAX_SLOPE = 10; // max amount of val change per time
const TIME_BIN = 60 * 60 * 1000; // 1h
const START_TIME =
  Math.round(new Date() / TIME_BIN) * TIME_BIN - 5 * 24 * 60 * 60 * 1000; // 5d
const NOW = new Date();

[...Array(N_SERIES).keys()].forEach(ser => {
  let ts = START_TIME;
  let val = 0;
  while (ts <= NOW) {
    const valVar =
      Math.round(Math.random() * VAL_MAX_SLOPE * 2) - VAL_MAX_SLOPE;
    val += valVar;
    val = Math.max(0, val); // prevent negative vals

    randomData.push({
      ser: `ser${ser + 1}`,
      ts: +ts,
      val
    });

    ts += TIME_BIN;
  }
});

const ViewComponent = () => (
  <div>
    {[['line', 'stacked'], ['normalized', 'stream']].map((row, i) => (
      <Box key={i} display="flex">
        {row.map(type => (
          <Box key={type} flex="1">
            <TimeseriesChart
              type={type}
              interpolation="spline"
              height={300}
              data={randomData}
              timeDimension="ts"
              seriesDimension="ser"
              valueDimension="val"
              valueLabel="Units"
            />
          </Box>
        ))}
      </Box>
    ))}
  </div>
);

export default ViewComponent;

```


