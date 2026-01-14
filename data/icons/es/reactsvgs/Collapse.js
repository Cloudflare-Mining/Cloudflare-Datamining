function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCollapse = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 5.293L2.207 1.5L1.5 2.207L5.293 6H3V7H7V3H6V5.293Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 6H10.707L14.5 2.207L13.793 1.5L10 5.293V3H9V7H13V6Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 10V9H9V13H10V10.707L13.793 14.5L14.5 13.793L10.707 10H13Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10H5.293L1.5 13.793L2.207 14.5L6 10.707V13H7V9H3V10Z"
}));

export default SvgCollapse;