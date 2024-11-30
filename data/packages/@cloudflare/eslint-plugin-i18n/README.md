<!-- 
  _____     ____   _____       __      _  
 (_   _)   /   /  /  _  \     /  \    / ) 
   | |    / /) ) (  (_)  )   / /\ \  / /  
   | |   /_/( (   \  _  /    ) ) ) ) ) )  
   | |       ) )  / / \ \   ( ( ( ( ( (   
  _| |__    ( (  ( (___) )  / /  \ \/ /   
 /_____(    /__\  \_____/  (_/    \__/    
                                           -->

# eslint-plugin-i18n

A list of recommended rules for how to catch naked strings. A naked string is a string that is not internationalized. 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn -D eslint
```


Next, install `eslint-plugin-i18n`:

```
$ yarn add eslint-plugin-i18n
```

**Note:** If you installed ESLint globally (using the `yarn global` flag) then you must also install `eslint-plugin-i18n` globally.

## Usage

Add `i18n` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "i18n"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "i18n/rule-name": 2
    }
}
```

## Supported Rules

This plugin will throw errors for:
* variable declarations of naked string literals
ie) `const foo = 'test'; <p>{foo}</p>`

* variable declarations of naked template literals
ie) ```const foo2 = `test`; <p>{foo}</p>```

* naked template literals inside of jsx expression containers
ie) ```const bar = <Trans id={`TESTING`} />```

* naked string literals inside of jsx expression containers 
ie) `<div>{'wtf'}</div>`





