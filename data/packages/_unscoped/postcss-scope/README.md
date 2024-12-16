# postcss-scope 🔭

A small plugin to allow you to scope your css with a custom selector

## Installation
```bash
# pnpm
pnpm add postcss-scope --save-dev

# npm
npm install postcss-scope --save-dev

# yarn
yarn add postcss-scope --dev
```

## Setup

### Basic
```javascript
// postcss.config.js

export default {
    plugins: {
        "postcss-scope": ".foo",
    },
};
```

### Multiple scopes
```javascript
// postcss.config.js

export default {
    plugins: {
        "postcss-scope": [".foo", ".bar"],
    },
};
```

### With Tailwind
```javascript
// postcss.config.js

export default {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
        "postcss-scope": ".foo",
    },
};
```

## Usage

The default output for all files would look something like this, where `.foo` is prepended on all rules. However, using CSS comments, you have more control over each file. 

```css
.foo .class {
    font-size: 12px;
}

.foo #id {
    font-size: 12px;
}
```

### Ignore rules

Add a comment to specify particular rules that should not be scoped

```css
.foo .class {
    font-size: 12px;
}

/* postcss-scope:ignore */
#id {
    font-size: 12px;
}
```

### Ignore files

Add a comment to specify files that the plugin should ignore

```css
/* postcss-scope:ignore-file */

.class {
    font-size: 12px;
}

#id {
    font-size: 12px;
}
```


### Override global selector

Add a comment to override the selector for a particular file

```css
/* postcss-scope:.bar */

.bar .class {
    font-size: 12px;
}

.bar #id {
    font-size: 12px;
}
```
