function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgDragOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 17",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "m3.505 2.006.5-.5h2.996l.5.5v2.996l-.5.5H4.005l-.5-.5V2.006Zm1 .5v1.996h1.996V2.506H4.505Zm-1 4.496.5-.5h2.996l.5.5v2.995l-.5.5H4.005l-.5-.5V7.002Zm1 .5v1.995h1.996V7.502H4.505Zm-.5 3.996-.5.5v2.995l.5.5h2.996l.5-.5v-2.995l-.5-.5H4.005Zm.5 2.995v-1.995h1.996v1.995H4.505ZM9 11.498l-.5.5v2.995l.5.5h2.996l.5-.5v-2.995l-.5-.5H8.999Zm.5 2.995v-1.995h1.996v1.995H9.499ZM9 6.502l-.5.5v2.995l.5.5h2.996l.5-.5V7.002l-.5-.5H8.999Zm.5 2.995V7.502h1.996v1.995H9.499ZM9 1.507l-.5.5v2.995l.5.5h2.996l.5-.5V2.006l-.5-.5H8.999Zm.5 2.995V2.506h1.996v1.996H9.499Z"
}));

export default SvgDragOutline;