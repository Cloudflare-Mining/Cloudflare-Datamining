function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgEye = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 3.17A9.195 9.195 0 00.068 7.75v.5a9.16 9.16 0 0015.865 0v-.5A9.196 9.196 0 008 3.17zm0 8.66A8.198 8.198 0 011.083 8a8.162 8.162 0 0113.835 0A8.198 8.198 0 018 11.83z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 6a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.85 7.853a.75.75 0 100-1.5.75.75 0 000 1.5z"
}));

export default SvgEye;