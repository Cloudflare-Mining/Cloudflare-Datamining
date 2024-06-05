function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgVectorize = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  "aria-hidden": !props['aria-label'],
  focusable: "false"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M9.846 48V7h4v6.982h3.944l2-2.372h2l2.001 2.372h3.727l2.001-2.372h2l2 2.372h16.332V7h4v41h2v4H58v4H6v-4h1.85v-4h1.996Zm7.945-30.011 2 2h2l1.999-2h3.73l2 2h2l1.999-2H49.85v8.088h-5.03l-2-2h-2l-2 2H23.79l-2-2h-2l-2 2h-3.945v-8.088h3.945Zm0 12.095h-3.945v7.909h15.171l2-2h2l2 2h3.805l2-2h2l2 2h5.029v-7.909h-5.03l-2 2h-2l-2-2h-15.03l-2 2h-2l-2-2ZM29.017 42l2 2h2l2-2h3.805l2 2h2l2-2h5.029v6H13.846v-6h15.17Z"
}));

export default SvgVectorize;