function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var PinSolid = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.1151 7.94276L14.3428 6.71498V6.00788L10.3453 2.01038H9.63825L8.41047 3.23813V3.94526L9.12605 4.66081L6.30452 6.95581C5.32017 6.40678 4.05362 6.54996 3.21715 7.38636C3.15665 7.44686 3.10012 7.50943 3.04762 7.57313L3.08007 8.24468L5.24057 10.4052L1.35632 14.2895L2.06343 14.9966L5.9477 11.1123L8.10802 13.2726L8.7528 13.2725L8.7794 13.3049C8.8431 13.2524 8.90592 13.196 8.96635 13.1356C9.80277 12.2991 9.9458 11.0324 9.39672 10.048L11.6919 7.22666L12.408 7.94276H13.1151Z"
}));

export default PinSolid;