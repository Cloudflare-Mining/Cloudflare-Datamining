function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCaretDoubleLeft = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.707 8l5.797 5.796-.707.708L7.293 8l6.504-6.504.707.708L8.707 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.93 8l5.796 5.796-.707.708L1.516 8l6.503-6.504.707.708L2.93 8z"
}));

export default SvgCaretDoubleLeft;