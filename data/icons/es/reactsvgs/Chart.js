function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgChart = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.75 13A4.749 4.749 0 016.5 3.67V2.638A5.75 5.75 0 1013.363 9.5H12.33A4.769 4.769 0 017.75 13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1.5l-.5.5v6l.5.5h6l.5-.5A6.508 6.508 0 008 1.5zm.5 6V2.522A5.51 5.51 0 0113.478 7.5H8.5z"
}));

export default SvgChart;