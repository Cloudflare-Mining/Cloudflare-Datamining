function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgClipboard = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 2h-1.5v-.5L11 1H5l-.5.5V2H3l-.5.5V14l.5.5h10l.5-.5V2.5L13 2zM5.5 2h5v1h-5V2zm7 11.5h-9V3h1v.5L5 4h6l.5-.5V3h1v10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.978 5.172H4.643v1h3.335v-1zM11.357 7.261H4.643v1h6.714v-1zM11.357 9.351H4.643v1h6.714v-1z"
}));

export default SvgClipboard;