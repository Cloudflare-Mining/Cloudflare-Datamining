import * as React from 'react';
import { TfelaMProps } from '@cloudflare/types';

import { IconType } from './src/IconType';

export interface IIconProps {
  type: IconType;
  label?: string | false;
  ariaLabel?: string;
  testId?: string;
  size?: number;
  border?: boolean;
  spin?: boolean;
  muted?: boolean;
  white?: boolean;
  role?: string;
  color?: string;
  className?: string;
  flexShrink?: React.CSSProperties['flexShrink'];
  extend?: React.CSSProperties;
}

export class Icon extends React.Component<IIconProps & TfelaMProps> {}

export { IconType };
