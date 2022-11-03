function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgFlowchart = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 10.5l-.5.5v2.75l.5.5h2.75l.5-.5V11l-.5-.5H2zm2.25 2.75H2.5V11.5h1.75v1.75zM7.928 1.498l-2.25 2.25L7.928 6l2.25-2.25-2.25-2.25zM3.76 9.058h8.335v1.14h.982V8.073h-4.65v-1.6h-1v1.6H2.776v2.125h.985v-1.14zM12.5 10.5a2 2 0 100 4 2 2 0 000-4zm0 3a1 1 0 110-2 1 1 0 010 2z"
}));

export default SvgFlowchart;