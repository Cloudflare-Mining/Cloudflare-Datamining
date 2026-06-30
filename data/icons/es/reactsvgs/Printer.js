function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgPrinter = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 3.5h-2V1.988l-.5-.5H5l-.5.5V3.5h-2L2 4v6l.5.5h1.944v2l.146.354 2.5 2.5.354.146h3.5l.5-.5v-4.5H13.5l.5-.5V4l-.5-.5zm-8-1.012h5V3.5h-5V2.488zM5.65 12.5h1.793v1.793L5.65 12.5zm4.793 2h-2V12l-.5-.5h-2.5v-3h5v6zM13 9.5h-1.556V8l-.5-.5h-6l-.5.5v1.5H3v-5h10v5z"
}));

export default SvgPrinter;