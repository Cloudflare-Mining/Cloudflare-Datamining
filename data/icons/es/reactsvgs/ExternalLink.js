function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgExternalLink = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.996 1.532l.008 1 2.779-.022-4.136 4.136.707.707 4.136-4.136-.023 2.779 1 .008.037-4.508-4.508.036z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 12H4V4h4.5V3h-5l-.5.5v9l.5.5h9l.5-.5v-5h-1V12z"
}));

export default SvgExternalLink;