function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgUser = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.806 7.452a3.25 3.25 0 11-3.612-5.404 3.25 3.25 0 013.612 5.404zM6.793 9h2.42a5.442 5.442 0 013.736 1.475 4.908 4.908 0 011.551 3.55l-.5.475H2l-.5-.475a4.908 4.908 0 011.552-3.552A5.443 5.443 0 016.792 9z"
}));

export default SvgUser;