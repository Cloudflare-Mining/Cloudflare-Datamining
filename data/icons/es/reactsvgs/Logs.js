function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgLogs = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 7.523h-2.027V6.02l-.146-.352-3.982-4.012h-.002L7.49 1.51H2.51l-.5.5v12l.5.5h8.963l.5-.5v-1.487H14l.5-.5v-4l-.5-.5Zm-6.01-4.3 2.281 2.297H7.99V3.223Zm2.982 10.287H3.01v-11h3.98v3.51l.5.5h3.482v1.003h-5.98l-.5.5v4l.5.5h5.98v.987Zm2.528-1.987H5.492v-3H13.5v3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.063 9.26H6.995l-.567 1.533h1.067l.567-1.533Zm2.25 0H9.245l-.567 1.533h1.067l.568-1.533Zm2.25 0h-1.068l-.567 1.533h1.067l.568-1.533Z"
}));

export default SvgLogs;