function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgDeviceLaptop = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14L6 16V46.031H0L2 50.031H62L64 46.031H58V16L56 14H8ZM10 46V18H54V46H10Z"
}));

export default SvgDeviceLaptop;