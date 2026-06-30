function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgFunnel = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m1.774 3.72.37-.836h11.711l.371.836-4.649 5.135v3.26l-.214.411-2.155 1.5-.785-.41V8.855L1.773 3.72Zm1.498.164 4.021 4.443.13.335v3.997l1.154-.804V8.662l.13-.335 4.021-4.443H3.272Z"
}));

export default SvgFunnel;