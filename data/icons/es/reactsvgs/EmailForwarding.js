function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgEmailForwarding = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#email-forwarding_svg__clip0)"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.728 4l.5-.5h11.286l.5.5v7.983l-.5.5H4.228l-.5-.5V4zm4.037 3.963l-3.037 2.862v-5.68l3.037 2.818zm-2.277 3.52L8.5 8.644l1.03.956h.68l1.031-.955 3.013 2.838H5.488zm9.526-.658v-5.68l-3.038 2.818 3.037 2.862zM9.87 8.552L5.502 4.5h8.737L9.871 8.552z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.75 6.5H3v-1H.75v1zM3 8.5H0v-1h3v1zM.75 10.5H3v-1H.75v1z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "email-forwarding_svg__clip0"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h16v16H0z"
}))));

export default SvgEmailForwarding;