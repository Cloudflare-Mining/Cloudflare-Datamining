function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgBookmarkOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.5 1 4 .5l8 .003.5.5v14.25l-.82.383-3.681-3.07-3.679 3.07-.82-.383V1Zm1 .5v12.684l3.178-2.654h.64l3.182 2.654V1.502l-7-.002Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.881 2.711 7.404 4.18H5.86l-.073.226 1.249.907-.477 1.469.192.14L8 6.013l1.249.907.192-.14-.477-1.468 1.25-.907-.074-.226H8.596L8.119 2.71H7.88Z"
}));

export default SvgBookmarkOutline;