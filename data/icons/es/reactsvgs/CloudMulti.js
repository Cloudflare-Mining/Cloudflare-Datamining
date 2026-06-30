function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCloudMulti = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#cloud-multi_svg__a)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15.13 6.94a2.468 2.468 0 0 0-1.597-.571 3.99 3.99 0 0 0-6.726-2.227c-.03 0-.057-.004-.086-.004a3.972 3.972 0 0 0-3.677 2.429 2.865 2.865 0 0 0-1.958.67A3.047 3.047 0 0 0 0 9.54a2.977 2.977 0 0 0 2.97 2.97h7.65a2.51 2.51 0 0 0 2.095-1.13h.775a2.531 2.531 0 0 0 1.64-4.44Zm-4.509 4.57H2.965A1.973 1.973 0 0 1 1 9.54a2.037 2.037 0 0 1 .729-1.537 1.84 1.84 0 0 1 1.196-.44c.123.001.246.012.368.034l.434.075.13-.422a2.995 2.995 0 0 1 5.857.796l.015.57.564-.09a1.582 1.582 0 0 1 1.32.305A1.544 1.544 0 0 1 12.132 10a1.512 1.512 0 0 1-1.51 1.51Zm2.868-1.13H13.1a2.532 2.532 0 0 0-.838-2.31 2.469 2.469 0 0 0-1.596-.572 3.965 3.965 0 0 0-2.54-3.109 2.995 2.995 0 0 1 4.455 2.528l.016.57.564-.09a1.584 1.584 0 0 1 1.32.305 1.546 1.546 0 0 1 .076 2.236 1.512 1.512 0 0 1-1.068.443Z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "cloud-multi_svg__a"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgCloudMulti;