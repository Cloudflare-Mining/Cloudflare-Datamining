import React from 'react';
import Icon from './Icon';
import IconComponents from './reactsvgs';
var iconTypes = Object.keys(IconComponents);
export default {
  title: 'Example/Icon',
  component: Icon
};
export var AllIcons = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 16
  }
}, iconTypes.map(type => /*#__PURE__*/React.createElement("div", {
  key: type,
  style: {
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  type: type,
  size: 36
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    marginTop: 4
  }
}, type))));