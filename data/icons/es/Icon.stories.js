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

export var AIAudit = () => /*#__PURE__*/React.createElement(Icon, {
  type: "ai-audit",
  size: 36
});
AIAudit.decorators = [withStyleProvider];
export var CloudflareEmailSecurity = () => /*#__PURE__*/React.createElement(Icon, {
  type: "cloudflare-email-security",
  size: 36
});
CloudflareEmailSecurity.decorators = [withStyleProvider];
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
export var Inbox = () => /*#__PURE__*/React.createElement(Icon, {
  type: "inbox",
  size: 36
});
Inbox.decorators = [withStyleProvider];
export var Spectrum = () => /*#__PURE__*/React.createElement(Icon, {
  type: "spectrum",
  size: 36
});
Spectrum.decorators = [withStyleProvider];
export var ThumbsUp = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
  type: "thumbs-up-solid",
  size: 36
}), /*#__PURE__*/React.createElement(Icon, {
  type: "thumbs-up-outline",
  size: 36
}));
ThumbsUp.decorators = [withStyleProvider];
export var ThumbsDown = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
  type: "thumbs-down-solid",
  size: 36
}), /*#__PURE__*/React.createElement(Icon, {
  type: "thumbs-down-outline",
  size: 36
}));
ThumbsDown.decorators = [withStyleProvider];