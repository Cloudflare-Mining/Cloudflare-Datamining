function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgGitBranch = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#git-branch_svg__clip0)"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zM11 3.25a1.75 1.75 0 112.25 1.678v.822a2.5 2.5 0 01-2.5 2.5h-5a1.5 1.5 0 00-1.5 1.5v1.322a1.75 1.75 0 11-1 0V4.928a1.75 1.75 0 111 0V7.75c.418-.314.937-.5 1.5-.5h5a1.5 1.5 0 001.5-1.5v-.822A1.75 1.75 0 0111 3.25zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm0 9.5a.75.75 0 100 1.5.75.75 0 000-1.5z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "git-branch_svg__clip0"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgGitBranch;