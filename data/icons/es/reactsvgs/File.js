function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgFile = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 1.5H3l-.5.5v11.95l.5.5h10l.5-.5V2l-.5-.5zm-.5 11.95h-9V2.5h9v10.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.965 3.678H4.63v1h3.335v-1zM11.342 5.768H4.63v1h6.712v-1zM11.342 7.857H4.63v1h6.712v-1z"
}));

export default SvgFile;