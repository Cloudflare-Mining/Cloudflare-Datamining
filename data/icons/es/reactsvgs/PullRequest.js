function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgPullRequest = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 12.821a7 7 0 1 0-9 6.705v24.948a7 7 0 1 0 4 0V19.526a7.01 7.01 0 0 0 5-6.705Zm-10 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm6 38.358a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm33-6.705V21.821a10.012 10.012 0 0 0-10-10h-7.9l3.5-3.631-2.879-2.775-8.132 8.44 8.44 8.131 2.776-2.881-3.405-3.284H41a6.007 6.007 0 0 1 6 6v22.653a7 7 0 1 0 4 0Zm-2 9.705a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Z"
}));

export default SvgPullRequest;