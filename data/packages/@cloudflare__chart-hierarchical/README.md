# @cloudflare/chart-hierarchical

> Cloudflare hierarchical interactive charts

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/chart-hierarchical

```

## Usage

```jsx
import React from 'react';

import { createComponent } from '@cloudflare/style-container';
import { variables as theme } from '@cloudflare/style-const';
import { scaleOrdinal } from 'd3-scale';

import {
  PartitionChart,
  SunburstChart,
  TreemapChart,
  CirclePackChart
} from '../../src';

const CHILDREN_PROB_DECAY = 0.4; // per level
const MAX_CHILDREN = 10;
const MAX_VALUE = 100;

function genRandomData(id = 'root', parentId = '', probOfChildren = 1.2) {
  if (Math.random() < probOfChildren) {
    // Fork
    return [
      { id, parentId },
      ...[].concat(
        ...[...Array(Math.round(Math.random() * MAX_CHILDREN)).keys()].map(i =>
          genRandomData(`${id}.${i}`, id, probOfChildren - CHILDREN_PROB_DECAY)
        )
      )
    ];
  }

  // Leaf
  return [{ id, parentId, value: Math.round(Math.random() * MAX_VALUE) }];
}

const TooltipContent = (d, node) => (
  <div>
    <div>
      Self value: <em>{d.value || 0}</em> units
    </div>
    <div>
      Sub-tree sum: <em>{node.value || 0}</em> units
    </div>
    {!!node.parent && (
      <div>
        Parent sum ({nameOf(node.parent.data)}):{' '}
        <em>{node.parent.value || 0}</em> units
      </div>
    )}
  </div>
);

const catColor = scaleOrdinal(theme.colors.categorical);
const nameOf = d => d.id.replace(/^root./g, '');

const commonProps = {
  data: genRandomData(),
  height: 420,
  sizeDimension: 'value',
  colorDimension: d =>
    d.id === 'root' ? 'lightgrey' : catColor(d.id.split('.')[1]), // Color by top level index
  label: nameOf,
  subLabel: (d, node) => `${node.value || 0} units`,
  tooltipTitle: (_, node) => {
    const nodeChain = [];
    let curNode = node;
    do {
      nodeChain.unshift(curNode);
    } while ((curNode = curNode.parent));

    return nodeChain.map(nameOf).join(' > ');
  },
  tooltipContent: TooltipContent,
  highlightTerms: '',
  onHover: d => console.info('Hover state:', d)
};

const Cell = createComponent(({ n }) => ({
  display: 'inline-block',
  width: `calc(${Math.floor(100 / n)}% - 10px)`,
  margin: 5
}));

const ViewComponent = () => (
  <div>
    <div>
      <Cell n={3}>
        <TreemapChart {...commonProps} />
      </Cell>
      <Cell n={3}>
        <CirclePackChart {...commonProps} />
      </Cell>
      <Cell n={3}>
        <SunburstChart {...commonProps} />
      </Cell>
    </div>
    <div>
      <Cell n={3}>
        <PartitionChart orientation="horizontal" {...commonProps} />
      </Cell>
      <Cell n={3}>
        <PartitionChart orientation="flame" {...commonProps} />
      </Cell>
      <Cell n={3}>
        <PartitionChart orientation="icicle" {...commonProps} />
      </Cell>
    </div>
  </div>
);

export default ViewComponent;

```


