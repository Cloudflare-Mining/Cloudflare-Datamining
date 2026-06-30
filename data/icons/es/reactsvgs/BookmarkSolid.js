function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgBookmarkSolid = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m4 .5-.5.5v14.252l.82.384L8 12.566l3.68 3.07.821-.383V1.002l-.5-.5L4 .5Zm3.881 2.211L7.404 4.18H5.86l-.073.226 1.249.907-.477 1.469.192.14L8 6.013l1.249.907.192-.14-.477-1.468 1.25-.907-.074-.226H8.596L8.119 2.71H7.88Z"
}));

export default SvgBookmarkSolid;