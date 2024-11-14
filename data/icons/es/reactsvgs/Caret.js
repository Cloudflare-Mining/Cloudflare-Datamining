function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCaret = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M8.385 2.707 4.24 6.854l-.707-.708 4.5-4.5h.707l4.5 4.5-.707.708-4.147-4.147Zm0 10.586L4.24 9.146l-.707.708 4.5 4.5h.707l4.5-4.5-.707-.708-4.147 4.147Z"
}));

export default SvgCaret;