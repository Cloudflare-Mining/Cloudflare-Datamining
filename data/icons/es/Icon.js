import React from 'react';
import { createStyledComponent } from '@cloudflare/style-container';
import IconComponents from './reactsvgs';

var iconStyles = _ref => {
  var {
    size = 16,
    color = 'currentColor'
  } = _ref;
  return {
    width: size,
    height: size,
    fill: 'currentColor',
    color
  };
};

var Icon = _ref2 => {
  var {
    type,
    className,
    ariaLabel,
    testId
  } = _ref2;
  var Svg = IconComponents[type];
  return /*#__PURE__*/React.createElement(Svg, {
    className: className,
    "aria-label": ariaLabel,
    role: ariaLabel ? 'img' : 'presentation',
    "data-testid": testId
  });
};

Icon.displayName = 'Icon';
export default createStyledComponent(iconStyles, Icon);