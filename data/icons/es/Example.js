import React from 'react';
import { Div, Code, H2 } from '@cloudflare/elements';
import Icon from './Icon';
import IconComponents from './reactsvgs/index';
var TYPES = Object.keys(IconComponents);
export var Example = () => /*#__PURE__*/React.createElement(Div, {
  mt: 4,
  px: 4,
  py: 4,
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:9"
}, /*#__PURE__*/React.createElement(H2, {
  mb: 4,
  textAlign: "center",
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:10"
}, "Icons preview"), /*#__PURE__*/React.createElement(Div, {
  display: "grid",
  style: {
    gridTemplateColumns: 'repeat(10, 1fr)'
  },
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:13"
}, TYPES.map(t => /*#__PURE__*/React.createElement(Div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  px: 0,
  py: 2,
  key: t,
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:15"
}, /*#__PURE__*/React.createElement(Icon, {
  size: 32,
  type: t,
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:24"
}), /*#__PURE__*/React.createElement(Code, {
  bg: "transparent",
  mt: 1,
  fontSize: 0,
  "data-source-file": "@cloudflare/component-icon:src/Example.tsx:25"
}, t)))));