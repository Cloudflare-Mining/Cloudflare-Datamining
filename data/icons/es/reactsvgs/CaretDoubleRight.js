function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCaretDoubleRight = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.293 8L1.496 2.204l.708-.708L8.707 8l-6.503 6.504-.708-.708L7.293 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.07 8L7.274 2.204l.707-.708L14.484 8l-6.503 6.504-.707-.708L13.07 8z"
}));

export default SvgCaretDoubleRight;