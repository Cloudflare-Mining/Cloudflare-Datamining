function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgSecurityWall = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 33.94L60 31.94V19.94L58 17.94H49.6V8L47.6 6H6L4 8V20L6 22H14.39V30H6L4 32V44L6 46H14.39V56L16.39 58H58L60 56V44L58 42H49.6V34L58 33.94ZM56 29.94H39.19V22H47.6H56V29.94ZM45.6 10V18H28.8V10H45.6ZM8 10H24.8V18H16.39H8V10ZM18.39 22H35.19V30H18.39V22ZM8 33.94H24.8V41.94H16.39H8V33.94ZM18.39 54V46H35.19V54H18.39ZM56 54H39.19V46H47.6H56V54ZM45.61 42H28.8V34H45.6L45.61 42Z"
}));

export default SvgSecurityWall;