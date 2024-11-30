# restructured

[![NPM](https://nodei.co/npm/restructured.svg?mini=true)](https://npmjs.org/package/restructured)
[![Build Status](https://travis-ci.org/seikichi/restructured.svg?branch=master)](https://travis-ci.org/seikichi/restructured)

A reStructuredText parser for JavaScript.

## Online Demo

[demo](https://seikichi.github.io/restructured/).

## Example

```bash
> npm install -g restructured
> echo 'Hello, world' | restructured | jq
{
  "type": "document",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Hello, world\n"
        }
      ]
    }
  ]
}
```

Consider the following script.

```javascript
import restructured from 'restructured';

const parsed = restructured.parse(`
=====
Title
=====

Subtitle
--------

This is a paragraph.

- This is item 1
- This is item 2
`);

console.log(JSON.stringify(parsed));
```

The above script outputs the following JSON.

```json
{
  "type": "document",
  "children": [
    {
      "type": "section",
      "depth": 1,
      "children": [
        {
          "type": "title",
          "children": [
            {
              "type": "text",
              "value": "Title"
            }
          ]
        },
        {
          "type": "section",
          "depth": 2,
          "children": [
            {
              "type": "title",
              "children": [
                {
                  "type": "text",
                  "value": "Subtitle"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "value": "This is a paragraph.\n"
                }
              ]
            },
            {
              "type": "bullet_list",
              "bullet": "-",
              "children": [
                {
                  "type": "list_item",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "value": "This is item 1\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "list_item",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "value": "This is item 2\n"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

## Progress

- [x] Document Structure
  - [x] Document
  - [x] Sections
  - [x] Transitions
- [ ] Body Elements
  - [x] Paragraphs
  - [x] Bullet Lists
  - [x] Enumerated Lists
  - [x] Definition Lists
  - [ ] Field Lists
    - [ ] Bibliographic Fields
    - [ ] RCS Keywords
  - [ ] Option Lists
  - [x] Literal Blocks
    - [x] Indented Literal Blocks
    - [x] Quoted Literal Blocks
  - [ ] Line Blocks
  - [x] Block Quotes
  - [ ] Doctest Blocks
  - [ ] Tables
    - [ ] Grid Tables
    - [ ] Simple Tables
  - [ ] Explicit Markup Blocks
    - [ ] Footnotes
      - [ ] Auto-Numbered Footnotes
      - [ ] Auto-Symbol Footnotes
      - [ ] Mixed Manual and Auto-Numbered Footnotes
    - [ ] Citations
    - [ ] Hyperlink Targets
      - [ ] Anonymous Hyperlinks
    - [ ] Directives
    - [ ] Substitution Definitions
    - [x] Comments
- [ ] Implicit Hyperlink Targets
- [ ] Inline Markup
  - [x] Emphasis
  - [x] Strong Emphasis
  - [ ] Interpreted Text
  - [x] Inline Literals
  - [ ] Hyperlink References
    - [ ] Embedded URIs and Aliases
  - [ ] Inline Internal Targets
  - [ ] Footnote References
  - [ ] Citation References
  - [ ] Substitution References
  - [ ] Standalone Hyperlinks

## License

MIT
