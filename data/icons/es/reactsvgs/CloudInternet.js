function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCloudInternet = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#cloud-internet_svg__a)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.015 12.825h-9.46A3.563 3.563 0 0 1 0 9.27a3.65 3.65 0 0 1 1.3-2.757 3.403 3.403 0 0 1 2.423-.797 4.822 4.822 0 0 1 9.244 1.147 2.903 2.903 0 0 1 2 .68 3.01 3.01 0 0 1-1.95 5.282h-.002ZM3.498 6.708c-.57-.002-1.121.2-1.555.57A2.64 2.64 0 0 0 1 9.27a2.559 2.559 0 0 0 2.547 2.555h9.468A1.988 1.988 0 0 0 15 9.84a2.029 2.029 0 0 0-.682-1.536 2.07 2.07 0 0 0-1.729-.404l-.563.09-.016-.57a3.822 3.822 0 0 0-7.47-1.015l-.13.422-.434-.077a2.764 2.764 0 0 0-.477-.042Z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "cloud-internet_svg__a"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgCloudInternet;