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
    testId,
    // Keep label prop to unblock using new icons on stratus. Was getting type error by passing label prop.
    // Currently have 500+ Icon using label prop in stratus. Need to remove the label prop in the dash
    // instead of migrate it to ariaLabel. Once we remove label props in dash, we can remove the prop here.
    label
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