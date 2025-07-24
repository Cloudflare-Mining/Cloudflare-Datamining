function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var PinOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.3428 6.71498L13.1151 7.94276H12.408L11.6919 7.22666L9.39672 10.048C9.9458 11.0324 9.80277 12.2991 8.96635 13.1356C8.90592 13.196 8.8431 13.2524 8.7794 13.3049L8.7528 13.2725L8.10802 13.2726L5.9477 11.1123L2.06343 14.9966L1.35632 14.2895L5.24057 10.4052L3.08007 8.24468L3.04762 7.57313C3.10012 7.50943 3.15665 7.44686 3.21715 7.38636C4.05362 6.54996 5.32017 6.40678 6.30452 6.95581L9.12605 4.66081L8.41047 3.94526V3.23813L9.63825 2.01038H10.3453L14.3428 6.00788V6.71498ZM6.16745 8.09346C5.61957 7.54566 4.77095 7.48273 4.1535 7.90391L8.4488 12.1992C8.85682 11.601 8.8105 10.7857 8.30915 10.2372L8.25907 10.1851L6.16745 8.09346ZM7.09225 7.60406L8.74867 9.26046L10.9811 6.51593L9.83677 5.37156L7.09225 7.60406ZM9.47112 3.59171L12.7615 6.88208L13.2822 6.36143L9.9918 3.07103L9.47112 3.59171Z"
}));

export default PinOutline;