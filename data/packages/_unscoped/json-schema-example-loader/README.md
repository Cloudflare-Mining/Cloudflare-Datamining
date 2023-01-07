# JSON Schema Example Loader (DEPRECATED)

While still used by the likewise-deprecated `doca` package, for the new `@cloudflare/doca`
package, this package has been replaced by `@cloudflare/json-schema-apidoc-loader` in
the [json-schema-tools](https://github.com/cloudflare/json-schema-tools) repository.
It relies on several general-purpose JSON Schema utility packages that are also present
in that repository.

Unlike `json-schema-example-loader`, the output of `@cloudflare/json-schema-apidoc-loader` is
still a valid JSON Schema, with extensions.

-------

This package is part of the [doca](https://github.com/cloudflare/doca) suite.  Please file any issues at the [doca repository](https://github.com/cloudflare/doca/issues)
## Installation

```
npm install json-schema-example-loader --save
```

## Description

Webpack loader that transforms JSON HyperSchema (without $refs) into an updated datastructure that contains examples and simplified definitions that you can use in order to create nice API docs. Some original properties are removed and some new are precomputed and added (see bellow).

Why is this a webpack loader and not part of the app?
- JSON HyperSchema structure can be quite complex (deeply nested)
- We precompute a flat datastructure that better fits our UI components
- Everything can be nicely preformatted
- **PERFORMANCE**

Do you have references ($ref) in your schemas? Use [json-schema-loader](https://www.npmjs.com/package/json-schema-loader) first.

## Usage

```js
var transformedSchema = require('json-schema-example-loader!./schema.json');
```

Or define it in your `webpack.config.js`

```js
module: {
  loaders: [{
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json-schema-example-loader'
  }]
}
```

```js
var transformedSchema = require('./schema.json');
```

## Example Input: product.json

```json
{
  "id": "https://api.example.com/product",
  "$schema": "http://json-schema.org/draft-04/hyper-schema#",
  "title": "Product",
  "description": "A product available for sale in a store",
  "type": "object",
  "definitions": {
    "identifier": {
      "type": "string",
      "description": "Product SKU",
      "example": "ABC-123"
    },
    "name": {
      "type": "string",
      "description": "Product's name",
      "maxLength": 100
    },
    "description": {
      "type": "string",
      "description": "Product's description",
      "maxLength": 2000
    }
  },
  "required": [
    "id",
    "name",
    "description"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Product SKU",
      "example": "ABC-123"
    },
    "name": {
      "type": "string",
      "description": "Product's name",
      "maxLength": 100
    },
    "description": {
      "type": "string",
      "description": "Product's description",
      "maxLength": 2000
    }
  },
  "links": [
    {
      "title": "Available products",
      "description": "Get all available product for the store",
      "rel": "instances",
      "href": "/products",
      "method": "GET",
      "schema": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer",
            "description": "Current page of products",
            "example": 1,
            "default": 1
          }
        }
      },
      "targetSchema": {
        "type": "array",
        "items": {
          "rel": "self"
        }
      }
    },
    {
      "title": "Product info",
      "description": "Get a single product",
      "rel": "self",
      "href": "/products/{#/definitions/identifier}",
      "method": "GET",
      "targetSchema": {
        "rel": "self"
      }
    }
  ]
}
```

## Example Output

```json
{
  "id": "https://api.example.com/product",
  "title": "Product",
  "description": "A product available for sale in a store",
  "type": "object",
  "links": [
    {
      "title": "Available products",
      "description": "Get all available product for the store",
      "rel": "instances",
      "href": "/products",
      "method": "GET",
      "html_id": "product-available-products",
      "uri": "/products",
      "curl": "curl -X GET \"/products?page=1\" \\\n",
      "parameters": {
        "_formatter": {},
        "all_props": {
          "page": {
            "type": "integer",
            "example": "1",
            "description": "Current page of products",
            "default": 1
          }
        },
        "required_props": [],
        "optional_props": [
          "page"
        ],
        "objects": [],
        "example": "{\n  \"page\": 1\n}"
      },
      "response": "{}"
    },
    {
      "title": "Product info",
      "description": "Get a single product",
      "rel": "self",
      "href": "/products/{#/definitions/identifier}",
      "method": "GET",
      "html_id": "product-product-info",
      "uri": "/products/:identifier",
      "curl": "curl -X GET \"/products/ABC-123\" \\\n",
      "response": "{\n  \"id\": \"ABC-123\"\n}"
    }
  ],
  "html_id": "product",
  "object_definition": {
    "_formatter": {},
    "all_props": {
      "id": {
        "type": "string",
        "example": "\"ABC-123\"",
        "description": "Product SKU"
      },
      "name": {
        "type": "string",
        "description": "Product's name",
        "maxLength": 100
      },
      "description": {
        "type": "string",
        "description": "Product's description",
        "maxLength": 2000
      }
    },
    "required_props": [
      "id",
      "name",
      "description"
    ],
    "optional_props": [],
    "objects": [],
    "example": "{\n  \"id\": \"ABC-123\"\n}",
    "title": "Product",
    "description": "A product available for sale in a store"
  }
}
```

## Transformations made

As you can see, some properties are missing and some are added/updated. Removed properties are typically used in order to compute new properties and they are not needed anymore. Since we want to minimize the ouput as much as possible they are stripped. This happens on two levels:

- root - schema root
- links - array of links

### Removed properties

**At the root level:**

- properties
- additionalProperties
- definitions
- allOf
- anyOf
- oneOf
- required
- $schema

**At the link level:**

- schema
- targetSchema

### New (precomputed) properties

**At the root level:**

- html_id : *string* - URL friendly schema id
- object_definition : *object*
  - all_props : *object* - all required properties (object where keys = prop names)
  - required_props : *array* - list of keys in all_props
  - optional_props : *array* - list of keys in all_props
  - objects : *array* - nested object_definition (in case when oneOf/anyOf are used)
  - which_of : *string* - the name of the property used for objects, if any
  - example : *string* - stringified example of the whole schema object

**At the link level:**

- html_id : *string* - URL friendly schema + link id
- uri : *string* - link uri (resolved href)
- curl : *string* - curl example
- parameters : *object*
  - all_props : *object* - all required properties (object where keys = prop names)
  - required_props : *array* - list of keys in all_props
  - optional_props : *array* - list of keys in all_props
  - objects : *array* - nested parameters (in case when oneOf/anyOf/allOf are used)
  - example : *string* - stringified example of request parameters
- response : *string* - response example, based on link/targetSchema

### Your custom properties

All custom properties that you add to the schema root or link object will be preserved. For example, you might want to set a flag "deprecated" to some of the links (endpoints) and write condition in your UI component.

## Link curl customization

Link Curl examples can be further customized (enriched) with baseUrl and optional request headers. This can be done through a query parameter that is accepted by this loader.

### Usage

Notice: It includes json-schema-loader (use matching major version) in a chain.

```js
module: {
  loaders: [{
    test: /\.json$/,
    loader: `json-schema-example?${JSON.stringify(config)}!json-schema`,
  }],
},
```

Where `config.curl.requestHeaders` is a constant following JSON Schema format.

```js
const config = {
  curl: {
    baseUrl: 'https://api.example.com/v1',
    requestHeaders: {
      required: [
        'Content-Type',
        'X-Auth-Email',
        'X-Auth-Key',
      ],
      properties: {
        'X-Auth-Email': {
          type: 'string',
          description: 'Your email',
          example: 'user@example.com',
        },
        'X-Auth-Key': {
          type: 'string',
          length: 45,
          description: 'Your API key',
          example: 'c3447eb745079oiu9320b638f5e225cf483cc5cfdda41',
        },
        'Content-Type': {
          type: 'string',
          enum: [
            'application/json',
          ],
          example: 'application/json',
          description: 'Content type of the API request',
        },
      },
    },
  },
};
```

### Result (product.json)

```js
// ...
  "links": [
    {
      "title": "Available products",
      "description": "Get all available product for the store",
      "rel": "instances",
      "href": "/products",
      "method": "GET",
      "html_id": "product-available-products",
      "uri": "/products",
      "curl": "curl -X GET \"https://api.example.com/v1/products?page=1\" \\\n     -H \"X-Auth-Email: user@example.com\" \\\n     -H \"X-Auth-Key: c3447eb745079oiu9320b638f5e225cf483cc5cfdda41\" \\\n     -H \"Content-Type: application/json\"",
      "parameters": {
        "_formatter": {},
        "all_props": {
          "page": {
            "type": "integer",
            "example": "1",
            "description": "Current page of products",
            "default": 1
          }
        },
        "required_props": [],
        "optional_props": [
          "page"
        ],
        "objects": [],
        "example": "{\n  \"page\": 1\n}"
      },
      "response": "{}"
    },
    {
      "title": "Product info",
      "description": "Get a single product",
      "rel": "self",
      "href": "/products/{#/definitions/identifier}",
      "method": "GET",
      "html_id": "product-product-info",
      "uri": "/products/:identifier",
      "curl": "curl -X GET \"https://api.example.com/v1/products/ABC-123\" \\\n     -H \"X-Auth-Email: user@example.com\" \\\n     -H \"X-Auth-Key: c3447eb745079oiu9320b638f5e225cf483cc5cfdda41\" \\\n     -H \"Content-Type: application/json\"",
      "response": "{\n  \"id\": \"ABC-123\"\n}"
    }
  ],
// ...
```



