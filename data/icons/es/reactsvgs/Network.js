function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgNetwork = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1.363A5.083 5.083 0 002.922 6.44c0 3.5 4.448 9.25 4.638 9.48h.785c.195-.25 4.732-6 4.732-9.485A5.083 5.083 0 008 1.363zm-.043 13.42c-1.08-1.478-4.035-5.75-4.035-8.343a4.078 4.078 0 118.155 0c0 2.588-3.017 6.867-4.12 8.343z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.98 4.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 3.5A1.25 1.25 0 119.23 6.5a1.25 1.25 0 01-1.25 1.268V7.75z"
}));

export default SvgNetwork;