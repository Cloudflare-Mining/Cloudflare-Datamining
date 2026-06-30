function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgBitbucket = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  fill: "none",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#2684FF",
  d: "M2.408 2.3a.403.403 0 00-.403.467l1.71 10.376a.548.548 0 00.535.457h8.2a.403.403 0 00.402-.338l1.71-10.493a.402.402 0 00-.403-.467L2.408 2.3zm7.197 7.5H6.988l-.709-3.703h3.96l-.634 3.702z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "url(#bitbucket_svg__paint0_linear)",
  d: "M14.018 6.097h-3.779l-.634 3.702H6.988l-3.09 3.668a.546.546 0 00.352.133h8.202a.402.402 0 00.402-.338l1.164-7.165z"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "bitbucket_svg__paint0_linear",
  x1: 14.892,
  x2: 8.647,
  y1: 7.134,
  y2: 12.008,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: 0.18,
  stopColor: "#0052CC"
}), /*#__PURE__*/React.createElement("stop", {
  offset: 1,
  stopColor: "#2684FF"
}))));

export default SvgBitbucket;