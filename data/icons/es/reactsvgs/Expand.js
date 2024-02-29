function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgExpand = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 8V12H49.172L36.586 24.586L39.414 27.414L52 14.828V24H56V8H40Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.586 36.586L12 49.172V40H8V56H24V52H14.828L27.414 39.414L24.586 36.586Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52 49.172L39.414 36.586L36.586 39.414L49.172 52H40V56H56V40H52V49.172Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 12V8H8V24H12V14.828L24.586 27.414L27.414 24.586L14.828 12H24Z"
}));

export default SvgExpand;