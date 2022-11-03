function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgGear = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.475 8l1.86-1.798-1.62-2.804-2.435.697L9.627 1.5h-3.25L5.75 4.095 3.3 3.398 1.68 6.204l1.87 1.807-1.87 1.81 1.62 2.806 2.45-.7.637 2.572h3.25l.643-2.565 2.465.705 1.622-2.805L12.475 8zm-.225 3.453l-2.183-.628-.67.463-.55 2.212h-1.68l-.55-2.2-.647-.475-2.195.628L2.935 10 4.57 8.42v-.81L2.935 6.027l.84-1.455 2.197.63.648-.517.547-2.185h1.68l.55 2.195.645.518 2.208-.64.84 1.454-1.638 1.583.025.808L13.1 10l-.85 1.453z"
}));

export default SvgGear;