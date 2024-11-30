# ![](https://user-images.githubusercontent.com/516342/57133825-b03b7580-6dac-11e9-803b-0564d12ee13d.png) i18n [![](https://img.shields.io/npm/v/@fiverr/i18n.svg)](https://www.npmjs.com/package/@fiverr/i18n) [![](https://img.shields.io/circleci/project/github/fiverr/i18n.js.svg)](https://circleci.com/gh/fiverr/i18n.js) ![](https://img.shields.io/node/v/@fiverr/i18n.svg)

Isomorphic translation engine. Mimics Rails' i18n interface.

## Usage
```js
const I18n = require('@fiverr/i18n');
const translations = require('./translations.json');

const i18n = new I18n({translations});
```

| Option | Type | Description |
| ------ | ---- | ----------- |
| `translations` | Object | Representation of translation structure **Must be JSON compliant** otherwise will be treated like an empty object |
| `missing` | Function | Call this function when a key is missing. Function accepts arguments: key, scope, translations_object |
| `empty` | Function | Call this function when a value is empty. Function accepts arguments: key, value, scope, translations_object |
| `$scope` | String | Omittable prefix. see [Scope](#instance-with-a-scope) **The base is translations key root** |

```js
const i18n = new I18n({
    translations: {...},
    missing: key => logMissingKeyEvent({key: `missing_translation.${key.replace(/\W/g, '_')}`}),
    empty: key => logEmptyValueEvent({key: `empty_translation.${key.replace(/\W/g, '_')}`}),
    $scope: 'my_app.en'
});
```

### Translate
```js
i18n.t('my.key'); // I'm a sentence
```

### Find alternatives
```js
i18n.t(['my.missing.key', 'my.key']); // I'm a sentence
```

### Handle missing
By default, missing keys or empty values return the last part of the key
```js
i18n.t('this.is.a.missing_key'); // missing key
```

But returning a truthy value from 'missing' and 'empty' callbacks will allow a custom fallback
```js
const i18n = new I18n({
    translations: {...},
    empty: (key, value, scope) => {
        if (scope.startsWith('en-US')) {
            return; // default fallback
        }
        return i18n.t(key, { $scope: 'en-US' }); // Try English
    },
    $scope: 'en-US'
});
```

### Add more translations after instantiation
```js
i18n.add({yet: {another: {key: 'I\'m here, too!'}}});
Use:
i18n.translate('yet.another.key'); // I'm here, too!
Or:
i18n.t('yet.another.key'); // I'm here, too!
```

## Features

### Interpolate with data
```js
const i18n = new I18n({
    translations: {
        my: { string: 'a dynamic %{thing} in a static string' }
    }
});
i18n.t('my.string', {thing: 'value'}); // a dynamic value in a static string
```

### One/other
```js
const i18n = new I18n({
    translations: {
        it_will_take_me_days: {
            one: 'It\'ll take me one day',
            other: 'It\'ll take me %{count} days'
        }
    }
});
i18n.t('it_will_take_me_days', {count: 1}); // It'll take me one day
i18n.t('it_will_take_me_days', {count: 3}); // It'll take me 3 days
i18n.t('it_will_take_me_days', {count: 'a lot of'}); // It'll take me a lot of days
```

### Instance with a scope
Priority:
1. Found result with passed in scope (when applicable)
2. Found result with instance set scope (when applicable)
3. Found result w/o scope

```js
// Global scope setup
const i18n = new I18n({
    translations: {
        key: 'Top',
        child: {
            key: 'Child'
        },
        something: {
            key: 'Something'
        }
    }
});
const child = i18n.spawn('child');

i18n.t('key'); // Top
child.t('key'); // Child
child.t('key', { $scope: 'something' }); // Something
```

### Scoped child instance
This is a good option for shorthand in enclosed parts of the application.

The translation store is shared so the parent can find the keys if it prefixes the namespace, and the child doesn't need to.

The child can also find "global" translations (ones that are outside it's namespace)
```js
const usersI18n = i18n.spawn('users.get');

// Add translations under the scope
usersI18n.add({introduction: 'Hi, my name is %{username}'});

// Use translations
usersI18n.t('introduction', {username: 'Martin'}); // Hi, my name is Martin
i18n.t('users.get.introduction', {username: 'Martin'}); // Hi, my name is Martin
```

### Instance
Exposes an empty instance of i18n
```js
const i18n = require('@fiverr/i18n/instance');

i18n.add({...});
```

Made especially for use as a webpack external
```js
externals: {
  '@fiverr/i18n/instance': 'i18n'
}
```

> Name can alternate:
> ```js
> import phraser from '@fiverr/i18n/instance';
> ```
>
> ```js
> externals: {
>   '@fiverr/i18n/instance': 'phraser'
> }
> ```


### Singleton (i18n)
Make sure you only have one instance of I18n in your global scope
```js
const i18n = I18n.singleton;

// Optional:
i18n.$scope = 'my.scope';
i18n.onmiss((key, scope) => console.error(`Missing key "${key}" ${scope ? `In scope: "${scope}"`}`));
i18n.onempty((key, value, scope) => console.warn(`Empty value "${value}" for key "${key}" ${scope ? `In scope: "${scope}"`}`));
i18n.add({...});
```
Shortcut:
```js
const i18n = require('@fiverr/i18n/singleton');
```
Or simply

```js
require('@fiverr/i18n/singleton');

// i18n is defined globally
```

### Helper functions
Check if a key is available
#### has
```js
i18n.has('key');
i18n.has(['key', 'other_key']);
i18n.has('namespace.key');
i18n.has('key', { $scope: 'namespace' });
```
