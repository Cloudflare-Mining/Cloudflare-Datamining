# @cloudflare/util-responsive

> Cloudflare Responsive Design Utils

## Installation
Installation with yarn is recommended

```sh
$ yarn add @cloudflare/util-responsive
```

## API Reference

### Hooks

#### `useBreakpoint(acceptedBreakpoints?: Breakpoint[])`

Returns the current breakpoint based on window width. Triggers a rerender when the breakpoint changes.

**Parameters:**
- `acceptedBreakpoints` (optional): Array of breakpoints to filter by. Only breakpoints in this range will be returned.

**Returns:** `Breakpoint` - The current breakpoint value.

**Example:**
```jsx
import { useBreakpoint } from '@cloudflare/util-responsive';

const MyComponent = () => {
  const breakpoint = useBreakpoint();
  // Returns current breakpoint: 'mobile' | 'mobileWide' | 'tablet' | 'tabletLegacy' | 'tabletWide' | 'desktop' | 'desktopLegacy' | 'desktopLarge'
  
  // Or limit to specific breakpoints:
  const limitedBreakpoint = useBreakpoint(['mobile', 'desktop']);
  // Returns 'mobile' until window reaches 'desktop' width
  
  return <div>Current breakpoint: {breakpoint}</div>;
};
```

#### `useIsMobile()`

Returns `true` if the current breakpoint is mobile, `false` otherwise.

**Returns:** `boolean`

**Example:**
```jsx
import { useIsMobile } from '@cloudflare/util-responsive';

const MyComponent = () => {
  const isMobile = useIsMobile();
  
  return <div>{isMobile ? 'Mobile View' : 'Not Mobile'}</div>;
};
```

#### `useIsTablet()`

Returns `true` if the current breakpoint is tablet, `false` otherwise.

**Returns:** `boolean`

**Example:**
```jsx
import { useIsTablet } from '@cloudflare/util-responsive';

const MyComponent = () => {
  const isTablet = useIsTablet();
  
  return <div>{isTablet ? 'Tablet View' : 'Not Tablet'}</div>;
};
```

#### `useIsDesktop()`

Returns `true` if the current breakpoint is desktop, `false` otherwise.

**Returns:** `boolean`

**Example:**
```jsx
import { useIsDesktop } from '@cloudflare/util-responsive';

const MyComponent = () => {
  const isDesktop = useIsDesktop();
  
  return <div>{isDesktop ? 'Desktop View' : 'Not Desktop'}</div>;
};
```

### Functions

#### `getCurrentBreakpoint(acceptedBreakpoints?: Breakpoint[])`

Gets the current breakpoint based on window width. This is a non-reactive function that doesn't trigger rerenders.

**Parameters:**
- `acceptedBreakpoints` (optional): Array of breakpoints to filter by.

**Returns:** `Breakpoint` - The current breakpoint value.

**Example:**
```jsx
import { getCurrentBreakpoint } from '@cloudflare/util-responsive';

const breakpoint = getCurrentBreakpoint();
// Returns current breakpoint based on window.innerWidth

const limitedBreakpoint = getCurrentBreakpoint(['mobile', 'desktop']);
// Returns 'mobile' until window reaches 'desktop' width
```

#### `getBreakpointIndex()`

Returns the index of the current breakpoint in the breakpoint array.

**Returns:** `number` - The index of the current breakpoint.

**Example:**
```jsx
import { getBreakpointIndex } from '@cloudflare/util-responsive';

const index = getBreakpointIndex();
// Returns 0 for mobile, 1 for mobileWide, etc.
```

#### `isBefore(a: Breakpoint, b: Breakpoint)`

Checks if breakpoint `a` comes before breakpoint `b` in the breakpoint order.

**Parameters:**
- `a`: First breakpoint to compare
- `b`: Second breakpoint to compare

**Returns:** `boolean` - `true` if `a` is before `b`, `false` otherwise.

**Example:**
```jsx
import { isBefore } from '@cloudflare/util-responsive';

const result = isBefore('mobile', 'desktop');
// Returns true

const result2 = isBefore('desktop', 'mobile');
// Returns false
```

#### `isAfter(a: Breakpoint, b: Breakpoint)`

Checks if breakpoint `a` comes after or is equal to breakpoint `b` in the breakpoint order.

**Parameters:**
- `a`: First breakpoint to compare
- `b`: Second breakpoint to compare

**Returns:** `boolean` - `true` if `a` is after or equal to `b`, `false` otherwise.

**Example:**
```jsx
import { isAfter } from '@cloudflare/util-responsive';

const result = isAfter('desktop', 'mobile');
// Returns true

const result2 = isAfter('mobile', 'desktop');
// Returns false
```

#### `isMobile()`

Non-reactive function that returns `true` if the current viewport is mobile-sized.

**Returns:** `boolean`

**Example:**
```jsx
import { isMobile } from '@cloudflare/util-responsive';

if (isMobile()) {
  // Execute mobile-specific logic
}
```

#### `isTablet()`

Non-reactive function that returns `true` if the current viewport is tablet-sized.

**Returns:** `boolean`

**Example:**
```jsx
import { isTablet } from '@cloudflare/util-responsive';

if (isTablet()) {
  // Execute tablet-specific logic
}
```

#### `isDesktop()`

Non-reactive function that returns `true` if the current viewport is desktop-sized.

**Returns:** `boolean`

**Example:**
```jsx
import { isDesktop } from '@cloudflare/util-responsive';

if (isDesktop()) {
  // Execute desktop-specific logic
}
```

### Components

#### `BreakpointRange`

Component that conditionally renders children based on the current breakpoint range.

**Props:**
- `from` (optional): Minimum breakpoint (inclusive)
- `to` (optional): Maximum breakpoint (exclusive)
- `children`: Content to render when breakpoint is in range

**Example:**
```jsx
import { BreakpointRange } from '@cloudflare/util-responsive';

const MyComponent = () => (
  <div>
    <BreakpointRange from="tablet">
      This only shows on tablet and larger screens
    </BreakpointRange>
    
    <BreakpointRange to="tablet">
      This only shows on mobile screens
    </BreakpointRange>
    
    <BreakpointRange from="tablet" to="desktop">
      This only shows on tablet screens
    </BreakpointRange>
  </div>
);
```

#### `withAutoWidth(Component)`

Higher-order component that automatically provides width to a component based on its container size.

**Parameters:**
- `Component`: Component to wrap (must accept a `width` prop)

**Returns:** Wrapped component that automatically calculates and passes width

**Example:**
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { withAutoWidth } from '@cloudflare/util-responsive';

const FullWidthComp = ({ width }) => (
  <svg width={width} height={100}>
    <rect width={width} height={100} fill="blue" />
  </svg>
);

FullWidthComp.propTypes = {
  width: PropTypes.number.isRequired
};

export default withAutoWidth(FullWidthComp);
```

### Constants

#### `breakpointKeys`

Array of all breakpoint names in order.

**Type:** `Breakpoint[]`

**Example:**
```jsx
import { breakpointKeys } from '@cloudflare/util-responsive';

console.log(breakpointKeys);
// ['mobile', 'mobileWide', 'tablet', 'tabletLegacy', 'tabletWide', 'desktop', 'desktopLegacy', 'desktopLarge']
```

#### `breakpointValues`

Array of all breakpoint values (in pixels) in order.

**Type:** `number[]`

**Example:**
```jsx
import { breakpointValues } from '@cloudflare/util-responsive';

console.log(breakpointValues);
// [218, 487, 755, 788, 880, 1024, 1056, 1562]
```

#### `bodyFontSize`

Default body font size constant.

**Type:** `number`

**Value:** `16`

### Types

#### `Breakpoint`

Type representing a valid breakpoint name.

**Type:** `'mobile' | 'mobileWide' | 'tablet' | 'tabletLegacy' | 'tabletWide' | 'desktop' | 'desktopLegacy' | 'desktopLarge'`

#### `Breakpoints`

Type representing an object mapping breakpoint names to their pixel values.

**Type:** `{ [key in Breakpoint]: number }`


