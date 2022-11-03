function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCreditCard = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.027 3.972H2l-.5.5V12l.5.5h12.027l.5-.5V4.472l-.5-.5zm-.5 1v1.163H2.5V4.972h11.027zM2.5 11.5V7.135h11.027V11.5H2.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.607 10.35a.75.75 0 100-1.5.75.75 0 000 1.5z"
}));

export default SvgCreditCard;