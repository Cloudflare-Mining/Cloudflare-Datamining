function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCalendar = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3h-2.75V2h-1v1h-4.5V2h-1v1H2l-.5.5v9.977l.5.5h12l.5-.5V3.5L14 3zM4.75 4v1h1V4h4.5v1h1V4h2.25v1.72h-11V4h2.25zM2.5 12.977v-6.25h11v6.25h-11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.25 9.39a.75.75 0 100-1.5.75.75 0 000 1.5zM5.25 11.835a.75.75 0 100-1.5.75.75 0 000 1.5zM10.75 9.39a.75.75 0 100-1.5.75.75 0 000 1.5zM10.75 10.335a.75.75 0 100 1.5.75.75 0 000-1.5zM8 9.39a.75.75 0 100-1.5.75.75 0 000 1.5zM8 11.835a.75.75 0 100-1.5.75.75 0 000 1.5z"
}));

export default SvgCalendar;