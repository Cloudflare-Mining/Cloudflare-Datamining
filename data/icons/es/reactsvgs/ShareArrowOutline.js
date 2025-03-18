function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgShareArrowOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#share-arrow-outline_svg__a)"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.854 3.932 7.5 2.286V9.5h1V2.336l1.596 1.596.707-.707L8.328.75 7.975.396 7.62.75 5.146 3.225zM3 5l-.5.5v8l.5.5h10l.5-.5v-8L13 5h-3v1h2.5v7h-9V6H6V5z",
  clipRule: "evenodd"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "share-arrow-outline_svg__a"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgShareArrowOutline;