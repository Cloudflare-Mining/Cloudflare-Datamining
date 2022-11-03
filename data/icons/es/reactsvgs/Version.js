function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgVersion = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.568 2.25H5.932l-.432.444v10.612l.432.444h8.636l.432-.444V2.694l-.432-.444zM14 12.75H6.5v-9.5H14v9.5zM3.25 3.375l.5-.625H5v1.004h-.75v8.742H5V13.5H3.75l-.5-.5V3.375zM1 4.125l.5-.625h1.25v1H2V12h.75v1H1.625L1 12.375v-8.25z"
}));

export default SvgVersion;