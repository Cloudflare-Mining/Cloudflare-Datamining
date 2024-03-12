import React from 'react';
import { StyleProvider, createRenderer } from '@cloudflare/style-provider';
import Icon from './Icon';
var renderer = createRenderer({
  dev: process.env.NODE_ENV === 'development',
  selectorPrefix: 'c_'
}); // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Example/Icon',
  component: Icon
};

var withStyleProvider = Story => /*#__PURE__*/React.createElement(StyleProvider, {
  renderer: renderer
}, /*#__PURE__*/React.createElement(Story, null));

export var CloudMulti = () => /*#__PURE__*/React.createElement(Icon, {
  type: "cloud-multi",
  size: 36
});
CloudMulti.decorators = [withStyleProvider];
export var CloudInternet = () => /*#__PURE__*/React.createElement(Icon, {
  type: "cloud-internet",
  size: 36
});
CloudInternet.decorators = [withStyleProvider];
export var Spectrum = () => /*#__PURE__*/React.createElement(Icon, {
  type: "spectrum",
  size: 36
});
Spectrum.decorators = [withStyleProvider];