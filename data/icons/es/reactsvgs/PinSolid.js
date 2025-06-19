function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var PinSolid = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "nonzero",
  clipRule: "evenodd",
  d: "M11.2267 4.9072C10.9524 4.92098 10.677 4.90559 10.4053 4.86103L8.00907 7.26937C8.14328 8.09583 8.01152 8.95743 7.61377 9.71487C7.43702 10.0515 7.20775 10.3675 6.92595 10.6507L1.45095 5.14811C1.73275 4.86489 2.04718 4.63446 2.38208 4.45682C3.13572 4.05707 3.993 3.92464 4.81532 4.05953L7.21159 1.65119C7.16725 1.3782 7.15194 1.10136 7.16565 0.825717C7.17148 0.708423 7.1946 0.562821 7.22563 0.411507C7.31206 -0.00996931 7.82713 -0.136575 8.1299 0.167718L11.9437 4.00071C12.2307 4.28921 12.1315 4.77491 11.7322 4.84832C11.5649 4.87907 11.396 4.8987 11.2267 4.9072ZM6.87925 7.45471C6.95484 7.92023 6.91107 8.39992 6.74848 8.84522L3.24737 5.32647C3.69044 5.16306 4.16773 5.11907 4.63091 5.19505L5.20994 5.29003L8.40876 2.07509L9.98356 3.65782L6.78474 6.87276L6.87925 7.45471ZM0.297383 11.8101C0.549364 12.0633 0.957904 12.0633 1.20988 11.8101L4.18012 8.82486L3.26762 7.90776L0.297384 10.893C0.0454035 11.1462 0.0454033 11.5568 0.297383 11.8101Z"
}));

export default PinSolid;