function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgMore = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.05 9.585a1.584 1.584 0 11-.002-3.17 1.584 1.584 0 01.002 3.17zM8 9.585a1.584 1.584 0 110-3.17 1.584 1.584 0 010 3.17zM12.95 9.585a1.585 1.585 0 11.002-3.17 1.585 1.585 0 01-.002 3.17z"
}));

export default SvgMore;