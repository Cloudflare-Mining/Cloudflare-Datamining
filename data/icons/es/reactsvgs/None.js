function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgNone = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2.077 8a5.923 5.923 0 0 1 9.714-4.547l-8.306 8.375A5.896 5.896 0 0 1 2.077 8ZM8 13.923a5.896 5.896 0 0 1-3.748-1.346l8.3-8.346A5.923 5.923 0 0 1 8 13.923Z"
}));

export default SvgNone;