function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgFilterDrawerOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 17",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 4.75h-13v1h13v-1Zm0 6.5h-13v1h13v-1Z"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M8.75 5.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM4 11.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
}));

export default SvgFilterDrawerOutline;