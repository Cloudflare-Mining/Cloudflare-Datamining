function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgTurnstile = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.002 2.6a5.991 5.991 0 0 0-4.117 1.637l.317-2.087L3.213 2l-.557 3.664 3.665.557.15-.989-1.882-.285a4.982 4.982 0 1 1-1.46 2.528l-.975-.225A6 6 0 1 0 8.002 2.6Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.178 9.696 5.583 7.822 5 8.452 7.168 11 11 6.638 10.427 6l-3.25 3.696Z"
}));

export default SvgTurnstile;