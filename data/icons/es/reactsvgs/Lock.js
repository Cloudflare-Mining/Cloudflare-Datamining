function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgLock = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.39 6.902h-1.193V4.705a3.197 3.197 0 10-6.394 0v2.197H3.61l-.5.5V14l.5.5h8.78l.5-.5V7.402l-.5-.5zM5.803 4.705a2.197 2.197 0 014.394 0v2.197H5.803V4.705zM11.89 13.5H4.11V7.902h7.78V13.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8.95a.965.965 0 00-.43 1.83v1.57h.86v-1.57A.965.965 0 008 8.95z"
}));

export default SvgLock;