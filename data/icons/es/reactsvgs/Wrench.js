function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgWrench = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#wrench_svg__clip0)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.83 10.34c.034-.007.07-.012.104-.02.125-.025.25-.055.373-.091l.065-.022a4.445 4.445 0 00.7-.285l.072-.036a4.59 4.59 0 00.335-.198c.028-.018.055-.038.082-.057.085-.057.167-.118.248-.182l.09-.071a4.434 4.434 0 001.084-5.51l-.796-.118-2.16 2.157-.932-.934 2.156-2.159-.12-.795a4.459 4.459 0 00-6.266 5.495L.544 11.836v.707l1.912 1.913h.707l4.324-4.321c.115.043.231.079.348.112l.113.028a4.577 4.577 0 00.614.11c.04.004.08.009.121.012.102.008.204.013.305.014l.047.002h.007c.128 0 .256-.008.384-.02l.112-.011a4.42 4.42 0 00.291-.043zm-7.02 3.056L1.605 12.19l4.452-4.453-.148-.317a3.46 3.46 0 014.106-4.784L8.034 4.62v.706l1.64 1.64h.707l1.982-1.98a3.46 3.46 0 01-4.782 4.107l-.317-.148-4.454 4.451z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "wrench_svg__clip0"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgWrench;