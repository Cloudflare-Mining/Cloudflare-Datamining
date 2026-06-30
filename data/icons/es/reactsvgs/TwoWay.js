function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgTwoWay = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.558 8.271l-.7.715 1.676 1.643H2.01v1h10.525l-1.676 1.642.7.715 2.915-2.857-2.915-2.858zM5.152 6.988L3.475 5.345H14v-1H3.475l1.677-1.642-.7-.715-2.916 2.858 2.916 2.857.7-.715z"
}));

export default SvgTwoWay;