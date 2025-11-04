function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgWarningSolid = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72332 1.50192 11.3755 2.18735 12.5941 3.40593C13.8126 4.6245 14.4981 6.27668 14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545ZM7.43518 8.75H8.51917L8.67273 4.75H7.28162L7.43518 8.75ZM8.50562 10.2151C8.37313 10.0856 8.19698 10.0209 7.97717 10.0209C7.76038 10.0209 7.58423 10.0871 7.44873 10.2196C7.31624 10.3491 7.25 10.5132 7.25 10.7119C7.25 10.9106 7.31624 11.0747 7.44873 11.2042C7.58423 11.3337 7.76038 11.3984 7.97717 11.3984C8.19698 11.3984 8.37313 11.3337 8.50562 11.2042C8.64111 11.0747 8.70886 10.9106 8.70886 10.7119C8.70886 10.5102 8.64111 10.3446 8.50562 10.2151Z"
}));

export default SvgWarningSolid;