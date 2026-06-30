function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgTerraform = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 1v4.42l3.827 2.21V3.21L2 1Zm8.074 4.677-3.828-2.21v4.42l3.828 2.21v-4.42Zm.42 4.42v-4.42L14 3.79V8l-3.506 2.096ZM10.074 15l-3.828-2.21V8.371l3.828 2.21V15Z"
}));

export default SvgTerraform;