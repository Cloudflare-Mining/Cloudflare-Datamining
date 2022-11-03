function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgTurnstile = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  "aria-hidden": !props['aria-label'],
  focusable: "false",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.2185 2.7165C8.35973 2.66085 6.55016 3.31899 5.16142 4.55577L5.62185 2.03315L4.42699 1.81539L3.61834 6.24341L8.04789 7.0518L8.26565 5.85695L5.99106 5.44186C7.08068 4.4863 8.47711 3.95362 9.92632 3.94072C11.3755 3.92783 12.7812 4.43557 13.8877 5.37159C14.9941 6.3076 15.7278 7.6097 15.9553 9.041C16.1828 10.4723 15.8889 11.9377 15.1272 13.1706C14.3654 14.4036 13.1864 15.3221 11.8046 15.7591C10.4228 16.1962 8.93003 16.1227 7.59784 15.552C6.26566 14.9813 5.18258 13.9514 4.54564 12.6496C3.9087 11.3478 3.76022 9.86062 4.12721 8.45859L2.95175 8.15029C2.56804 9.61236 2.64852 11.1576 3.18204 12.5719C3.71556 13.9862 4.67571 15.1996 5.92948 16.0439C7.18325 16.8883 8.66857 17.3218 10.1797 17.2845C11.6908 17.2472 13.1529 16.7409 14.3635 15.8357C15.5741 14.9305 16.4732 13.6712 16.9363 12.2323C17.3993 10.7934 17.4034 9.24606 16.9481 7.80471C16.4927 6.36335 15.6003 5.09929 14.3946 4.18764C13.1888 3.27599 11.7294 2.76187 10.2185 2.7165Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.73389 10.4749L8.97852 12.7196L13.8419 7.8562",
  stroke: "currentColor",
  fill: "none"
}));

export default SvgTurnstile;