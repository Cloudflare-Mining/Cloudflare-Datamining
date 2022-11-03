function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCopy = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 1.5H6l-.5.5v2.5h1v-2h7v7h-2v1H14l.5-.5V2l-.5-.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5.5l-.5.5v8l.5.5h8l.5-.5V6l-.5-.5H2zm7.5 8h-7v-7h7v7z"
}));

export default SvgCopy;