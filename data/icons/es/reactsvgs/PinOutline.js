function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgPinOutline = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14.343 6.215-1.228 1.228h-.707l-.716-.716-2.295 2.821a2.587 2.587 0 0 1-.618 3.257l-.026-.032h-.645l-2.16-2.16-3.885 3.884-.707-.707 3.885-3.885-2.16-2.16-.033-.672a2.587 2.587 0 0 1 3.257-.617L9.126 4.16l-.716-.716v-.707L9.638 1.51h.707l3.998 3.998v.707ZM6.167 7.593a1.586 1.586 0 0 0-2.013-.19L8.448 11.7a1.587 1.587 0 0 0-.14-1.962l-.05-.052-2.092-2.092Zm.925-.489L8.75 8.76l2.232-2.744-1.144-1.144-2.745 2.232Zm2.38-4.012 3.29 3.29.52-.52-3.29-3.29-.52.52Z"
}));

export default SvgPinOutline;