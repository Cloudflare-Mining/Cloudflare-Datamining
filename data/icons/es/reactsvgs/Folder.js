function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgFolder = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1.5 3l.5-.5h4.75l.419.227.852 1.306H14l.5.5V13l-.5.5H2l-.5-.5V3zm1 .5v9h11V5.033H7.75l-.419-.227L6.48 3.5H2.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8H2V7h12v1z"
})));

export default SvgFolder;