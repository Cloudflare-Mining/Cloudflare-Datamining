function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgImage = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2.98H2l-.5.5v9.967l.5.5h12l.5-.5V3.48l-.5-.5zm-.5 1v4.672l-2-1.637-.655.02-1.27 1.17-1.357-1-.618.02-3.5 2.925-1.6-1.1V3.98h11zm-11 8.967V10.27l1.325.925.605-.027L7.938 8.25l1.375 1 .634-.035 1.25-1.158L13.5 9.943v3l-11 .005z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.77 8.04a1 1 0 100-2 1 1 0 000 2z"
}));

export default SvgImage;