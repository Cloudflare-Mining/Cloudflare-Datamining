function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgDiscover = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.005 15.005h-4.01v.982h4.01v-.982ZM8.47 0h-.982v2.12h.981V0Zm4.491 2.026-1.498 1.499.694.694 1.498-1.499-.694-.694ZM15.528 7.2H13.41v.981h2.12V7.2ZM2.59 7.243H.473v.981H2.59v-.981Zm.418-5.186-.693.694 1.498 1.498.694-.694-1.499-1.498Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 3.055a4.657 4.657 0 0 0-2.49 8.593v1.847l.49.493h4l.49-.493v-1.847A4.657 4.657 0 0 0 8 3.055Zm1.765 7.883-.255.14v1.927H6.49v-1.928l-.255-.14a3.677 3.677 0 1 1 3.53 0Z"
}));

export default SvgDiscover;