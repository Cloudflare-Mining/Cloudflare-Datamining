function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgEdit = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.685 11.864l.254-.136 7.105-7.085v-.707l-2.48-2.48h-.707L2.753 8.54l-.138.258-.605 3.105.59.586 3.085-.625zM3.567 9.14l6.643-6.625 1.773 1.773-6.644 6.625-2.205.447.433-2.22zM14 13.5H2v1h12v-1z"
}));

export default SvgEdit;