function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgDragSolid = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 17",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m4.246 1.748-.5.5V4.76l.5.5H6.76l.5-.5V2.248l-.5-.5H4.246Zm4.994 0-.5.5V4.76l.5.5h2.514l.5-.5V2.248l-.5-.5H9.24ZM4.246 6.743l-.5.5v2.514l.5.5H6.76l.5-.5V7.243l-.5-.5H4.246Zm4.994 0-.5.5v2.514l.5.5h2.514l.5-.5V7.243l-.5-.5H9.24ZM4.246 11.74l-.5.5v2.513l.5.5H6.76l.5-.5V12.24l-.5-.5H4.246Zm4.994 0-.5.5v2.513l.5.5h2.514l.5-.5V12.24l-.5-.5H9.24Z"
}));

export default SvgDragSolid;