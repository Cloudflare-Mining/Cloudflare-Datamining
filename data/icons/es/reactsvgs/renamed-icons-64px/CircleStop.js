function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCircleStop = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  width: 64,
  height: 64,
  fill: "none",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#000",
  d: "M32 6a26 26 0 1026 26A26.029 26.029 0 0032 6zm0 48a22 22 0 1122-22 22.025 22.025 0 01-22 22z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#000",
  d: "M22 20l-2 2v20l2 2h20l2-2V22l-2-2H22zm18 20H24V24h16v16z"
}));

export default SvgCircleStop;