function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgDeviceDesktop = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  "fill-rule": "evenodd",
  d: "M5 13L7 11H58L60 13V45L58 47H33.998V52H45.542V56H18.458V52H29.998V47H7L5 45V13ZM56 43H9V15H56V43Z"
}));

export default SvgDeviceDesktop;