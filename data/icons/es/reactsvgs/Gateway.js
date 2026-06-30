function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgGateway = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.45 7.125h-2.577V3.508l-.41-.408H3.925l-.41.41v3.08h.922V4.023h7.513v7.555H4.438v-1.553h-.923v2.065l.41.41h8.538l.41-.41V8.048H16l-.55-.923z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.453 7.238H0l.517.87H8.97l-.518-.87zM9.21 8.51H.755l.517.868h8.453L9.21 8.51z"
}));

export default SvgGateway;