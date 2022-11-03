function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCirclePlay = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  width: 64,
  height: 64,
  fill: "none",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#000",
  d: "M26 19.07l-3 1.72v23.74l3 1.72 20-11.89v-3.44L26 19.07zM27 41V24.3l14.08 8.34L27 41z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#000",
  d: "M32 6a26 26 0 100 52 26 26 0 000-52zm0 48a22 22 0 110-44 22 22 0 010 44z"
}));

export default SvgCirclePlay;