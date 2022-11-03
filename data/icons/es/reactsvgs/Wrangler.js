function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgWrangler = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M14.417 1H1.583L1 1.583v12.834l.583.583h12.834l.583-.583V1.583L14.417 1Zm-.584 12.833H2.167V2.167h11.666v11.666ZM7.708 6.605 3.625 4.208v1.378l2.618 1.538-2.618 1.535v1.383l4.083-2.4V6.605Zm4.375 4.02H7.708v1.167h4.375v-1.167Z"
}));

export default SvgWrangler;