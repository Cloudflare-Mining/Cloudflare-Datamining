function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgList = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 1.5H3l-.5.5v11.945l.5.5h10l.5-.5V2l-.5-.5zm-.5 11.945h-9V2.5h9v10.945z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.366 3.665h-4.75v1h4.75v-1zM11.366 5.761h-4.75v1h4.75v-1zM11.366 7.858h-4.75v1h4.75v-1zM5.634 3.672h-1v1h1v-1zM5.634 5.761h-1v1h1v-1zM5.634 7.851h-1v1h1v-1z"
}));

export default SvgList;