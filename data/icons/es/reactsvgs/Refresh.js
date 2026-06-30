function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgRefresh = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.999 2c1.53 0 3.004.586 4.117 1.638l-.317-2.088.988-.15.558 3.664-3.666.557-.15-.989 1.882-.285a4.982 4.982 0 101.46 2.528l.976-.225A6 6 0 117.999 2z"
}));

export default SvgRefresh;