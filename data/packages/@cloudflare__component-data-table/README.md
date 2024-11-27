# Table

This Table component aims to replace all current implementations of tables that currently use `@cloudflare/component-table`.

## Getting Started

For this initial version the Table component will be available from the `common/components` folder until we are happy that all the initial bugs have been resolved and that everyone is happy with the initial API.

The main difference that can be found in this implementation is that we only expose one component and the rendering is handled internally and is configured and customised by the `data` and `columns` props.

```jsx
import React from 'react';
import Table from '@cloudflare/component-data-table';

export default () => {
  const data = [{ type: 'MX', value: 'mail.example.com', ttl: 5400 }];

  const columns = [
    {
      accessor: 'type',
      Header: 'Record Type',
    },
    { accessor: 'value', Header: 'Value' }
  ];

  return <Table data={data} columns={columns} />;
};
```

The above will render a table using the default styles agreed upon by the design team. You do however, have complete control over customising the Cell styles, by default if the Cell property is not used we will use the `DefaultCell` component to display the cell.

The component exports these other styles as named exports currently there is only `DefaultCell`

```jsx
import Table, { DefaultCell } from '@cloudflare/component-data-table';

export default () => {
  const data = [{ type: 'MX', value: 'mail.example.com', ttl: 5400 }];

  const columns = [
    {
      accessor: 'type',
      Header: 'Record Type',
      Cell: ({ cell: { value }}) => <DefaultCell>{value}</DefaultCell>
    },
    { accessor: 'value', Header: 'Value' }
  ];

  return <Table data={data} columns={columns} />;
};
```

## API

### `data: Array<any>` prop

The data prop is required and represents the raw data you would like to display in the table. The source of this data is up to you but will most often come from a API response. It expects the shape to be a array of objects. As this component is built upon React Table it maps directly to the [`data` option](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#table-options) from there.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  const data = [{ type: 'MX', value: 'mail.example.com', ttl: 5400 }];
  return <Table data={data} />;
};
```

### `columns: Array<Column>` prop

This prop is required and allows you to pass the table column configuration, this will determine which columns show, in which order and any extra configuration such as the header cell or individual column cell. This maps to the [`column options`](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#column-options) object from React Table.

```jsx
import Table, { DefaultCell } from '@cloudflare/component-data-table';

export default () => {
  const columns = [
    {
      accessor: 'type',
      Header: 'Record Type',
      Cell: ({ cell: { value }}) => <DefaultCell>{value}</DefaultCell>
    },
    { accessor: 'value', Header: 'Value' }
  ];

  return <Table columns={columns} />;
};
```

### `isLoading: Boolean` prop

If this value is `true` then the table will show a default of 10 loading rows for the table. Useful when loading data asynchronously.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table isLoading={true} />;
};
```

### `numberOfLoadingRows: Int` prop

By default this value is `10` and will show that number of rows when `isLoading` is `true`.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table isLoading={true} numberOfLoadingRows={5} />;
};
```

### `hasError: Boolean` prop

If this value is true then the table will render only the Header row and whatever React component is passed to the `renderError` prop.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table hasError={true} />;
};
```

### `renderError: React.Component => JSX` prop

This is a react component that will render in the table body if `hasError` is `true`

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table hasError={true} renderError={() => <Div>There was an error</Div>} />
  );
};
```

### `isEmpty: Boolean`

If this value is true then the table will only render the header row and whatever React component is passed to the `renderEmpty` prop. This is a useful functionality when the api responds successfully but the response contains now rows to display.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table isEmpty={true} />;
};
```

### `renderEmpty: React.Component => JSX` prop

This is a react component that will render in the table body if `isEmpty` is `true`

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      isEmpty={true}
      renderEmpty={() => <Div>No results were found</Div>}
    />
  );
};
```

### `expandable: React.Component(row) => JSX` prop

When this prop is used it will enable every row in the table instance to have click to expand table rows.
`DefaultExpandable` provides default styles to the expanded component.

```jsx
import Table, { DefaultExpandable } from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      expandable={() => <DefaultExpandable>I will appear when you click on every row</DefaultExpandable>}
    />
  );
};
```

It's often required that data from the particular row is used within the expandable component, to allow for this the component is passed the `row` object, this contains all of the [row data](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#row-properties) and other data that is calculated by `react table`, you can see this what this is [here](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#row-properties).

If you need to close the expanded component from within the component itself you will find a property on the row object called `toggleRowExpanded` when this function is called it will close the expanded component.

```jsx
import Table, { DefaultExpandable } from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      expandable={({ row }) => (
        <DefaultExpandable>
          I will appear when you click on every row{' '}
          <Button onClick={() => row.toggleRowExpanded()}>Close me</Button>
        </DefaultExpandable>
      )}
    />
  );
};
```

### `isRowExpandable: Function({row}) => Boolean`

This prop allows you to customise which rows are expandable or not, it takes a function that should return a `Boolean` value. The [`row` object](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#row-properties) is passed as the first argument in the function call. If the return value is `true` that row will be expandable and if `false` it will not.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      isRowExpandable={({ row }) => !!row.original.error}
      expandable={({ row }) => (
        <Div>I will only show when row.orignal.error is true</Div>
      )}
    />
  );
};
```

### `onlyOneExpanding: Boolean`

If this value is true then the table will only allow one row to be expanded. Expanding another row will collapse any previously expanded row.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table onlyOneExpanding={true} />;
};
```

### `onRowSelect: Function => [row]` prop

When used on an instance of the `Table` component this will show the UI for selecting rows. This prop fire and event containing an array of the row objects that have been selected, this allows you to use this data to perform bulk actions such as bulk delete where needed.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table onRowSelect={rows => console.log(rows)} />;
};
```

### `isRowSelectable: Function({row}) => Boolean`

This prop should be used in conjunction with the `onRowSelect`. It allows you to conditionally choose if a row is selectable or not, by default all rows are selectable. If the function returns `true` the row will be selectable, if `false` it will be disabled.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      isRowSelectable={({ row }) => row.id === 0} // The row with the ID of 0 will be selectable
      onRowSelect={(selectedRows) => {console.log(selectedRows)}}
    />
  );
};
```

### `onSortBy: Function => [{id: String, desc: Boolean}]` prop

In the `columns` configuration you can pass `enableSortBy: true` as a property to any column object, this will enable sorting and enable the UI on the enabled columns.

It's important to note that the Table component doesn't perform the sorting of the data for you and instead leaves that up to the developer to implement.

```jsx
import Table from '@cloudflare/component-data-table';

const columns = [{ accessor: 'type', enableSortBy: true }];

export default () => {
  return <Table columns={columns} />;
};
```

When you click on a table header to sort it, `onSortBy` will call a function with an array containing one object that contains the `id` of the column this will be the `accessor` or `id` property configured on the `column` object and a property `desc` that is a `boolean` value.

```jsx
import Table from '@cloudflare/component-data-table';

const columns = [{ accessor: 'type', enableSortBy: true }];

export default () => {
  return (
    <Table columns={columns} onSortBy={sortedCol => console.log(sortedCol)} />
  );
};

// The output of the function will look like if the type column is sorted by descending order
// [{id: 'type', desc: true}]
// The output of the function will look like if the type column is sorted by ascending order
// [{id: 'type', desc: false}]
// If no columns are sorted the response will be an empty array
// []
```

Note that the output will always be an array with one object within it, this allows us to expand multi column sorts in the future without breaking current API compatibility.

### `initialSortBy: [{id: String, desc: Boolean}]` prop

This prop allows you to set a default sort UI for a Table instance. It's important to note that this will not actually perform any sorting for you and is purely for UI purposes. You will also need to ensure that any default sort orders you pass in also have the `enableSortBy` property set to true in the `columns` config.

```jsx
import Table from '@cloudflare/component-data-table';

const columns = [{ accessor: 'type', enableSortBy: true }];

export default () => {
  return (
    <Table columns={columns} initialSortOrder={[{ id: 'type', desc: false }]} />
  );
};
```

### `onRowClick: Function({row, isExpanding: Boolean}) => void` prop

This prop will fire an event when a row is clicked on and the `expandable` prop is being used. The first argument in the function that is called is an object containing the `row` object of the row that fired the event and a property `isExpanding` which will either be true or false depending on if the row is expanding or closing.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return (
    <Table
      expandable={() => <Div />}
      onRowClick={({ row, isExpanding }) => console.log(row, isExpanding)}
    />
  );
};
```

### `disableHeaders: Boolean` prop

If this prop is set to true it will remove the header row from the Table render.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table disableHeaders={true} />;
};
```

### `rowStyle: Object` prop

A `style` prop that extends the default Row style.

```jsx
import Table from '@cloudflare/component-data-table';

export default () => {
  return <Table rowStyle={{ borderColor: 'orange.4' }} />;
};
```


### `GlobalFilter: Object` prop

A memoized component which handles search/filtering. This component will be passed the `setGlobalFilter` hook from the table.

```jsx
import Table from '@cloudflare/component-data-table';

type Props = { setGlobalFilter: (filter: any) => void };

const SearchComponent: React.FC<Props> = React.memo({ setGlobalFilter }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = useAsyncDebounce(setGlobalFilter, 200);
  return (
      <Search
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const searchTerm = e.target.value;
          handleFilterChange(searchTerm);
          setFilter(searchTerm);
        }}
      />
  );
};

export default () => {
  return <Table GlobalFilter={SearchComponent} />;
};
```


