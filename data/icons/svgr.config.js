const path = require('path');
const fs = require('fs');

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

// Our export needs to be an object keyed by the icon type (e.g. { 'workers': WorkersIcon })
// Here we import each default export individually, and then create a single object to export
function defaultIndexTemplate(filePaths) {
  let indexString = "import type { ComponentType, SVGProps } from 'react';\n";

  indexString += filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `import ${exportName} from './${basename}';`;
    })
    .join('\n');

  indexString +=
    '\ntype IconComponent = ComponentType<SVGProps<SVGSVGElement>>;\n' +
    'const iconMap = <Name extends string>(icons: Record<Name, IconComponent>) =>\n  icons;\n' +
    'export default iconMap({\n';

  indexString += filePaths
    .map(filePath => {
      const basename = path.basename(filePath, path.extname(filePath));
      const typeName = camelCaseToDash(basename);

      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      return `'${typeName}': ${exportName},`;
    })
    .join('\n');

  indexString += '\n});';

  return indexString;
}

module.exports = {
  typescript: true,
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
