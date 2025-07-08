function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var PinOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.3779 1.08496L14.918 4.625L15.002 5.94238L11.832 10.0508C12.2502 11.2073 11.974 12.523 11.083 13.4141L10.4932 14.0039H9.0791L5.89258 10.8174L3.14941 13.5605L2.44238 12.8535L2.7959 12.5L5.18457 10.1094L2 6.92383V5.50977L2.58984 4.91992C3.4806 4.0291 4.79494 3.75224 5.95117 4.16992L10.0605 1L11.3779 1.08496ZM6.07812 5.33691L5.93555 5.25781C5.07211 4.7781 3.9953 4.92845 3.29688 5.62695L2.70703 6.2168L6.24609 9.75586L6.59961 10.1094L9.78613 13.2969L10.376 12.707C11.0306 12.0524 11.2038 11.0646 10.8281 10.2324L10.7461 10.0674L10.666 9.9248L14.2109 5.33203L10.6709 1.79199L6.07812 5.33691Z"
}));

export default PinOutline;