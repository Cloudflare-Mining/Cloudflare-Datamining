function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgWaitingRoom = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M3 2l.5-.5h9l.5.5v3.5h1l.5.5v5.75l-.5.5h-2v2.25h-1v-2.25H5v2.25H4v-2.25H2l-.5-.5V6l.5-.5h1V2zm9 .5v3h-.5L11 6v2.75H5V6l-.5-.5H4v-3h8zm-9.5 8.75V6.5H4v2.75l.5.5h7l.5-.5V6.5h1.5v4.75h-11z"
}));

export default SvgWaitingRoom;