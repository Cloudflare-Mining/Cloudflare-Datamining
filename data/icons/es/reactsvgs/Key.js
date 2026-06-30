function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgKey = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.973 7.2H7.25a3.643 3.643 0 100 1h4.527v2.235h1V8.2H14v3.25h1V8.2h.973v-1zm-12.33 3.142a2.643 2.643 0 11-.005-5.285 2.643 2.643 0 01.005 5.285z"
}));

export default SvgKey;