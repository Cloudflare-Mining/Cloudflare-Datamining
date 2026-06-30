function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgLeaf = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.965 12.703a5.1 5.1 0 003.327.29 4.877 4.877 0 003.032-2.283c.46-.797.68-1.807.769-2.831.09-1.032.05-2.122-.04-3.11a28.907 28.907 0 00-.561-3.579l-.004-.015-.001-.006-.503.12.503-.12-.646-.377-.005.002L11.82.8l-.056.016a26.659 26.659 0 00-.965.314 28.99 28.99 0 00-2.4.95c-.909.41-1.883.915-2.74 1.505-.85.585-1.621 1.278-2.083 2.076a4.877 4.877 0 00-.461 3.768A5.1 5.1 0 005.082 12.2l-1.527 2.644.88.508 1.53-2.649zm.52-.901c.81.336 1.707.405 2.553.19a3.843 3.843 0 002.39-1.799c.352-.608.552-1.446.635-2.404.083-.95.047-1.974-.039-2.926a27.88 27.88 0 00-.426-2.912 27.97 27.97 0 00-2.772 1.07c-.878.396-1.792.872-2.58 1.414-.794.547-1.423 1.135-1.774 1.742a3.843 3.843 0 00-.361 2.97c.242.86.769 1.617 1.49 2.153l2.83-4.9.88.508-2.826 4.894zM11.841.792l.143.497-.143-.497z"
}));

export default SvgLeaf;