function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgRefactorOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#refactor-outline_svg__a)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.35 11.325h3.517a3.011 3.011 0 0 0 1.95-5.282 2.903 2.903 0 0 0-2-.68 4.822 4.822 0 0 0-9.244-1.148 3.403 3.403 0 0 0-2.423.798A3.65 3.65 0 0 0-.15 7.77c.001.542.126 1.07.358 1.55l.142-.247v-.01l.374-.638.156-.27a2.559 2.559 0 0 1-.03-.385 2.64 2.64 0 0 1 .943-1.992c.434-.37.985-.572 1.555-.57.16 0 .32.014.477.042l.434.077.13-.422A3.821 3.821 0 0 1 11.86 5.92l.016.57.564-.09a2.07 2.07 0 0 1 1.728.404 2.029 2.029 0 0 1 .682 1.535 1.987 1.987 0 0 1-1.985 1.986H9.35v1Z"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m1.357 8.626 3.25-1.813h.487l3.25 1.813.256.436v3.625l-.256.437-3.25 1.813h-.487l-3.25-1.813-.257-.437V9.062l.257-.436Zm2.993 2.48L2.1 9.851v2.543l2.25 1.255v-2.543ZM2.683 9.031 4.85 10.24l2.168-1.21L4.85 7.822l-2.167 1.21Zm4.917.82-2.25 1.255v2.543l2.25-1.255V9.85Z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "refactor-outline_svg__a"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgRefactorOutline;