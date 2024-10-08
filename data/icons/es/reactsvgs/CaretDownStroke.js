function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCaretDownStroke = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.53963 20.4066L8.36763 17.5786L31.5536 40.7646L54.7396 17.5786L57.5676 20.4066L31.5536 46.4216L5.53963 20.4066Z"
}));

export default SvgCaretDownStroke;