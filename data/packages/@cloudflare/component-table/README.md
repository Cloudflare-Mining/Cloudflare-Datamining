# @cloudflare/component-table

> Cloudflare Table Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-table

```

## Usage

```jsx
// -------------------- Table Imports --------------------
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '../../src/index';

// -------------------- Props Demo Imports --------------------
import { Checkbox, CheckboxGroup } from '@cloudflare/component-checkbox';
import { Radio, RadioGroup } from '@cloudflare/component-radio';
import { LabeledInput } from '@cloudflare/component-input';

import { Box } from '@cloudflare/component-box';

// -------------------- Simple Table Component --------------------
class TableComponent extends React.Component {
  render() {
    const {
      align,
      bordered,
      fixedLayout,
      rowHover,
      columnHover,
      separator,
      loading,
      errored,
      empty,
      noItemsNode,
      noItemsMatchingSearchNode,
      errorNode,
      searching
    } = this.props;

    const rows = [
      {
        id: 1,
        puppy: 'Mr. Max Really LongName',
        kitten: 'Mittens',
        dinosaur: 'Rexy',
        monkey: 'Koko'
      },
      {
        id: 2,
        puppy: 'Pebbles',
        kitten: 'Bonbon',
        dinosaur: 'Barney',
        monkey: 'George'
      },
      {
        id: 3,
        puppy: 'Pebbles',
        kitten: 'Bonbon',
        dinosaur: 'Barney',
        monkey: 'George'
      }
    ];

    //if desiring to render a div instead of a table html element pass prop renderTableToDom=false
    //into Table
    return (
      <Table
        bordered={bordered}
        fixedLayout={fixedLayout}
        loading={loading}
        errored={errored}
        empty={empty}
        noItemsNode={noItemsNode}
        noItemsMatchingSearchNode={noItemsMatchingSearchNode}
        errorNode={errorNode}
        searching={searching}
      >
        <TableHead>
          <TableRow>
            <TableCell hover={columnHover} align={align}>
              Puppies
            </TableCell>
            <TableCell hover={columnHover} align={align}>
              Kittens
            </TableCell>
            <TableCell hover={columnHover} align={align}>
              Dinosaur
            </TableCell>
            <TableCell hover={columnHover} align={align}>
              Monkey
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow hover={rowHover} key={row.id} separator={separator}>
              <TableCell hover={columnHover} align={align}>
                {row.puppy}
              </TableCell>
              <TableCell hover={columnHover} align={align}>
                {row.kitten}
              </TableCell>
              <TableCell hover={columnHover} align={align}>
                {row.dinosaur}
              </TableCell>
              <TableCell hover={columnHover} align={align}>
                {row.monkey}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TableComponent.propTypes = {
  align: PropTypes.string,
  bordered: PropTypes.bool,
  fixedLayout: PropTypes.bool,
  separator: PropTypes.bool,
  rowHover: PropTypes.bool,
  columnHover: PropTypes.bool,
  loading: PropTypes.bool,
  errored: PropTypes.bool,
  empty: PropTypes.bool,
  noItemsNode: PropTypes.node,
  noItemsMatchingSearchNode: PropTypes.node,
  errorNode: PropTypes.node,
  searching: PropTypes.bool
};

// -------------------- Props Demo Component --------------------

class PropsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      align: 'left',
      bordered: true,
      fixedLayout: true,
      separator: false,
      rowHover: true,
      columnHover: true,
      loading: false,
      errored: false,
      empty: false,
      noItemsNode: undefined,
      noItemsMatchingSearchNode: undefined,
      errorNode: undefined,
      searching: false,
      checkboxValues: ['bordered', 'fixedLayout', 'rowHover', 'columnHover']
    };
    this.onCheckboxGroupChange = this.onCheckboxGroupChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
  }

  onCheckboxGroupChange(values) {
    this.setState({
      bordered: values.includes('bordered'),
      fixedLayout: values.includes('fixedLayout'),
      separator: values.includes('separator'),
      rowHover: values.includes('rowHover'),
      columnHover: values.includes('columnHover'),
      loading: values.includes('loading'),
      errored: values.includes('errored'),
      empty: values.includes('empty'),
      searching: values.includes('searching'),
      checkboxValues: values
    });
  }
  onRadioChange(value) {
    this.setState({
      align: value
    });
  }
  onTextInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value !== '' ? e.target.value : undefined
    });
  }

  render() {
    return (
      <div>
        <TableComponent
          align={this.state.align}
          bordered={this.state.bordered}
          fixedLayout={this.state.fixedLayout}
          rowHover={this.state.rowHover}
          columnHover={this.state.columnHover}
          separator={this.state.separator}
          loading={this.state.loading}
          errored={this.state.errored}
          empty={this.state.empty}
          noItemsNode={this.state.noItemsNode}
          noItemsMatchingSearchNode={this.state.noItemsMatchingSearchNode}
          errorNode={this.state.errorNode}
          searching={this.state.searching}
        />

        <Box
          border="1px solid #e0e0e0"
          width="100%"
          padding="10px"
          marginTop="25px"
        >
          <Box>Props</Box>
          <CheckboxGroup
            values={this.state.checkboxValues}
            onChange={this.onCheckboxGroupChange}
          >
            <Checkbox label="Bordered" name="bordered" value="bordered" />
            <Checkbox
              label="Fixed Layout"
              name="fixedLayout"
              value="fixedLayout"
            />
            <Checkbox label="Separator" name="separator" value="separator" />
            <Checkbox label="Row Hover" name="rowHover" value="rowHover" />
            <Checkbox
              label="Column Hover"
              name="columnHover"
              value="columnHover"
            />
            <Checkbox label="Loading" name="loading" value="loading" />
            <Checkbox label="Errored" name="errored" value="errored" />
            <Checkbox label="Empty" name="empty" value="empty" />
            <Checkbox label="Searching" name="searching" value="searching" />
          </CheckboxGroup>
          <Box marginTop="10px">Align</Box>
          <RadioGroup value={this.state.align} onChange={this.onRadioChange}>
            <Radio label="Left" name="left" value="left" />
            <Radio label="Center" name="center" value="center" />
            <Radio label="Right" name="right" value="right" />
          </RadioGroup>
          <Box marginTop="10px" />
          <LabeledInput
            label="No items found node (pure text here, but can be any react node)"
            name="noItemsNode"
            value={this.state.noItemsNode}
            onChange={this.onTextInputChange}
          />
          <LabeledInput
            label="No items matching search term (pure text here, but can be any react node)"
            name="noItemsMatchingSearchNode"
            value={this.state.noItemsMatchingSearchNode}
            onChange={this.onTextInputChange}
          />
          <LabeledInput
            label="Error node (pure text here, but can be any react node)"
            name="errorNode"
            value={this.state.errorNode}
            onChange={this.onTextInputChange}
          />
        </Box>
      </div>
    );
  }
}

export default PropsDemo;

```


