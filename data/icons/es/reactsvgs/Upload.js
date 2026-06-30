function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgUpload = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#upload_svg__clip0)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14.966 7.211a2.91 2.91 0 00-2-.68 4.822 4.822 0 00-9.243-1.147A3.41 3.41 0 001.3 6.18 3.65 3.65 0 000 8.938a3.562 3.562 0 003.554 3.555H6.5v-1H3.547A2.559 2.559 0 011 8.938a2.64 2.64 0 01.943-1.992 2.413 2.413 0 012.032-.527l.435.075.13-.422a3.821 3.821 0 017.47 1.016l.017.57.563-.091a2.071 2.071 0 011.729.404A2.029 2.029 0 0115 9.508a1.987 1.987 0 01-1.985 1.985h-.032c-.061.001-.428.006-2.483.006v1c1.93 0 2.392-.004 2.515-.007a3.01 3.01 0 001.951-5.282v.001z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.95 9.456l-2.46-2.5-2.46 2.5.712.701L7.99 8.89v3.62h1v-3.62l1.248 1.268.713-.701z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "upload_svg__clip0"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgUpload;