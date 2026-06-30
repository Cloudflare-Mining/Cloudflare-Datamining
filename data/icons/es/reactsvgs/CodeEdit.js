function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgCodeEdit = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21.82 30.58-10.89-6.12 10.89-6.13v-4.59L5.87 22.71v3.49l15.95 8.97v-4.59Zm20.46-.99v4.59l10.8 6.07-10.8 6.08v4.59l15.85-8.93v-3.48l-15.85-8.92Zm-.55-23.63L17.62 57.95h4.41l24.1-51.99h-4.4Z"
}));

export default SvgCodeEdit;