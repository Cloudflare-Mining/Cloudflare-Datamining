import * as React from 'react';

export type TElementBreakpoints<Value> = [Value, Value] | [Value, Value, Value];

type TextProps = 'fontSize' | 'textAlign';

type ColorProps =
  | 'color'
  | 'backgroundColor'
  | 'borderColor'
  | 'borderLeftColor'
  | 'borderRightColor'
  | 'borderTopColor'
  | 'borderBottomColor';

type SizeProps =
  | 'width'
  | 'height'
  | 'minWidth'
  | 'minHeight'
  | 'maxWidth'
  | 'maxHeight';

export type TDesignSystemCSSKeys =
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginTop'
  | 'marginLeft'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingLeft';

export type TDesignSystemCSSProps = Pick<
  React.CSSProperties,
  | TDesignSystemCSSKeys
  | SizeProps
  | TextProps
  | ColorProps
  | 'borderRadius'
  | 'display'
  | 'verticalAlign'
>;

export type TScale = string | number | TElementBreakpoints<string | number>;

export type TfelaMProps = {
  m?: TScale;
  mx?: TScale;
  my?: TScale;
  mr?: TScale;
  ml?: TScale;
  mt?: TScale;
  mb?: TScale;

  p?: TScale;
  px?: TScale;
  py?: TScale;
  pr?: TScale;
  pl?: TScale;
  pt?: TScale;
  pb?: TScale;

  bg?: string;
} & TDesignSystemCSSProps;
