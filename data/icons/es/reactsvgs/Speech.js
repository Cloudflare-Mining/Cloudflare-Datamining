function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgSpeech = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2H2l-.5.5v11.165l.863.345L5.215 11H14l.5-.5v-8L14 2zm-.5 8H4.785L2.5 12.411V3h11v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 4.503h-9v1h9v-1zM12.5 7h-9v1h9V7z"
}));

export default SvgSpeech;