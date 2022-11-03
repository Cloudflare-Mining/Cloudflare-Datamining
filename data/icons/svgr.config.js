const path = require('path');
const fs = require('fs');

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

// Our export needs to be an object keyed by the icon type (e.g. { 'workers': WorkersIcon })
// Here we import each default export individually, and then create a single object to export
function defaultIndexTemplate(filePaths) {
  let indexString = filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `import ${exportName} from './${basename}';`;
    })
    .join('\n');

  indexString += '\nexport default {\n';

  indexString += filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      const typeName = camelCaseToDash(basename);

      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `'${typeName}': ${exportName},`;
    })
    .join('\n');

  indexString += '\n};';

  // Generate a static list of all icon types, for use in internal documentation
  let iconTypesString = `export default [\n`;
  iconTypesString += filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `  '${camelCaseToDash(basename)}'`;
    })
    .join(',\n');
  iconTypesString += '\n];\n';

  fs.writeFileSync('./src/iconTypes.js', iconTypesString);

  // Hacky, but until we switch to using the built-in 'typescript' option in svgr, let's handle our typedefs here too
  let typeString = 'export type IconType =\n';
  typeString += filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `  | '${camelCaseToDash(basename)}'`;
    })
    .join('\n');
  typeString += ';\n';

  fs.writeFileSync('./src/IconType.ts', typeString);

  return indexString;
}

module.exports = {
  outDir: './src/reactsvgs',
  indexTemplate: defaultIndexTemplate,
  expandProps: 'start',
  svgProps: {
    'aria-hidden': "{!props['aria-label']}",
    focusable: 'false'
  },
  svgoConfig: {
    plugins: ['removeStyleElement', 'removeTitle', 'prefixIds']
  },
  prettierConfig: JSON.parse(fs.readFileSync('../../../../.prettierrc'))
};
