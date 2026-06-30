function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgTimer = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 2.511h.965v-1h-2.93v1H7.5v.75a5.625 5.625 0 1 0 1 0v-.75ZM8 13.461a4.625 4.625 0 1 1 0-9.25 4.625 4.625 0 0 1 0 9.25Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.166 5.874 5.129 10.88l.705.71 5.037-5.008-.705-.71Z"
}));

export default SvgTimer;