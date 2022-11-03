function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgShield = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.603 1.5H3.398l-.5.5v4.22c0 5.388 4.367 7.933 4.865 8.207h.487c.5-.274 4.86-2.82 4.86-8.207V2l-.507-.5zM3.898 6.22V2.5H7.5v10.57c-1.25-.915-3.602-3.12-3.602-6.85zm8.205 0c0 3.73-2.34 5.935-3.6 6.85V2.5h3.6v3.72z"
}));

export default SvgShield;