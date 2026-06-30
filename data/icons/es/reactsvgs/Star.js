function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgStar = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7.875 1.645 1.53 4.757h4.95l-4.005 2.94 1.53 4.756-4.005-2.94-4.005 2.94L5.4 9.342l-4.006-2.94h4.951l1.53-4.757Z"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.875 3.279 6.71 6.902H2.92l3.066 2.25-1.168 3.63 3.057-2.244 3.057 2.244-1.168-3.63 3.065-2.25H9.04L7.875 3.28ZM5.981 5.902l1.418-4.41h.952l1.418 4.41h4.587l.295.903-3.714 2.727 1.42 4.413-.773.556-3.709-2.722-3.71 2.723-.771-.557 1.42-4.413-3.715-2.727.295-.903h4.587Z"
}));

export default SvgStar;