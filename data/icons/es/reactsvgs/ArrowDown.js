function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgArrowDown = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54.75 36.01L51.9 33.22L34.38 51.09L34.38 5.99996L30.38 5.99996L30.38 51.09L12.86 33.22L10 36.01L32.38 58.85L54.75 36.01Z"
}));

export default SvgArrowDown;