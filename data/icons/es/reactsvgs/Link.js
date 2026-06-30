function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgLink = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 6.75A2.253 2.253 0 013.25 4.5h4.5a2.25 2.25 0 110 4.5H7v1h.75a3.25 3.25 0 000-6.5h-4.5a3.25 3.25 0 000 6.5H4V9h-.75A2.253 2.253 0 011 6.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.75 6H12v1h.75a2.25 2.25 0 010 4.5h-4.5a2.25 2.25 0 010-4.5H9V6h-.75a3.25 3.25 0 000 6.5h4.5a3.25 3.25 0 100-6.5z"
}));

export default SvgLink;