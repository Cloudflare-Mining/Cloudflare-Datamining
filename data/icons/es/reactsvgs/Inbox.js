function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgInbox = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m4.903 3.048-.392.177-3.096 3.556-.125.33v5.333l.516.508h12.387l.517-.508V7.111l-.125-.33-3.096-3.556-.392-.177H4.903ZM2.486 7.11l2.655-3.048h5.718l2.655 3.048h-2.837l-.516.506-.005 1.272H5.973l-.006-1.272-.516-.506H2.486Zm-.163 1.016v3.81h11.354v-3.81h-2.486l-.006 1.272-.516.506H5.46l-.515-.506-.006-1.272H2.323Z"
}));

export default SvgInbox;