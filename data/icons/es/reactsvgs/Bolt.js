function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgBolt = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.272 6.4H8.907L9.957.46l-.91-.363L3.31 8.75l.417.775h3.45l-.942 6 .915.345 5.545-8.703-.423-.767zm-4.677 6.928L8.25 9.11l-.5-.578H4.657l3.898-5.88-.735 4.16.5.588h3.05l-3.775 5.928z"
}));

export default SvgBolt;