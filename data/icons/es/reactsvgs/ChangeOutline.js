function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgChangeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.354 8.499v.022c0 2.145-1.618 3.969-3.847 3.969l-7.157.01 1.75 1.75-.75.75-3-3 3-3 .75.75-1.75 1.75 7.16-.02c1.505 0 2.846-1.372 2.846-2.959V8.5h.998ZM1.35 7.5c0-2.145 1.654-4.017 3.883-4.017l7.117.017-1.75-1.75.75-.75 3.004 2.989L11.35 7l-.75-.75 1.75-1.757H5.23c-1.505 0-2.88 1.42-2.88 3.007h-1Z"
}));

export default SvgChangeOutline;