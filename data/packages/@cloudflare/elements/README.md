# elements

Props-based styling hooked into the Cloudflare design system. 

## Installation

Installation with yarn is recommended

```sh
$ yarn add @cloudflare/elements
```


## Usage

`elements` is a method of styling closely resembling writing semantic HTML, leading to greater readability. Because it uses [styled-system](https://github.com/styled-system/styled-system) under the hood, `elements` is able to work with most css-in-js libraries and greater enforce constraint-based styling. 


### Pseudo-classes

For pseudo-class usage, you'll want to default to usage of `createComponent` from `@cloudflare/style-container`.

### Responsive styling

For guidelines on responsive styling, read the [styled-system guidelines on styles](https://styled-system.com/responsive-styles). 

### When do I use Component Library?

Certain elements, such as `<Button />` and `<Select />` have counterparts in [Component Library](https://component-library.com/). To reduce confusion around when to use `elements` versus Component Library, a general rule of thumb is: if it looks like a Component Library component, it's best to use Component Library. If you need alternate styling but semantically require the specified DOM element (ex: `<button />`) then use `elements`. There will be ongoing work to rewrite Component Library using `elements`, thus this reduces the amount of maintenance needed.
```