function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgVue = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("polygon", {
  className: "Vue_svg__a",
  points: "9.79 1.288 8 4.388 6.21 1.288 0.25 1.288 8 14.712 15.75 1.288 9.79 1.288"
}), /*#__PURE__*/React.createElement("polygon", {
  className: "Vue_svg__b",
  points: "9.79 1.288 8 4.388 6.21 1.288 3.35 1.288 8 9.343 12.65 1.288 9.79 1.288"
}));

export default SvgVue;