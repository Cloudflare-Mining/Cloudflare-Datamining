function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgMail = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.013 3.523h-12l-.5.5v7.954l.5.5h12l.5-.5V4.023l-.5-.5zm-6 5.132L3.335 4.523h9.358l-4.68 4.132zM5.763 8l-3.25 2.87V5.12L5.763 8zm.75.668l1.165 1.027h.662L9.5 8.668l3.193 2.81H3.335l3.178-2.81zM10.263 8l3.25-2.87v5.75L10.263 8z"
}));

export default SvgMail;