import React, { useRef, useState, useEffect } from 'react';
import { variables as theme } from '@cloudflare/style-const';
import chroma from 'chroma-js';
import {
  Div,
  P,
  Input,
  Label,
  Code,
  Span,
  H2,
  H3,
  Button,
  A,
  Hr
} from '@cloudflare/elements';
import { Icon } from '@cloudflare/component-icon';
import { Toggle } from '@cloudflare/component-toggle';
import prettier from 'prettier/standalone';
import plugins from 'prettier/parser-babel';
import { saveSvgAsPng } from 'save-svg-as-png';
import { useClipboard } from 'use-clipboard-copy';
import reactElementToJSXString from 'react-element-to-jsx-string';

import TYPES from './src/iconTypes';

const THEME_COLORS = [
  'red',
  'orange',
  'gold',
  'green',
  'cyan',
  'blue',
  'indigo',
  'violet',
  'gray',
  'black',
  'white',
  'cfOrange'
];

const flatColors = THEME_COLORS.reduce((acc, hue) => {
  const color = theme.colors[hue];

  if (Array.isArray(color)) {
    return [
      ...acc,
      ...color.map((hueColor, index) => ({
        themeRef: `${hue}.${index}`,
        color: hueColor
      }))
    ];
  }

  return [
    ...acc,
    {
      themeRef: hue,
      color: color
    }
  ];
}, []);

const StyledIcon = ({ color, type, size }) =>
  color === 'currentColor' ? (
    <Div color={color}>
      <Icon type={type} size={size} />
    </Div>
  ) : (
    <Icon type={type} size={size} color={color} />
  );

export default ({
  ExamplePreview,
  PropTable,
  PropRow,
  FuncRow,
  snippetScope
}) => {
  const clipboard = useClipboard();
  const [isOK, toggleIsOk] = useState(false);
  const [size, setSize] = useState(48);
  const [type, setType] = useState('add');
  const [color, setColor] = useState('red.0');
  const svgRef = useRef();
  const [svgBlob, setSvgBlob] = useState(null);

  const generateInlinedSvg = () => {
    const selectedColor = getColorHex();
    const svgContent = svgRef.current.querySelector('svg').innerHTML;
    const svgOuter = `<svg fill="${selectedColor}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">${svgContent}</svg>`;
    return svgOuter;
  };

  const getColorHex = () => {
    return flatColors.find(o => o.themeRef === color).color;
  };

  const handleCopySvg = () => clipboard.copy(generateInlinedSvg());

  const useDarkBg = () => {
    const selectedColor = getColorHex();
    return chroma.contrast(selectedColor, 'white') < 4;
  };

  const handleCopyCode = () => {
    const element = reactElementToJSXString(StyledIcon({ color, type, size }));
    const content = `
      import {Icon} from '@cloudflare/component-icon'
      ${element}
    `;
    const prettyCode = prettier
      .format(content, {
        parser: 'babel',
        plugins: [plugins],
        printWidth: 60
      })
      .replace(';', '');
    clipboard.copy(prettyCode);
  };

  const handleDownloadPNG = () => {
    const scale = size;
    const svgString = generateInlinedSvg();
    const template = document.createRange().createContextualFragment(svgString);

    saveSvgAsPng(template.querySelector('svg'), `${type}.png`);
  };

  useEffect(() => {
    const newSvgBlob = generateSvgBlob();
    setSvgBlob(newSvgBlob);
  }, [size, type, color]);

  const generateSvgBlob = () => {
    const svg = generateInlinedSvg();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  return (
    <>
      <P maxWidth="35em" lineHeight="1.5">
        The Cloudflare Icons library allows you to quickly create customised
        icons in a number of formats for use both in and outside of stratus
        apps.
      </P>
      <Div mt={4}>
        <H3 fontSize={4} mt={4} mb={3}>
          Type
        </H3>
        <Div display="grid" style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
          {TYPES.map(t => (
            <Div
              key={t}
              onClick={() => setType(t)}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor={t === type ? 'blue.4' : 'transparent'}
              borderRadius={2}
              px={0}
              py={2}
              cursor="pointer"
            >
              <Icon size={32} type={t} />
              <Code bg="transparent" mt={1} fontSize={0}>
                {t}
              </Code>
            </Div>
          ))}
        </Div>
      </Div>
      <Div>
        <H3 fontSize={4} mt={4} mb={3}>
          Color
        </H3>

        <Div display="flex" flexWrap="wrap" mt={3}>
          {flatColors.map(c => (
            <Div
              key={c.themeRef}
              cursor="pointer"
              position="relative"
              zIndex={color === c.themeRef ? 1000 : 1}
              onClick={() => setColor(c.themeRef)}
              style={{
                backgroundColor: c.color,
                transform: color === c.themeRef && 'scale(1.25)'
              }}
              boxShadow={color === c.themeRef ? '0 0 0 4px #2c7cb0' : null}
              p={3}
            />
          ))}
        </Div>
      </Div>
      <Div mb={4}>
        <H3 fontSize={4} mt={4} mb={3}>
          Size
        </H3>
        <Div display="flex" alignItems="baseline" ml={-1}>
          <Input
            fontSize={3}
            border="1px solid"
            borderColor="gray.7"
            borderRadius={2}
            px={2}
            textAlign="center"
            py={2}
            width={48}
            type="text"
            value={size}
            onChange={e => setSize(e.target.value)}
          />
          <Span ml={1}>px</Span>
        </Div>
      </Div>
      <H3 fontSize={4} mt={4} mb={3}>
        Preview
      </H3>

      <Div
        display="flex"
        mx="auto"
        minHeight="200px"
        style={{
          background: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202%202%22%3E%3Cpath%20d%3D%22M1%202V0h1v1H0v1z%22%20fill-opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E")`,
          backgroundSize: '16px 16px',
          ...(useDarkBg() && { backgroundColor: 'rgba(0,0,0,0.6)' })
        }}
      >
        <div ref={svgRef} style={{ textAlign: 'center', margin: 'auto' }}>
          <Div display="inline-block" p={3} mx="auto">
            <StyledIcon color={color} type={type} size={size} />
          </Div>
        </div>
      </Div>

      <Div mt={3}>
        <Div mb={2}>
          <Span fontWeight={700} mr={3}>
            Copy to clipboard
          </Span>
          <Button
            type="button"
            fontWeight={700}
            fontSize={2}
            color="gray.3"
            mr={3}
            p={0}
            cursor="pointer"
            bg="transparent"
            style={{ '-webkit-appearance': 'none', border: 'none' }}
            onClick={handleCopySvg}
          >
            SVG
          </Button>

          <Button
            type="button"
            fontWeight={700}
            fontSize={2}
            color="gray.3"
            p={0}
            cursor="pointer"
            bg="transparent"
            style={{ '-webkit-appearance': 'none', border: 'none' }}
            onClick={handleCopyCode}
          >
            JS
          </Button>
        </Div>
        <Div>
          <Span fontWeight={700} mr={3}>
            Download
          </Span>
          <A
            download="icon.svg"
            fontWeight={700}
            fontSize={2}
            p={0}
            mr={3}
            color="gray.3"
            bg="transparent"
            style={{ '-webkit-appearance': 'none', border: 'none' }}
            textDecoration="none"
            href={svgBlob}
          >
            SVG
          </A>
          <Button
            type="button"
            fontWeight={700}
            fontSize={2}
            p={0}
            color="gray.3"
            cursor="pointer"
            bg="transparent"
            style={{ '-webkit-appearance': 'none', border: 'none' }}
            onClick={handleDownloadPNG}
          >
            PNG
          </Button>
        </Div>
      </Div>

      <Hr
        my={5}
        borderTop="0px"
        borderRight="0px"
        borderLeft="0px"
        borderBottom="1px solid"
        borderColor="gray.8"
      />

      <Div>
        <P my={4}>
          The only mandatory prop that a Icon requires is the type prop. If you
          would like to change the color of the icon you can use any value from
          the color palette.
        </P>
        <ExamplePreview
          scope={{ ...snippetScope }}
          split="horizontal"
          code={`
        <Icon type="applications" color="gray.2" />
      `}
        />
      </Div>

      <Div>
        <P my={4}>
          The default value of the color prop is <Code>currentColor</Code> this
          means it will pick up the color value set by its immediate parent.
        </P>
        <ExamplePreview
          scope={{ ...snippetScope }}
          split="horizontal"
          code={`
          <>
          <Icon type="spectrum" color="gray.2" size={36} />

          <Span color="red.4" mx={2}>
            <Icon type="spectrum" size={36} />
          </Span>

          <Span color="indigo.3">
            <Icon type="spectrum" size={36} />
          </Span>
          </>
        `}
        />

        <P mt={4} mb={2}>
          By using <Code>currentColor</Code> this allows you to set text the
          same color as the <Code>Icon</Code> without updating the color value
          in multiple places
        </P>
        <Div display="flex" alignItems="center" mb={3}>
          <Label htmlFor="color" ml="auto" mr={3} cursor="pointer">
            Toggle Color
          </Label>
          <Toggle id="color" value={isOK} onChange={e => toggleIsOk(e)} />
        </Div>
        <ExamplePreview
          scope={{ ...snippetScope }}
          split="horizontal"
          code={`
          <>
          <Div color="${
            isOK ? 'green.4' : 'red.4'
          }" display="flex" alignItems="center">
            <Icon type="network" />
            <Span ml={1}>Text & Icon color are in sync</Span>
          </Div>
          </>
        `}
        />
      </Div>

      <Hr
        my={5}
        borderTop="0px"
        borderRight="0px"
        borderLeft="0px"
        borderBottom="1px solid"
        borderColor="gray.8"
      />

      <H2>Icon props</H2>

      <Div mb={5}>
        <H3 mb={1}>Styling</H3>
        <P fontSize={2} mt={0}>
          This component doesn't support any custom styling props.
        </P>
      </Div>

      <H3 mb={1}>Custom</H3>
      <P fontSize={2} mb={3} mt={0}>
        These props are custom to this component and are based on the{' '}
        <A
          color="inherit"
          href="https://reactjs.org/docs/components-and-props.html"
        >
          React props
        </A>{' '}
        concept.
      </P>

      <PropTable cols={['Name', 'Type', 'Default', 'Description']}>
        <PropRow
          name="type"
          required
          type="string"
          defaultVal=""
          description="A string value that represents the icon shown"
        />
        <PropRow
          name="color"
          type="string"
          defaultVal="currentColor"
          description="The color used for the icon this supports the styled system syntax e.g gray.7"
        />
        <PropRow
          name="size"
          type="number"
          defaultVal="16"
          description="The size you want the icon in pixels"
        />
      </PropTable>

      <Div mt={5} mb={5}>
        <H3 mb={1}>Events</H3>
        <P fontSize={2} mb={3} mt={0}>
          This component does not support any custom events.
        </P>
      </Div>
    </>
  );
};
